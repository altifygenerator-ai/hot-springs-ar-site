"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { PhotoSubmission } from "@/types/photos";

type AdminPhotoTableProps = {
  photos: PhotoSubmission[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function statusLabel(status: string) {
  if (status === "approved") return "Approved";
  if (status === "rejected") return "Rejected";
  if (status === "draft") return "Draft";
  return "Pending";
}

export default function AdminPhotoTable({ photos }: AdminPhotoTableProps) {
  const router = useRouter();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  async function updatePhotoStatus(
    id: string,
    status: "approved" | "rejected"
  ) {
    setUpdatingId(id);

    try {
      const response = await fetch(`/api/photos/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not update photo.");
      }

      router.refresh();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while updating this photo."
      );
    } finally {
      setUpdatingId(null);
    }
  }

  async function toggleFeatured(id: string, featured: boolean) {
    setUpdatingId(id);

    try {
      const response = await fetch(`/api/photos/${id}/featured`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          featured,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Could not update featured setting."
        );
      }

      router.refresh();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong while updating this photo."
      );
    } finally {
      setUpdatingId(null);
    }
  }

  if (!photos.length) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-8">
        <h2 className="text-xl font-bold text-stone-900">
          No photo submissions yet
        </h2>
        <p className="mt-2 text-stone-600">
          When someone submits a local photo, it will show up here for review.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {photos.map((photo) => (
        <article
          key={photo.id}
          className="grid gap-5 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm lg:grid-cols-[260px_1fr]"
        >
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-stone-100">
            <Image
              src={photo.image_url}
              alt={
                photo.description ||
                photo.location_name ||
                "Submitted photo"
              }
              fill
              sizes="(min-width: 1024px) 260px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  photo.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : photo.status === "rejected"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {statusLabel(photo.status)}
              </span>

              {photo.featured ? (
                <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-bold text-white">
                  Featured / Use On Site
                </span>
              ) : null}

              <span className="text-sm text-stone-500">
                Submitted {formatDate(photo.created_at)}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-stone-900">
              {photo.location_name || "Local photo submission"}
            </h2>

            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-stone-500">
              {photo.town || "Hot Springs"} · {photo.site}
            </p>

            {photo.description ? (
              <p className="mt-4 leading-7 text-stone-700">
                {photo.description}
              </p>
            ) : null}

            <div className="mt-5 grid gap-2 text-sm text-stone-600 md:grid-cols-2">
              <p>
                <span className="font-bold text-stone-900">
                  Submitted by:
                </span>{" "}
                {photo.submitter_name || "Not provided"}
              </p>

              <p>
                <span className="font-bold text-stone-900">Email:</span>{" "}
                {photo.submitter_email || "Not provided"}
              </p>

              <p>
                <span className="font-bold text-stone-900">Credit:</span>{" "}
                {photo.credit_name ||
                  photo.submitter_name ||
                  "Not provided"}
              </p>

              <p>
                <span className="font-bold text-stone-900">
                  Permission:
                </span>{" "}
                {photo.permission_confirmed ? "Confirmed" : "Not confirmed"}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={photo.image_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stone-300 px-5 py-2 text-sm font-bold text-stone-900 transition hover:bg-stone-100"
              >
                Open Image
              </a>

              <button
                type="button"
                disabled={updatingId === photo.id}
                onClick={() => updatePhotoStatus(photo.id, "approved")}
                className="rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updatingId === photo.id ? "Updating..." : "Approve"}
              </button>

              <button
                type="button"
                disabled={updatingId === photo.id}
                onClick={() => updatePhotoStatus(photo.id, "rejected")}
                className="rounded-full bg-red-700 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updatingId === photo.id ? "Updating..." : "Reject"}
              </button>

              <button
                type="button"
                disabled={updatingId === photo.id || photo.status !== "approved"}
                onClick={() => toggleFeatured(photo.id, !photo.featured)}
                className="rounded-full bg-stone-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updatingId === photo.id
                  ? "Updating..."
                  : photo.featured
                    ? "Remove From Site"
                    : "Use On Site"}
              </button>
            </div>

            {photo.status !== "approved" ? (
              <p className="mt-3 text-xs font-semibold text-stone-500">
                Approve the photo before marking it for site use.
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}