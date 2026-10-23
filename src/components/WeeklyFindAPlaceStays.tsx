import { businessClickTracking } from "@/lib/tracking";

// Server-only, read-only tourism inventory from Find A Place's PUBLIC listing RPC.
// Next.js caches the successful response for seven days; future visits refresh it.
// No separate cron, schema writes, service-role key, or booking system changes.
type PublishedRow = {
  slug: string;
  name: string;
  description: string | null;
  property_type: string | null;
  city: string | null;
  region_code: string | null;
  host_name: string | null;
  image_paths: string[] | null;
};

const allowedCities = new Set(["hot springs","bismarck","mountain pine","pearcy","royal"]);
const alreadyShown = new Set(["lone-cedar-cabin-at-lone-cedar-cabins","lone-cedar-cabins-oak-ridge-cabin","pine-cone-vintage-rv-at-lone-cedar-cabins"]);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const weekInSeconds = 604800;
const fapBase = "https://www.findaplacebooking.com";

function normalizeCity(value: string | null) {
  return (value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function excerpt(value: string | null) {
  const clean = (value ?? "").replace(/\s+/g, " ").trim();
  if (!clean) return "See the stay's photos, features and booking details on Find A Place.";
  return clean.length > 180 ? clean.slice(0, 176).replace(/\s+\S*$/, "") + "…" : clean;
}

async function publishedStays(): Promise<PublishedRow[]> {
  const key = process.env.FAP_PUBLIC_LISTING_KEY;
  if (!key) {
    console.error("[weekly-fap] Missing public listing key");
    return [];
  }

  try {
    const response = await fetch(
      "https://cuobtsfjppfvofqdihuo.supabase.co/rest/v1/rpc/public_listing_index",
      {
        method: "POST",
        headers: { apikey: key, "Content-Type": "application/json", Accept: "application/json" },
        body: "{}",
        next: { revalidate: weekInSeconds },
      },
    );
    if (!response.ok) {
      console.error("[weekly-fap] Public feed failed", response.status);
      return [];
    }
    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return [];

    const unique = new Set<string>();
    return (payload as PublishedRow[])
      .filter((stay) =>
        stay &&
        typeof stay.slug === "string" &&
        slugPattern.test(stay.slug) &&
        !alreadyShown.has(stay.slug) &&
        stay.region_code?.toUpperCase() === "AR" &&
        allowedCities.has(normalizeCity(stay.city)) &&
        Array.isArray(stay.image_paths) &&
        stay.image_paths.length > 0,
      )
      .filter((stay) => {
        if (unique.has(stay.slug)) return false;
        unique.add(stay.slug);
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("[weekly-fap] Public listing refresh failed", error);
    return [];
  }
}

export default async function WeeklyFindAPlaceStays() {
  const stays = await publishedStays();
  if (!stays.length) return null;
  return (
    <section className="section bg-[color:var(--surface)]" aria-label="Additional Find A Place vacation rentals">
      <div className="container">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider" style={{color:"var(--accent-dark)"}}>Independent stays · Find A Place Booking</p>
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl" style={{color:"var(--text)"}}>More places to book around Hot Springs</h2>
        <p className="mt-3 max-w-3xl leading-7" style={{color:"var(--muted)"}}>Additional independent Find A Place listings around Hot Springs and the DeGray Lake area.</p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {stays.map((stay) => {
            const href = fapBase + "/stays/" + encodeURIComponent(stay.slug);
            const cover = fapBase + "/api/public/stay-cover/" + encodeURIComponent(stay.slug);
            return (
              <article key={stay.slug} className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <a href={href} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden bg-stone-200" aria-label={"View " + stay.name + " on Find A Place"}>
                  <img src={cover} alt={stay.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-wide" style={{color:"var(--accent-dark)"}}>{stay.type} · {stay.city}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug" style={{color:"var(--text)"}}>{stay.name}</h3>
                  <p className="mt-2 text-sm" style={{color:"var(--muted)"}}>{stay.host_name || "Independent host"}</p>
                  <p className="mt-3 flex-1 text-sm leading-6" style={{color:"var(--muted)"}}>{excerpt(stay.description)}</p>
                  <a href={href} target="_blank" rel="noopener noreferrer" {...businessClickTracking({action:"find_a_place_booking",business:stay.name,city:"Hot Springs area",page:"/hot-springs-ar-cabins",placement:"weekly_find_a_place",placementType:"editorial"})} className="mt-5 inline-flex w-fit rounded-full bg-[#28453c] px-5 py-3 text-sm font-semibold text-white hover:opacity-90">View stay &amp; check dates ↗</a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs" style={{color:"var(--muted)"}}>
          Published properties are checked approximately weekly. Review current availability, rules and total pricing on Find A Place before booking.
        </p>
      </div>
    </section>
  );
}
