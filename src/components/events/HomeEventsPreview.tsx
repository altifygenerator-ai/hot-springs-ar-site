import Link from "next/link";
import EventCard from "./EventCard";
import { getUpcomingApprovedEvents } from "@/lib/events";

export default async function HomeEventsPreview() {
  const events = await getUpcomingApprovedEvents(3);

  return (
    <section className="home-events-section">
      <div className="container">
        <div className="home-events-heading">
          <div>
            <p className="hero-eyebrow">Local Events</p>
            <h2>This Weekend in Hot Springs</h2>
            <p>
              Check what’s happening around Hot Springs before you head out —
              from live music and festivals to family-friendly things to do.
            </p>
          </div>

          <div className="home-events-actions">
            <Link href="/this-weekend" className="btn-primary">
              This Weekend
            </Link>

            <Link href="/events" className="btn-secondary">
              All Events
            </Link>
          </div>
        </div>

        {events.length ? (
          <div className="events-grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Events are being added</h3>
            <p>
              Local events will show here as they’re submitted and approved.
              Know about something coming up?
            </p>
            <Link href="/submit-event" className="btn-primary">
              Submit an Event
            </Link>
          </div>
        )}

        <div className="home-photo-cta">
          <div>
            <p className="hero-eyebrow">Community Photos</p>
            <h3>Have photos from around Hot Springs?</h3>
            <p>
              Send in local photos from events, Bathhouse Row, Lake Hamilton,
              restaurants, trails, or nearby spots. Approved photos may be
              featured in future guides and community updates.
            </p>
          </div>

          <div className="home-photo-cta-actions">
            <Link href="/submit-photo" className="btn-primary">
              Submit a Photo
            </Link>

            <Link href="/community-photos" className="btn-secondary">
              View Photos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}