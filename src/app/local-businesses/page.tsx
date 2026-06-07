import Link from "next/link";
import Hero from "@/components/Hero";
import { localBusinessesHero } from "@/data/hero";
import { businesses } from "@/data/businesses";

export const metadata = {
  title:
    "Local Businesses in Hot Springs, Arkansas | Shops, Services, Attractions & Visitor Stops",
  description:
    "Discover local businesses in Hot Springs, Arkansas including shops, attractions, spas, bathhouses, outdoor recreation, visitor services, and local places that help make a Hot Springs trip easier and more memorable.",
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
    "things to do Hot Springs Arkansas",
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

const featuredBusinesses = localBusinesses.filter(
  (business) => business.featured
);

const standardBusinesses = localBusinesses.filter(
  (business) => !business.featured
);

const shoppingBusinesses = localBusinesses.filter(
  (business) => business.category === "Shopping"
);

const outdoorBusinesses = localBusinesses.filter(
  (business) => business.category === "Outdoor Recreation"
);

const spaBusinesses = localBusinesses.filter(
  (business) => business.category === "Spa & Bathhouse"
);

const attractionBusinesses = localBusinesses.filter(
  (business) => business.category === "Attraction"
);

const otherLocalBusinesses = localBusinesses.filter(
  (business) => business.category === "Local Business"
);

const businessTypes = [
  {
    title: "Local shops and visitor stops",
    text: "Boutiques, gift shops, specialty stores, galleries, markets, and places that give visitors something local to browse beyond the usual tourist stops.",
    href: "/hot-springs-local-spots",
  },
  {
    title: "Spas, bathhouses, and wellness",
    text: "Hot Springs has always been tied to thermal water, rest, bathing, wellness, and slower getaway-style travel.",
    href: "/bathhouse-row",
  },
  {
    title: "Attractions and activities",
    text: "Museums, gardens, family attractions, historic places, entertainment stops, and experiences that help visitors fill out a weekend.",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    title: "Outdoor recreation and lake-area businesses",
    text: "Marinas, lake stops, outdoor outfitters, scenic places, and recreation-focused businesses around Hot Springs, Lake Hamilton, and nearby lake areas.",
    href: "/lake-hamilton",
  },
];

const localGuideLinks = [
  {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    label: "Restaurants",
    href: "/hot-springs-ar-restaurants",
  },
  {
    label: "Places To Stay",
    href: "/hot-springs-ar-hotels",
  },
  {
    label: "Antique, Thrift & Flea Markets",
    href: "/hot-springs-antique-thrift-flea-markets",
  },
  {
    label: "Local Hidden Gems",
    href: "/hot-springs-local-spots",
  },
  {
    label: "Get Listed",
    href: "/contact",
  },
];

const faqs = [
  {
    question: "What kinds of local businesses are in Hot Springs?",
    answer:
      "Hot Springs has local shops, attractions, spas, bathhouses, outdoor recreation businesses, galleries, boutiques, visitor services, restaurants, hotels, cabins, and small businesses spread across downtown, Central Avenue, Lake Hamilton, Bathhouse Row, Oaklawn, and nearby areas.",
  },
  {
    question: "Where are most visitor-friendly local businesses in Hot Springs?",
    answer:
      "Many visitor-facing businesses are around downtown Hot Springs, Bathhouse Row, Central Avenue, Oaklawn, Lake Hamilton, and the surrounding shopping corridors, though local services and smaller shops are spread throughout the city.",
  },
  {
    question: "Can my business be listed on this guide?",
    answer:
      "Yes. Local businesses, shops, attractions, spas, services, restaurants, cabins, hotels, guides, and visitor-friendly businesses in the Hot Springs area can request a listing or ask about featured placement.",
  },
  {
    question: "Why list a Hot Springs business here?",
    answer:
      "This guide is built for people already planning where to eat, stay, shop, explore, relax, and spend money while visiting Hot Springs.",
  },
];

function getBusinessHref(business: (typeof businesses)[number]) {
  return business.href ?? business.website ?? business.directions ?? "#";
}

function BusinessCard({
  business,
  index,
}: {
  business: (typeof businesses)[number];
  index?: number;
}) {
  const href = getBusinessHref(business);

  return (
    <article
      className="group overflow-hidden rounded-[1.5rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: "var(--border)" }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48 overflow-hidden bg-[color:var(--surface-strong)]">
          <img
            src={business.image}
            alt={business.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
            {business.category}
          </div>
        </div>

        <div className="p-5">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--accent-dark)" }}
          >
            {business.type}
          </p>

          <h3 className="text-xl font-semibold leading-tight">
            {index ? `${index}. ` : ""}
            {business.name}
          </h3>

          <p
            className="mt-3 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {business.description}
          </p>

          {business.address && (
            <p
              className="mt-4 text-sm font-semibold"
              style={{ color: "var(--text)" }}
            >
              📍 {business.address}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            {business.phone && (
              <span
                className="rounded-full px-4 py-2 text-sm font-bold"
                style={{
                  background: "rgba(35,56,47,0.08)",
                  color: "var(--green)",
                }}
              >
                {business.phone}
              </span>
            )}

            <span
              className="rounded-full px-4 py-2 text-sm font-bold"
              style={{
                background: "rgba(155,95,45,0.1)",
                color: "var(--accent-dark)",
              }}
            >
              View details →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

function BusinessRail({
  title,
  text,
  businesses,
}: {
  title: string;
  text: string;
  businesses: typeof localBusinesses;
}) {
  if (!businesses.length) return null;

  return (
    <section className="py-14">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.slice(0, 6).map((business) => (
            <BusinessCard key={business.name} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
                "Local shops, attractions, spas, outdoor recreation businesses, visitor services, and local businesses in Hot Springs, Arkansas.",
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

      <section className="py-14 md:py-16">
        <div className="container">
          <div
            className="grid gap-8 rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Business Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                The local places that make Hot Springs easier to explore.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                This page is for the businesses that do not always fit neatly
                into one restaurant, hotel, or cabin list. Shops, attractions,
                spas, outdoor stops, visitor services, and local places all help
                shape the way people experience Hot Springs.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Use it as a wider local guide while planning around{" "}
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
                , downtown, Oaklawn, shopping, spas, attractions, and the
                surrounding Hot Springs area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {localGuideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border px-5 py-3 text-center text-sm font-bold transition hover:-translate-y-1 hover:shadow-md"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--green)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {mainBusiness && (
        <section className="py-16">
          <div className="container">
            <div className="section-heading">
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Featured Local Stops
              </p>

              <h2>Start with a few useful Hot Springs businesses.</h2>
              <p>
                These are strong starting points for visitors looking for
                attractions, shops, services, spas, outdoor recreation, and
                local places to build a trip around.
              </p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <a
                href={getBusinessHref(mainBusiness)}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderColor: "var(--border)" }}
              >
               <div className="relative h-[340px] overflow-hidden">
  <img
    src={mainBusiness.image}
    alt={mainBusiness.name}
    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute left-5 top-5 rounded-full bg-black/75 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
    Featured Local Business
  </div>
</div>

                <div className="p-7">
  <p
    className="leading-relaxed"
    style={{ color: "var(--muted)" }}
  >
    {mainBusiness.description}
  </p>

  {mainBusiness.address && (
    <p
      className="mt-4 text-sm font-semibold"
      style={{ color: "var(--text)" }}
    >
      📍 {mainBusiness.address}
    </p>
  )}

  <span
    className="mt-5 inline-block font-bold"
    style={{ color: "var(--accent-dark)" }}
  >
    View business →
  </span>
</div>
              </a>

              <div className="grid gap-6">
                {sideBusinesses.map((business) => (
                  <BusinessCard key={business.name} business={business} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container">
          <div className="section-heading">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Browse By Type
            </p>

            <h2>What kind of local business are you looking for?</h2>
            <p>
              Hot Springs has the obvious visitor stops, but it also has smaller
              local businesses that help people shop, relax, explore, and find
              something different while they are in town.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessTypes.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="rounded-[1.75rem] border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.text}
                </p>

                <span
                  className="mt-5 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Explore more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BusinessRail
        title="Shopping, markets, and local retail"
        text="Local shops, shopping stops, antique-style browsing, boutiques, specialty stores, and places that give visitors something more personal to take home."
        businesses={shoppingBusinesses}
      />

      <BusinessRail
        title="Spas, bathhouses, and wellness stops"
        text="Bathing, relaxation, wellness, thermal-water history, and slower places that connect back to what made Hot Springs famous."
        businesses={spaBusinesses}
      />

      <BusinessRail
        title="Attractions and visitor activities"
        text="Museums, gardens, family stops, historic places, entertainment, and the bigger attractions people often build a Hot Springs trip around."
        businesses={attractionBusinesses}
      />

      <BusinessRail
        title="Outdoor recreation and lake-area businesses"
        text="Marinas, lake stops, outdoor recreation, scenic places, and local businesses that help visitors experience the area beyond downtown."
        businesses={outdoorBusinesses}
      />

      <BusinessRail
        title="Other local businesses"
        text="Useful local businesses that may not fit neatly into one travel category, but still help visitors and locals experience Hot Springs."
        businesses={otherLocalBusinesses}
      />

      {standardBusinesses.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="section-heading">
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Full Local Business List
              </p>

              <h2>More Hot Springs local businesses.</h2>
              <p>
                A broader list of local businesses, visitor-friendly stops, and
                useful places around Hot Springs.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {standardBusinesses.map((business, index) => (
                <BusinessCard
                  key={business.name}
                  business={business}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
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
                Want your local business listed here?
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                If you run a shop, attraction, spa, local service, outdoor
                business, visitor-friendly stop, restaurant, cabin, hotel, or
                small business around Hot Springs, use the listing form to send
                your details.
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

      <section className="pb-16">
        <div className="container">
          <div
            className="rounded-[2rem] border bg-[color:var(--surface)] p-8 text-center shadow-sm md:p-10"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Natural State Tourism Project
            </p>

            <h2 className="text-4xl font-semibold">
              Built to support local discovery.
            </h2>

            <p
              className="mx-auto mt-4 max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Hot Springs Arkansas Guide is part of the Natural State Tourism
              Project, an independent local tourism guide network for Arkansas
              towns. The goal is to help visitors find real local places to eat,
              stay, shop, relax, and explore.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/hot-springs-ar-restaurants" className="btn-primary">
                View Restaurants
              </Link>

              <Link
                href="/hot-springs-antique-thrift-flea-markets"
                className="btn-secondary"
              >
                View Shopping Guide
              </Link>

              <Link href="/contact" className="btn-secondary">
                Get Listed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}