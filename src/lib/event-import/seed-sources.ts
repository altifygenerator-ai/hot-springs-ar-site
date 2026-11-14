import { supabaseAdmin } from "@/lib/supabase/server";

/** Curated live calendars. Imported events still undergo city/date validation. */
const sources = [
  {
    "name": "Visit Hot Springs — official events",
    "url": "https://www.hotsprings.org/events/",
    "city": "Hot Springs",
    "category": "Events",
    "notes": "Tourism calendar; event city and date must still pass publication checks"
  },
  {
    "name": "Hot Springs Arts & Culture events",
    "url": "https://hotspringsarts.org/hot-springs-arts-culture-events",
    "city": "Hot Springs",
    "category": "Arts & Culture",
    "notes": "Arts alliance; some archived listings; importer rejects past dates"
  },
  {
    "name": "Greater Hot Springs Chamber events",
    "url": "https://business.hotspringschamber.com/event-calendar/Search",
    "city": "Hot Springs",
    "category": "Community",
    "notes": "Chamber calendar; avoid broad or undated items"
  }
] as const;

export async function ensureTrustedEventSources(site?: string) {
  for (const source of sources) {
    
    let query = supabaseAdmin.from("event_sources").select("id").eq("url", source.url);
    
    const { data, error } = await query.limit(1);
    if (error) throw new Error("Cannot check event sources: " + error.message);
    if (data && data.length) continue;
    const { error: insertError } = await supabaseAdmin.from("event_sources").insert({
      
      name: source.name,
      source_type: "website",
      url: source.url,
      city: source.city,
      category_hint: source.category,
      notes: source.notes,
      enabled: true,
    });
    if (insertError && insertError.code !== "23505") {
      console.error("Unable to add event source", source.url, insertError);
    }
  }
}
