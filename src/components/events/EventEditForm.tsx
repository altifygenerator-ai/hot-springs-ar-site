"use client";

import { useState } from "react";
import type { TourismEvent } from "@/lib/events";

type FormStatus = "idle" | "loading" | "success" | "error";

const statuses = ["draft", "pending", "approved", "rejected"];

export default function EventEditForm({ event }: { event: TourismEvent }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function save(form: HTMLFormElement, overrideStatus?: string) {
    setStatus("loading");
    setMessage("");

    const formData = new FormData(form);
    const payload = {
      title: String(formData.get("title") || ""),
      slug: String(formData.get("slug") || ""),
      raw_description: String(formData.get("raw_description") || ""),
      description: String(formData.get("description") || ""),
      ai_summary: String(formData.get("ai_summary") || ""),
      city: String(formData.get("city") || "Hot Springs"),
      location_name: String(formData.get("location_name") || ""),
      address: String(formData.get("address") || ""),
      start_date: String(formData.get("start_date") || ""),
      end_date: String(formData.get("end_date") || ""),
      start_time: String(formData.get("start_time") || ""),
      end_time: String(formData.get("end_time") || ""),
      category: String(formData.get("category") || ""),
      tags: String(formData.get("tags") || ""),
      image_url: String(formData.get("image_url") || ""),
      source_url: String(formData.get("source_url") || ""),
      status: overrideStatus || String(formData.get("status") || "pending"),
      featured: formData.get("featured") === "on",
      source_type: String(formData.get("source_type") || ""),
      external_id: String(formData.get("external_id") || ""),
      confidence_score: String(formData.get("confidence_score") || ""),
      needs_review: overrideStatus ? overrideStatus !== "approved" : formData.get("needs_review") === "on",
    };

    const res = await fetch(`/api/events/${event.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setStatus("error");
      setMessage(data?.error || "Could not save event.");
      return;
    }

    setStatus("success");
    setMessage(
      overrideStatus === "approved"
        ? "Event saved and approved."
        : overrideStatus === "rejected"
        ? "Event rejected."
        : "Event saved."
    );

    if (overrideStatus) {
      window.location.href = "/admin/events";
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await save(e.currentTarget);
  }

  async function cleanWithAI() {
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/ai/clean-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId: event.id }),
    });

    if (!res.ok) {
      setStatus("error");
      setMessage("Could not clean event with AI.");
      return;
    }

    window.location.reload();
  }

  return (
    <div className="event-form-wrap">
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="event-form-note">
          <p>
            Review imported details before publishing. Imported events stay hidden
            until the status is approved.
          </p>
        </div>

        <div className="event-form-grid">
          <div className="event-form-field event-form-full">
            <label htmlFor="title">Event Name *</label>
            <input id="title" name="title" required defaultValue={event.title || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="slug">Slug</label>
            <input id="slug" name="slug" defaultValue={event.slug || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" defaultValue={event.status || "pending"}>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="event-form-field">
            <label htmlFor="category">Category</label>
            <input id="category" name="category" defaultValue={event.category || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="start_date">Start Date *</label>
            <input id="start_date" name="start_date" type="date" required defaultValue={event.start_date || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="end_date">End Date</label>
            <input id="end_date" name="end_date" type="date" defaultValue={event.end_date || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="start_time">Start Time</label>
            <input id="start_time" name="start_time" type="time" defaultValue={event.start_time || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="end_time">End Time</label>
            <input id="end_time" name="end_time" type="time" defaultValue={event.end_time || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="city">City</label>
            <input id="city" name="city" defaultValue={event.city || "Hot Springs"} />
          </div>

          <div className="event-form-field">
            <label htmlFor="location_name">Location Name</label>
            <input id="location_name" name="location_name" defaultValue={event.location_name || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" defaultValue={event.address || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="raw_description">Raw Imported Details</label>
            <textarea id="raw_description" name="raw_description" rows={5} defaultValue={event.raw_description || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="description">Public Description</label>
            <textarea id="description" name="description" rows={7} defaultValue={event.description || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="ai_summary">Quick Summary</label>
            <textarea id="ai_summary" name="ai_summary" rows={3} defaultValue={event.ai_summary || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="source_url">Source URL</label>
            <input id="source_url" name="source_url" type="url" defaultValue={event.source_url || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="image_url">Image URL</label>
            <input id="image_url" name="image_url" defaultValue={event.image_url || ""} />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="tags">Tags</label>
            <input id="tags" name="tags" defaultValue={(event.tags || []).join(", ")} placeholder="Live Music, Family Friendly" />
          </div>

          <div className="event-form-field">
            <label htmlFor="source_type">Source Type</label>
            <input id="source_type" name="source_type" defaultValue={event.source_type || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="external_id">External ID</label>
            <input id="external_id" name="external_id" defaultValue={event.external_id || ""} />
          </div>

          <div className="event-form-field">
            <label htmlFor="confidence_score">Confidence Score</label>
            <input id="confidence_score" name="confidence_score" type="number" step="0.01" min="0" max="1" defaultValue={event.confidence_score ?? ""} />
          </div>

          <div className="event-form-field">
            <label className="recurring-day-option">
              <input name="featured" type="checkbox" defaultChecked={Boolean(event.featured)} />
              Featured event
            </label>

            <label className="recurring-day-option">
              <input name="needs_review" type="checkbox" defaultChecked={Boolean(event.needs_review)} />
              Needs review
            </label>
          </div>
        </div>

        <div className="admin-row-actions" style={{ marginTop: "1.25rem" }}>
          <button className="btn-primary" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Saving..." : "Save Changes"}
          </button>

          <button type="button" onClick={cleanWithAI} disabled={status === "loading"}>
            Clean with AI
          </button>

          <button type="button" onClick={(e) => save(e.currentTarget.form!, "approved")} disabled={status === "loading"}>
            Save & Approve
          </button>

          <button type="button" onClick={(e) => save(e.currentTarget.form!, "rejected")} disabled={status === "loading"}>
            Reject
          </button>
        </div>

        {message && (
          <p className={`form-status ${status === "success" ? "form-status-success" : ""} ${status === "error" ? "form-status-error" : ""}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
