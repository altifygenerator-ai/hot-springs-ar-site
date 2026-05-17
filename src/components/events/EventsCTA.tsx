import Link from "next/link";

type EventsCTAProps = {
  title?: string;
  text?: string;
};

export default function EventsCTA({
  title = "Planning a trip around Hot Springs?",
  text = "Check what’s happening this weekend before you go. Local events, live music, festivals, family activities, and seasonal things to do will be added as they’re approved.",
}: EventsCTAProps) {
  return (
    <section className="events-cta-section">
      <div className="container">
        <div className="events-cta-card">
          <div>
            <p className="hero-eyebrow">Before You Go</p>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className="events-cta-actions">
            <Link href="/this-weekend" className="btn-primary">
              This Weekend
            </Link>

            <Link href="/events" className="btn-secondary">
              View Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}