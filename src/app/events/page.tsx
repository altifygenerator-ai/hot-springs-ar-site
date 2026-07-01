import EventCard from "@/components/events/EventCard";
import { getUpcomingApprovedEvents } from "@/lib/events";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Events in Hot Springs, Arkansas",
  description:
    "Find upcoming events, live music, festivals, family activities, and things happening around Hot Springs, Arkansas.",

  alternates: {
    canonical: "/events",
  },
};

export default async function EventsPage() {
  const events = await getUpcomingApprovedEvents(24);

  return (
    <>
      <section className="events-hero">
        <div className="container">
          <p className="hero-eyebrow">Hot Springs Events</p>
          <h1>Things happening around Hot Springs, Arkansas.</h1>
          <p className="hero-description">
            A local guide to upcoming events, weekend plans, festivals, live
            music, family-friendly activities, and things worth checking out
            while you’re in town.
          </p>

          <div className="hero-buttons">
            <a href="/submit-event" className="btn-primary">
              Submit an Event
            </a>

            <a href="/this-weekend" className="btn-secondary">
              See This Weekend
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <h2>Upcoming Events</h2>
            <p>
              Browse current events listed for Hot Springs and nearby areas.
              New events will be added as they are submitted and approved.
            </p>
          </div>

          {events.length ? (
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No approved events yet</h3>
              <p>
                Events are being added soon. If you know of something happening
                around Hot Springs, you can submit it for review.
              </p>
              <a href="/submit-event" className="btn-primary">
                Submit an event
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}