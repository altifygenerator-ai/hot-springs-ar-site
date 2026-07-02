import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { importEventSources } from "@/lib/event-import/importer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  try {
    const body = await request.json().catch(() => ({}));
    const sourceId = typeof body.sourceId === "string" ? body.sourceId : undefined;
    const summary = await importEventSources({ sourceId });

    return NextResponse.json({ ok: true, summary });
  } catch (error) {
    console.error("Manual event import error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Event import failed.",
      },
      { status: 500 }
    );
  }
}
