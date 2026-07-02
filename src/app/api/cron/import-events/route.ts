import { NextResponse } from "next/server";
import { isValidCronRequest } from "@/lib/admin-auth";
import { importEventSources } from "@/lib/event-import/importer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!isValidCronRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const summary = await importEventSources();
    return NextResponse.json({ ok: true, summary });
  } catch (error) {
    console.error("Cron event import error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Event import failed.",
      },
      { status: 500 }
    );
  }
}
