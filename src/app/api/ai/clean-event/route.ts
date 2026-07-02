import { NextResponse } from "next/server";
import OpenAI from "openai";
import { supabaseAdmin } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/admin-auth";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type RouteBody = {
  eventId?: string;
};

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin.ok) return admin.response;

  try {
    const body = (await request.json()) as RouteBody;

    if (!body.eventId) {
      return NextResponse.json(
        { error: "Missing event ID." },
        { status: 400 }
      );
    }

    const { data: event, error: fetchError } = await supabaseAdmin
      .from("events")
      .select("*")
      .eq("id", body.eventId)
      .single();

    if (fetchError || !event) {
      return NextResponse.json(
        { error: "Event not found." },
        { status: 404 }
      );
    }

    const rawText = `
Title: ${event.title || ""}
Category: ${event.category || ""}
City: ${event.city || "Hot Springs"}
Location: ${event.location_name || ""}
Address: ${event.address || ""}
Date: ${event.start_date || ""}
Time: ${event.start_time || ""}
Raw Description:
${event.raw_description || event.description || ""}
Source URL: ${event.source_url || ""}
`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content:
            "You clean up tourism event listings for a local Arkansas travel guide. Do not invent facts, prices, dates, times, addresses, performers, or links. Keep the tone human, local, useful, and conversational. Avoid hype, corporate language, and phrases like unforgettable experience.",
        },
        {
          role: "user",
          content: `Clean this event listing and return JSON only with:
{
  "title": string,
  "description": string,
  "ai_summary": string,
  "category": string,
  "tags": string[],
  "needs_review": boolean
}

Description should preserve the real details but make it readable. ai_summary should be 1-2 casual local sentences. Use needs_review true if important info is missing or unclear.

${rawText}`,
        },
      ],
      text: {
        format: {
          type: "json_object",
        },
      },
    });

    const cleaned = JSON.parse(response.output_text);

    const { data: updatedEvent, error: updateError } = await supabaseAdmin
      .from("events")
      .update({
        title: cleaned.title || event.title,
        description: cleaned.description || event.description,
        ai_summary: cleaned.ai_summary || event.ai_summary,
        category: cleaned.category || event.category,
        tags: Array.isArray(cleaned.tags) ? cleaned.tags : [],
        needs_review: Boolean(cleaned.needs_review),
        updated_at: new Date().toISOString(),
      })
      .eq("id", body.eventId)
      .select()
      .single();

    if (updateError) {
      console.error("AI event update error:", updateError);

      return NextResponse.json(
        { error: "Could not save cleaned event." },
        { status: 500 }
      );
    }

    return NextResponse.json({ event: updatedEvent });
  } catch (error) {
    console.error("AI clean event error:", error);

    return NextResponse.json(
      { error: "Something went wrong cleaning this event." },
      { status: 500 }
    );
  }
}