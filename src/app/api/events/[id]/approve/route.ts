import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

type RouteProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(request: Request, { params }: RouteProps) {
  try {
    const { id } = await params;
    const body = await request.json();

    const status = body.status;

    if (!["approved", "rejected", "pending", "draft"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid event status." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("events")
      .update({
        status,
        needs_review: status !== "approved",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Event approval error:", error);

      return NextResponse.json(
        { error: "Could not update event status." },
        { status: 500 }
      );
    }

    return NextResponse.json({ event: data });
  } catch (error) {
    console.error("Event approval route error:", error);

    return NextResponse.json(
      { error: "Something went wrong updating this event." },
      { status: 500 }
    );
  }
}