import Link from "next/link";
import EventSourceManager from "@/components/events/EventSourceManager";
import { getEventSourcesForAdmin, getRecentEventImportRuns } from "@/lib/events";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EventSourcesPage() {
  const [sources, runs] = await Promise.all([
    getEventSourcesForAdmin(),
    getRecentEventImportRuns(20),
  ]);

  return (
    <section>
      <div className="container">
        <div className="admin-heading">
          <div>
            <p className="hero-eyebrow">Admin</p>
            <h1>Event Sources</h1>
            <p>
              Add public event pages, iCal feeds, RSS feeds, or venue calendars
              for the automated importer to check.
            </p>
          </div>

          <Link href="/admin/events" className="btn-secondary">
            Back to Events
          </Link>
        </div>

        <EventSourceManager sources={sources as never} runs={runs as never} />
      </div>
    </section>
  );
}
