import Link from "next/link";
import WeekendEvents from "@/components/events/WeekendEvents";
import { getWeekendEvents } from "@/lib/events";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "This Weekend in Hot Springs, Arkansas",
  description:
    "See what’s happening this weekend in Hot Springs, Arkansas, including local events, live music, festivals, markets, restaurants, attractions, and family-friendly things to do.",
};

const weekendIdeas = [
  {
    title: "Walk Bathhouse Row",
    text: "A good starting point for visitors who want history, downtown shops, restaurants, and the classic Hot Springs feel without needing a full plan.",
    href: "/bathhouse-row",
    label: "Explore Bathhouse Row",
  },
  {
    title: "Find somewhere local to eat",
    text: "Plan breakfast, lunch, or dinner around downtown, Lake Hamilton, Oaklawn, or one of the smaller local spots people may not notice first.",
    href: "/hot-springs-ar-restaurants",
    label: "View Restaurants",
  },
  {
    title: "Make it a family day",
    text: "Hot Springs has easy family stops, outdoor places, attractions, sweets, shops, and simple ways to fill an afternoon without overplanning.",
    href: "/hot-springs-family-friendly",
    label: "Family-Friendly Finds",
  },
  {
    title: "Look for local shops and hidden spots",
    text: "If you’ve already done the obvious stops, check out local picks, Ouachita Avenue, small shops, antiques, coffee, and easy-to-miss places around town.",
    href: "/hot-springs-local-spots",
    label: "See Local Picks",
  },
];

const planningLinks = [
  {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    label: "Restaurants",
    href: "/hot-springs-ar-restaurants",
  },
  {
    label: "Hotels",
    href: "/hot-springs-ar-hotels",
  },
  {
    label: "Cabins",
    href: "/hot-springs-ar-cabins",
  },
  {
    label: "Local Hidden Gems",
    href: "/hot-springs-local-spots",
  },
  {
    label: "Submit an Event",
    href: "/submit-event",
  },
];

export default async function ThisWeekendPage() {
  const events = await getWeekendEvents();
  const hasEvents = events.length > 0;

  return (
    <main>
      <section
  className="relative overflow-hidden border-b"
  style={{ borderColor: "var(--border)" }}
>
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 82% 18%, rgba(155,95,45,0.22), transparent 30%), radial-gradient(circle at 18% 82%, rgba(35,67,54,0.16), transparent 34%), linear-gradient(135deg, var(--surface) 0%, var(--background) 52%, rgba(35,67,54,0.08) 100%)",
    }}
  />

  <div
    className="absolute inset-0 opacity-[0.28]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(35,67,54,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(35,67,54,0.08) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
    }}
  />

  <div
    className="pointer-events-none absolute -right-20 top-16 hidden text-[11rem] font-bold leading-none opacity-[0.045] lg:block"
    style={{ color: "var(--green)" }}
  >
    WEEKEND
  </div>

  <div
    className="pointer-events-none absolute -bottom-8 left-8 hidden text-[8rem] font-bold leading-none opacity-[0.04] lg:block"
    style={{ color: "var(--accent-dark)" }}
  >
    HOT SPRINGS
  </div>

  <div className="relative z-10 container py-24 md:py-32">
    <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
      <div>
        <p
          className="mb-4 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          This Weekend
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] md:text-7xl">
          What’s going on in Hot Springs this weekend.
        </h1>

        <p
          className="mt-7 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "var(--muted)" }}
        >
          A simple weekend guide for visitors and locals looking for something
          to do around Hot Springs, from local events to music, markets,
          festivals, family-friendly plans, restaurants, and easy stops around
          town.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#weekend-events" className="btn-primary">
            See Events
          </Link>

          <Link href="/submit-event" className="btn-secondary">
            Submit an Event
          </Link>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] p-6 shadow-sm md:p-7"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="absolute right-[-70px] top-[-70px] h-[180px] w-[180px] rounded-full"
          style={{ background: "rgba(155,95,45,0.12)" }}
        />

        <div
          className="absolute bottom-[-80px] left-[-80px] h-[190px] w-[190px] rounded-full"
          style={{ background: "rgba(35,67,54,0.10)" }}
        />

        <div className="relative z-10">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--accent-dark)" }}
          >
            Quick Weekend Help
          </p>

          <h2 className="text-3xl font-semibold leading-tight">
            Events first, then food, downtown, lake time, and local stops.
          </h2>

          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            Check what has been submitted for the weekend, then use the rest of
            the guide to fill in the day around restaurants, Bathhouse Row,
            family stops, shops, hotels, cabins, and nearby attractions.
          </p>

          <div
            className="mt-6 rounded-2xl border p-4"
            style={{
              borderColor: "var(--border)",
              background: "rgba(155,95,45,0.07)",
            }}
          >
            <p className="text-sm font-semibold" style={{ color: "var(--green)" }}>
              Local organizers can submit events anytime.
            </p>

            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Markets, live music, fundraisers, church events, festivals, and
              family-friendly plans are all welcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container">
          <div
            className="rounded-[2rem] border bg-[color:var(--surface)] p-6 shadow-sm md:p-8"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p
                  className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Weekend Planning
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  Check the events, then build the rest of the day around town.
                </h2>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  Some weekends have festivals, live music, markets, and local
                  events. Other weekends are better for food, Bathhouse Row,
                  lake time, shopping, family stops, or a slower day exploring
                  Hot Springs.
                </p>
              </div>

          <div className="grid gap-3 sm:grid-cols-2">
  {planningLinks.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="group rounded-2xl border bg-[color:var(--surface-strong)] px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        className="block text-sm font-bold uppercase tracking-[0.16em]"
        style={{ color: "var(--accent-dark)" }}
      >
        Weekend Guide
      </span>

      <span className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold">
        {item.label}
        <span
          className="transition group-hover:translate-x-1"
          style={{ color: "var(--accent-dark)" }}
        >
          →
        </span>
      </span>
    </Link>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>This Weekend’s Events</h2>

            <p>
              These are approved events currently listed for the upcoming
              weekend. More can be added as local businesses, venues, churches,
              groups, and organizers submit details.
            </p>
          </div>

          <WeekendEvents events={events} />
        </div>
      </section>

      {!hasEvents && (
        <section className="section pt-0">
  <div className="container">
    <div
      className="rounded-[2rem] border bg-[color:var(--surface)] p-6 shadow-sm md:p-10"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Still Planning?
        </p>

        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
          If the event list is light, you can still build a good Hot Springs
          weekend.
        </h2>

        <p
          className="mx-auto mt-5 max-w-3xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Event listings depend on what has been submitted and approved, but
          there’s still plenty to plan around downtown Hot Springs, Bathhouse
          Row, restaurants, local shops, lake areas, family stops, and nearby
          attractions.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/things-to-do-in-hot-springs-ar" className="btn-primary">
            Browse Things To Do
          </Link>

          <Link href="/submit-event" className="btn-secondary">
            Submit an Event
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      )}

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Easy Weekend Ideas
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                A few reliable ways to spend a weekend around Hot Springs.
              </h2>
            </div>

            <p
              className="max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              These are good starting points when you want something simple to
              do before dinner, after checking into a hotel or cabin, or while
              waiting for more local events to be added.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {weekendIdeas.map((idea) => (
              <Link
                key={idea.href}
                href={idea.href}
                className="group flex h-full flex-col rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{idea.title}</h3>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {idea.text}
                </p>

                <span
                  className="mt-auto inline-block pt-5 font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {idea.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[560px] items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/bathhouse-row.webp"
          alt="Weekend in Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Local Events Welcome
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Know about something happening this weekend?
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Send in live music, markets, fundraisers, church events,
              festivals, family activities, community gatherings, and other Hot
              Springs area events so they can be added to the guide.
            </p>

            <Link
              href="/submit-event"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Submit an Event
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}