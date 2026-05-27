import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

const allowedStatuses = ["pending", "approved", "rejected", "draft"];

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const status = String(body.status || "").trim();

    if (!id) {
      return NextResponse.json(
        { error: "Missing photo ID." },
        { status: 400 }
      );
    }

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid photo status." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("photo_submissions")
      .update({
        status,
        needs_review: status === "pending",
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Photo status update error:", error);

      return NextResponse.json(
        { error: "Could not update photo status." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      photo: data,
    });
  } catch (error) {
    console.error("Photo status route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while updating the photo." },
      { status: 500 }
    );
  }
}