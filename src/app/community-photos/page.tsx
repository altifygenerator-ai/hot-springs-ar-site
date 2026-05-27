import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Community Photos | Hot Springs Arkansas",
  description:
    "Browse approved local photos submitted for the Hot Springs Arkansas local guide.",
  alternates: {
    canonical: "/community-photos",
  },
};

async function getApprovedPhotos() {
  const { data, error } = await supabaseAdmin
    .from("photo_submissions")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Approved photos load error:", error);
    return [];
  }

  return data || [];
}

export default async function CommunityPhotosPage() {
  const photos = await getApprovedPhotos();

  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">Community photos</p>
          <h1>Local Photos From Around Hot Springs</h1>
          <p>
            Photos submitted by locals and visitors around Hot Springs, Lake
            Hamilton, Bathhouse Row, local events, restaurants, trails, and
            nearby Arkansas places.
          </p>
        </div>

        <div className="admin-actions">
          <Link href="/submit-photo" className="btn-primary">
            Submit a Photo
          </Link>

          <Link href="/" className="btn-secondary">
            Back Home
          </Link>
        </div>

        {photos.length ? (
          <div className="community-photo-grid">
            {photos.map((photo) => (
              <article key={photo.id} className="community-photo-card">
                <div className="community-photo-image">
                  <Image
                    src={photo.image_url}
                    alt={
                      photo.description ||
                      photo.location_name ||
                      "Community submitted Hot Springs photo"
                    }
                    fill
                    sizes="(min-width: 1000px) 33vw, 100vw"
                  />
                </div>

                <div className="community-photo-content">
                  <p className="hero-eyebrow">
                    {photo.town || "Hot Springs"}
                    {photo.location_name ? ` • ${photo.location_name}` : ""}
                  </p>

                  {photo.description ? <p>{photo.description}</p> : null}

                  {photo.credit_name || photo.submitter_name ? (
                    <span>
                      Photo submitted by{" "}
                      {photo.credit_name || photo.submitter_name}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No approved photos yet</h3>
            <p>
              Once submitted photos are reviewed and approved, they’ll show up
              here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}