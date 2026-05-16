"use client";

import { useState } from "react";

const businessTypes = [
  "Restaurant",
  "Cabin / Vacation Rental",
  "Hotel / Bed & Breakfast",
  "Attraction",
  "Local Shop",
  "Outdoor Recreation",
  "Service Business",
  "Event Venue",
  "Other",
];

export default function AdvertiseQuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      businessName: String(formData.get("businessName") || ""),
      contactName: String(formData.get("contactName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      businessType: String(formData.get("businessType") || ""),
      website: String(formData.get("website") || ""),
      location: String(formData.get("location") || ""),
      listingType: String(formData.get("listingType") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(
        "Thanks! Your request was sent. We’ll get back with you as soon as we can."
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border bg-[color:var(--surface)] p-6 shadow-[var(--shadow)] md:p-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mb-6">
        <p
          className="mb-2 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Get Listed
        </p>

        <h2 className="text-3xl font-semibold">Request advertising info</h2>

        <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
          Send over a few details and we’ll follow up about getting your business
          listed or featured on the Hot Springs Arkansas guide.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Business name *
          </span>
          <input
            name="businessName"
            required
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="Business name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Your name *
          </span>
          <input
            name="contactName"
            required
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Email *
          </span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Phone
          </span>
          <input
            name="phone"
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="Phone number"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Business type *
          </span>
          <select
            name="businessType"
            required
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Listing interest
          </span>
          <select
            name="listingType"
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            defaultValue="Not sure yet"
          >
            <option>Not sure yet</option>
            <option>Basic listing</option>
            <option>Featured placement</option>
            <option>Sponsored feature</option>
            <option>Website / SEO help too</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Website or Facebook
          </span>
          <input
            name="website"
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="Website or Facebook link"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold">
            Location / service area
          </span>
          <input
            name="location"
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="Hot Springs, Lake Hamilton, etc."
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-semibold">
          What would you like listed or promoted?
        </span>
        <textarea
          name="message"
          rows={5}
          className="w-full resize-none rounded-2xl border bg-white px-4 py-3 outline-none"
          style={{ borderColor: "var(--border)" }}
          placeholder="Tell us about your business, what you offer, and what kind of visibility you’re interested in."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full px-6 py-4 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        style={{ background: "var(--green)" }}
      >
        {status === "loading" ? "Sending..." : "Send Request"}
      </button>

      {message && (
        <p
          className="mt-4 rounded-2xl p-4 text-sm font-semibold"
          style={{
            background:
              status === "success"
                ? "rgba(35, 56, 47, 0.1)"
                : "rgba(155, 31, 31, 0.1)",
            color: status === "success" ? "var(--green)" : "#8b1e1e",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}