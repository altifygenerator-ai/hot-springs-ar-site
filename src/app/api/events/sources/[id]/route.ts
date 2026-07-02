import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { cleanString } from "@/lib/event-import/utils";
import { supabaseAdmin } from "@/lib/supabase/server";

const allowedTypes = ["ics", "rss", "json_ld", "website"];

type RouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function PATCH(request: Request, { params }: RouteProps) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  try {
    const { id } = await params;
    const body = await request.json();
    const update: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if ("name" in body) update.name = cleanString(body.name);
    if ("url" in body) update.url = cleanString(body.url);
    if ("source_type" in body) {
      const sourceType = cleanString(body.source_type);
      if (!sourceType || !allowedTypes.includes(sourceType)) {
        return NextResponse.json(
          { error: "Invalid source type." },
          { status: 400 }
        );
      }
      update.source_type = sourceType;
    }
    if ("city" in body) update.city = cleanString(body.city) || "Hot Springs";
    if ("category_hint" in body) update.category_hint = cleanString(body.category_hint);
    if ("venue_hint" in body) update.venue_hint = cleanString(body.venue_hint);
    if ("notes" in body) update.notes = cleanString(body.notes);
    if ("enabled" in body) update.enabled = Boolean(body.enabled);

    const { data, error } = await supabaseAdmin
      .from("event_sources")
      .update(update)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ source: data });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not update source.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  const { id } = await params;

  const { error } = await supabaseAdmin
    .from("event_sources")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
