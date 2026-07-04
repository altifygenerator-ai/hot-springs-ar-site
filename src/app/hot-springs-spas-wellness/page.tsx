import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessClickTracking } from "@/lib/tracking";

export const metadata: Metadata = {
  title:
    "Hot Springs Spas & Wellness | Bathhouses, Massage, Facials & Relaxation",
  description:
    "Explore Hot Springs spas and wellness stops, including historic bathhouses, thermal baths, massage, facials, skin care, body sculpting, resort spas, salon services, and relaxing ways to plan a visit.",
  keywords: [
    "Hot Springs Arkansas spas",
    "spas in Hot Springs AR",
    "Hot Springs wellness",
    "Hot Springs aesthetics",
    "Hot Springs facials",
    "Hot Springs bathhouses",
    "Hot Springs skin care",
    "Hot Springs body sculpting",
    "Hot Springs Arkansas massage",
    "Hot Springs thermal baths",
    "Hot Springs resort spa",
    "Hot Springs Arkansas spa guide",
  ],
  alternates: {
    canonical: "/hot-springs-spas-wellness",
  },
};

const hero = {
  image: "/images/businesses/bathhouse-row.webp",
};

const featuredBusiness = {
  name: "Spa City Aesthetics",
  label: "Featured Aesthetics Studio",
  type: "Regenerative Skin • Facial Analysis • Body Sculpting • Wellness",
  description:
    "A modern Hot Springs aesthetics studio offering personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic support, hair and scalp restoration, and non-invasive skin health services shaped by Amy Jo Stader’s study in South Korea.",
  image: "/images/businesses/spa-city-aesthetics/spa-city-aesthetics-1.png",
  href: "/spa-city-aesthetics-hot-springs",
  website: "https://spacityaesthetics.com/",
  phone: "501-443-3883",
  phoneHref: "tel:5014433883",
  address: "998 Shady Grove Rd. Suite B, Hot Springs, AR 71901",
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
    title: "Modern Aesthetics",
    text: "Spa City Aesthetics is the featured stop for facial analysis, regenerative skin care, body sculpting, and personalized non-invasive treatments.",
    href: "/spa-city-aesthetics-hot-springs",
    cta: "Read Spa City Spotlight",
  },
  {
    title: "Resort Spa Days",
    text: "Oaklawn and The Arlington fit visitors looking for a hotel, resort, salon, massage, or spa experience tied to a larger property.",
    href: "/hot-springs-ar-hotels",
    cta: "Browse Places To Stay",
  },
];
const wellnessSupportNotes = [
  {
    name: "Three Rooted Blossoms Maternity Services",
    type: "Doula • Lactation Counseling • Postpartum Support",
    description:
      "A local maternity support service mentioned by the owner, offering doula support and lactation counseling, with experience from 6 years as a labor, delivery, and postpartum nurse.",
    note:
      "This is not a spa, bathhouse, or aesthetics listing, but it fits as a local wellness support note for families looking for maternity, birth, or postpartum resources around Hot Springs.",
    href: "https://www.google.com/search?q=Three+Rooted+Blossoms+Maternity+Services+Hot+Springs+Arkansas",
  },
];
const faqs = [
  {
    question: "Is Hot Springs known for spas?",
    answer:
      "Yes. Hot Springs has a long wellness and bathing history tied to its thermal water, Bathhouse Row, historic bathhouses, resort spas, and modern wellness businesses.",
  },
  {
    question: "What is the difference between a bathhouse and a modern aesthetics studio?",
    answer:
      "A bathhouse is usually tied to thermal bathing, soaking, massage, and the historic Hot Springs bathing tradition. A modern aesthetics studio is more focused on services like facial analysis, skin health, body sculpting, regenerative treatments, and non-invasive aesthetic care.",
  },
  {
    question: "Where should I start if I want a traditional Hot Springs bath?",
    answer:
      "Visitors looking for a traditional Hot Springs bathhouse experience usually start with Buckstaff Bathhouse or Quapaw Baths & Spa on Bathhouse Row.",
  },
  {
    question: "Where should I start for facials, skin care, or body sculpting?",
    answer:
      "For modern facial analysis, regenerative skin care, body sculpting, lymphatic support, and non-invasive aesthetic treatments, Spa City Aesthetics is featured on this guide.",
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function HotSpringsSpasWellnessPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Spas, Wellness and Aesthetic Care in Hot Springs, Arkansas",
              description:
                "A local guide to spas, bathhouses, wellness businesses, aesthetic care, facials, body sculpting, thermal baths, resort spas, massage, salon services, and relaxation in Hot Springs, Arkansas.",
              itemListElement: [featuredBusiness, ...spaBusinesses].map(
                (place, index) => ({
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
                })
              ),
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
          alt="Spas, bathhouses, wellness, and aesthetic care in Hot Springs Arkansas"
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
              Spas, Wellness & Aesthetic Care
            </p>

            <h1 className="text-white">
              Relax, reset, and find the wellness side of Hot Springs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 !text-white/82">
              From historic thermal bathhouses to modern aesthetic care, Hot
              Springs has options for soaking, massage, facials, skin health,
              body sculpting, resort spas, and wellness-focused visits.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
                style={{ color: "var(--green)" }}
              >
                Featured Wellness Business
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
              Some visitors come for the historic bathhouse experience, some
              want a resort spa day, and some want modern skin, body, and
              aesthetic care while they are in town. Local wellness suggestions
              are also being worked into the broader business guide, including
              massage, facials, color analysis, day spa options, and smaller
              wellness stops visitors may want to compare before booking.
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
            <p className="hero-eyebrow">Featured Partner</p>

            <h2>Featured Hot Springs aesthetics and wellness business</h2>

            <p>
              A closer look at a local Hot Springs business offering
              personalized skin health, regenerative aesthetics, body sculpting,
              and consultation-first care.
            </p>
          </div>

          <article
            className="overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)]"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <Link
                href={featuredBusiness.href}
                {...businessClickTracking({
                  action: "view-details",
                  business: featuredBusiness.name,
                  page: "/hot-springs-spas-wellness",
                  placement: "spas-wellness-featured-partner-image",
                  placementType: "paid",
                })}
                className="group relative block min-h-[360px] overflow-hidden bg-[color:var(--surface-strong)] lg:min-h-[620px]"
              >
                <Image
                  src={featuredBusiness.image}
                  alt={`${featuredBusiness.name} in Hot Springs Arkansas`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-black/72 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                  Featured Wellness Business
                </div>

             <div className="absolute bottom-5 left-5 right-5">
<div className="absolute bottom-5 left-5 right-5">
  <p
    className="max-w-md text-sm font-black uppercase tracking-[0.18em]"
    style={{ color: "#ffffff" }}
  >
    Spa City Aesthetics
  </p>

  <p
    className="mt-2 max-w-md text-2xl font-semibold leading-tight"
    style={{ color: "#ffffff" }}
  >
    Regenerative skin, body, and aesthetics care in Hot Springs.
  </p>
</div>
</div>
              </Link>

              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <p
                  className="mb-3 text-sm font-black uppercase tracking-[0.22em]"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {featuredBusiness.label}
                </p>

                <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                  {featuredBusiness.name}
                </h2>

                <p
                  className="mt-4 text-sm font-black uppercase tracking-[0.14em]"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {featuredBusiness.type}
                </p>

                <p className="mt-5 text-lg leading-8">
                  {featuredBusiness.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div
                    className="rounded-2xl border bg-white/55 p-4"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    <p
                      className="text-xs font-black uppercase tracking-[0.16em]"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Location
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      {featuredBusiness.address}
                    </p>
                  </div>

                  <a
                    href={featuredBusiness.phoneHref}
                    {...businessClickTracking({
                      action: "call",
                      business: featuredBusiness.name,
                      page: "/hot-springs-spas-wellness",
                      placement: "spas-wellness-featured-partner",
                      placementType: "paid",
                    })}
                    className="rounded-2xl border bg-white/55 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    <p
                      className="text-xs font-black uppercase tracking-[0.16em]"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Call
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      {featuredBusiness.phone}
                    </p>
                  </a>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div
                    className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    Personalized facial analysis
                  </div>

                  <div
                    className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    Amy Jo Stader studied in South Korea
                  </div>

                  <div
                    className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    Regenerative skin treatments
                  </div>

                  <div
                    className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    Body sculpting and lymphatic support
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={featuredBusiness.href}
                    {...businessClickTracking({
                      action: "view-details",
                      business: featuredBusiness.name,
                      page: "/hot-springs-spas-wellness",
                      placement: "spas-wellness-featured-partner",
                      placementType: "paid",
                    })}
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
                    style={{
                      background: "var(--accent-dark)",
                      color: "#ffffff",
                    }}
                  >
                    Read the Spotlight
                  </Link>

                  <a
                    href={featuredBusiness.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...businessClickTracking({
                      action: "website",
                      business: featuredBusiness.name,
                      page: "/hot-springs-spas-wellness",
                      placement: "spas-wellness-featured-partner",
                      placementType: "paid",
                    })}
                    className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      background: "#ffffff",
                      color: "var(--green)",
                    }}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="spa-guide" className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Spa & Wellness Guide</p>

            <h2>More spa and wellness stops around Hot Springs</h2>

            <p>
              A few other places to consider for thermal baths, resort spa
              services, massage, salon services, body treatments, facials, and
              classic Hot Springs relaxation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {spaBusinesses.map((business) => (
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
<section className="section pt-0 bg-white/35">
  <div className="container">
    <div
      className="rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-9"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="hero-eyebrow">Local Wellness Support Note</p>

          <h2>Not every wellness resource is a spa day.</h2>

          <p className="mt-4 leading-7" style={{ color: "var(--muted)" }}>
            Hot Springs wellness can also include family support, maternity
            resources, postpartum care, and services that do not fit cleanly into
            a bathhouse or spa listing. This note is included separately so the
            main guide stays focused on spas, bathhouses, and aesthetic care.
          </p>
        </div>

        <div className="grid gap-4">
          {wellnessSupportNotes.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border p-6"
              style={{
                background: "rgba(255,255,255,0.68)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="mb-2 text-xs font-black uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-dark)" }}
              >
                {item.type}
              </p>

              <h3 className="text-2xl font-semibold leading-tight">
                {item.name}
              </h3>

              <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>
                {item.description}
              </p>

              <p className="mt-3 text-sm leading-6" style={{ color: "var(--muted)" }}>
                {item.note}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border px-5 py-2 text-sm font-bold transition hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  background: "#ffffff",
                  color: "var(--green)",
                }}
              >
                Search Current Info
              </a>
            </article>
          ))}
        </div>
      </div>
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
              Quick answers for visitors comparing bathhouses, modern aesthetics
              studios, resort spas, and wellness stops.
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
