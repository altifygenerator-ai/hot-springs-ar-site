import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Rainy Day Near Bathhouse Row | Indoor Hot Springs Arkansas Ideas",
  description:
    "Plan a rainy day near Bathhouse Row in Hot Springs, Arkansas with bathhouse history, spas, restaurants, shopping, coffee, local finds, hotels, and downtown indoor-friendly stops.",
  keywords: [
    "rainy day near Bathhouse Row",
    "rainy day Hot Springs Arkansas",
    "indoor things to do Hot Springs Arkansas",
    "indoor things to do near Bathhouse Row",
    "Hot Springs rainy day ideas",
    "downtown Hot Springs rainy day",
  ],
};

const quickLinks = [
  { href: "/bathhouse-row", label: "Bathhouse Row" },
  { href: "/shopping-near-bathhouse-row", label: "Shopping Nearby" },
  { href: "/restaurants-near-bathhouse-row", label: "Food Nearby" },
  { href: "/hotels-near-bathhouse-row", label: "Downtown Hotels" },
  { href: "/this-weekend", label: "This Weekend" },
];

const rainyIdeas = [
  {
    eyebrow: "History",
    title: "Start with bathhouse history",
    text:
      "Bathhouse Row and the Fordyce visitor center make sense when the weather changes because you can still connect with the main Hot Springs story without planning a full outdoor day.",
    href: "/bathhouse-row",
  },
  {
    eyebrow: "Food",
    title: "Turn the day into a food crawl",
    text:
      "Breakfast, lunch, breweries, pizza, historic bars, coffee, and dinner stops can carry a rainy downtown day better than trying to force outdoor plans.",
    href: "/restaurants-near-bathhouse-row",
  },
  {
    eyebrow: "Shopping",
    title: "Browse shops and antiques nearby",
    text:
      "Downtown shopping, small local stops, books, sweets, antiques, and nearby finds work well when trails, gardens, lakes, or outdoor attractions are not ideal.",
    href: "/shopping-near-bathhouse-row",
  },
  {
    eyebrow: "Spas",
    title: "Lean into the bathhouse side of town",
    text:
      "A rainy day can be a good time to look at thermal baths, spa stops, historic buildings, and the slower wellness side of Hot Springs.",
    href: "/bathhouse-row",
  },
  {
    eyebrow: "Family Backup",
    title: "Keep a kid-friendly backup ready",
    text:
      "Families can use nearby food, shops, sweets, events, and simple local stops instead of trying to pack the day with outdoor activities.",
    href: "/hot-springs-family-friendly",
  },
  {
    eyebrow: "Events",
    title: "Check what is still happening",
    text:
      "Some events, markets, live music, performances, and community activities still work when the weather is not perfect.",
    href: "/this-weekend",
  },
];

const samplePlans = [
  {
    title: "Slow downtown morning",
    text:
      "Start with breakfast or coffee, visit Bathhouse Row, stop inside the visitor center, then browse nearby shops before lunch.",
  },
  {
    title: "Food and shopping afternoon",
    text:
      "Pick a restaurant near Bathhouse Row, add downtown shops or antiques, then check events or local finds if the rain lets up.",
  },
  {
    title: "Relaxed overnight plan",
    text:
      "Stay downtown, keep the car parked, use restaurants and bathhouse stops close by, and save Lake Hamilton or garden plans for clearer weather.",
  },
];

const faqs = [
  {
    question: "What can you do near Bathhouse Row when it rains?",
    answer:
      "Visitors can explore bathhouse history, visit indoor-friendly downtown stops, eat nearby, browse shops and antiques, look for local finds, check events, and plan around hotels or spas near Bathhouse Row.",
  },
  {
    question: "Is Bathhouse Row good for a rainy day?",
    answer:
      "Yes. Bathhouse Row works well on a rainy day because it connects history, bathhouses, restaurants, shops, hotels, and indoor-friendly downtown stops in a compact area.",
  },
  {
    question: "Should I still visit downtown Hot Springs if it rains?",
    answer:
      "Downtown can still be worth visiting in rainy weather if you plan around food, bathhouse history, shopping, local finds, spas, and flexible stops instead of relying only on outdoor attractions.",
  },
];

export default function RainyDayNearBathhouseRowPage() {
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
        eyebrow="RAINY DAY HOT SPRINGS"
        title="Rainy Day Near Bathhouse Row"
        description="Use Bathhouse Row, downtown restaurants, shops, spas, local finds, hotels, and events to build a good Hot Springs day even when the weather changes."
        image="/images/businesses/fordyce-bathhouse.jpg"
        primaryCta={{ label: "Bathhouse Row Guide", href: "/bathhouse-row" }}
        secondaryCta={{ label: "Food Nearby", href: "/restaurants-near-bathhouse-row" }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Weather Backup Guide</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Rain does not have to waste a Hot Springs day.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                Hot Springs has plenty of outdoor draws, but the downtown core can still work when the weather turns. Bathhouse Row gives visitors history, food, shops, spas, hotels, and indoor-friendly stops close together.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This page is built for the practical version of trip planning: what to do when trails, lakes, gardens, or walking-heavy plans need a backup.
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
                <p className="hero-eyebrow">Rainy Day Shortcuts</p>
                <h3>Start with downtown, then keep the plan flexible.</h3>
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
            <p className="hero-eyebrow">Indoor-Friendly Ideas</p>
            <h2>Things to do near Bathhouse Row when it rains.</h2>
            <p>
              These ideas keep visitors close to downtown so the day still feels planned without depending on perfect weather.
            </p>
          </div>

          <div className="categories-grid">
            {rainyIdeas.map((item) => (
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
                  Simple Rainy Day Plans
                </p>
                <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: "#ffffff" }}>
                  Keep the day close, dry, and easy to adjust.
                </h2>
              </div>

              <div className="grid gap-3">
                {samplePlans.map((plan) => (
                  <div key={plan.title} className="rounded-2xl border p-5" style={{ background: "rgba(255,255,255,0.09)", borderColor: "rgba(255,255,255,0.16)" }}>
                    <h3 className="text-xl font-semibold leading-tight" style={{ color: "#ffffff" }}>
                      {plan.title}
                    </h3>
                    <p className="mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                      {plan.text}
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
            <h2>Rainy Day Near Bathhouse Row FAQs</h2>
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
