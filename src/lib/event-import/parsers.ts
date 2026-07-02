import * as cheerio from "cheerio";
import type { EventSource, ImportedEventDraft } from "./types";
import {
  cleanMultiline,
  cleanString,
  decodeIcsText,
  isFutureOrRecent,
  normalizeUrl,
  toDateAndTime,
} from "./utils";

function asArray<T>(value: T | T[] | null | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function getJsonLdNodes(value: unknown): unknown[] {
  if (!value || typeof value !== "object") return [];

  const record = value as Record<string, unknown>;
  const graph = record["@graph"];

  return [value, ...asArray(graph as unknown[] | unknown)].flatMap((node) => {
    if (Array.isArray(node)) return node.flatMap(getJsonLdNodes);
    if (!node || typeof node !== "object") return [];
    const inner = node as Record<string, unknown>;
    return [node, ...asArray(inner["@graph"] as unknown[] | unknown)];
  });
}

function hasEventType(type: unknown) {
  if (Array.isArray(type)) return type.some(hasEventType);
  return typeof type === "string" && type.toLowerCase().includes("event");
}

function getLocationName(location: unknown, fallback?: string | null) {
  if (!location || typeof location !== "object") return fallback || null;
  const record = location as Record<string, unknown>;
  return cleanString(record.name) || fallback || null;
}

function getAddress(location: unknown) {
  if (!location || typeof location !== "object") return null;
  const record = location as Record<string, unknown>;
  const address = record.address;

  if (typeof address === "string") return cleanString(address);

  if (address && typeof address === "object") {
    const addressRecord = address as Record<string, unknown>;
    const parts = [
      addressRecord.streetAddress,
      addressRecord.addressLocality,
      addressRecord.addressRegion,
      addressRecord.postalCode,
    ]
      .map(cleanString)
      .filter(Boolean);

    return parts.length ? parts.join(", ") : null;
  }

  return null;
}

function getImageUrl(image: unknown, baseUrl: string) {
  const firstImage = Array.isArray(image) ? image[0] : image;

  if (typeof firstImage === "string") return normalizeUrl(firstImage, baseUrl);

  if (firstImage && typeof firstImage === "object") {
    const record = firstImage as Record<string, unknown>;
    const url = cleanString(record.url);
    return url ? normalizeUrl(url, baseUrl) : null;
  }

  return null;
}

export function parseJsonLdEvents(html: string, source: EventSource): ImportedEventDraft[] {
  const $ = cheerio.load(html);
  const drafts: ImportedEventDraft[] = [];

  $('script[type="application/ld+json"]').each((_, element) => {
    const raw = $(element).contents().text();
    if (!raw.trim()) return;

    try {
      const parsed = JSON.parse(raw);
      const nodes = getJsonLdNodes(parsed);

      for (const node of nodes) {
        if (!node || typeof node !== "object") continue;
        const record = node as Record<string, unknown>;
        if (!hasEventType(record["@type"])) continue;

        const title = cleanString(record.name);
        const start = toDateAndTime(cleanString(record.startDate));
        if (!title || !start.date || !isFutureOrRecent(start.date)) continue;

        const end = toDateAndTime(cleanString(record.endDate));
        const eventUrl =
          cleanString(record.url) ||
          cleanString(record.mainEntityOfPage) ||
          source.url;

        drafts.push({
          title,
          raw_description: cleanMultiline(record.description),
          description: cleanMultiline(record.description),
          city: source.city || "Hot Springs",
          location_name: getLocationName(record.location, source.venue_hint),
          address: getAddress(record.location),
          start_date: start.date,
          end_date: end.date,
          start_time: start.time,
          end_time: end.time,
          category: source.category_hint || null,
          tags: source.category_hint ? [source.category_hint] : [],
          image_url: getImageUrl(record.image, source.url),
          source_url: normalizeUrl(eventUrl, source.url),
          external_id: cleanString(record.identifier) || normalizeUrl(eventUrl, source.url),
          confidence_score: 0.9,
          needs_review: true,
        });
      }
    } catch {
      // Ignore invalid JSON-LD scripts.
    }
  });

  return drafts;
}

function unfoldIcs(text: string) {
  return text.replace(/\r?\n[ \t]/g, "");
}

function readIcsProp(block: string, name: string) {
  const lines = block.split(/\r?\n/);
  const found = lines.find((line) => {
    const upper = line.toUpperCase();
    return upper.startsWith(`${name}:`) || upper.startsWith(`${name};`);
  });

  if (!found) return null;

  const colonIndex = found.indexOf(":");
  if (colonIndex === -1) return null;

  return found.slice(colonIndex + 1).trim();
}

export function parseIcsEvents(text: string, source: EventSource): ImportedEventDraft[] {
  const unfolded = unfoldIcs(text);
  const blocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) || [];

  const drafts: ImportedEventDraft[] = [];

  for (const block of blocks) {
    const title = cleanString(decodeIcsText(readIcsProp(block, "SUMMARY")));
    const start = toDateAndTime(readIcsProp(block, "DTSTART"));
    if (!title || !start.date || !isFutureOrRecent(start.date)) continue;

    const end = toDateAndTime(readIcsProp(block, "DTEND"));
    const sourceUrl = cleanString(readIcsProp(block, "URL")) || source.url;
    const uid = cleanString(readIcsProp(block, "UID"));
    const location = cleanString(decodeIcsText(readIcsProp(block, "LOCATION")));
    const description = cleanMultiline(
      decodeIcsText(readIcsProp(block, "DESCRIPTION")) || ""
    );

    drafts.push({
      title,
      raw_description: description,
      description,
      city: source.city || "Hot Springs",
      location_name: source.venue_hint || location,
      address: location && location !== source.venue_hint ? location : null,
      start_date: start.date,
      end_date: end.date,
      start_time: start.time,
      end_time: end.time,
      category: source.category_hint || null,
      tags: source.category_hint ? [source.category_hint] : [],
      source_url: normalizeUrl(sourceUrl, source.url),
      external_id: uid || normalizeUrl(sourceUrl, source.url),
      confidence_score: 0.88,
      needs_review: true,
    });
  }

  return drafts;
}

function guessDateFromText(text: string) {
  const iso = text.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;

  const numeric = text.match(/\b(\d{1,2})[/-](\d{1,2})[/-](20\d{2})\b/);
  if (numeric) {
    return `${numeric[3]}-${numeric[1].padStart(2, "0")}-${numeric[2].padStart(2, "0")}`;
  }

  return null;
}

export function parseRssEvents(xml: string, source: EventSource): ImportedEventDraft[] {
  const $ = cheerio.load(xml, { xmlMode: true });
  const drafts: ImportedEventDraft[] = [];

  $("item, entry").each((_, element) => {
    const item = $(element);
    const title = cleanString(item.find("title").first().text());
    const link = cleanString(item.find("link").first().text()) ||
      cleanString(item.find("link").first().attr("href"));
    const description = cleanMultiline(
      item.find("description, summary, content").first().text()
    );

    const textToCheck = `${title || ""}\n${description || ""}`;
    const date = guessDateFromText(textToCheck);

    if (!title || !date || !isFutureOrRecent(date)) return;

    drafts.push({
      title,
      raw_description: description,
      description,
      city: source.city || "Hot Springs",
      location_name: source.venue_hint || null,
      start_date: date,
      category: source.category_hint || null,
      tags: source.category_hint ? [source.category_hint] : [],
      source_url: link ? normalizeUrl(link, source.url) : source.url,
      external_id: link ? normalizeUrl(link, source.url) : `${title}-${date}`,
      confidence_score: 0.55,
      needs_review: true,
    });
  });

  return drafts;
}

export function htmlToReadableText(html: string) {
  const $ = cheerio.load(html);
  $("script, style, noscript, svg, iframe").remove();
  const title = $("title").first().text();
  const body = $("body").text();

  return cleanMultiline(`${title}\n\n${body}`) || "";
}
