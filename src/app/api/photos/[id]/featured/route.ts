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

    const featured = Boolean(body.featured);

    const { data, error } = await supabaseAdmin
      .from("photo_submissions")
      .update({
        featured,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Photo featured update error:", error);

      return NextResponse.json(
        { error: "Could not update featured setting." },
        { status: 500 }
      );
    }

    return NextResponse.json({ photo: data });
  } catch (error) {
    console.error("Photo featured route error:", error);

    return NextResponse.json(
      { error: "Something went wrong updating this photo." },
      { status: 500 }
    );
  }
}