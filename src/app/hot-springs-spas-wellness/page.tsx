import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Spas, Wellness & Bathhouses in Hot Springs, Arkansas | Thermal Baths, Resort Spas & Relaxation",
  description:
    "Explore spas, wellness stops, historic bathhouses, thermal baths, resort spas, massage, facials, salon services, and relaxing experiences in Hot Springs, Arkansas.",
  keywords: [
    "Hot Springs Arkansas spas",
    "spas in Hot Springs AR",
    "Hot Springs wellness",
    "Hot Springs bathhouses",
    "Hot Springs thermal baths",
    "Hot Springs massage",
    "Hot Springs facials",
    "Hot Springs resort spa",
    "Bathhouse Row spas",
    "Hot Springs Arkansas spa guide",
  ],
  alternates: {
    canonical: "/hot-springs-spas-wellness",
  },
};

const hero = {
  image: "/images/businesses/bathhouse-row.webp",
};

const spaBusinesses = [
  {
    name: "Quapaw Baths & Spa",
    type: "Thermal Pools • Spa Treatments • Bathhouse Row",
    description:
      "A historic Bathhouse Row spa offering thermal mineral baths, spa treatments, massages, facials, private bathing, and a modern Hot Springs bathhouse experience.",
    image: "/images/businesses/quapaw-baths.jpg",
    href: "https://www.quapawbaths.com/",
    phone: "501-609-9822",
    address: "413 Central Ave, Hot Springs, AR 71901",
    featured: true,
  },
  {
    name: "Buckstaff Bathhouse",
    type: "Traditional Thermal Bathhouse • Massage",
    description:
      "A classic Hot Springs bathhouse experience with traditional thermal mineral baths, steam treatments, hot towel packs, sitz baths, and massage.",
    image: "/images/businesses/buckstaff-bathhouse.jpg",
    href: "https://www.buckstaffbaths.com/",
    phone: "501-623-2308",
    address: "509 Central Ave, Hot Springs, AR 71901",
    featured: true,
  },
  {
    name: "Astral Spa at Oaklawn",
    type: "Resort Spa • Massage • Relaxation",
    description:
      "A resort spa at Oaklawn offering spa services, relaxation amenities, wellness-focused treatments, and an adult-only spa environment.",
    image: "/images/businesses/oaklawn.webp",
    href: "https://oaklawn.com/resort/spa/",
    phone: "501-363-4670",
    address: "2705 Central Ave, Hot Springs, AR 71901",
    featured: false,
  },
  {
    name: "The Arlington Resort Salon & Spa",
    type: "Historic Hotel Spa • Salon • Thermal Bathhouse",
    description:
      "A historic Hot Springs hotel spa offering salon services, spa treatments, body therapies, facials, massage, and a classic resort setting.",
    image: "/images/businesses/arlington-hotel.webp",
    href: "https://www.arlingtonhotel.com/pamper-relax/salon-spa",
    phone: "501-623-7771",
    address: "239 Central Ave, Hot Springs, AR 71901",
    featured: false,
  },
];

const guideCards = [
  {
    title: "Historic Bathhouses",
    text: "Start with Bathhouse Row, Buckstaff, or Quapaw if you want the thermal water and classic Hot Springs bathhouse side of town.",
    href: "/bathhouse-row",
    cta: "Explore Bathhouse Row",
  },
  {
    title: "Thermal Baths",
    text: "Buckstaff and Quapaw are two of the best-known stops for visitors looking for a traditional Hot Springs bathing experience.",
    href: "#spa-guide",
    cta: "Browse Bathhouses",
  },
  {
    title: "Resort Spa Days",
    text: "Oaklawn and The Arlington fit visitors looking for a hotel, resort, salon, massage, or spa experience tied to a larger property.",
    href: "/hot-springs-ar-hotels",
    cta: "Browse Places To Stay",
  },
];

const faqs = [
  {
    question: "Is Hot Springs known for spas?",
    answer:
      "Yes. Hot Springs has a long wellness and bathing history tied to its thermal water, Bathhouse Row, historic bathhouses, resort spas, and modern wellness businesses.",
  },
  {
    question: "What is the difference between a bathhouse and a resort spa?",
    answer:
      "A bathhouse is usually tied to thermal bathing, soaking, massage, and the historic Hot Springs bathing tradition. A resort spa is usually connected to a hotel or resort and may include massage, facials, salon services, body treatments, and relaxation amenities.",
  },
  {
    question: "Where should I start if I want a traditional Hot Springs bath?",
    answer:
      "Visitors looking for a traditional Hot Springs bathhouse experience usually start with Buckstaff Bathhouse or Quapaw Baths & Spa on Bathhouse Row.",
  },
  {
    question: "Can I plan a spa day around downtown Hot Springs?",
    answer:
      "Yes. Bathhouse Row, downtown restaurants, hotels, shops, museums, and national park stops are close together, so it is easy to pair a spa or bathhouse visit with the rest of a Hot Springs day.",
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function HotSpringsSpasWellnessPage() {
  const featuredStops = spaBusinesses.filter((place) => place.featured);
  const otherStops = spaBusinesses.filter((place) => !place.featured);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Spas, Wellness and Bathhouses in Hot Springs, Arkansas",
              description:
                "A local guide to spas, bathhouses, wellness businesses, thermal baths, resort spas, massage, facials, salon services, and relaxation in Hot Springs, Arkansas.",
              itemListElement: spaBusinesses.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "HealthAndBeautyBusiness",
                  name: place.name,
                  description: place.description,
                  telephone: place.phone,
                  address: place.address,
                  url: place.href,
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

      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#17251f] pb-16 pt-32">
        <Image
          src={hero.image}
          alt="Spas, bathhouses, and wellness in Hot Springs Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <p className="hero-eyebrow !text-white/72">
              Spas, Bathhouses & Wellness
            </p>

            <h1 className="text-white">
              Relax, reset, and experience the spa side of Hot Springs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 !text-white/82">
              From historic thermal bathhouses to resort spa experiences, Hot
              Springs has options for soaking, massage, facials, salon services,
              wellness treatments, and relaxing days built around the city&apos;s
              famous water.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
                style={{ color: "var(--green)" }}
              >
                Start With Featured Stops
              </a>

              <a
                href="#spa-guide"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Browse Spa Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-8">
  <div className="container">
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="hero-eyebrow">Choose Your Spa Day</p>

      <h2>Different ways to enjoy the wellness side of Hot Springs.</h2>

      <p className="mt-4 text-lg leading-8">
        Some visitors come for the historic bathhouse experience, some want a
        resort spa day, and some just want a relaxing stop while exploring
        downtown.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {guideCards.map((card) => (
        <Link
          href={card.href}
          key={card.title}
          className="group rounded-[1.35rem] border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          style={{ borderColor: "var(--border)" }}
        >
          <h3 className="text-2xl font-semibold leading-tight">
            {card.title}
          </h3>

          <p className="mt-4 text-base leading-7">{card.text}</p>

          <span
            className="mt-5 inline-block text-sm font-black uppercase tracking-[0.12em]"
            style={{ color: "var(--accent-dark)" }}
          >
            {card.cta} →
          </span>
        </Link>
      ))}
    </div>
  </div>
</section>

      <section id="featured" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Featured Spa Stops</p>

            <h2>Start with two classic Hot Springs spa experiences.</h2>

            <p>
              These stops are tied closely to the Hot Springs bathhouse story,
              thermal water, downtown walking, and the city&apos;s long history
              as a wellness destination.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredStops.map((business) => (
              <article
                key={business.name}
                className="group overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href={business.href}
                  target={isExternal(business.href) ? "_blank" : undefined}
                  rel={
                    isExternal(business.href) ? "noopener noreferrer" : undefined
                  }
                >
                  <div className="relative h-[360px] overflow-hidden bg-[color:var(--surface-strong)]">
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-black/72 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                      Featured
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <p
                      className="mb-3 text-xs font-black uppercase tracking-[0.18em]"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      {business.type}
                    </p>

                    <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                      {business.name}
                    </h3>

                    <p className="mt-4 text-lg leading-8">
                      {business.description}
                    </p>

                    <div className="mt-5 grid gap-2 text-sm font-semibold">
                      <span style={{ color: "var(--text)" }}>
                        {business.address}
                      </span>

                      <span style={{ color: "var(--accent-dark)" }}>
                        {business.phone}
                      </span>
                    </div>

                    <span
                      className="mt-6 inline-block font-black"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      View details →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="spa-guide" className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Spa & Wellness Guide</p>

            <h2>More spa and wellness stops around Hot Springs</h2>

            <p>
              A few other places to consider for resort spa services, massage,
              salon services, body treatments, facials, and classic Hot Springs
              relaxation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherStops.map((business) => (
              <article
                key={business.name}
                className="group overflow-hidden rounded-[1.75rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <a
                  href={business.href}
                  target={isExternal(business.href) ? "_blank" : undefined}
                  rel={
                    isExternal(business.href) ? "noopener noreferrer" : undefined
                  }
                >
                  <div className="relative h-64 overflow-hidden bg-[color:var(--surface-strong)]">
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                      Spa & Wellness
                    </div>
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-xs font-black uppercase tracking-[0.18em]"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      {business.type}
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {business.name}
                    </h3>

                    <p className="mt-3 leading-7">{business.description}</p>

                    <div className="mt-5 grid gap-2 text-sm font-semibold">
                      <span style={{ color: "var(--text)" }}>
                        {business.address}
                      </span>

                      <span style={{ color: "var(--accent-dark)" }}>
                        {business.phone}
                      </span>
                    </div>

                    <span
                      className="mt-5 inline-block font-black"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      View details →
                    </span>
                  </div>
                </a>
              </article>
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
              <p className="hero-eyebrow">Plan The Visit</p>

              <h2>Pair a spa stop with the rest of Hot Springs.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/bathhouse-row"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--border)" }}
              >
                <h3>Bathhouse Row</h3>
                <p className="mt-2">
                  Historic bathhouses, thermal water, downtown walking, and the
                  classic Hot Springs story.
                </p>
              </Link>

              <Link
                href="/hot-springs-ar-restaurants"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--border)" }}
              >
                <h3>Restaurants Nearby</h3>
                <p className="mt-2">
                  Build a spa day around coffee, lunch, dinner, downtown food,
                  or a nicer night out.
                </p>
              </Link>

              <Link
                href="/hot-springs-ar-hotels"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--border)" }}
              >
                <h3>Places To Stay</h3>
                <p className="mt-2">
                  Find hotels, resorts, cabins, lake stays, and walkable
                  downtown lodging options.
                </p>
              </Link>

              <Link
                href="/local-businesses"
                className="rounded-2xl border bg-white/55 p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--border)" }}
              >
                <h3>Local Businesses</h3>
                <p className="mt-2">
                  Browse more shops, attractions, visitor stops, services, and
                  local places around Hot Springs.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Questions</p>

            <h2>Hot Springs spa and wellness FAQ</h2>

            <p>
              Quick answers for visitors comparing bathhouses, thermal bathing,
              resort spas, and wellness stops.
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