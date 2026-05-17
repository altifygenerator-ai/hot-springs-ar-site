import { notFound } from "next/navigation";
import { getEventBySlug } from "@/lib/events";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function formatTime(time?: string | null) {
  if (!time) return null;

  const [hours, minutes] = time.split(":");
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | Hot Springs Arkansas Events`,
    description:
      event.description ||
      event.ai_summary ||
      `Event details for ${event.title} in Hot Springs, Arkansas.`,
  };
}

export default async function EventSlugPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) notFound();

  const startTime = formatTime(event.start_time);
  const endTime = formatTime(event.end_time);

  return (
    <>
      <section className="event-detail-hero">
        <div className="container">
          <p className="hero-eyebrow">{event.category || "Local Event"}</p>
          <h1>{event.title}</h1>

          <div className="event-detail-meta">
            <span>{formatEventDate(event.start_date)}</span>

            {startTime && (
              <span>
                {startTime}
                {endTime ? ` - ${endTime}` : ""}
              </span>
            )}

            {event.location_name && <span>{event.location_name}</span>}
            {event.city && <span>{event.city}, Arkansas</span>}
          </div>
        </div>
      </section>

      <section>
        <div className="container event-detail-layout">
          <article className="event-detail-card">
            <h2>Event Details</h2>

           {event.description ? (
  <p className="event-description-text">{event.description}</p>
) : (
  <p>
    Full event details have not been added yet. Check the source
    link or contact the organizer for the most current information.
  </p>
)}
        

            {event.ai_summary && (
              <div className="event-note">
                <h3>Quick Local Summary</h3>
                <p>{event.ai_summary}</p>
              </div>
            )}

            {event.source_url && (
              <a
                href={event.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View source
              </a>
            )}
          </article>

          <aside className="event-sidebar">
            <h3>Planning Info</h3>

            <p>
              <strong>Date:</strong> {formatEventDate(event.start_date)}
            </p>

            {startTime && (
              <p>
                <strong>Time:</strong> {startTime}
                {endTime ? ` - ${endTime}` : ""}
              </p>
            )}

            {event.location_name && (
              <p>
                <strong>Location:</strong> {event.location_name}
              </p>
            )}

            {event.address && (
              <p>
                <strong>Address:</strong> {event.address}
              </p>
            )}

            {event.category && (
              <p>
                <strong>Category:</strong> {event.category}
              </p>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}