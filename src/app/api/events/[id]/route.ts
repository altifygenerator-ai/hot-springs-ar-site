import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { createEventSlug } from "@/lib/events";
import { supabaseAdmin } from "@/lib/supabase/server";
import { cleanString } from "@/lib/event-import/utils";

type RouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

function tagsFromValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.map(cleanString).filter((tag): tag is string => Boolean(tag));
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map(cleanString)
      .filter((tag): tag is string => Boolean(tag));
  }

  return [];
}

export async function PATCH(request: Request, { params }: RouteProps) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  try {
    const { id } = await params;
    const body = await request.json();

    const title = cleanString(body.title);
    const startDate = cleanString(body.start_date);

    if (!title || !startDate) {
      return NextResponse.json(
        { error: "Title and start date are required." },
        { status: 400 }
      );
    }

    const slug = cleanString(body.slug) ||
      `${createEventSlug(title, startDate)}-${Date.now().toString().slice(-5)}`;

    const update = {
      title,
      slug,
      raw_description: cleanString(body.raw_description),
      description: cleanString(body.description),
      ai_summary: cleanString(body.ai_summary),
      city: cleanString(body.city) || "Hot Springs",
      location_name: cleanString(body.location_name),
      address: cleanString(body.address),
      start_date: startDate,
      end_date: cleanString(body.end_date),
      start_time: cleanString(body.start_time),
      end_time: cleanString(body.end_time),
      category: cleanString(body.category),
      tags: tagsFromValue(body.tags),
      image_url: cleanString(body.image_url),
      source_url: cleanString(body.source_url),
      status: cleanString(body.status) || "pending",
      featured: Boolean(body.featured),
      source_type: cleanString(body.source_type),
      external_id: cleanString(body.external_id),
      confidence_score:
        typeof body.confidence_score === "number"
          ? body.confidence_score
          : Number(body.confidence_score) || null,
      needs_review: Boolean(body.needs_review),
      is_recurring: Boolean(body.is_recurring),
      recurrence_type: cleanString(body.recurrence_type),
      recurrence_days: tagsFromValue(body.recurrence_days),
      recurrence_end_date: cleanString(body.recurrence_end_date),
      updated_at: new Date().toISOString(),
    };

    if (!["draft", "pending", "approved", "rejected"].includes(update.status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("events")
      .update(update)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ event: data });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not update event.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  const { id } = await params;

  const { error } = await supabaseAdmin.from("events").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
