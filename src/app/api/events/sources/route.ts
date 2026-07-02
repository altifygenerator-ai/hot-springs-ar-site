import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase/server";
import { cleanString } from "@/lib/event-import/utils";

const allowedTypes = ["ics", "rss", "json_ld", "website"];

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  const { data, error } = await supabaseAdmin
    .from("event_sources")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ sources: data || [] });
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  try {
    const body = await request.json();
    const name = cleanString(body.name);
    const url = cleanString(body.url);
    const sourceType = cleanString(body.source_type) || "website";

    if (!name || !url) {
      return NextResponse.json(
        { error: "Source name and URL are required." },
        { status: 400 }
      );
    }

    if (!allowedTypes.includes(sourceType)) {
      return NextResponse.json(
        { error: "Invalid source type." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("event_sources")
      .insert({
        name,
        source_type: sourceType,
        url,
        city: cleanString(body.city) || "Hot Springs",
        category_hint: cleanString(body.category_hint),
        venue_hint: cleanString(body.venue_hint),
        notes: cleanString(body.notes),
        enabled: body.enabled !== false,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ source: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not create source.",
      },
      { status: 500 }
    );
  }
}
