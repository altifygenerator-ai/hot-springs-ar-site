import Link from "next/link";
import Hero from "@/components/Hero";
import { exploreHero } from "@/data/hero";

export const metadata = {
  title:
    "Explore Hot Springs by Area | Downtown, Bathhouse Row, Lake Hamilton & Oaklawn",
  description:
    "Explore Hot Springs, Arkansas by area with a planning guide to downtown, Bathhouse Row, Lake Hamilton, Oaklawn, Hot Springs National Park, restaurants, hotels, cabins, and local attractions.",
  keywords: [
    "explore Hot Springs Arkansas",
    "Hot Springs Arkansas travel guide",
    "downtown Hot Springs Arkansas",
    "Bathhouse Row",
    "Lake Hamilton",
    "Oaklawn Hot Springs",
    "where to stay in Hot Springs Arkansas",
    "Hot Springs Arkansas trip planning",
    "Hot Springs areas",
  ],
};

const areas = [
  {
    title: "Downtown & Bathhouse Row",
    label: "History • Restaurants • Walkable Stops",
    description:
      "This is the best place to start if it is your first time in Hot Springs. Downtown gives you Bathhouse Row, historic buildings, restaurants, shops, museums, hotels, and easy access to Hot Springs National Park.",
    image: "/images/businesses/bathhouse-row.webp",
    href: "/bathhouse-row",
  },
  {
    title: "Lake Hamilton",
    label: "Lake Views • Cabins • Slower Evenings",
    description:
      "Lake Hamilton is the better fit if you want water views, lake-area restaurants, cabins, hotels, vacation rentals, boating, fishing, and a more relaxed Hot Springs stay.",
    image: "/images/hero/lake-hamilton.jpg",
    href: "/lake-hamilton",
  },
  {
    title: "Oaklawn & Central Avenue",
    label: "Racing • Casino • Hotels • Food",
    description:
      "The Oaklawn area works well for racing weekends, casino trips, events, quick food options, nearby hotels, and easy access to one of the busiest parts of Hot Springs.",
    image: "/images/businesses/oaklawn.webp",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    title: "National Park & Mountain Area",
    label: "Trails • Overlooks • Scenic Stops",
    description:
      "Hot Springs National Park sits right against downtown, making it easy to mix Bathhouse Row with hiking, scenic overlooks, thermal water, and mountain views.",
    image: "/images/businesses/hot-springs-national-park.webp",
    href: "/things-to-do-in-hot-springs-ar",
  },
];

const tripRoutes = [
  {
    title: "First-Time Visitor Route",
    text: "Start downtown with Bathhouse Row, walk Central Avenue, stop into the visitor center or a bathhouse, grab a local meal, then add a short trail or overlook if you have time.",
    links: [
      { label: "Bathhouse Row", href: "/bathhouse-row" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
  },
  {
    title: "Lake Weekend Route",
    text: "Book a stay near Lake Hamilton, plan a lakefront dinner, keep one day open for water views or boating, then drive downtown for Bathhouse Row, restaurants, and shops.",
    links: [
      { label: "Lake Hamilton", href: "/lake-hamilton" },
      { label: "Cabins", href: "/hot-springs-ar-cabins" },
    ],
  },
  {
    title: "Food & Downtown Route",
    text: "Stay close to downtown, walk to breakfast, explore Bathhouse Row, visit shops, then plan dinner near Central Avenue or head toward Lake Hamilton for a different view.",
    links: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
    ],
  },
  {
    title: "Family Trip Route",
    text: "Mix easier attractions with restaurants, museums, lake time, Magic Springs, short walks, and lodging that gives you enough space to reset between stops.",
    links: [
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
    ],
  },
];

const planningCards = [
  {
    title: "Stay downtown if you want walkability.",
    text: "Downtown is better for Bathhouse Row, restaurants, shops, spas, museums, and a trip where you do not want to drive for every stop.",
  },
  {
    title: "Stay near the lake if you want a slower trip.",
    text: "Lake Hamilton works better for water views, cabins, vacation rentals, boating, lakefront food, and a more relaxed evening feel.",
  },
  {
    title: "Stay near Oaklawn for racing and events.",
    text: "Oaklawn and Central Avenue are useful if your trip is built around racing, casino visits, events, or quick access to the main road through town.",
  },
  {
    title: "Use downtown as your starting point.",
    text: "Even if you stay somewhere else, Bathhouse Row and downtown Hot Springs are usually the easiest first stop for understanding the city.",
  },
];

const faqs = [
  {
    question: "What is the best area to explore first in Hot Springs?",
    answer:
      "Most first-time visitors should start with downtown Hot Springs and Bathhouse Row because that area gives you the history, restaurants, shops, bathhouses, and national park access all close together.",
  },
  {
    question: "Is it better to stay downtown or near Lake Hamilton?",
    answer:
      "Stay downtown if you want walkable restaurants, shops, bathhouses, and history. Stay near Lake Hamilton if you want lake views, cabins, vacation rentals, boating, and a quieter getaway feel.",
  },
  {
    question: "How should I plan a weekend in Hot Springs?",
    answer:
      "A simple weekend can include Bathhouse Row, Hot Springs National Park, a local restaurant, Lake Hamilton, and one or two attractions like Oaklawn, Garvan Woodland Gardens, or a spa stop.",
  },
  {
    question: "Is Hot Springs easy to get around?",
    answer:
      "Hot Springs is fairly easy to plan by area. Downtown and Bathhouse Row are walkable, while Lake Hamilton, Oaklawn, gardens, cabins, and other stops usually require driving.",
  },
];

export default function ExplorePage() {
  const mainArea = areas[0];
  const sideAreas = areas.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Explore Hot Springs by Area",
              description:
                "A Hot Springs, Arkansas area guide for downtown, Bathhouse Row, Lake Hamilton, Oaklawn, hotels, cabins, restaurants, and trip planning.",
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

      <Hero
        eyebrow={exploreHero.eyebrow}
        title="Explore Hot Springs by Area"
        description="Hot Springs is easier to plan when you understand the main areas first: downtown and Bathhouse Row, Lake Hamilton, Oaklawn, the national park, restaurants, hotels, cabins, and local stops."
        image={exploreHero.image}
        primaryCta={{
          label: "Start With Bathhouse Row",
          href: "/bathhouse-row",
        }}
        secondaryCta={{
          label: "Explore Lake Hamilton",
          href: "/lake-hamilton",
        }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Area Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Think of Hot Springs by area, not just by attractions.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Hot Springs has a lot packed into one destination, but it gets
                easier when you break it into areas. Downtown gives you
                Bathhouse Row, restaurants, shops, and history. Lake Hamilton
                gives you water views, cabins, hotels, and slower evenings.
                Oaklawn works for racing and casino weekends. The national park
                and mountain areas give you trails, overlooks, and scenery.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Once you know which area fits your trip, it is easier to choose{" "}
                <Link
                  href="/hot-springs-ar-hotels"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  hotels
                </Link>
                ,{" "}
                <Link
                  href="/hot-springs-ar-cabins"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  cabins
                </Link>
                ,{" "}
                <Link
                  href="/hot-springs-ar-restaurants"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  restaurants
                </Link>
                , and{" "}
                <Link
                  href="/things-to-do-in-hot-springs-ar"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  things to do
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/bathhouse-row" className="btn">
            Bathhouse Row
          </Link>

          <Link href="/lake-hamilton" className="btn">
            Lake Hamilton
          </Link>

          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>

          <Link href="/hot-springs-ar-restaurants" className="btn">
            Restaurants
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels
          </Link>

          <Link href="/hot-springs-ar-cabins" className="btn">
            Cabins
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Explore Hot Springs by Area</h2>

            <p>
              Each area has a different feel. Use this as a simple starting
              point before you choose where to stay, eat, and spend most of your
              time.
            </p>
          </div>

          <div className="space-y-8">
            <Link
              href={mainArea.href}
              className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <img
                  src={mainArea.image}
                  alt={mainArea.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Best First Stop
                </p>

                <h3 className="mb-4 text-4xl font-semibold leading-tight">
                  {mainArea.title}
                </h3>

                <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                  {mainArea.label}
                </p>

                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                  {mainArea.description}
                </p>

                <span
                  className="mt-6 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Explore area →
                </span>
              </div>
            </Link>

            <div className="grid gap-6 lg:grid-cols-3">
              {sideAreas.map((area) => (
                <Link
                  href={area.href}
                  key={area.title}
                  className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Area Guide
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                      {area.label}
                    </p>

                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {area.description}
                    </p>

                    <span
                      className="mt-5 inline-block font-bold"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      View area →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/hero/lake-hamilton.jpg"
          alt="Hot Springs Arkansas trip planning"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Downtown, Lake, Trails & Food
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              The best Hot Springs trip usually mixes more than one area.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Spend part of the day downtown, head toward the lake for dinner
              or a stay, and leave room for trails, shops, spas, or one bigger
              attraction.
            </p>

            <Link
              href="/things-to-do-in-hot-springs-ar"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              See Things To Do
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Suggested Ways to Plan Your Trip</h2>

            <p>
              These are simple ways to think about your visit depending on what
              kind of Hot Springs trip you want.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tripRoutes.map((route) => (
              <div
                key={route.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{route.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {route.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {route.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:opacity-80"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--accent-dark)",
                        background: "rgba(155,95,45,0.08)",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Where to Stay Based on Your Trip</h2>

            <p>
              Picking the right area matters. A downtown stay feels different
              from a lake stay, and an Oaklawn weekend feels different from a
              cabin getaway.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {planningCards.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/hot-springs-ar-hotels" className="btn">
              Compare Hotels
            </Link>

            <Link href="/hot-springs-ar-cabins" className="btn">
              Compare Cabins
            </Link>

            <Link href="/hot-springs-ar-restaurants" className="btn">
              Find Restaurants
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Explore Hot Springs FAQs</h2>

            <p>
              Quick answers for visitors deciding where to start, where to stay,
              and how to organize a Hot Springs trip.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}