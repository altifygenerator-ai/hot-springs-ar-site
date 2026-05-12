import Link from "next/link";
import Hero from "@/components/Hero";
import { localBusinessesHero } from "@/data/hero";
import { businesses } from "@/data/businesses";

export const metadata = {
  title:
    "Local Businesses in Hot Springs, Arkansas | Shops, Services, Attractions & Visitor Stops",
  description:
    "Discover local businesses in Hot Springs, Arkansas including shops, restaurants, attractions, spas, lodging, guides, services, outdoor recreation, and visitor-friendly businesses around downtown, Lake Hamilton, Bathhouse Row, and Oaklawn.",
  keywords: [
    "local businesses Hot Springs Arkansas",
    "Hot Springs AR local businesses",
    "Hot Springs shops",
    "Hot Springs Arkansas services",
    "Hot Springs attractions",
    "Hot Springs spas",
    "Hot Springs visitor businesses",
    "Hot Springs Arkansas shopping",
    "downtown Hot Springs businesses",
  ],
};

const localBusinesses = businesses.filter((business) =>
  [
    "Local Business",
    "Shopping",
    "Outdoor Recreation",
    "Spa & Bathhouse",
    "Attraction",
  ].includes(business.category)
);

const featuredBusinesses = localBusinesses.filter((business) => business.featured);
const standardBusinesses = localBusinesses.filter((business) => !business.featured);

const businessTypes = [
  {
    title: "Visitor-Friendly Shops",
    text: "Good for gifts, local products, downtown browsing, trip extras, and places that add personality to a Hot Springs visit.",
  },
  {
    title: "Spas and Wellness Stops",
    text: "Hot Springs has a long connection to bathing, relaxation, spas, thermal water, and slower getaway-style travel.",
  },
  {
    title: "Attractions and Activities",
    text: "Local attractions, museums, outdoor recreation, guided experiences, and family-friendly stops help visitors fill out the trip.",
  },
  {
    title: "Services for Travelers and Locals",
    text: "Some businesses serve visitors directly, while others support the local community and make Hot Springs feel like a real city, not just a tourist stop.",
  },
];

const faqs = [
  {
    question: "What kinds of local businesses are in Hot Springs?",
    answer:
      "Hot Springs has restaurants, shops, spas, hotels, cabins, attractions, guides, outdoor recreation businesses, local services, boutiques, and visitor-friendly businesses around downtown, Lake Hamilton, Bathhouse Row, Oaklawn, and surrounding areas.",
  },
  {
    question: "Where are most local businesses in Hot Springs?",
    answer:
      "Many visitor-facing businesses are around downtown Hot Springs, Central Avenue, Bathhouse Row, Oaklawn, and Lake Hamilton, though local services and shops are spread across the city.",
  },
  {
    question: "Can my business be listed on this guide?",
    answer:
      "Yes. Local businesses, restaurants, cabins, hotels, shops, attractions, spas, services, and visitor-friendly businesses in the Hot Springs area can request a listing or ask about featured placement.",
  },
  {
    question: "Why list a Hot Springs business here?",
    answer:
      "This guide is built for visitors who are already planning where to eat, stay, shop, explore, and spend money while visiting Hot Springs.",
  },
];

export default function LocalBusinessesPage() {
  const mainBusiness = featuredBusinesses[0] ?? localBusinesses[0];
  const sideBusinesses = featuredBusinesses.length
    ? featuredBusinesses.slice(1, 3)
    : localBusinesses.slice(1, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Local Businesses in Hot Springs, Arkansas",
              description:
                "Local shops, attractions, spas, outdoor recreation businesses, services, and visitor-friendly businesses in Hot Springs, Arkansas.",
              itemListElement: localBusinesses.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "LocalBusiness",
                  name: place.name,
                  description: place.description,
                  address: place.address,
                  telephone: place.phone,
                  url: place.website ?? place.directions ?? place.href,
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

      <Hero
        eyebrow={localBusinessesHero.eyebrow}
        title={localBusinessesHero.title}
        description={localBusinessesHero.description}
        image={localBusinessesHero.image}
        primaryCta={localBusinessesHero.primaryCta}
        secondaryCta={localBusinessesHero.secondaryCta}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Business Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Find local businesses visitors actually need while they’re here.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                Hot Springs is built on local businesses: restaurants, shops,
                spas, lodging, attractions, services, guides, outdoor
                activities, and the small stops that make a trip feel more
                personal.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide helps visitors discover local places while planning
                around{" "}
                <Link
                  href="/bathhouse-row"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Bathhouse Row
                </Link>
                ,{" "}
                <Link
                  href="/lake-hamilton"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Lake Hamilton
                </Link>
                , restaurants, hotels, cabins, attractions, and downtown Hot
                Springs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>
          <Link href="/hot-springs-ar-restaurants" className="btn">
            Restaurants
          </Link>
          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels
          </Link>
          <Link href="/contact" className="btn">
            Get Listed
          </Link>
        </div>
      </section>

      {mainBusiness && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Featured Local Businesses in Hot Springs</h2>
              <p>
                These businesses are useful starting points for visitors looking
                for local attractions, shops, services, spas, and things to do
                around Hot Springs.
              </p>
            </div>

            <div className="space-y-8">
              <a
                href={
                  mainBusiness.website ??
                  mainBusiness.directions ??
                  mainBusiness.href ??
                  "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img
                    src={mainBusiness.image}
                    alt={mainBusiness.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p
                    className="mb-3 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Featured Local Business
                  </p>

                  <h3 className="mb-4 text-4xl font-semibold leading-tight">
                    {mainBusiness.name}
                  </h3>

                  <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                    {mainBusiness.type}
                  </p>

                  <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                    {mainBusiness.description}
                  </p>

                  <span
                    className="mt-6 inline-block font-bold"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    View business →
                  </span>
                </div>
              </a>

              <div className="grid gap-6 lg:grid-cols-2">
                {sideBusinesses.map((place) => (
                  <a
                    href={place.website ?? place.directions ?? place.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={place.name}
                    className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <p
                        className="mb-2 text-sm font-semibold uppercase tracking-wide"
                        style={{ color: "var(--accent-dark)" }}
                      >
                        Local Stop
                      </p>

                      <h3 className="text-2xl font-semibold leading-tight">
                        {place.name}
                      </h3>

                      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                        {place.type}
                      </p>

                      <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                        {place.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More Hot Springs Local Businesses</h2>
            <p>
              These businesses help visitors eat, shop, explore, relax, and
              experience more of the Hot Springs area.
            </p>
          </div>

          <div className="space-y-6">
            {standardBusinesses.map((place, index) => (
              <div
                key={place.name}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="relative h-[170px] overflow-hidden rounded-2xl bg-[color:var(--surface-strong)]">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {index + 1}. {place.name}
                    </h3>

                    <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                      {place.type}
                    </p>

                    <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                      {place.description}
                    </p>

                    {place.address && (
                      <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
                        📍 {place.address}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-3">
                      {place.phone && (
                        <a
                          href={`tel:${place.phone.replace(/[^\d]/g, "")}`}
                          className="inline-flex rounded-full px-5 py-2 text-sm font-bold shadow-sm transition hover:opacity-90"
                          style={{
                            background: "var(--green)",
                            color: "#ffffff",
                          }}
                        >
                          Call {place.phone}
                        </a>
                      )}

                      {place.website && (
                        <a
                          href={place.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border px-5 py-2 text-sm font-bold transition hover:opacity-90"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--green)",
                            background: "var(--surface-strong)",
                          }}
                        >
                          View Website
                        </a>
                      )}

                      {place.directions && (
                        <a
                          href={place.directions}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border px-5 py-2 text-sm font-bold transition hover:opacity-90"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--accent-dark)",
                            background: "rgba(155,95,45,0.08)",
                          }}
                        >
                          Directions
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Types of Local Businesses Visitors Look For</h2>
            <p>
              Hot Springs has a mix of tourism businesses and everyday local
              businesses that both matter to visitors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessTypes.map((item) => (
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

      <section className="section">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[32px] border p-8 shadow-2xl md:p-12"
            style={{
              background:
                "linear-gradient(135deg, var(--green) 0%, #1d332a 55%, var(--accent-dark) 100%)",
              borderColor: "rgba(255,255,255,0.16)",
            }}
          >
            <div
              className="absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            <div className="relative z-10 max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                For Hot Springs Businesses
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Want your business listed here?
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                Get in front of visitors planning where to eat, stay, shop,
                explore, relax, and spend money around Hot Springs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "var(--green)",
                  }}
                >
                  Get Listed
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Ask About Featured Placement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}