import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";

const BUCKET_NAME = "community-photos";
const MAX_FILE_SIZE = 8 * 1024 * 1024;

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

function cleanFileName(fileName: string) {
  return fileName
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanFolderName(value: string | null) {
  if (!value) return "hot-springs";

  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const submitter_name = String(formData.get("submitter_name") || "").trim();
    const submitter_email = String(formData.get("submitter_email") || "").trim();
    const credit_name = String(formData.get("credit_name") || "").trim();
    const site = String(formData.get("site") || "hot-springs").trim();
    const town = String(formData.get("town") || "Hot Springs").trim();
    const location_name = String(formData.get("location_name") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const permission_confirmed =
      formData.get("permission_confirmed") === "on" ||
      formData.get("permission_confirmed") === "true";

    const photo = formData.get("photo");

    if (!permission_confirmed) {
      return NextResponse.json(
        { error: "Please confirm you have permission to submit this photo." },
        { status: 400 }
      );
    }

    if (!(photo instanceof File)) {
      return NextResponse.json(
        { error: "Please upload a photo." },
        { status: 400 }
      );
    }

    if (!allowedTypes.includes(photo.type)) {
      return NextResponse.json(
        { error: "Please upload a JPG, PNG, or WebP image." },
        { status: 400 }
      );
    }

    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Photo is too large. Please upload an image under 8MB." },
        { status: 400 }
      );
    }

    const fileExtension = photo.name.split(".").pop() || "jpg";
    const folder = cleanFolderName(site);
    const fileName = cleanFileName(photo.name || `photo.${fileExtension}`);
    const filePath = `${folder}/${Date.now()}-${fileName}`;

    const arrayBuffer = await photo.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: photo.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Photo upload error:", uploadError);

      return NextResponse.json(
        { error: "Could not upload the photo. Please try again." },
        { status: 500 }
      );
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    const image_url = publicUrlData.publicUrl;

    const { data, error: insertError } = await supabaseAdmin
      .from("photo_submissions")
      .insert({
        submitter_name: submitter_name || null,
        submitter_email: submitter_email || null,
        credit_name: credit_name || null,

        site: site || "hot-springs",
        town: town || "Hot Springs",
        location_name: location_name || null,
        description: description || null,

        image_url,
        image_path: filePath,

        permission_confirmed,
        status: "pending",
        featured: false,
        needs_review: true,
        source_type: "submission",
      })
      .select()
      .single();

    if (insertError) {
      console.error("Photo insert error:", insertError);

      await supabaseAdmin.storage.from(BUCKET_NAME).remove([filePath]);

      return NextResponse.json(
        { error: "Could not save the photo submission. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      photo: data,
    });
  } catch (error) {
    console.error("Photo submission route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while submitting the photo." },
      { status: 500 }
    );
  }
}