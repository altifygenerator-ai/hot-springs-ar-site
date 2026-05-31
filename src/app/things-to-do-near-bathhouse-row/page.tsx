import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Things To Do Near Bathhouse Row | Downtown Hot Springs Arkansas Guide",
  description:
    "Plan things to do near Bathhouse Row in downtown Hot Springs, Arkansas, including historic bathhouses, restaurants, shops, local finds, Hot Springs National Park, hotels, and walkable downtown stops.",
  keywords: [
    "things to do near Bathhouse Row",
    "Bathhouse Row things to do",
    "downtown Hot Springs things to do",
    "things to do near Hot Springs National Park",
    "Bathhouse Row Hot Springs Arkansas",
    "downtown Hot Springs Arkansas guide",
  ],
};

const quickLinks = [
  { href: "/bathhouse-row", label: "Bathhouse Row" },
  { href: "/restaurants-near-bathhouse-row", label: "Nearby Food" },
  { href: "/hotels-near-bathhouse-row", label: "Nearby Hotels" },
  { href: "/shopping-near-bathhouse-row", label: "Shopping Nearby" },
  { href: "/this-weekend", label: "This Weekend" },
];

const nearbyStops = [
  {
    eyebrow: "Start Here",
    title: "Walk Bathhouse Row",
    text:
      "Start with the historic bathhouse buildings, Central Avenue sidewalks, thermal water history, and the downtown stretch most visitors want to see first.",
    href: "/bathhouse-row",
  },
  {
    eyebrow: "History",
    title: "Visit the Fordyce Bathhouse",
    text:
      "The Fordyce is one of the easiest ways to understand why Hot Springs became known for bathhouses, mineral water, architecture, and health tourism.",
    href: "/bathhouse-row",
  },
  {
    eyebrow: "Food",
    title: "Eat near Bathhouse Row",
    text:
      "Breakfast, pizza, breweries, historic bars, casual lunch spots, and dinner options are close enough to work into the same downtown visit.",
    href: "/restaurants-near-bathhouse-row",
  },
  {
    eyebrow: "Local Finds",
    title: "Look for small downtown stops",
    text:
      "Books, sweets, coffee, shops, mall-level finds, and local places around The Arlington can make the visit feel less like a checklist.",
    href: "/hot-springs-bathhouse-row-local-finds",
  },
  {
    eyebrow: "Stay Close",
    title: "Make it a walkable trip",
    text:
      "Downtown hotels near Bathhouse Row make sense when you want restaurants, spas, shops, national park stops, and history close together.",
    href: "/hotels-near-bathhouse-row",
  },
  {
    eyebrow: "Events",
    title: "Check what is happening soon",
    text:
      "Before you lock in the day, check the events and weekend pages for markets, music, family activities, festivals, and downtown happenings.",
    href: "/this-weekend",
  },
];

const dayPlans = [
  {
    title: "First-time downtown visit",
    text:
      "Start with Bathhouse Row, walk Central Avenue, stop inside the visitor center, pick food nearby, and leave time for shops or local finds.",
  },
  {
    title: "Food and history afternoon",
    text:
      "Pair a bathhouse or museum stop with lunch, coffee, a brewery, or dinner downtown so the day feels full without driving all over town.",
  },
  {
    title: "Rainy or slower day",
    text:
      "Use indoor-friendly stops like bathhouse history, restaurants, shops, galleries, local finds, and nearby lodging instead of depending on outdoor plans.",
  },
];

const faqs = [
  {
    question: "What can you do near Bathhouse Row?",
    answer:
      "Visitors can walk the historic bathhouses, visit the Fordyce Bathhouse visitor center, eat downtown, browse shops, visit spas, explore Hot Springs National Park stops, check local finds, and stay in nearby downtown hotels.",
  },
  {
    question: "Is Bathhouse Row a good place to start in Hot Springs?",
    answer:
      "Yes. Bathhouse Row is one of the best starting points for first-time visitors because it connects Hot Springs history, downtown walking, restaurants, shops, spas, and national park stops in one area.",
  },
  {
    question: "Can you spend a full day around Bathhouse Row?",
    answer:
      "You can build a full downtown day around Bathhouse Row if you include a bathhouse or visitor center stop, food, shopping, local finds, nearby hotels, and current events or weekend activities.",
  },
];

export default function ThingsToDoNearBathhouseRowPage() {
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
        eyebrow="DOWNTOWN HOT SPRINGS"
        title="Things To Do Near Bathhouse Row"
        description="Build a downtown Hot Springs day around Bathhouse Row, historic bathhouses, restaurants, shopping, local finds, hotels, events, and walkable national park stops."
        image="/images/businesses/bathhouse-row.webp"
        primaryCta={{ label: "Bathhouse Row Guide", href: "/bathhouse-row" }}
        secondaryCta={{ label: "Food Nearby", href: "/restaurants-near-bathhouse-row" }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Start Downtown</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Bathhouse Row is more than one stop. It is the easiest way to plan downtown.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                A good Bathhouse Row visit usually turns into a bigger downtown day. You can walk historic sidewalks, stop inside bathhouses, grab food, browse shops, look for local finds, and still stay close to Hot Springs National Park.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide keeps the focus practical: what to do nearby, where to go next, and how to turn the area around Bathhouse Row into a simple Hot Springs plan.
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
                <p className="hero-eyebrow">Plan Around Bathhouse Row</p>
                <h3>Use these nearby guides to build the rest of the day.</h3>
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
            <p className="hero-eyebrow">Nearby Stops</p>
            <h2>Easy things to do around Bathhouse Row.</h2>
            <p>
              Start with the historic core, then add food, shops, hotels, local finds, or events depending on your day.
            </p>
          </div>

          <div className="categories-grid">
            {nearbyStops.map((item) => (
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
                  Simple Day Plans
                </p>
                <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: "#ffffff" }}>
                  Build the area into a real downtown afternoon.
                </h2>
              </div>

              <div className="grid gap-3">
                {dayPlans.map((plan) => (
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
            <h2>Things To Do Near Bathhouse Row FAQs</h2>
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
