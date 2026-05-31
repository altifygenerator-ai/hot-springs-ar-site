import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Shopping Near Bathhouse Row | Downtown Hot Springs Arkansas Shops",
  description:
    "Find shopping near Bathhouse Row in Hot Springs, Arkansas, including antique stores, local finds, books, sweets, downtown browsing, gifts, vintage stops, and nearby shopping guides.",
  keywords: [
    "shopping near Bathhouse Row",
    "Bathhouse Row shopping",
    "downtown Hot Springs shopping",
    "Hot Springs antique stores downtown",
    "shops near Bathhouse Row Hot Springs",
    "Hot Springs local shops",
  ],
};

const quickLinks = [
  { href: "/bathhouse-row", label: "Bathhouse Row" },
  { href: "/hot-springs-antique-thrift-flea-markets", label: "Antique & Flea Guide" },
  { href: "/hot-springs-bathhouse-row-local-finds", label: "Local Finds" },
  { href: "/restaurants-near-bathhouse-row", label: "Food Nearby" },
  { href: "/this-weekend", label: "This Weekend" },
];

const shoppingAngles = [
  {
    eyebrow: "Downtown Browsing",
    title: "Start around Bathhouse Row and Central Avenue",
    text:
      "Visitors already walking the historic downtown core can add shops, sweets, books, gifts, antiques, galleries, and local finds without turning the day into a separate shopping trip.",
    href: "/hot-springs-bathhouse-row-local-finds",
  },
  {
    eyebrow: "Antiques",
    title: "Historic District Antiques and nearby vintage stops",
    text:
      "Antique and vintage browsing fits the older downtown feel of Hot Springs, especially for visitors who like slow wandering instead of big-box shopping.",
    href: "/hot-springs-antique-stores",
  },
  {
    eyebrow: "Rainy Day",
    title: "Use shopping as a weather backup",
    text:
      "If trails, lakes, or outdoor plans fall through, downtown shops, antiques, coffee, food, and bathhouse history can still make a good Hot Springs day.",
    href: "/rainy-day-near-bathhouse-row",
  },
  {
    eyebrow: "Local Finds",
    title: "Look for the small stops visitors miss",
    text:
      "Some of the best nearby shopping is not about one huge store. It is the smaller downtown stops, hotel-level finds, sweets, books, and local places people walk past too quickly.",
    href: "/hot-springs-local-spots",
  },
  {
    eyebrow: "Full Shopping Guide",
    title: "Branch out into flea markets and thrift stores",
    text:
      "If you want a bigger shopping day, use the full antique, thrift, and flea market guide for vendor malls, resale shops, and places outside the downtown core.",
    href: "/hot-springs-antique-thrift-flea-markets",
  },
  {
    eyebrow: "Food Pairing",
    title: "Shop first, then eat nearby",
    text:
      "Downtown shopping works best when you pair it with breakfast, lunch, coffee, a brewery, or dinner near Bathhouse Row.",
    href: "/restaurants-near-bathhouse-row",
  },
];

const tips = [
  {
    title: "Do not treat downtown shopping like a mall.",
    text:
      "The better experience is wandering a few blocks, stepping into small places, stopping for food, and letting the day stay loose.",
  },
  {
    title: "Check hours before making one shop the whole plan.",
    text:
      "Small local shops, antique stores, and downtown stops can change hours, especially around seasons, holidays, and slower weekdays.",
  },
  {
    title: "Pair it with Bathhouse Row history.",
    text:
      "Shopping near Bathhouse Row feels more worthwhile when it is part of a downtown walk, bathhouse stop, meal, or rainy-day backup plan.",
  },
];

const faqs = [
  {
    question: "Is there shopping near Bathhouse Row?",
    answer:
      "Yes. Visitors can find downtown shops, antiques, gifts, sweets, books, local finds, and nearby browsing around Bathhouse Row, Central Avenue, and the surrounding downtown streets.",
  },
  {
    question: "What kind of shopping is best near Bathhouse Row?",
    answer:
      "The area works best for walkable browsing, local shops, antiques, small gifts, sweets, books, hotel-level finds, and stops that pair naturally with food or Bathhouse Row history.",
  },
  {
    question: "Should I use downtown shopping as a rainy day plan?",
    answer:
      "Yes. Downtown shopping, restaurants, bathhouse history, coffee, antiques, and local finds make a good backup when outdoor plans around Hot Springs are not ideal.",
  },
];

export default function ShoppingNearBathhouseRowPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <Hero
        eyebrow="DOWNTOWN SHOPPING"
        title="Shopping Near Bathhouse Row"
        description="Browse downtown Hot Springs shops, antiques, gifts, sweets, books, local finds, and rainy-day stops near Bathhouse Row and Central Avenue."
        image="/images/shopping/historic-district-antiques.jpg"
        primaryCta={{ label: "Shopping Guide", href: "/hot-springs-antique-thrift-flea-markets" }}
        secondaryCta={{ label: "Bathhouse Row", href: "/bathhouse-row" }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Near Bathhouse Row</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Shopping downtown works best when it is part of the whole visit.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                Bathhouse Row is not just history and bathhouses. The downtown area also gives visitors a chance to slow down with local shops, antique browsing, sweets, books, gifts, food, and easy stops close to the main walkable stretch.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This page helps connect downtown shopping with the rest of a Hot Springs day: Bathhouse Row, restaurants, local finds, events, and rainy-day plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[28px] border p-5 shadow-sm" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="hero-eyebrow">Plan Your Downtown Stops</p>
                <h3>Pair shopping with food, history, and nearby local finds.</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="btn-secondary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Shopping Paths</p>
            <h2>Ways to shop near Bathhouse Row.</h2>
            <p>
              Use these guide paths depending on whether you want a quick downtown browse, antique shopping, a rainy-day plan, or a bigger Hot Springs shopping day.
            </p>
          </div>

          <div className="categories-grid">
            {shoppingAngles.map((item) => (
              <Link key={item.title} href={item.href} className="category-card">
                <div className="category-content">
                  <p className="hero-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>View guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[34px] border p-8 shadow-[var(--shadow)] md:p-10" style={{ background: "linear-gradient(135deg, var(--green) 0%, #1d332a 62%, var(--accent-dark) 100%)", borderColor: "rgba(255,255,255,0.14)" }}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.72)" }}>
                  Local Shopping Notes
                </p>
                <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: "#ffffff" }}>
                  Make it part of the day, not the whole itinerary.
                </h2>
              </div>

              <div className="grid gap-3">
                {tips.map((tip) => (
                  <div key={tip.title} className="rounded-2xl border p-5" style={{ background: "rgba(255,255,255,0.09)", borderColor: "rgba(255,255,255,0.16)" }}>
                    <h3 className="text-xl font-semibold leading-tight" style={{ color: "#ffffff" }}>
                      {tip.title}
                    </h3>
                    <p className="mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                      {tip.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Quick Questions</p>
            <h2>Shopping Near Bathhouse Row FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm" style={{ borderColor: "var(--border)" }}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
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
