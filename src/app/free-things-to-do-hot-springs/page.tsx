import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Free Things To Do in Hot Springs Arkansas | Bathhouse Row, Trails & Downtown",
  description:
    "Find free things to do in Hot Springs, Arkansas including Bathhouse Row, Hot Springs National Park, the Grand Promenade, hiking trails, scenic drives, downtown exploring, and lake views.",
  keywords: [
    "free things to do in Hot Springs Arkansas",
    "free things to do Hot Springs AR",
    "Hot Springs Arkansas free attractions",
    "Hot Springs National Park free",
    "Bathhouse Row free",
    "Grand Promenade Hot Springs",
    "free hiking Hot Springs Arkansas",
    "free family things to do Hot Springs",
    "downtown Hot Springs free things",
    "budget friendly Hot Springs Arkansas",
  ],
};

const freeStops = [
  {
    title: "Walk Bathhouse Row",
    text: "Start with the historic bathhouse buildings along Central Avenue. You can walk the area, take photos, enjoy the architecture, and get a feel for the old Hot Springs story without paying for anything.",
    href: "/bathhouse-row",
  },
  {
    title: "Visit the Fordyce Bathhouse Visitor Center",
    text: "The Fordyce is one of the best free stops for understanding the history of Hot Springs, the bathhouses, and how the city became known for thermal water.",
    href: "/bathhouse-row",
  },
  {
    title: "Stroll the Grand Promenade",
    text: "The Grand Promenade sits behind Bathhouse Row and gives you a quieter elevated walk with views of downtown, trees, historic buildings, and national park scenery.",
    href: "/bathhouse-row",
  },
  {
    title: "Hike Hot Springs National Park trails",
    text: "Hot Springs National Park has trails close to downtown, so you can add mountain views and outdoor time without needing to drive far or buy tickets.",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    title: "Explore downtown Central Avenue",
    text: "Walk the shops, storefronts, signs, historic buildings, murals, galleries, and downtown streets. Even if you are mostly browsing, it is part of the Hot Springs experience.",
    href: "/explore",
  },
  {
    title: "See the public thermal spring displays",
    text: "There are public places around the park where you can see the thermal water that made Hot Springs famous. Just remember the water is extremely hot.",
    href: "/bathhouse-row",
  },
  {
    title: "Take a scenic drive",
    text: "If you want views without a long hike, a slow drive through the national park and mountain areas can be a simple free way to see more of the city.",
    href: "/explore",
  },
  {
    title: "Head toward Lake Hamilton for views",
    text: "You do not have to book a lake stay to enjoy the area. Drive toward Lake Hamilton, find lake views, and pair it with a meal, sunset, or quick stop.",
    href: "/lake-hamilton",
  },
];

const routeStops = [
  "Start at Bathhouse Row",
  "Visit Fordyce Bathhouse Visitor Center",
  "Walk the Grand Promenade",
  "Browse downtown Central Avenue",
  "Add a short national park trail",
  "End with lake views or dinner nearby",
];

const budgetTips = [
  {
    title: "Spend money where it matters.",
    text: "Use free stops to fill the day, then spend your budget on a good meal, a bathhouse experience, a museum, or a hotel that fits the trip.",
  },
  {
    title: "Group stops by area.",
    text: "Do Bathhouse Row, downtown, the Grand Promenade, and nearby restaurants together instead of driving back and forth across town.",
  },
  {
    title: "Use free stops between reservations.",
    text: "Free activities are perfect between breakfast, lunch, check-in, dinner, or a scheduled spa time.",
  },
];

const faqs = [
  {
    question: "Is Hot Springs National Park free?",
    answer:
      "Yes. Hot Springs National Park does not charge an entrance fee, so visitors can explore Bathhouse Row, trails, the Grand Promenade, and public areas without paying park admission.",
  },
  {
    question: "What are the best free things to do in Hot Springs?",
    answer:
      "Some of the best free things to do in Hot Springs include walking Bathhouse Row, visiting the Fordyce Bathhouse Visitor Center, strolling the Grand Promenade, hiking national park trails, exploring downtown, and seeing public thermal spring displays.",
  },
  {
    question: "Can you walk Bathhouse Row for free?",
    answer:
      "Yes. Visitors can walk Bathhouse Row for free, view the historic bathhouse buildings, take photos, and explore the surrounding downtown and national park area.",
  },
  {
    question: "Are there free family-friendly things to do in Hot Springs?",
    answer:
      "Yes. Families can walk Bathhouse Row, explore the visitor center, take short hikes, visit the Grand Promenade, see public spring displays, and enjoy downtown sightseeing without a major cost.",
  },
];

export default function FreeThingsToDoHotSpringsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Free Things To Do in Hot Springs Arkansas",
              description:
                "A local guide to free things to do in Hot Springs, Arkansas including Bathhouse Row, Hot Springs National Park, trails, downtown, and scenic stops.",
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
        eyebrow="BUDGET-FRIENDLY HOT SPRINGS"
        title="Free Things To Do in Hot Springs, Arkansas"
        description="Explore Bathhouse Row, Hot Springs National Park, the Grand Promenade, downtown streets, hiking trails, scenic drives, lake views, and other free or low-cost stops around Hot Springs."
        image="/images/businesses/bathhouse-row.webp"
        primaryCta={{
          label: "Start With Bathhouse Row",
          href: "/bathhouse-row",
        }}
        secondaryCta={{
          label: "Explore Hot Springs",
          href: "/explore",
        }}
      />

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Free Hot Springs Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                You can see a lot of Hot Springs without spending much.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Hot Springs is one of those places where part of the trip is
                simply walking around and taking it in. Bathhouse Row, downtown,
                the national park, the Grand Promenade, public thermal spring
                displays, trails, and scenic drives can all fit into a
                budget-friendly visit.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                You can still spend money on restaurants, hotels, spas, museums,
                and paid attractions, but this page is focused on the free and
                low-cost stops that help fill out a Hot Springs trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/bathhouse-row" className="btn">
            Bathhouse Row
          </Link>

          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>

          <Link href="/restaurants-near-bathhouse-row" className="btn">
            Downtown Restaurants
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels
          </Link>

          <Link href="/lake-hamilton" className="btn">
            Lake Hamilton
          </Link>
        </div>
      </section>

      {/* ROUTE SECTION */}
      <section className="section">
  <div className="container">
    <div
      className="overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)]"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[color:var(--green)] p-8 text-white md:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white/70">
            Simple Free Day Route
          </p>

          <h2
            className="text-4xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#ffffff" }}
          >
            A full Hot Springs day can start with free stops.
          </h2>

          <p className="mt-5 leading-relaxed text-white/80">
            If you are trying to keep the trip easy and affordable, start
            downtown and build outward. You can see the historic district, learn
            some of the park history, walk a scenic path, and still leave room
            for food or one paid experience later.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/bathhouse-row" className="btn-primary">
              Bathhouse Row Guide
            </Link>

            <Link href="/explore" className="btn-secondary">
              Explore by Area
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <img
            src="/images/businesses/quapaw-baths.jpg"
            alt="Bathhouse Row in Hot Springs Arkansas"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <div className="rounded-[1.5rem] bg-white/92 p-5 shadow-xl backdrop-blur-md md:p-6">
              <p
                className="mb-4 text-sm font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Easy Route
              </p>

              <div className="space-y-3">
                {routeStops.map((stop, index) => (
                  <div key={stop} className="flex items-center gap-3">
                    <div
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                      style={{ background: "var(--green)" }}
                    >
                      {index + 1}
                    </div>

                    <p
                      className="text-sm font-semibold leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      {stop}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
<section className="section">
  <div className="container">
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <div
        className="flex flex-col justify-center rounded-[2rem] border p-8 shadow-sm md:p-10"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <p
          className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Trails, Overlooks & Fresh Air
        </p>

        <h2
          className="text-4xl font-semibold leading-tight md:text-5xl"
          style={{ color: "var(--green)" }}
        >
          Add outdoor time without turning it into a big hike.
        </h2>

        <p className="mt-5 leading-relaxed" style={{ color: "var(--muted)" }}>
          One of the best parts of Hot Springs is how close the outdoor stops are
          to town. You can add a short trail, scenic overlook, quiet walk, or
          mountain drive without needing a full-day hiking plan.
        </p>

        <div className="mt-7 space-y-4">
          <div
            className="rounded-2xl border p-4"
            style={{ borderColor: "var(--border)", background: "rgba(155,95,45,0.06)" }}
          >
            <h3 className="text-xl font-semibold">Short walks</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Good for families, casual visitors, and anyone wanting to stretch
              their legs between meals or downtown stops.
            </p>
          </div>

          <div
            className="rounded-2xl border p-4"
            style={{ borderColor: "var(--border)", background: "rgba(155,95,45,0.06)" }}
          >
            <h3 className="text-xl font-semibold">Scenic views</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Look for overlooks, mountain roads, and park areas that give you a
              bigger view of Hot Springs without spending extra money.
            </p>
          </div>

          <div
            className="rounded-2xl border p-4"
            style={{ borderColor: "var(--border)", background: "rgba(155,95,45,0.06)" }}
          >
            <h3 className="text-xl font-semibold">Easy nature reset</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Use the national park as a quiet break from traffic, shopping,
              restaurants, and the busier parts of downtown.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/things-to-do-in-hot-springs-ar" className="btn-primary">
            More Things To Do
          </Link>

          <Link href="/explore" className="btn-secondary">
            Explore by Area
          </Link>
        </div>
      </div>

      <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
        <img
          src="/images/businesses/hot-springs-national-park.webp"
          alt="Hot Springs National Park trails and scenery"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Free Outdoor Stops
          </p>

          <h2
            className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#ffffff" }}
          >
            The park gives you more than just Bathhouse Row.
          </h2>

          <p
            className="mt-4 max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            Trails, overlooks, trees, mountain roads, and quiet walking areas
            make it easy to add a free outdoor piece to almost any Hot Springs
            itinerary.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FREE STOPS GUIDE */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Free and Low-Cost Stops Around Hot Springs</h2>
            <p>
              A practical list of easy stops you can mix into a Hot Springs
              trip without making every part of the day expensive.
            </p>
          </div>

          <div className="space-y-5">
            {freeStops.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group grid gap-5 rounded-3xl border bg-[color:var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[80px_1fr_auto] md:items-center"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="grid h-16 w-16 place-items-center rounded-2xl text-2xl font-bold text-white"
                  style={{ background: "var(--green)" }}
                >
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p
                    className="mt-2 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.text}
                  </p>
                </div>

                <span
                  className="font-bold transition group-hover:translate-x-1"
                  style={{ color: "var(--accent-dark)" }}
                >
                  View →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DARK VISUAL BREAK */}
      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/bathhouse-row.webp"
          alt="Free things to do in downtown Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Downtown, Trails & Scenic Walks
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Hot Springs is easy to enjoy without overplanning.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Walk Bathhouse Row, explore the national park, find a trail,
              wander downtown, then spend your money where it matters most:
              food, lodging, or one special experience.
            </p>

            <Link
              href="/explore"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Explore Hot Springs
            </Link>
          </div>
        </div>
      </section>

      {/* BUDGET TIPS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Budget-Friendly Trip Tips</h2>
            <p>
              A free day in Hot Springs works best when you group things by area.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {budgetTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{tip.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Free Things To Do in Hot Springs FAQs</h2>
            <p>
              Quick answers for visitors planning a budget-friendly Hot Springs
              trip.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Planning a Hot Springs trip on a budget?</h2>
              <p>
                Start with free stops, then use the guide to compare restaurants,
                hotels, cabins, Lake Hamilton, Bathhouse Row, and local
                businesses.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/things-to-do-in-hot-springs-ar" className="btn-primary">
                Things To Do
              </Link>

              <Link href="/hot-springs-ar-restaurants" className="btn-secondary">
                Restaurants
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}