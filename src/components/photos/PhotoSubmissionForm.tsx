"use client";

import { useState } from "react";

const siteOptions = [
  {
    label: "Hot Springs",
    value: "hot-springs",
  },
  {
    label: "Glenwood",
    value: "glenwood",
  },
  {
    label: "Mount Ida",
    value: "mount-ida",
  },
  {
    label: "Amity",
    value: "amity",
  },
];

export default function PhotoSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/photos", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatusType("success");
      setStatusMessage(
        "Photo submitted! Thanks for helping us build a better local guide. We’ll review it before using it anywhere."
      );

      form.reset();
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-stone-800">
            Your name
          </span>
          <input
            name="submitter_name"
            type="text"
            placeholder="Your name"
            className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-stone-800">
            Email address
          </span>
          <input
            name="submitter_email"
            type="email"
            placeholder="you@example.com"
            className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-stone-800">
            Credit name
          </span>
          <input
            name="credit_name"
            type="text"
            placeholder="How should we credit the photo?"
            className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-stone-800">
            Which guide is this for?
          </span>
          <select
            name="site"
            defaultValue="hot-springs"
            className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
          >
            {siteOptions.map((site) => (
              <option key={site.value} value={site.value}>
                {site.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-stone-800">
            Town / area
          </span>
          <input
            name="town"
            type="text"
            placeholder="Hot Springs, Glenwood, Mount Ida, etc."
            className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-stone-800">
            Location name
          </span>
          <input
            name="location_name"
            type="text"
            placeholder="Bathhouse Row, Lake Hamilton, downtown, etc."
            className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-stone-800">
          Photo description
        </span>
        <textarea
          name="description"
          rows={5}
          placeholder="Tell us what this photo shows, where it was taken, or anything helpful about it."
          className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-500"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-stone-800">
          Upload photo
        </span>
        <input
          name="photo"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          required
          className="rounded-2xl border border-dashed border-stone-300 bg-white px-4 py-5 text-stone-700 file:mr-4 file:rounded-full file:border-0 file:bg-stone-900 file:px-5 file:py-2 file:text-sm file:font-semibold file:text-white"
        />
        <span className="text-xs text-stone-500">
          JPG, PNG, or WebP works best.
        </span>
      </label>

      <label className="flex gap-3 rounded-2xl bg-stone-50 p-4 text-sm leading-6 text-stone-700">
        <input
          name="permission_confirmed"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0"
        />
        <span>
          I own this photo or have permission to submit it, and I give Natural
          State Tourism Project permission to review it and possibly use it in a
          local guide, event post, social media post, or community feature with
          credit when appropriate.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit items-center justify-center rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Photo"}
      </button>

      {statusMessage ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
            statusType === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}