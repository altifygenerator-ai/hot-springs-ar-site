"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type EventFormProps = {
  sourceType?: "submission" | "manual";
};

const recurringDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function EventForm({
  sourceType = "submission",
}: EventFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedRecurringDays = formData
      .getAll("recurrence_days")
      .map(String);

    const payload = {
      title: String(formData.get("title") || ""),
      raw_description: String(formData.get("raw_description") || ""),
      description: String(formData.get("raw_description") || ""),
      city: String(formData.get("city") || "Hot Springs"),
      location_name: String(formData.get("location_name") || ""),
      address: String(formData.get("address") || ""),
      start_date: String(formData.get("start_date") || ""),
      end_date: String(formData.get("end_date") || ""),
      start_time: String(formData.get("start_time") || ""),
      end_time: String(formData.get("end_time") || ""),
      category: String(formData.get("category") || ""),
      source_url: String(formData.get("source_url") || ""),
      submitter_name: String(formData.get("submitter_name") || ""),
      submitter_email: String(formData.get("submitter_email") || ""),
      source_type: sourceType,

      is_recurring: isRecurring,
      recurrence_type: isRecurring
        ? String(formData.get("recurrence_type") || "")
        : "",
      recurrence_days: isRecurring ? selectedRecurringDays : [],
      recurrence_end_date: isRecurring
        ? String(formData.get("recurrence_end_date") || "")
        : "",
    };

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Event submission failed");
      }

      form.reset();
      setIsRecurring(false);
      setStatus("success");
      setMessage(
        sourceType === "manual"
          ? "Event saved as pending. You can approve it from the admin events page."
          : "Thanks — your event was submitted for review."
      );
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="event-form-wrap">
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="event-form-note">
          <p>
            Events are reviewed before they appear publicly. Add as much detail
            as you can so visitors have the right date, time, location, and
            source information.
          </p>
        </div>

        <div className="event-form-grid">
          <div className="event-form-field">
            <label htmlFor="title">Event Name *</label>
            <input
              id="title"
              name="title"
              required
              placeholder="Example: Live Music Downtown"
            />
          </div>

          <div className="event-form-field">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" defaultValue="">
              <option value="" disabled>
                Select a category
              </option>
              <option>Live Music</option>
              <option>Festival</option>
              <option>Family Friendly</option>
              <option>Food & Drink</option>
              <option>Outdoor</option>
              <option>Arts & Culture</option>
              <option>Community</option>
              <option>Other</option>
            </select>
          </div>

          <div className="event-form-field">
            <label htmlFor="event_type">Event Type</label>
            <select
              id="event_type"
              name="event_type"
              defaultValue="single"
              onChange={(event) =>
                setIsRecurring(event.target.value === "recurring")
              }
            >
              <option value="single">One-time event</option>
              <option value="recurring">Recurring event</option>
            </select>
          </div>

          <div className="event-form-field">
            <label htmlFor="start_date">
              {isRecurring ? "First Date *" : "Start Date *"}
            </label>
            <input id="start_date" name="start_date" type="date" required />
          </div>

          {!isRecurring && (
            <div className="event-form-field">
              <label htmlFor="end_date">End Date</label>
              <input id="end_date" name="end_date" type="date" />
            </div>
          )}

          {isRecurring && (
            <div className="event-form-field">
              <label htmlFor="recurrence_end_date">Recurring End Date</label>
              <input
                id="recurrence_end_date"
                name="recurrence_end_date"
                type="date"
              />
            </div>
          )}

          <div className="event-form-field">
            <label htmlFor="start_time">Start Time</label>
            <input id="start_time" name="start_time" type="time" />
          </div>

          <div className="event-form-field">
            <label htmlFor="end_time">End Time</label>
            <input id="end_time" name="end_time" type="time" />
          </div>

          {isRecurring && (
            <>
              <div className="event-form-field">
                <label htmlFor="recurrence_type">Repeats</label>
                <select
                  id="recurrence_type"
                  name="recurrence_type"
                  defaultValue="weekly"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="event-form-field event-form-full">
                <label>Recurring Days</label>

                <div className="recurring-days">
                  {recurringDays.map((day) => (
                    <label key={day} className="recurring-day-option">
                      <input
                        type="checkbox"
                        name="recurrence_days"
                        value={day}
                      />
                      {day}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="event-form-field">
            <label htmlFor="city">City</label>
            <input id="city" name="city" defaultValue="Hot Springs" />
          </div>

          <div className="event-form-field">
            <label htmlFor="location_name">Location Name</label>
            <input
              id="location_name"
              name="location_name"
              placeholder="Venue, park, restaurant, etc."
            />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              placeholder="Street address if available"
            />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="raw_description">Event Details *</label>
            <textarea
              id="raw_description"
              name="raw_description"
              required
              rows={6}
              placeholder="Paste or write the event details here. Times, cost, what to expect, links, anything helpful."
            />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="source_url">Source Link</label>
            <input
              id="source_url"
              name="source_url"
              type="url"
              placeholder="Facebook event, website, ticket link, etc."
            />
          </div>

          <div className="event-form-field">
            <label htmlFor="submitter_name">Your Name</label>
            <input id="submitter_name" name="submitter_name" />
          </div>

          <div className="event-form-field">
            <label htmlFor="submitter_email">Your Email</label>
            <input id="submitter_email" name="submitter_email" type="email" />
          </div>
        </div>

        <button
          className="btn-primary event-form-submit"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit Event"}
        </button>

        {message && (
          <p
            className={`form-status ${
              status === "success" ? "form-status-success" : ""
            } ${status === "error" ? "form-status-error" : ""}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}