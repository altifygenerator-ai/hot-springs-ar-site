import Link from "next/link";
import type { TourismEvent } from "@/lib/events";

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
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

export default function EventCard({ event }: { event: TourismEvent }) {
  const startTime = formatTime(event.start_time);

  return (
    <article className="event-card">
      <div className="event-card-top">
        {event.category && <span className="event-pill">{event.category}</span>}

        {event.featured && (
          <span className="event-pill event-pill-dark">Featured</span>
        )}
      </div>

      <h3>
        <Link href={`/events/${event.slug}`}>{event.title}</Link>
      </h3>

      <div className="event-card-meta">
        <span>{formatEventDate(event.start_date)}</span>

        {startTime && <span>{startTime}</span>}

        {event.location_name && <span>{event.location_name}</span>}

        {event.city && <span>{event.city}, Arkansas</span>}
      </div>

      {event.description && <p>{event.description}</p>}

      <Link href={`/events/${event.slug}`} className="event-card-link">
        View event
      </Link>
    </article>
  );
}