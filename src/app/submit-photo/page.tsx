import type { Metadata } from "next";
import Link from "next/link";
import PhotoSubmissionForm from "@/components/photos/PhotoSubmissionForm";

export const metadata: Metadata = {
  title: "Submit a Local Photo | Hot Springs Arkansas",
  description:
    "Submit a local photo from Hot Springs, Lake Hamilton, Bathhouse Row, local events, trails, restaurants, or nearby Arkansas places for possible use in future local guides.",
  alternates: {
    canonical: "/submit-photo",
  },
};

export default function SubmitPhotoPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-sm font-semibold text-stone-600 transition hover:text-stone-950"
          >
            ← Back to home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
                Community photos
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950 md:text-6xl">
                Submit a local photo
              </h1>

              <p className="mt-6 text-lg leading-8 text-stone-700">
                Have a good photo from around Hot Springs, Lake Hamilton,
                Bathhouse Row, a local event, a trail, restaurant, shop, or
                nearby Arkansas spot? Send it in and it may be considered for a
                future guide, event post, or community feature.
              </p>

              <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-stone-950">
                  Before you submit
                </h2>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                  <li>
                    Only submit photos you took yourself or have permission to
                    share.
                  </li>
                  <li>
                    Submissions are reviewed before they are used anywhere.
                  </li>
                  <li>
                    Include a credit name if you want credit shown with the
                    photo.
                  </li>
                  <li>
                    Local places, events, outdoor spots, food, shops, and
                    travel-style photos are all helpful.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm md:p-8">
              <PhotoSubmissionForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}