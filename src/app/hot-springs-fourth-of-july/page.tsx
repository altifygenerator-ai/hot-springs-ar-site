import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Fourth of July in Hot Springs, Arkansas 2026 | Fireworks, Parade, Picnic & Events",
  description:
    "Plan Fourth of July in Hot Springs, Arkansas with verified 2026 events, Lake Hamilton fireworks, the Red, White & YOU Parade and Picnic, farmers market, Magic Springs concert, food, lake ideas, and local trip tips.",
  keywords: [
    "Fourth of July Hot Springs Arkansas",
    "Hot Springs Arkansas fireworks 2026",
    "Lake Hamilton fireworks",
    "Hot Springs July 4 events",
    "Hot Springs Independence Day",
    "Hot Springs Arkansas Fourth of July 2026",
    "Red White and You Hot Springs",
    "Hot Springs National Park July 4",
  ],
  alternates: {
    canonical: "/hot-springs-fourth-of-july",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const images = {
  hero: "/images/holiday/4th-of-july-hero.jpg",
  fireworks: "/images/holiday/lake-hamilton-fireworks.jpg",
  bathhouse: "/images/holiday/bathhouse-row-fourth-of-july.jpg",
  picnic: "/images/holiday/the-arlington-lawn.jpg",
  market: "/images/holiday/hot-springs-farmers-market.jpg",
  magicSprings: "/images/holiday/magic-springs-summer.webp",
};

const verifiedEvents = [
  {
    name: "Hot Springs Independence Day Fireworks Display",
    eyebrow: "Main Fireworks Event",
    date: "Saturday, July 4, 2026",
    time: "At dark",
    location: "Lake Hamilton, Highway 7 South Bridge area",
    description:
      "Hot Springs’ annual Independence Day fireworks display is scheduled for Saturday, July 4 at dark over Lake Hamilton. The show is fired from barges near the Highway 7 bridge area and is one of the biggest holiday draws around Hot Springs.",
    details: [
      "Free public fireworks display",
      "Rain date is Sunday, July 5",
      "Synced with music on 97.5 FM US97 Country",
      "Visible from several areas around Lake Hamilton",
    ],
    image: images.fireworks,
    href: "https://www.hotsprings.org/events/independence-day-fireworks/",
    cta: "View official event",
  },
  {
    name: "Red, White & YOU Parade and Picnic",
    eyebrow: "America 250 Celebration",
    date: "Saturday, July 4, 2026",
    time: "9 a.m. to 3 p.m.",
    location: "Bathhouse Row and Arlington Lawn",
    description:
      "Hot Springs National Park is celebrating America’s 250th birthday with a community parade along Bathhouse Row and a Red, White & YOU picnic on Arlington Lawn. The event is free and open to the public.",
    details: [
      "All-American Community Parade begins at Hill Wheatley Plaza",
      "Parade route follows Bathhouse Row toward Arlington Lawn",
      "Picnic and activities continue on Arlington Lawn",
      "Live performances, games, crafts, booths, and family activities",
    ],
    image: images.picnic,
    href: "https://www.hotsprings.org/events/the-red-white-you-picnic-in-the-park/",
    cta: "View official event",
  },
  {
    name: "Hot Springs Farmers Market",
    eyebrow: "Morning Stop",
    date: "Saturday, July 4, 2026",
    time: "7 a.m. to noon",
    location: "121 Orange St, Hot Springs, AR 71901",
    description:
      "Start the morning with a local market stop before the bigger Fourth of July events. The Hot Springs Farmers Market is listed for July 4 from 7 a.m. to noon at 121 Orange Street.",
    details: [
      "Good early stop before downtown or lake plans",
      "Local produce, baked goods, honey, plants, and market vendors",
      "Located near downtown and the Hot Springs Creek Greenway Trail",
      "Best paired with breakfast, coffee, or a slow morning downtown",
    ],
    image: images.market,
    href: "https://marketspread.com/market/7036/historic-downtown-hot-springs-farmers-market/events/87339/",
    cta: "View market listing",
  },
  {
    name: "Magic Springs Summer Concert Series: Crowder",
    eyebrow: "Live Music",
    date: "Saturday, July 4, 2026",
    time: "Check Magic Springs schedule",
    location: "Magic Springs Theme & Water Park",
    description:
      "Magic Springs lists Crowder on the July 4 date for its 2026 Summer Concert Series. This can work well for visitors wanting a theme park, water park, and concert option during the holiday weekend.",
    details: [
      "Concert date listed for July 4",
      "Part of the Magic Springs Summer Concert Series",
      "Good fit for families already planning a park day",
      "Check Magic Springs for ticket, pass, and schedule details",
    ],
    image: images.magicSprings,
    href: "https://www.hotsprings.org/events/magic-springs-concert-series/",
    cta: "View concert series",
  },
];

const dayPlan = [
  {
    time: "Morning",
    title: "Start with the Farmers Market or downtown breakfast",
    text: "If you want a slower start, begin around downtown with the farmers market, coffee, or breakfast before the parade and picnic crowds build.",
  },
  {
    time: "Late Morning / Afternoon",
    title: "Spend time around Bathhouse Row and Arlington Lawn",
    text: "The Red, White & YOU event makes downtown the daytime center of the holiday, especially with the parade, picnic, performances, games, and activities.",
  },
  {
    time: "Afternoon",
    title: "Cool off at the lake, hotel, or water park",
    text: "July in Hot Springs can be hot. Build in downtime, water, shade, or a break before heading to Lake Hamilton for the evening fireworks.",
  },
  {
    time: "Evening",
    title: "Head toward Lake Hamilton for fireworks",
    text: "The fireworks begin at dark. Give yourself extra time for traffic, parking, lake access, and finding a safe viewing spot before the show starts.",
  },
];

const tripTips = [
  {
    title: "Arrive early for lake viewing",
    text: "Lake Hamilton gets busy for fireworks. Plan your parking, boat access, restaurant reservation, or viewing spot before dark.",
  },
  {
    title: "Tune to 97.5 FM",
    text: "The Lake Hamilton fireworks display is listed as being synced with music on 97.5 FM US97 Country.",
  },
  {
    title: "Expect heat and crowds",
    text: "Bring water, sunscreen, comfortable shoes, and patience. Downtown events and lake traffic can both get busy on July 4.",
  },
  {
    title: "Check event hosts before leaving",
    text: "Weather, hours, and schedules can change. Use the official event links before making a special trip.",
  },
];

const nearbyIdeas = [
  {
    title: "Bathhouse Row",
    text: "Walk the historic heart of Hot Springs, visit Fordyce, take photos, or pair the patriotic events with the classic downtown route.",
    href: "/bathhouse-row",
  },
  {
    title: "Lake Hamilton",
    text: "The main fireworks display is on Lake Hamilton, making the lake area the biggest evening focus for July 4.",
    href: "/lake-hamilton",
  },
  {
    title: "Restaurants",
    text: "Plan lunch, dinner, or coffee around downtown, Lake Hamilton, Oaklawn, or Central Avenue before the fireworks crowds build.",
    href: "/hot-springs-ar-restaurants",
  },
  {
    title: "Places To Stay",
    text: "Hotels, cabins, lake stays, and downtown lodging can fill up around holiday weekends, so book early if you are coming from out of town.",
    href: "/hot-springs-ar-hotels",
  },
];

const faqs = [
  {
    question: "When are the 2026 Fourth of July fireworks in Hot Springs?",
    answer:
      "The Hot Springs Independence Day fireworks display is scheduled for Saturday, July 4, 2026 at dark over Lake Hamilton. The listed rain date is Sunday, July 5.",
  },
  {
    question: "Where are the Hot Springs Fourth of July fireworks?",
    answer:
      "The official fireworks display is listed for Lake Hamilton near the Highway 7 South Bridge area, with fireworks fired from barges on the lake.",
  },
  {
    question: "Is there a parade in Hot Springs for July 4, 2026?",
    answer:
      "Yes. Hot Springs National Park lists the Red, White & YOU celebration with an All-American Community Parade along Bathhouse Row and a picnic on Arlington Lawn.",
  },
  {
    question: "Are these events free?",
    answer:
      "The Lake Hamilton fireworks display is listed as a free public display. The Red, White & YOU Parade and Picnic is also listed as free and open to the public. Magic Springs may require park admission, tickets, or a season pass.",
  },
];

function EventCard({
  event,
  featured = false,
}: {
  event: (typeof verifiedEvents)[number];
  featured?: boolean;
}) {
  return (
    <article
      className="flex h-full overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className={
          featured
            ? "grid w-full lg:grid-cols-[0.95fr_1.05fr]"
            : "flex w-full flex-col"
        }
      >
        <a
          href={event.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            featured
              ? "group relative block h-[320px] overflow-hidden bg-[color:var(--surface-strong)] lg:h-full lg:min-h-[480px]"
              : "group relative block h-56 overflow-hidden bg-[color:var(--surface-strong)]"
          }
        >
          <Image
            src={event.image}
            alt={event.name}
            fill
            sizes={featured ? "(max-width: 900px) 100vw, 50vw" : "33vw"}
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />

          <div className="absolute left-5 top-5 rounded-full bg-black/72 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
            {event.eyebrow}
          </div>
        </a>

        <div
          className={
            featured
              ? "flex flex-col p-7 md:p-9"
              : "flex flex-1 flex-col p-7 md:p-8"
          }
        >
          <p
            className="mb-3 text-xs font-black uppercase tracking-[0.18em]"
            style={{ color: "var(--accent-dark)" }}
          >
            {event.date} • {event.time}
          </p>

          <h3
            className={
              featured
                ? "text-4xl leading-tight md:text-5xl"
                : "text-2xl leading-tight"
            }
          >
            {event.name}
          </h3>

          <p
            className="mt-3 text-sm font-bold"
            style={{ color: "var(--text)" }}
          >
            {event.location}
          </p>

          <p className="mt-5 leading-7">{event.description}</p>

          <ul className="mt-6 grid gap-3">
            {event.details.map((detail) => (
              <li
                key={detail}
                className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold leading-5"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-7">
            <a
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
              style={{
                background: "var(--accent-dark)",
                color: "#ffffff",
              }}
            >
              {event.cta}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HotSpringsFourthOfJulyPage() {
  const mainEvent = verifiedEvents[0];
  const otherEvents = verifiedEvents.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Fourth of July events in Hot Springs, Arkansas",
              description:
                "Verified Fourth of July 2026 events in Hot Springs, Arkansas, including Lake Hamilton fireworks, Red White and YOU parade and picnic, farmers market, and Magic Springs concert.",
              itemListElement: verifiedEvents.map((event, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Event",
                  name: event.name,
                  description: event.description,
                  startDate: "2026-07-04",
                  eventAttendanceMode:
                    "https://schema.org/OfflineEventAttendanceMode",
                  eventStatus: "https://schema.org/EventScheduled",
                  location: {
                    "@type": "Place",
                    name: event.location,
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Hot Springs",
                      addressRegion: "AR",
                      addressCountry: "US",
                    },
                  },
                  url: event.href,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      <section className="relative flex min-h-[760px] items-end overflow-hidden bg-[#17251f] pb-16 pt-32">
        <Image
          src={images.hero}
          alt="Fourth of July in Hot Springs Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <p className="hero-eyebrow !text-white/72">
              Fourth of July in Hot Springs
            </p>

            <h1 className="text-white">
              Fireworks, lake views, patriotic events, and a full July 4 day in
              Hot Springs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 !text-white/84">
              Plan Independence Day around Lake Hamilton fireworks, the Red,
              White & YOU Parade and Picnic on Bathhouse Row, the farmers
              market, Magic Springs, local restaurants, and a summer day in Hot
              Springs, Arkansas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#verified-events"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
                style={{ color: "var(--green)" }}
              >
                See Verified Events
              </a>

              <a
                href="#day-plan"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Plan the Day
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-8">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            <div
              className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <strong
                className="block text-4xl leading-none"
                style={{ color: "var(--green)" }}
              >
                July 4
              </strong>
              <p className="mt-2 font-bold" style={{ color: "var(--text)" }}>
                Saturday holiday date
              </p>
              <p className="mt-3">
                Fourth of July falls on Saturday in 2026, making it a strong
                weekend for lake days, downtown events, and overnight trips.
              </p>
            </div>

            <div
              className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <strong
                className="block text-4xl leading-none"
                style={{ color: "var(--green)" }}
              >
                4
              </strong>
              <p className="mt-2 font-bold" style={{ color: "var(--text)" }}>
                verified listings found
              </p>
              <p className="mt-3">
                This page only includes confirmed event listings. More can be
                added as official hosts publish details.
              </p>
            </div>

            <div
              className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <strong
                className="block text-4xl leading-none"
                style={{ color: "var(--green)" }}
              >
                97.5
              </strong>
              <p className="mt-2 font-bold" style={{ color: "var(--text)" }}>
                fireworks music sync
              </p>
              <p className="mt-3">
                The Lake Hamilton fireworks are listed as synced with music on
                97.5 FM US97 Country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="verified-events" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Verified Events</p>

            <h2>Confirmed Fourth of July events in Hot Springs for 2026.</h2>

            <p>
              These listings were added from official or event-host sources. If
              another parade, concert, restaurant event, fireworks viewing
              party, or local celebration is announced, it can be added after
              the host publishes details.
            </p>
          </div>

          <EventCard event={mainEvent} featured />
        </div>
      </section>

      <section className="section bg-white/35">
  <div className="container">
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {otherEvents.map((event) => (
        <EventCard key={event.name} event={event} />
      ))}
    </div>
  </div>
</section>

      <section id="day-plan" className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="hero-eyebrow">Simple Day Plan</p>

              <h2>How to build a full July 4 day around Hot Springs.</h2>

              <p className="mt-5 text-lg leading-8">
                The easiest way to enjoy the holiday is to split the day between
                downtown, a cool-off break, and Lake Hamilton. Keep the schedule
                flexible, because traffic and weather can change the feel of the
                day fast.
              </p>
            </div>

            <div className="grid gap-4">
              {dayPlan.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p
                    className="mb-2 text-xs font-black uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    {item.time}
                  </p>

                  <h3 className="text-2xl">{item.title}</h3>

                  <p className="mt-3 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Trip Tips</p>

            <h2>Things to know before you go.</h2>

            <p>
              Holiday weekends are fun, but Hot Springs can get busy around the
              lake, downtown, and major attractions. A little planning makes the
              day easier.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tripTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-xl">{tip.title}</h3>

                <p className="mt-3 leading-7">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[360px]">
                <Image
                  src={images.bathhouse}
                  alt="Bathhouse Row in Hot Springs Arkansas"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7 md:p-10 lg:p-12">
                <p className="hero-eyebrow">Downtown and the Lake</p>

                <h2>Make it more than just fireworks.</h2>

                <p className="mt-5 text-lg leading-8">
                  Hot Springs is one of the better Arkansas towns for turning
                  July 4 into a full day. You can start with the farmers market,
                  walk Bathhouse Row, catch the daytime America 250 celebration,
                  eat downtown or near the lake, then finish the night with the
                  Lake Hamilton fireworks.
                </p>

                <p className="mt-5 leading-8">
                  Visitors who are staying overnight should plan around traffic
                  and crowds, especially near Lake Hamilton before and after the
                  fireworks show.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/bathhouse-row" className="btn-primary">
                    Explore Bathhouse Row
                  </Link>

                  <Link href="/lake-hamilton" className="btn-secondary">
                    Lake Hamilton Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Build Around the Holiday</p>

            <h2>Helpful Hot Springs guides for July 4 weekend.</h2>

            <p>
              Use these guides to plan food, lodging, lake time, downtown stops,
              and other things to do before or after the main holiday events.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {nearbyIdeas.map((idea) => (
              <Link
                href={idea.href}
                key={idea.title}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl">{idea.title}</h3>

                <p className="mt-3 leading-7">{idea.text}</p>

                <span
                  className="mt-5 inline-block font-black"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="grid gap-8 rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-9 lg:grid-cols-[0.85fr_1.15fr]"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <p className="hero-eyebrow">Local Event Help</p>

              <h2>Have another verified July 4 event?</h2>
            </div>

            <div>
              <p className="text-lg leading-8">
                If a restaurant, attraction, hotel, church, marina, venue, or
                local group announces a verified July 4 event around Hot
                Springs, send it in so this guide can stay current.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/submit-event" className="btn-primary">
                  Submit an Event
                </Link>

                <Link href="/events" className="btn-secondary">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Questions</p>

            <h2>Fourth of July in Hot Springs FAQ</h2>

            <p>
              Quick answers for visitors planning Independence Day around Hot
              Springs, Lake Hamilton, Bathhouse Row, and downtown.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border bg-[color:var(--surface)] p-6"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>

                <p className="mt-3 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}