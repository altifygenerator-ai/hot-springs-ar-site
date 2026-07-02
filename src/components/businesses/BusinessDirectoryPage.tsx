import Link from "next/link";
import Hero from "@/components/Hero";
import type { Business } from "@/data/businesses";

type GuideLink = {
  label: string;
  href: string;
};

type InfoCard = {
  title: string;
  text: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type BusinessDirectoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  primaryCta?: GuideLink;
  secondaryCta?: GuideLink;
  introEyebrow: string;
  introTitle: string;
  introText: string;
  introNote?: string;
  businesses: Business[];
  featuredNames?: string[];
  featuredEyebrow: string;
  featuredTitle: string;
  featuredText: string;
  basicEyebrow: string;
  basicTitle: string;
  basicText: string;
  infoEyebrow: string;
  infoTitle: string;
  infoText: string;
  infoCards: InfoCard[];
  guideLinks: GuideLink[];
  relatedLinks: GuideLink[];
  faqs: FAQ[];
  schemaName: string;
  schemaDescription: string;
  ctaTitle?: string;
  ctaText?: string;
};

function getBusinessHref(business: Business) {
  return business.href ?? business.website ?? business.directions ?? "#";
}

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

function getListingBadge(business: Business, featuredNames: string[] = []) {
  if (business.name === "Spa City Aesthetics") return "Featured Partner";
  if (featuredNames.includes(business.name)) return "Our Pick";
  return "Basic Listing";
}

function DirectoryCard({
  business,
  index,
  featuredNames,
}: {
  business: Business;
  index?: number;
  featuredNames?: string[];
}) {
  const href = getBusinessHref(business);
  const external = isExternalHref(href);
  const badge = getListingBadge(business, featuredNames);

  return (
    <article
      className="group overflow-hidden rounded-[1.5rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: "var(--border)" }}
    >
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <div className="relative h-48 overflow-hidden bg-[color:var(--surface-strong)]">
          <img
            src={business.image}
            alt={business.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
            {badge}
          </div>

          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur" style={{ color: "var(--green)" }}>
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

          <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
            {business.description}
          </p>

          {business.address && (
            <p className="mt-4 text-sm font-semibold" style={{ color: "var(--text)" }}>
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

export default function BusinessDirectoryPage({
  eyebrow,
  title,
  description,
  heroImage,
  primaryCta,
  secondaryCta,
  introEyebrow,
  introTitle,
  introText,
  introNote,
  businesses,
  featuredNames = [],
  featuredEyebrow,
  featuredTitle,
  featuredText,
  basicEyebrow,
  basicTitle,
  basicText,
  infoEyebrow,
  infoTitle,
  infoText,
  infoCards,
  guideLinks,
  relatedLinks,
  faqs,
  schemaName,
  schemaDescription,
  ctaTitle = "Want your business in a featured spot?",
  ctaText = "Featured placements are limited by page so the guide stays useful. If your business fits this category, reach out and we can talk through the best placement.",
}: BusinessDirectoryPageProps) {
  const featuredBusinesses = featuredNames
    .map((name) => businesses.find((business) => business.name === name))
    .filter((business): business is Business => Boolean(business));

  const featuredSet = new Set(featuredBusinesses.map((business) => business.name));
  const fallbackFeatured = featuredBusinesses.length
    ? featuredBusinesses
    : businesses.slice(0, 3);

  const standardBusinesses = businesses.filter(
    (business) => !featuredSet.has(business.name)
  );
  const mainBusiness = fallbackFeatured[0];
  const sideBusinesses = fallbackFeatured.slice(1, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: schemaName,
              description: schemaDescription,
              itemListElement: businesses.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": place.category === "Restaurant" ? "Restaurant" : "LocalBusiness",
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
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={heroImage}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
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
                {introEyebrow}
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                {introTitle}
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                {introText}
              </p>

              {introNote && (
                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                  {introNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {guideLinks.map((link) => (
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
                {featuredEyebrow}
              </p>

              <h2>{featuredTitle}</h2>
              <p>{featuredText}</p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <a
                href={getBusinessHref(mainBusiness)}
                target={isExternalHref(getBusinessHref(mainBusiness)) ? "_blank" : undefined}
                rel={isExternalHref(getBusinessHref(mainBusiness)) ? "noopener noreferrer" : undefined}
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
                    {getListingBadge(mainBusiness, featuredNames)}
                  </div>
                </div>

                <div className="p-7">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    {mainBusiness.type}
                  </p>

                  <h3 className="text-3xl font-semibold leading-tight">
                    {mainBusiness.name}
                  </h3>

                  <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                    {mainBusiness.description}
                  </p>

                  {mainBusiness.address && (
                    <p className="mt-4 text-sm font-semibold" style={{ color: "var(--text)" }}>
                      📍 {mainBusiness.address}
                    </p>
                  )}

                  <span className="mt-5 inline-block font-bold" style={{ color: "var(--accent-dark)" }}>
                    View business →
                  </span>
                </div>
              </a>

              <div className="grid gap-6">
                {sideBusinesses.map((business) => (
                  <DirectoryCard
                    key={business.name}
                    business={business}
                    featuredNames={featuredNames}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 section-steam-wash">
        <div className="container">
          <div className="section-heading">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              {infoEyebrow}
            </p>

            <h2>{infoTitle}</h2>
            <p>{infoText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {standardBusinesses.length > 0 && (
        <section id="listings" className="py-16">
          <div className="container">
            <div className="section-heading">
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                {basicEyebrow}
              </p>

              <h2>{basicTitle}</h2>
              <p>{basicText}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {standardBusinesses.map((business, index) => (
                <DirectoryCard
                  key={`${business.name}-${business.href ?? business.website ?? index}`}
                  business={business}
                  index={index + 1}
                  featuredNames={featuredNames}
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
                Featured Placement Available
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                {ctaTitle}
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.86)" }}>
                {ctaText}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                  style={{ background: "#ffffff", color: "var(--green)" }}
                >
                  Ask About Featured Placement
                </Link>

                <Link
                  href="/local-businesses"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  View Local Business Guide
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
              Keep Planning
            </p>

            <h2 className="text-4xl font-semibold">Related Hot Springs guides.</h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
              These pages connect the business list back into the rest of the visitor guide so people can keep planning around restaurants, stays, events, local finds, and things to do.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn-secondary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
