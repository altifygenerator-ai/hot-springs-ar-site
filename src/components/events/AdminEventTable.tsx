"use client";

import Link from "next/link";
import type { TourismEvent } from "@/lib/events";

export default function AdminEventTable({ events }: { events: TourismEvent[] }) {
  async function updateStatus(id: string, status: "approved" | "rejected") {
    const res = await fetch(`/api/events/${id}/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      alert("Could not update event.");
      return;
    }

    window.location.reload();
  }

  async function cleanWithAI(id: string) {
    const res = await fetch("/api/ai/clean-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eventId: id }),
    });

    if (!res.ok) {
      alert("Could not clean event with AI.");
      return;
    }

    window.location.reload();
  }

  if (!events.length) {
    return (
      <div className="empty-state">
        <h3>No events yet</h3>
        <p>Submitted and manually added events will show up here.</p>
      </div>
    );
  }

  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
            <th>Source</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>
                <strong className="admin-event-title">{event.title}</strong>

                {event.description || event.raw_description ? (
                  <span className="admin-event-description">
                    {event.description || event.raw_description}
                  </span>
                ) : (
                  <span>No description added</span>
                )}

                <span>{event.location_name || "No location added"}</span>
              </td>

              <td>{event.start_date}</td>

              <td>
                <span className={`status-pill status-${event.status}`}>
                  {event.status}
                </span>
              </td>

              <td>{event.source_type || "manual"}</td>

              <td>
                <div className="admin-row-actions">
                  <button type="button" onClick={() => cleanWithAI(event.id)}>
                    Clean with AI
                  </button>

                  {event.status !== "approved" && (
                    <button
                      type="button"
                      onClick={() => updateStatus(event.id, "approved")}
                    >
                      Approve
                    </button>
                  )}

                  {event.status !== "rejected" && (
                    <button
                      type="button"
                      onClick={() => updateStatus(event.id, "rejected")}
                    >
                      Reject
                    </button>
                  )}

                  {event.status === "approved" && (
                    <Link href={`/events/${event.slug}`} target="_blank">
                      View
                    </Link>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}