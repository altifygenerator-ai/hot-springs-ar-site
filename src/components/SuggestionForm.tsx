"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const FORM_ENDPOINT = "/api/contact";

export default function SuggestionForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: "suggestion",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      suggestionType: String(formData.get("suggestionType") || ""),
      relatedBusiness: String(formData.get("relatedBusiness") || ""),
      pageOrArea: String(formData.get("pageOrArea") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Suggestion failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks — your suggestion was sent.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div
      className="rounded-[2rem] border bg-[color:var(--surface)] p-6 shadow-sm md:p-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mb-6">
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Suggestions & Updates
        </p>

        <h2 className="text-3xl font-semibold">
          Suggest a place, idea, or update.
        </h2>

        <p
          className="mt-3 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Know a business we should add, a page we should build, an event we
          missed, or something that needs corrected? Send it here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">Your Name</label>
            <input
              name="name"
              className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
              style={{ borderColor: "var(--border)" }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
              style={{ borderColor: "var(--border)" }}
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            What kind of suggestion is this?
          </label>
          <select
            name="suggestionType"
            required
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
          >
            <option value="">Choose one</option>
            <option value="Business suggestion">Business suggestion</option>
            <option value="Page idea">Page idea</option>
            <option value="Correction or update">Correction or update</option>
            <option value="Event idea">Event idea</option>
            <option value="Photo or local story">Photo or local story</option>
            <option value="General suggestion">General suggestion</option>
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Business or place name
            </label>
            <input
              name="relatedBusiness"
              className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
              style={{ borderColor: "var(--border)" }}
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Page or area
            </label>
            <input
              name="pageOrArea"
              className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
              style={{ borderColor: "var(--border)" }}
              placeholder="Example: antique stores, Lake Hamilton, downtown"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">Suggestion</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            style={{ borderColor: "var(--border)" }}
            placeholder="Tell us what should be added, updated, corrected, or looked into."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-fit disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Suggestion"}
        </button>

        {message && (
          <p
            className="text-sm font-semibold"
            style={{
              color:
                status === "success"
                  ? "var(--green)"
                  : "var(--accent-dark)",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}