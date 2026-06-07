// src/app/spa-city-aesthetics-hot-springs/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Spa City Aesthetics in Hot Springs, Arkansas | Regenerative Skin, Body Sculpting & Aesthetic Care",
  description:
    "Spa City Aesthetics in Hot Springs, Arkansas offers personalized facial analysis, regenerative skin treatments, Glass Skin Sculpt Facial, body sculpting, lymphatic therapy, hair restoration, and non-invasive aesthetic care.",
  alternates: {
    canonical: "/spa-city-aesthetics-hot-springs",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const business = {
  name: "Spa City Aesthetics",
  phone: "501-443-3883",
  phoneHref: "tel:5014433883",
  address: "998 Shady Grove Rd. Suite B, Hot Springs, AR 71901",
  website: "https://spacityaesthetics.com/",
  booking: "https://spacityaesthetics.com/",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Spa+City+Aesthetics+998+Shady+Grove+Rd+Suite+B+Hot+Springs+AR+71901",
  hours: [
    "Tuesday to Friday: 10:00 AM to 6:00 PM",
    "Saturday: 10:00 AM to 3:00 PM",
    "Sunday and Monday: Closed",
  ],
};

/*
  Temporary setup:
  These all use existing images so the page will not break before Amy sends photos.

  After you add her real images, change these to:
  hero: "/images/businesses/spa-city-aesthetics/hero.webp",
  interior: "/images/businesses/spa-city-aesthetics/interior.webp",
  treatment: "/images/businesses/spa-city-aesthetics/treatment.webp",
  amy: "/images/businesses/spa-city-aesthetics/amy.webp",
*/
const images = {
  hero: "/images/businesses/bathhouse-row.webp",
  interior: "/images/businesses/bathhouse-row.webp",
  treatment: "/images/businesses/bathhouse-row.webp",
  amy: "/images/businesses/bathhouse-row.webp",
};

const treatments = [
  {
    title: "Regenerative Facial Treatments",
    text: "Advanced facial treatments focused on skin quality, structure, collagen support, hydration, and long-term skin health.",
  },
  {
    title: "Glass Skin Sculpt Facial",
    text: "A signature bioregenerative facial designed to reduce puffiness, support lymphatic sculpting, refine texture, and create a smoother, naturally lifted appearance.",
  },
  {
    title: "Body Sculpting & Skin Tightening",
    text: "Non-invasive body-focused treatments designed to support contouring, firmness, circulation, and a more refined appearance.",
  },
  {
    title: "Lymphatic & Detox Support",
    text: "Treatments that support circulation, fluid movement, puffiness reduction, and a more balanced wellness-focused aesthetic plan.",
  },
  {
    title: "Hair & Scalp Restoration",
    text: "Scalp and hair restoration services using regenerative support, peptide therapy, and targeted treatment planning.",
  },
  {
    title: "Personalized Skin Plans",
    text: "Every client begins with consultation and facial analysis so the treatment direction fits their skin, structure, and long-term goals.",
  },
];

const highlights = [
  "Non-invasive aesthetic treatments",
  "Personalized consultation and facial analysis",
  "Regenerative skin and body care",
  "Korean and European technique inspiration",
  "Calm, private, one-on-one setting",
  "Located in Hot Springs, Arkansas",
];

const faqs = [
  {
    question: "Where is Spa City Aesthetics located?",
    answer:
      "Spa City Aesthetics is located at 998 Shady Grove Rd. Suite B in Hot Springs, Arkansas.",
  },
  {
    question: "What does Spa City Aesthetics offer?",
    answer:
      "Spa City Aesthetics offers regenerative facial treatments, Glass Skin Sculpt Facial, body sculpting, lymphatic and detox support, skin infusion therapy, hair restoration, scalp therapy, peptide-supported rejuvenation, and personalized skincare planning.",
  },
  {
    question: "Do I need a consultation first?",
    answer:
      "Yes. Spa City Aesthetics begins with a personalized consultation and facial analysis so each client can be guided toward the right treatment plan.",
  },
  {
    question: "Is this a traditional day spa?",
    answer:
      "Spa City Aesthetics is more focused on regenerative, non-invasive, result-focused aesthetic care than a standard day spa menu.",
  },
];

export default function SpaCityAestheticsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: business.name,
              description:
                "A modern Hot Springs aesthetics studio offering personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic therapy, hair restoration, and non-invasive skin health services.",
              telephone: business.phone,
              url: business.website,
              address: {
                "@type": "PostalAddress",
                streetAddress: "998 Shady Grove Rd. Suite B",
                addressLocality: "Hot Springs",
                addressRegion: "AR",
                postalCode: "71901",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "Hot Springs",
                addressRegion: "AR",
              },
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

      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src={images.hero}
          alt="Spa City Aesthetics in Hot Springs Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/68 to-black/25" />

        <div className="container relative z-10 flex min-h-[88vh] items-end pb-14 pt-28">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/68 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] !text-white/70">
              Hot Springs Business Spotlight
            </p>

            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              Spa City Aesthetics brings regenerative skin and body care to Hot
              Springs.
            </h1>

            <p className="max-w-2xl text-lg leading-8 !text-white/82">
              A modern aesthetics studio in America&apos;s Original Spa City,
              offering personalized facial analysis, non-invasive skin
              treatments, body sculpting, lymphatic support, and long-term skin
              health programs.
            </p>

           <div className="mt-8 flex flex-wrap gap-3">
  <a
    href={business.booking}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
    style={{
      background: "#ffffff",
      color: "#23382f",
      minWidth: "190px",
    }}
  >
    Book Consultation
  </a>

  <a
    href={business.phoneHref}
    className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition hover:bg-white/10"
    style={{
      borderColor: "rgba(255,255,255,0.35)",
      color: "#ffffff",
    }}
  >
    Call {business.phone}
  </a>

  <a
    href="#feature"
    className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition hover:bg-white/10"
    style={{
      borderColor: "rgba(255,255,255,0.24)",
      color: "#ffffff",
    }}
  >
    Read the Spotlight
  </a>
</div>
          </div>
        </div>
      </section>

      <section id="feature" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Local Wellness Feature
              </p>

              <h2 className="mb-6 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                A more personal, long-term approach to aesthetic care.
              </h2>

              <div className="space-y-5 text-lg leading-8">
                <p style={{ color: "var(--text)" }}>
                  Spa City Aesthetics is built around a consultation-first
                  experience. Instead of sending clients straight into a generic
                  treatment menu, the studio begins with facial analysis,
                  personal goals, skin structure, and a plan designed for
                  lasting, natural-looking results.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  The studio blends regenerative aesthetic care with Hot
                  Springs&apos; long wellness identity, offering advanced
                  non-invasive treatments for skin quality, collagen support,
                  contouring, lymphatic flow, scalp health, and long-term
                  rejuvenation.
                </p>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[460px] bg-[color:var(--surface-strong)]">
                <Image
                  src={images.interior}
                  alt="Spa City Aesthetics treatment space in Hot Springs Arkansas"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  Modern aesthetics in America&apos;s Original Spa City.
                </h3>

                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  Spa City Aesthetics serves clients looking for a refined,
                  non-invasive, and personalized approach to skin and body care
                  in Hot Springs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              What They Offer
            </p>

            <h2>Skin, body, scalp, and longevity-focused care.</h2>

            <p>
              Spa City Aesthetics offers advanced services designed to support
              skin quality, natural structure, circulation, body contouring, and
              long-term aesthetic wellness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  {item.text}
                </p>
              </article>
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
        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <Image
            src={images.treatment}
            alt="Glass Skin Sculpt Facial treatment at Spa City Aesthetics"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
        </div>

        <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--accent-dark)" }}
          >
            Signature Treatment
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
            The Glass Skin Sculpt Facial is the treatment to lead with.
          </h2>

          <div className="space-y-5 text-lg leading-8">
            <p style={{ color: "var(--text)" }}>
              Spa City Aesthetics describes the Glass Skin Sculpt Facial as a
              bioregenerative lymphatic and collagen protocol designed to lift,
              sculpt, reduce puffiness, refine texture, and support long-term
              skin health.
            </p>

            <p style={{ color: "var(--muted)" }}>
              For a launch feature, this gives readers something simple to
              remember. It is not just another facial. It is the signature
              experience that introduces the studio&apos;s bigger approach:
              natural structure, skin quality, refinement, and consistency.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
              style={{
                background: "var(--accent-dark)",
                color: "#ffffff",
              }}
            >
              Explore Treatments
            </a>

            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                color: "var(--green)",
                background: "var(--surface)",
              }}
            >
              Call the Spa
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Meet the Founder
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
                Amy Jo Stader brings a guided, one-on-one approach to skin and
                longevity care.
              </h2>

              <div className="space-y-5 text-lg leading-8">
                <p style={{ color: "var(--text)" }}>
                  Spa City Aesthetics was founded by Amy Jo Stader, a skin and
                  longevity specialist focused on natural-looking results,
                  cellular restoration, skin structure, and long-term skin
                  health.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  The experience is designed to feel calm, private, and
                  personalized, with treatment planning based on each client
                  rather than a one-size-fits-all service list.
                </p>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[520px] bg-[color:var(--surface-strong)]">
                <Image
                  src={images.amy}
                  alt="Amy Jo Stader of Spa City Aesthetics"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  Consultation-first care.
                </h3>

                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  Clients begin with a personalized consultation and facial
                  analysis before being guided into treatments and programs.
                </p>
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
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Why It Stands Out
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                A polished wellness stop for Hot Springs locals and visitors.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-white/50 p-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-semibold" style={{ color: "var(--text)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
  <div className="container">
    <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
      <div
        className="rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-9"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Visit or Book
        </p>

        <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
          Spa City Aesthetics
        </h2>

        <div className="grid gap-5 text-base leading-7 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--accent-dark)" }}>
              Address
            </p>
            <p className="mt-2" style={{ color: "var(--muted)" }}>
              {business.address}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--accent-dark)" }}>
              Phone
            </p>
            <a
              href={business.phoneHref}
              className="mt-2 inline-block font-semibold underline underline-offset-4"
              style={{ color: "var(--green)" }}
            >
              {business.phone}
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--accent-dark)" }}>
              Hours
            </p>

            <ul className="mt-2 grid gap-2 sm:grid-cols-3">
              {business.hours.map((hour) => (
                <li
                  key={hour}
                  className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {hour}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={business.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
            style={{
              background: "var(--accent-dark)",
              color: "#ffffff",
            }}
          >
            Book Consultation
          </a>

          <a
            href={business.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              background: "#ffffff",
              color: "var(--green)",
            }}
          >
            Get Directions
          </a>

          <a
            href={business.website}
            target="_blank"
            rel="noopener noreferrer"
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

      <div
        className="rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-9"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Local Guide Note
        </p>

        <h3 className="mb-4 text-3xl font-semibold leading-tight">
          This page is part of the Hot Springs local business spotlight series.
        </h3>

        <p className="leading-7" style={{ color: "var(--muted)" }}>
          Natural State Tourism Project features local businesses,
          visitor-friendly stops, restaurants, places to stay, wellness
          businesses, attractions, and things to do around Hot Springs,
          Arkansas.
        </p>

        <Link
          href="/local-businesses"
          className="mt-6 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5"
          style={{
            borderColor: "var(--border)",
            background: "#ffffff",
            color: "var(--green)",
          }}
        >
          Browse local businesses
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}