import Link from "next/link";
import AdminPhotoTable from "@/components/photos/AdminPhotoTable";
import { supabaseAdmin } from "@/lib/supabase/server";
import type { PhotoSubmission } from "@/types/photos";

export const dynamic = "force-dynamic";

async function getPhotoSubmissions() {
  const { data, error } = await supabaseAdmin
    .from("photo_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading photo submissions:", error);
    return [];
  }

  return (data || []) as PhotoSubmission[];
}

export default async function AdminPhotosPage() {
  const photos = await getPhotoSubmissions();

  const pendingCount = photos.filter((photo) => photo.status === "pending").length;
  const approvedCount = photos.filter(
    (photo) => photo.status === "approved"
  ).length;
  const rejectedCount = photos.filter(
    (photo) => photo.status === "rejected"
  ).length;

  return (
    <main className="min-h-screen bg-stone-50 px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="text-sm font-semibold text-stone-600 transition hover:text-stone-950"
            >
              ← Back to admin
            </Link>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              Photo Submissions
            </h1>

            <p className="mt-2 max-w-2xl text-stone-600">
              Review local photo submissions before using them in guides,
              galleries, event posts, or community updates.
            </p>
          </div>

          <Link
            href="/submit-photo"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
          >
            View Submit Photo Page
          </Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-500">Pending</p>
            <p className="mt-2 text-3xl font-bold text-stone-950">
              {pendingCount}
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-500">Approved</p>
            <p className="mt-2 text-3xl font-bold text-stone-950">
              {approvedCount}
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-stone-500">Rejected</p>
            <p className="mt-2 text-3xl font-bold text-stone-950">
              {rejectedCount}
            </p>
          </div>
        </div>

        <AdminPhotoTable photos={photos} />
      </div>
    </main>
  );
}