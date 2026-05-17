import EventCard from "./EventCard";
import type { TourismEvent } from "@/lib/events";

export default function WeekendEvents({ events }: { events: TourismEvent[] }) {
  if (!events.length) {
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-6 text-neutral-700 shadow-sm">
        No approved weekend events are listed yet. Check back soon as local events
        get added.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}