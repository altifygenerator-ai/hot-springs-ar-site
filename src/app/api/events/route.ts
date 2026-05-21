import { NextResponse } from "next/server";
import { createEventSlug } from "@/lib/events";
import { supabaseAdmin } from "@/lib/supabase/server";

function cleanString(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = cleanString(body.title);
    const startDate = cleanString(body.start_date);

    if (!title || !startDate) {
      return NextResponse.json(
        { error: "Event title and start date are required." },
        { status: 400 }
      );
    }

    const slugBase = createEventSlug(title, startDate);
    const slug = `${slugBase}-${Date.now().toString().slice(-5)}`;

    const event = {
      title,
      slug,

      raw_description: cleanString(body.raw_description),
      description: cleanString(body.description),

      city: cleanString(body.city) || "Hot Springs",
      location_name: cleanString(body.location_name),
      address: cleanString(body.address),

      start_date: startDate,
      end_date: cleanString(body.end_date),
      start_time: cleanString(body.start_time),
      end_time: cleanString(body.end_time),

      is_recurring: Boolean(body.is_recurring),
      recurrence_type: cleanString(body.recurrence_type),
      recurrence_days: Array.isArray(body.recurrence_days)
        ? body.recurrence_days
        : [],
      recurrence_end_date: cleanString(body.recurrence_end_date),

      category: cleanString(body.category),
      tags: [],

      image_url: cleanString(body.image_url),
      source_url: cleanString(body.source_url),

      submitter_name: cleanString(body.submitter_name),
      submitter_email: cleanString(body.submitter_email),

      status: "pending",
      featured: false,

      source_type: cleanString(body.source_type) || "submission",
      needs_review: true,
    };

    const { data, error } = await supabaseAdmin
      .from("events")
      .insert(event)
      .select()
      .single();

    if (error) {
      console.error("Event submission error:", error);

      return NextResponse.json(
        { error: "Could not submit event." },
        { status: 500 }
      );
    }

    return NextResponse.json({ event: data }, { status: 201 });
  } catch (error) {
    console.error("Event route error:", error);

    return NextResponse.json(
      { error: "Something went wrong submitting this event." },
      { status: 500 }
    );
  }
}