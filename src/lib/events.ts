import { supabaseAdmin } from "./supabase/server";

export type EventStatus = "draft" | "pending" | "approved" | "rejected";

export type TourismEvent = {
  id: string;
  title: string;
  slug: string;
  raw_description?: string | null;
  description?: string | null;
  ai_summary?: string | null;
  city?: string | null;
  location_name?: string | null;
  address?: string | null;
  start_date: string;
  end_date?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  category?: string | null;
  tags?: string[] | null;
  image_url?: string | null;
  source_url?: string | null;
  submitter_name?: string | null;
  submitter_email?: string | null;
  status: EventStatus;
  featured?: boolean | null;
  source_type?: string | null;
  external_id?: string | null;
  confidence_score?: number | null;
  needs_review?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
};

export function createEventSlug(title: string, date?: string) {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  if (!date) return base;

  return `${base}-${date}`.replace(/(^-|-$)+/g, "");
}

export async function getApprovedEvents() {
  const { data, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .eq("status", "approved")
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  if (error) {
    console.error("Error fetching approved events:", error);
    return [];
  }

  return data as TourismEvent[];
}

export async function getUpcomingApprovedEvents(limit = 12) {
  const today = new Date().toISOString().slice(0, 10);

  const { data, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .eq("status", "approved")
    .gte("start_date", today)
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true })
    .limit(limit);

  if (error) {
    console.error("Error fetching upcoming events:", error);
    return [];
  }

  return data as TourismEvent[];
}

export async function getWeekendEvents() {
  const now = new Date();

  const day = now.getDay();
  const daysUntilFriday = (5 - day + 7) % 7;

  const friday = new Date(now);
  friday.setDate(now.getDate() + daysUntilFriday);

  const sunday = new Date(friday);
  sunday.setDate(friday.getDate() + 2);

  const start = friday.toISOString().slice(0, 10);
  const end = sunday.toISOString().slice(0, 10);

  const { data, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .eq("status", "approved")
    .gte("start_date", start)
    .lte("start_date", end)
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  if (error) {
    console.error("Error fetching weekend events:", error);
    return [];
  }

  return data as TourismEvent[];
}

export async function getEventBySlug(slug: string) {
  const { data, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("status", "approved")
    .single();

  if (error) {
    console.error("Error fetching event by slug:", error);
    return null;
  }

  return data as TourismEvent;
}
export async function getAllEventsForAdmin() {
  const { data, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching admin events:", error);
    return [];
  }

  return data as TourismEvent[];
}