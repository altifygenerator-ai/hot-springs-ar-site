import EventForm from "@/components/events/EventForm";

export const metadata = {
  title: "Submit an Event | Hot Springs Arkansas",
  description:
    "Submit a local event happening in or near Hot Springs, Arkansas for review.",

  alternates: {
    canonical: "/submit-event",
  },
};

export default function SubmitEventPage() {
  return (
    <>
      <section className="events-hero">
        <div className="container">
          <p className="hero-eyebrow">Submit an Event</p>
          <h1>Have something happening around Hot Springs?</h1>
          <p className="hero-description">
            Send over the details and we’ll review it before adding it to the
            local events guide. Festivals, live music, markets, family events,
            community events, and local happenings are all welcome.
          </p>
        </div>
      </section>

      <section>
        <div className="container event-form-wrap">
          <div className="section-heading">
            <h2>Event Details</h2>
            <p>
              Add as much helpful info as you can. Events are reviewed before
              they appear publicly on the site.
            </p>
          </div>

          <EventForm />
        </div>
      </section>
    </>
  );
}