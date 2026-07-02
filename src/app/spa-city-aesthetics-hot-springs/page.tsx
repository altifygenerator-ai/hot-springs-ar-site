// src/app/spa-city-aesthetics-hot-springs/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Spa City Aesthetics in Hot Springs, Arkansas | Regenerative Skin, Body Sculpting & Aesthetic Care",
  description:
    "Spa City Aesthetics in Hot Springs, Arkansas offers personalized facial analysis, regenerative skin treatments, Glass Skin Sculpt Facial, body sculpting, lymphatic therapy, hair restoration, and non-invasive aesthetic care shaped by Korean and European techniques and Amy Jo Stader’s study in South Korea.",
  alternates: {
    canonical: "/spa-city-aesthetics-hot-springs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const business = {
  name: "Spa City Aesthetics",
  phone: "501-443-3883",
  phoneHref: "tel:5014433883",
  address: "998 Shady Grove Rd. Suite B, Hot Springs, AR 71901",
  website: "https://spacityaesthetics.com/",
  booking: "https://booking.mangomint.com/spacityaesthetics?serviceId=10",
  treatments: "https://spacityaesthetics.com/spa-treatments/",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Spa+City+Aesthetics+998+Shady+Grove+Rd+Suite+B+Hot+Springs+AR+71901",
  hours: [
    "Tuesday to Friday: 10:00 AM to 6:00 PM",
    "Saturday: 10:00 AM to 3:00 PM",
    "Sunday and Monday: Closed",
  ],
};

const images = {
  hero: "/images/businesses/spa-city-aesthetics/spa-city-aesthetics-1.png",
  interior: "/images/businesses/spa-city-aesthetics/spa-city-aesthetics-2.png",
  treatment: "/images/businesses/spa-city-aesthetics/spa-city-aesthetics-3.png",
  amy: "/images/businesses/spa-city-aesthetics/spa-city-aesthetics-4.png",
};

const treatments = [
  {
    title: "Regenerative Facial Treatments",
    text: "Advanced facial treatments designed to improve skin quality, structure, and long-term vitality.",
  },
  {
    title: "Exosome Facial Therapy",
    text: "Regenerative facial therapy that supports skin repair, collagen production, and overall skin health.",
  },
  {
    title: "Skin Infusion Therapy",
    text: "A targeted infusion technique designed to deliver active ingredients into the skin to improve hydration, tone, and regeneration.",
  },
  {
    title: "Advanced Microchanneling",
    text: "A collagen-supporting treatment focused on improving texture, firmness, and overall skin quality.",
  },
  {
    title: "Body Sculpting & Skin Tightening",
    text: "Non-invasive body treatments designed to improve tone, contour, circulation, and skin firmness.",
  },
  {
    title: "Hair Restoration & Scalp Therapy",
    text: "Regenerative scalp and hair treatments designed to support scalp health, follicle function, circulation, and long-term scalp balance.",
  },
];

const highlights = [
  "Non-invasive advanced treatments",
  "Personalized consultation and facial analysis",
  "Regenerative aesthetic focus",
  "Amy Jo Stader studied in South Korea",
  "Korean and European technique integration",
  "Luxury care in a calm, private setting",
];

const glassSkinBenefits = [
  "Reduces puffiness and fluid retention",
  "Lifts and defines facial contours",
  "Improves skin texture and firmness",
  "Supports long-term skin health through bioregulation",
];

const programPoints = [
  {
    title: "Foundation Protocol",
    text: "A clinical reset designed to reduce inflammation, improve circulation, support detoxification, and prepare the skin and body for deeper corrective work.",
  },
  {
    title: "Renewal Protocol",
    text: "A corrective phase focused on skin firmness, texture, tone, body contouring, collagen stimulation, and cellular regeneration.",
  },
  {
    title: "Longevity Protocol",
    text: "A regenerative system designed for deep tissue support, advanced skin rejuvenation, structural refinement, body optimization, and long-term maintenance.",
  },
];

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Spa City Aesthetics begins with consultation and facial analysis to understand your skin, structure, and long-term goals before guiding you into a treatment plan.",
  },
  {
    question: "Are the treatments invasive?",
    answer:
      "Spa City Aesthetics focuses on advanced non-invasive treatments, with many services designed around minimal downtime and natural-looking results.",
  },
  {
    question: "Can treatments be combined?",
    answer:
      "Yes. Treatments are often combined into structured programs that may include facial treatments, body therapies, peptide support, lymphatic work, and personalized skincare.",
  },
  {
    question: "Where is Spa City Aesthetics located?",
    answer:
      "Spa City Aesthetics is located at 998 Shady Grove Rd. Suite B in Hot Springs, Arkansas.",
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
                "A modern Hot Springs aesthetics studio offering personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic therapy, hair restoration, scalp therapy, and non-invasive skin health services shaped by Korean and European techniques and Amy Jo Stader’s study in South Korea.",
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
              Modern aesthetics in America&apos;s Original Spa City.
            </h1>

            <p className="max-w-2xl text-lg leading-8 !text-white/82">
              Spa City Aesthetics offers non-invasive, personalized, and
              result-focused care inspired by Korean and European regenerative
              techniques, modern skin science, and the healing traditions of Hot
              Springs.
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
                A Regenerative Approach to Aesthetics
              </p>

              <h2 className="mb-6 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Designed to support skin structure, circulation, contour, and
                long-term rejuvenation.
              </h2>

              <div className="space-y-5 text-lg leading-8">
                <p style={{ color: "var(--text)" }}>
                  Spa City Aesthetics offers advanced, non-invasive treatments
                  designed to support skin structure, circulation, body contour,
                  and long-term rejuvenation.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  Each treatment is performed with precision and intention,
                  blending Korean and European techniques with modern
                  regenerative technologies to support natural, refined results.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  The philosophy reflects the wellness identity of Hot Springs:
                  longevity, balance, elevated skin health, and care that is
                  guided instead of rushed.
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
                  Begin with facial analysis.
                </h3>

                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  Every client begins with a personalized consultation and
                  facial analysis so the treatment plan can be guided by skin,
                  structure, body goals, and long-term results.
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
              Advanced Regenerative Treatments
            </p>

            <h2>Skin, body, scalp, and longevity-focused care.</h2>

            <p>
              Spa City Aesthetics offers treatment categories built around skin
              quality, structure, tone, hydration, regeneration, contouring,
              scalp health, and long-term maintenance.
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
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="flex items-center justify-center bg-black/5 p-4 md:p-6 lg:min-h-[560px]">
          <Image
            src={images.treatment}
            alt="Glass Skin Sculpt Facial before and after result at Spa City Aesthetics"
            width={900}
            height={1200}
            sizes="(max-width: 768px) 100vw, 44vw"
            className="h-auto max-h-[760px] w-full rounded-[1.35rem] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--accent-dark)" }}
          >
            Exclusively at Spa City Aesthetics
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
            Glass Skin Sculpt Facial
          </h2>

          <div className="space-y-5 text-lg leading-8">
            <p style={{ color: "var(--text)" }}>
              The Glass Skin Sculpt Facial is one of Spa City
              Aesthetics&apos; most requested treatments, designed to lift,
              sculpt, and refine the skin using advanced mesotherapy with Nano
              Infusion, Lymphatic Therapy, and Homeopathic Bioregulation.
            </p>

            <p style={{ color: "var(--muted)" }}>
              The treatment begins by reducing puffiness and fluid retention
              through targeted lymphatic sculpting, then rebuilds the skin with
              collagen support and regenerative stimulation.
            </p>

            <p style={{ color: "var(--muted)" }}>
              The goal is a naturally lifted, smoother, and more refined
              appearance, never overdone, always intentional.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {glassSkinBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border bg-white/55 p-4 text-sm font-semibold"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.treatments}
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
                Amy Jo Stader brings guided, one-on-one skin and longevity care
                to Hot Springs.
              </h2>

              <div className="space-y-5 text-lg leading-8">
                <p style={{ color: "var(--text)" }}>
                  Spa City Aesthetics was founded by Amy Jo Stader, a skin and
                  longevity specialist focused on natural-looking results,
                  cellular restoration, skin structure, and long-term skin
                  health.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  Amy&apos;s training includes study in South Korea, a major
                  selling point for the studio and a natural fit for Spa City
                  Aesthetics&apos; focus on refined skin health, facial analysis,
                  sculpting, regenerative care, and intentional treatment
                  planning.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  The experience is designed to feel calm, private, and
                  personalized, with every treatment plan built around the
                  individual client rather than a one-size-fits-all service
                  list.
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
                  South Korea-trained skin and longevity care.
                </h3>

                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  Amy&apos;s study in South Korea supports the studio&apos;s
                  focus on facial analysis, skin quality, sculpting,
                  regenerative treatments, and natural, refined results.
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
                Why Spa City Aesthetics
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Designed for long-term results, not rushed treatments.
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
          <div className="section-heading">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Signature Programs
            </p>

            <h2>A structured approach to lasting results.</h2>

            <p>
              Spa City Aesthetics structures care as a progression, guiding the
              skin and body through restoration, renewal, and long-term
              maintenance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programPoints.map((program) => (
              <article
                key={program.title}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="mb-3 text-2xl font-semibold">
                  {program.title}
                </h3>

                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  {program.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="grid gap-8 rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm md:p-9 lg:grid-cols-[1fr_0.85fr]"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Begin Your Consultation
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
                Spa City Aesthetics
              </h2>

              <div className="grid gap-5 text-base leading-7 md:grid-cols-2">
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Address
                  </p>
                  <p className="mt-2" style={{ color: "var(--muted)" }}>
                    {business.address}
                  </p>
                </div>

                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
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
                  <p
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
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
              className="rounded-[2rem] border bg-white/50 p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                What To Expect
              </p>

              <h3 className="mb-4 text-3xl font-semibold leading-tight">
                Start with facial analysis, then build the right plan.
              </h3>

              <p className="leading-7" style={{ color: "var(--muted)" }}>
                Rather than choosing from a generic menu, clients are guided
                into treatments and programs suited to their skin, body, and
                long-term goals. Plans may combine facial treatments, body
                therapies, lymphatic support, peptide support, and personalized
                skincare.
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

      <section className="section bg-white/35">
        <div className="container">
          <div className="section-heading">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Common Questions
            </p>

            <h2>Planning a first visit to Spa City Aesthetics?</h2>

            <p>
              A quick guide for people learning about the studio, the
              consultation-first approach, and how treatments are planned.
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

                <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}