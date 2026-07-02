"use client";

import { useState } from "react";

export default function QuickImportForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/events/import/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: String(formData.get("text") || ""),
        sourceUrl: String(formData.get("sourceUrl") || ""),
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setStatus("error");
      setMessage(data?.error || "Could not import this event.");
      return;
    }

    const eventId = data?.event?.id;
    setStatus("success");
    setMessage("Event saved as pending.");

    if (eventId) {
      window.location.href = `/admin/events/${eventId}/edit`;
    }
  }

  return (
    <div className="event-form-wrap">
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="event-form-note">
          <p>
            Paste a Facebook post, flyer text, venue listing, or messy event copy.
            AI will turn it into a pending event so you can review it before publishing.
          </p>
        </div>

        <div className="event-form-grid">
          <div className="event-form-field event-form-full">
            <label htmlFor="text">Event Text *</label>
            <textarea
              id="text"
              name="text"
              required
              rows={12}
              placeholder="Paste event post or flyer text here..."
            />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="sourceUrl">Source Link</label>
            <input
              id="sourceUrl"
              name="sourceUrl"
              type="url"
              placeholder="Facebook event, venue page, ticket link, etc."
            />
          </div>
        </div>

        <button className="btn-primary event-form-submit" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Importing..." : "Create Pending Event"}
        </button>

        {message && (
          <p className={`form-status ${status === "success" ? "form-status-success" : ""} ${status === "error" ? "form-status-error" : ""}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
