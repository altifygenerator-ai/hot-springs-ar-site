import WeekendEvents from "@/components/events/WeekendEvents";
import { getWeekendEvents } from "@/lib/events";

export const metadata = {
  title: "This Weekend in Hot Springs, Arkansas",
  description:
    "See what’s happening this weekend in Hot Springs, Arkansas, including local events, live music, festivals, and family activities.",
};

export default async function ThisWeekendPage() {
  const events = await getWeekendEvents();

  return (
    <>
      <section className="events-hero weekend-hero">
        <div className="container">
          <p className="hero-eyebrow">This Weekend</p>
          <h1>What’s going on in Hot Springs this weekend.</h1>
          <p className="hero-description">
            A simple weekend guide for visitors and locals looking for something
            to do around Hot Springs, from local events to music, markets,
            festivals, and family-friendly plans.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <h2>This Weekend’s Events</h2>
            <p>
              These are approved events currently listed for the upcoming
              weekend. More can be added as local businesses, venues, and
              organizers submit details.
            </p>
          </div>

          <WeekendEvents events={events} />
        </div>
      </section>
    </>
  );
}