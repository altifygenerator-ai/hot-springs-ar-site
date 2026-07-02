"use client";

import { useState } from "react";

type EventSource = {
  id: string;
  name: string;
  source_type: string;
  url: string;
  city?: string | null;
  category_hint?: string | null;
  venue_hint?: string | null;
  enabled: boolean;
  last_checked_at?: string | null;
  last_status?: string | null;
};

type ImportRun = {
  id: string;
  status: string;
  started_at?: string | null;
  finished_at?: string | null;
  found_count?: number | null;
  inserted_count?: number | null;
  skipped_count?: number | null;
  error_message?: string | null;
  event_sources?: { name?: string | null } | null;
};

export default function EventSourceManager({
  sources,
  runs,
}: {
  sources: EventSource[];
  runs: ImportRun[];
}) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function createSource(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/events/sources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(formData.get("name") || ""),
        url: String(formData.get("url") || ""),
        source_type: String(formData.get("source_type") || "website"),
        city: String(formData.get("city") || "Hot Springs"),
        category_hint: String(formData.get("category_hint") || ""),
        venue_hint: String(formData.get("venue_hint") || ""),
        notes: String(formData.get("notes") || ""),
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setMessage(data?.error || "Could not add source.");
      setBusy(false);
      return;
    }

    form.reset();
    window.location.reload();
  }

  async function runImport(sourceId?: string) {
    setBusy(true);
    setMessage("Running import...");

    const res = await fetch("/api/events/import/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sourceId }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setBusy(false);
      setMessage(data?.error || "Import failed.");
      return;
    }

    const summary = data?.summary;
    setMessage(
      `Checked ${summary?.checked || 0} source(s). Added ${summary?.inserted || 0}. Skipped ${summary?.skipped || 0}.`
    );
    setBusy(false);
  }

  async function toggleSource(source: EventSource) {
    setBusy(true);

    const res = await fetch(`/api/events/sources/${source.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: !source.enabled }),
    });

    if (!res.ok) {
      setMessage("Could not update source.");
      setBusy(false);
      return;
    }

    window.location.reload();
  }

  async function deleteSource(source: EventSource) {
    if (!window.confirm(`Delete ${source.name}?`)) return;
    setBusy(true);

    const res = await fetch(`/api/events/sources/${source.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      setMessage("Could not delete source.");
      setBusy(false);
      return;
    }

    window.location.reload();
  }

  return (
    <div className="event-form-wrap">
      <form className="event-form" onSubmit={createSource}>
        <div className="event-form-note">
          <p>
            Add trusted event pages or calendars once. The importer will check
            enabled sources and save new events as pending.
          </p>
        </div>

        <div className="event-form-grid">
          <div className="event-form-field">
            <label htmlFor="name">Source Name *</label>
            <input id="name" name="name" required placeholder="Oaklawn Events" />
          </div>

          <div className="event-form-field">
            <label htmlFor="source_type">Source Type</label>
            <select id="source_type" name="source_type" defaultValue="website">
              <option value="website">Website page</option>
              <option value="json_ld">Website with Event schema</option>
              <option value="ics">iCal / ICS feed</option>
              <option value="rss">RSS feed</option>
            </select>
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="url">URL *</label>
            <input id="url" name="url" type="url" required placeholder="https://..." />
          </div>

          <div className="event-form-field">
            <label htmlFor="city">City</label>
            <input id="city" name="city" defaultValue="Hot Springs" />
          </div>

          <div className="event-form-field">
            <label htmlFor="category_hint">Category Hint</label>
            <input id="category_hint" name="category_hint" placeholder="Live Music, Festival, Family Friendly" />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="venue_hint">Venue Hint</label>
            <input id="venue_hint" name="venue_hint" placeholder="Use when one page is for one venue" />
          </div>

          <div className="event-form-field event-form-full">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" rows={3} />
          </div>
        </div>

        <div className="admin-row-actions" style={{ marginTop: "1rem" }}>
          <button className="btn-primary" type="submit" disabled={busy}>
            Add Source
          </button>
          <button type="button" onClick={() => runImport()} disabled={busy || !sources.length}>
            Run All Sources Now
          </button>
        </div>

        {message && <p className="form-status form-status-success">{message}</p>}
      </form>

      <div className="admin-table-wrap" style={{ marginTop: "2rem" }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Type</th>
              <th>Status</th>
              <th>Last Run</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source) => (
              <tr key={source.id}>
                <td>
                  <strong className="admin-event-title">{source.name}</strong>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.url}
                  </a>
                  {source.category_hint && <span>{source.category_hint}</span>}
                </td>
                <td>{source.source_type}</td>
                <td>{source.enabled ? "Enabled" : "Disabled"}</td>
                <td>
                  <span>{source.last_checked_at ? new Date(source.last_checked_at).toLocaleString() : "Never"}</span>
                  {source.last_status && <span>{source.last_status}</span>}
                </td>
                <td>
                  <div className="admin-row-actions">
                    <button type="button" onClick={() => runImport(source.id)} disabled={busy || !source.enabled}>
                      Run
                    </button>
                    <button type="button" onClick={() => toggleSource(source)} disabled={busy}>
                      {source.enabled ? "Disable" : "Enable"}
                    </button>
                    <button type="button" onClick={() => deleteSource(source)} disabled={busy}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-table-wrap" style={{ marginTop: "2rem" }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Recent Import Runs</th>
              <th>Status</th>
              <th>Counts</th>
              <th>Finished</th>
            </tr>
          </thead>
          <tbody>
            {runs.map((run) => (
              <tr key={run.id}>
                <td>
                  <strong className="admin-event-title">{run.event_sources?.name || "Unknown source"}</strong>
                  {run.error_message && <span>{run.error_message}</span>}
                </td>
                <td>{run.status}</td>
                <td>
                  Found {run.found_count || 0}, added {run.inserted_count || 0}, skipped {run.skipped_count || 0}
                </td>
                <td>{run.finished_at ? new Date(run.finished_at).toLocaleString() : "Still running"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
