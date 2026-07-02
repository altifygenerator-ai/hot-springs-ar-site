import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { savePastedEvent } from "@/lib/event-import/importer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  try {
    const body = await request.json();
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const sourceUrl = typeof body.sourceUrl === "string" ? body.sourceUrl.trim() : null;

    if (!text) {
      return NextResponse.json(
        { error: "Paste the event text first." },
        { status: 400 }
      );
    }

    const result = await savePastedEvent(text, sourceUrl || null);

    if (!result.inserted) {
      return NextResponse.json(
        { error: result.reason || "Could not save event." },
        { status: 409 }
      );
    }

    return NextResponse.json({ ok: true, event: result.event });
  } catch (error) {
    console.error("Paste event import error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not import pasted event.",
      },
      { status: 500 }
    );
  }
}
