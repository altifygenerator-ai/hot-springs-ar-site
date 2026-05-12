import Link from "next/link";
import Hero from "@/components/Hero";
import { historyHero } from "@/data/hero";

export const metadata = {
  title:
    "History of Hot Springs, Arkansas | Bathhouse Row, Thermal Water & Historic Downtown",
  description:
    "Learn about the history of Hot Springs, Arkansas including Bathhouse Row, natural thermal water, historic bathhouses, downtown Hot Springs, early tourism, famous visitors, and Hot Springs National Park.",
  keywords: [
    "history of Hot Springs Arkansas",
    "Hot Springs Arkansas history",
    "Bathhouse Row history",
    "historic downtown Hot Springs",
    "Hot Springs bathhouses",
    "Hot Springs National Park history",
    "thermal springs Arkansas",
    "historic Hot Springs AR",
  ],
};

const historySections = [
  {
    title: "Thermal Water Shaped the City",
    text: "Hot Springs grew around the natural thermal water that made the area famous. Long before it became a busy visitor destination, people were drawn to the springs for rest, bathing, healing traditions, and the unusual setting of warm water coming from the mountain.",
  },
  {
    title: "Bathhouse Row Became the City’s Signature",
    text: "Bathhouse Row gave Hot Springs its most recognizable identity. The bathhouses, sidewalks, architecture, and downtown setting turned the city into a place people traveled to for health, leisure, and a very specific kind of resort-town experience.",
  },
  {
    title: "Downtown Grew Around Visitors",
    text: "Restaurants, hotels, shops, entertainment, and services grew around the downtown visitor economy. That is still part of what makes Hot Springs different today: history, tourism, food, lodging, and local business all sit close together.",
  },
  {
    title: "Hot Springs Still Feels Historic",
    text: "Even with modern restaurants, hotels, spas, attractions, and lake trips, the historic side of Hot Springs is still easy to see. Bathhouse Row, Central Avenue, old hotels, museums, and national park buildings keep that story visible.",
  },
];

const historyHighlights = [
  {
    name: "Bathhouse Row",
    type: "Historic District • Bathhouses • Downtown",
    description:
      "The most recognizable historic area in Hot Springs, with bathhouse buildings, thermal water history, museums, spas, walking paths, shops, and restaurants nearby.",
    image: "/images/businesses/bathhouse-row.webp",
    href: "/bathhouse-row",
  },
  {
    name: "Fordyce Bathhouse",
    type: "Museum • Visitor Center • Historic Bathhouse",
    description:
      "A restored bathhouse that helps visitors understand how Hot Springs became known for bathing culture, architecture, tourism, and thermal water.",
    image: "/images/businesses/fordyce-bathhouse.jpg",
    href: "/bathhouse-row",
  },
  {
    name: "Historic Downtown",
    type: "Central Avenue • Shops • Hotels • Restaurants",
    description:
      "Downtown Hot Springs still carries the older resort-town feel, with historic buildings, walkable blocks, local shops, restaurants, hotels, and national park access.",
    image: "/images/hero/hot-springs-history.jpg",
    href: "/explore",
  },
];

const faqs = [
  {
    question: "Why is Hot Springs, Arkansas historic?",
    answer:
      "Hot Springs is historic because the city grew around natural thermal water, bathhouse culture, early tourism, historic downtown buildings, Bathhouse Row, and what became Hot Springs National Park.",
  },
  {
    question: "What is Bathhouse Row?",
    answer:
      "Bathhouse Row is the historic district in downtown Hot Springs known for its bathhouse buildings, thermal water history, architecture, museums, spas, and connection to Hot Springs National Park.",
  },
  {
    question: "Can you still visit the historic bathhouses?",
    answer:
      "Yes. Visitors can walk Bathhouse Row, visit historic buildings, stop at the Fordyce Bathhouse Visitor Center, and experience working bathhouses and spa services in select locations.",
  },
  {
    question: "Is Hot Springs National Park part of the city history?",
    answer:
      "Yes. Hot Springs National Park is deeply tied to the city’s history because the park protects the thermal springs and historic landscape that helped shape Hot Springs.",
  },
];

export default function HistoryPage() {
  const mainHighlight = historyHighlights[0];
  const sideHighlights = historyHighlights.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "History of Hot Springs, Arkansas",
              description:
                "History of Hot Springs, Arkansas including thermal water, Bathhouse Row, historic downtown, early tourism, bathhouses, and Hot Springs National Park.",
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
        eyebrow={historyHero.eyebrow}
        title={historyHero.title}
        description={historyHero.description}
        image={historyHero.image}
        primaryCta={historyHero.primaryCta}
        secondaryCta={historyHero.secondaryCta}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Historic Hot Springs
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                The city’s history is still part of the trip.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                Hot Springs is not just a place with old buildings. The city’s
                history is tied directly to the reason people still visit:
                thermal water, bathhouses, downtown streets, mountain scenery,
                hotels, restaurants, spas, and a national park sitting right
                beside the city.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                A good history-focused visit usually starts with{" "}
                <Link
                  href="/bathhouse-row"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Bathhouse Row
                </Link>
                , then adds downtown exploring, museums, restaurants, hotels,
                and Hot Springs National Park.
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
          <Link href="/explore" className="btn">
            Explore Downtown
          </Link>
          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>
          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels Nearby
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Historic Places and Stories Around Hot Springs</h2>
            <p>
              These are some of the easiest ways to see the city’s history while
              still enjoying the modern trip.
            </p>
          </div>

          <div className="space-y-8">
            <Link
              href={mainHighlight.href}
              className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <img
                  src={mainHighlight.image}
                  alt={mainHighlight.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Historic Highlight
                </p>

                <h3 className="mb-4 text-4xl font-semibold leading-tight">
                  {mainHighlight.name}
                </h3>

                <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                  {mainHighlight.type}
                </p>

                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                  {mainHighlight.description}
                </p>

                <span
                  className="mt-6 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Learn more →
                </span>
              </div>
            </Link>

            <div className="grid gap-6 lg:grid-cols-2">
              {sideHighlights.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      History Stop
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                      {item.type}
                    </p>

                    <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>How Hot Springs Became a Visitor Town</h2>
            <p>
              The short version: water brought people here, bathhouses gave the
              city its identity, and downtown grew around the visitors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {historySections.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/bathhouse-row.webp"
          alt="Historic Bathhouse Row in Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Thermal Water & Historic Streets
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              The old Hot Springs story is still easy to see.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Walk Bathhouse Row, visit historic buildings, then step right into
              the modern downtown with restaurants, hotels, shops, and spas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Hot Springs History FAQs</h2>
            <p>
              Quick answers for visitors interested in Bathhouse Row, downtown,
              thermal water, historic buildings, and the city’s past.
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
                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
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