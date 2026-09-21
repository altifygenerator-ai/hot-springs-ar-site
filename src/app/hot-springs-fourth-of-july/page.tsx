import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fourth of July in Hot Springs, Arkansas | 2026 Event Archive",
  description:
    "Review the verified 2026 Fourth of July events in Hot Springs, Arkansas and use the archive for future holiday planning around Lake Hamilton, Bathhouse Row, downtown, restaurants, lodging, and attractions.",
  keywords: [
    "Fourth of July Hot Springs Arkansas",
    "Hot Springs Arkansas fireworks",
    "Lake Hamilton fireworks",
    "Hot Springs July 4 events",
    "Hot Springs Independence Day",
    "Hot Springs Arkansas Fourth of July 2026",
  ],
  alternates: {
    canonical: "/hot-springs-fourth-of-july",
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

const archivedEvents = [
  {
    name: "Hot Springs Independence Day Fireworks Display",
    eyebrow: "2026 Event Archive",
    date: "Saturday, July 4, 2026",
    time: "At dark",
    location: "Lake Hamilton, Highway 7 South Bridge area",
    description:
      "The 2026 Hot Springs Independence Day fireworks display was held over Lake Hamilton near the Highway 7 South Bridge area. This listing is kept as a verified archive; use the current Events page for future fireworks dates.",
    details: [
      "Free public fireworks display",
      "Published 2026 rain date was Sunday, July 5",
      "The show was listed as synced with music on 97.5 FM US97 Country",
      "Viewing areas were available around Lake Hamilton",
    ],
    image: images.fireworks,
    href: "https://www.hotsprings.org/events/independence-day-fireworks/",
    cta: "View event source",
  },
  {
    name: "Red, White & YOU Parade and Picnic",
    eyebrow: "2026 Event Archive",
    date: "Saturday, July 4, 2026",
    time: "9 a.m. to 3 p.m.",
    location: "Bathhouse Row and Arlington Lawn",
    description:
      "Hot Springs National Park's 2026 Red, White & YOU celebration included a community parade along Bathhouse Row and a picnic on Arlington Lawn. The date has passed and is preserved here for reference.",
    details: [
      "Community parade along Bathhouse Row",
      "Picnic and activities on Arlington Lawn",
      "Live performances, games, crafts, booths, and family activities",
      "The 2026 event was listed as free and open to the public",
    ],
    image: images.picnic,
    href: "https://www.hotsprings.org/events/the-red-white-you-picnic-in-the-park/",
    cta: "View event source",
  },
  {
    name: "Hot Springs Farmers Market",
    eyebrow: "2026 Event Archive",
    date: "Saturday, July 4, 2026",
    time: "7 a.m. to noon",
    location: "121 Orange St, Hot Springs, AR 71901",
    description:
      "The Hot Springs Farmers Market operated on the 2026 July 4 date as an early downtown stop before the larger holiday events. Future holiday hours should be confirmed directly with the market.",
    details: [
      "Morning market stop near downtown",
      "Local produce, baked goods, honey, plants, and vendors",
      "Convenient to downtown and the Hot Springs Creek Greenway Trail",
      "Future holiday schedules may differ",
    ],
    image: images.market,
    href: "https://marketspread.com/market/7036/historic-downtown-hot-springs-farmers-market/",
    cta: "View market source",
  },
  {
    name: "Magic Springs Summer Concert Series: Crowder",
    eyebrow: "2026 Event Archive",
    date: "Saturday, July 4, 2026",
    time: "2026 schedule",
    location: "Magic Springs Theme & Water Park",
    description:
      "Crowder appeared on the July 4 date of the 2026 Magic Springs Summer Concert Series. This is an archived listing; check Magic Springs directly for current concert dates, ticketing, and park schedules.",
    details: [
      "Part of the 2026 Summer Concert Series",
      "Combined theme park, water park, and concert option",
      "Admission or pass requirements may have applied",
      "Current schedules should be confirmed with Magic Springs",
    ],
    image: images.magicSprings,
    href: "https://www.hotsprings.org/events/magic-springs-concert-series/",
    cta: "View concert source",
  },
];

const planningCards = [
  {
    title: "Check current events before making a special trip",
    text: "Holiday dates, fireworks plans, road closures, concert schedules, and host details can change from year to year. Use the current Hot Springs Events page first.",
    href: "/events",
    cta: "Current Events",
  },
  {
    title: "Use Lake Hamilton as an evening planning area",
    text: "The lake has historically been a major focus for Hot Springs Independence Day fireworks. For a future trip, check current viewing, marina, restaurant, and traffic information.",
    href: "/lake-hamilton",
    cta: "Lake Hamilton Guide",
  },
  {
    title: "Build daytime plans around downtown",
    text: "Bathhouse Row, downtown restaurants, shops, museums, and local attractions make it easy to fill the day before an evening event.",
    href: "/bathhouse-row",
    cta: "Bathhouse Row",
  },
  {
    title: "Book lodging early for holiday weekends",
    text: "Hotels, cabins, and lake stays can fill quickly around major summer weekends. Compare current lodging options before locking in the rest of the plan.",
    href: "/hot-springs-ar-hotels",
    cta: "Places To Stay",
  },
];

const faqs = [
  {
    question: "Are these Hot Springs Fourth of July events still upcoming?",
    answer:
      "No. The listings on this page are the verified 2026 event archive. July 4, 2026 has passed. Use the current Events page and official hosts for future holiday dates.",
  },
  {
    question: "Where were the 2026 Hot Springs fireworks held?",
    answer:
      "The verified 2026 Independence Day fireworks listing was for Lake Hamilton near the Highway 7 South Bridge area.",
  },
  {
    question: "Will Hot Springs use the same July 4 schedule next year?",
    answer:
      "Not necessarily. Event dates, times, hosts, routes, and rain plans can change. This archive should not be treated as a schedule for a future year.",
  },
  {
    question: "How can a future July 4 event be added?",
    answer:
      "Send the event through the submit-event page with a public source showing the host, date, time, and location. Confirmed listings can then be added to the current event calendar.",
  },
];

function EventCard({
  event,
  featured = false,
}: {
  event: (typeof archivedEvents)[number];
  featured?: boolean;
}) {
  return (
    <article
      className="flex h-full overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <div className={featured ? "grid w-full lg:grid-cols-[0.95fr_1.05fr]" : "flex w-full flex-col"}>
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

        <div className={featured ? "flex flex-col p-7 md:p-9" : "flex flex-1 flex-col p-7 md:p-8"}>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em]" style={{ color: "var(--accent-dark)" }}>
            {event.date} • {event.time}
          </p>

          <h3 className={featured ? "text-3xl font-semibold md:text-4xl" : "text-2xl font-semibold"}>
            {event.name}
          </h3>

          <p className="mt-3 font-semibold" style={{ color: "var(--text)" }}>
            {event.location}
          </p>

          <p className="mt-5 leading-7">{event.description}</p>

          <ul className="mt-5 grid gap-2">
            {event.details.map((detail) => (
              <li
                key={detail}
                className="rounded-2xl border bg-white/55 p-3 text-sm font-semibold leading-6"
                style={{ borderColor: "var(--border)" }}
              >
                {detail}
              </li>
            ))}
          </ul>

          <a
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6 self-start"
          >
            {event.cta}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function HotSpringsFourthOfJulyPage() {
  const mainEvent = archivedEvents[0];
  const otherEvents = archivedEvents.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "2026 Fourth of July event archive in Hot Springs, Arkansas",
              description:
                "Archived verified Fourth of July 2026 events in Hot Springs, Arkansas.",
              itemListElement: archivedEvents.map((event, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Event",
                  name: event.name,
                  description: event.description,
                  startDate: "2026-07-04",
                  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                  eventStatus: "https://schema.org/EventCompleted",
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

      <section className="relative flex min-h-[640px] items-end overflow-hidden bg-[#17251f] pb-16 pt-32">
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
            <p className="hero-eyebrow !text-white/72">2026 Fourth of July Archive</p>

            <h1 className="text-white">
              A look back at the verified 2026 holiday events around Hot Springs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 !text-white/84">
              July 4, 2026 has passed. This page preserves the verified Lake Hamilton
              fireworks, Bathhouse Row celebration, farmers market, and Magic Springs
              listings while directing future visitors to current event information.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#archive" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black" style={{ color: "var(--green)" }}>
                View 2026 Archive
              </a>

              <Link href="/events" className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Current Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-8">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["2026", "Archived event year", "The event details below are preserved for reference, not presented as an upcoming schedule."],
              ["4", "Verified archived listings", "Four public holiday listings were documented for the 2026 Hot Springs July 4 weekend."],
              ["Current", "Check before planning", "Use the live Events page and official hosts for future dates, times, weather changes, and route details."],
            ].map(([big, title, text]) => (
              <div key={title} className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm" style={{ borderColor: "var(--border)" }}>
                <strong className="block text-4xl leading-none" style={{ color: "var(--green)" }}>{big}</strong>
                <p className="mt-2 font-bold" style={{ color: "var(--text)" }}>{title}</p>
                <p className="mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">2026 Event Archive</p>
            <h2>Verified Hot Springs Fourth of July listings from 2026.</h2>
            <p>
              These dates have passed. They remain here as a historical reference and
              a useful starting point for understanding how the holiday was organized
              around Hot Springs in 2026.
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Planning a Future Holiday Weekend</p>
            <h2>Use current information, then build the trip around the lake and downtown.</h2>
            <p>
              The 2026 archive can show the kind of holiday activity Hot Springs has hosted,
              but it should not be treated as the schedule for another year.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {planningCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl">{card.title}</h3>
                <p className="mt-3 leading-7">{card.text}</p>
                <span className="mt-5 inline-block font-black" style={{ color: "var(--accent-dark)" }}>
                  {card.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center" style={{ borderColor: "var(--border)" }}>
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
              <Image
                src={images.bathhouse}
                alt="Bathhouse Row in Hot Springs Arkansas"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="hero-eyebrow">Downtown & Lake Planning</p>
              <h2>Hot Springs can still make an easy full holiday weekend.</h2>
              <p className="mt-5 text-lg leading-8">
                Bathhouse Row, downtown dining, Lake Hamilton, hotels, cabins, trails,
                shops, and attractions give visitors plenty to build around whatever
                public events are confirmed for a future Independence Day weekend.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/bathhouse-row" className="btn-primary">Bathhouse Row</Link>
                <Link href="/lake-hamilton" className="btn-secondary">Lake Hamilton</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Questions</p>
            <h2>Hot Springs Fourth of July archive FAQ</h2>
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
