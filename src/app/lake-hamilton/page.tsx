import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Lake Hamilton Hot Springs Arkansas | Lake Restaurants, Cabins, Hotels & Things To Do",
  description:
    "Plan a Lake Hamilton trip in Hot Springs, Arkansas with lakefront restaurants, cabins, hotels, boating, fishing, water views, and nearby attractions.",
  keywords: [
    "Lake Hamilton Hot Springs Arkansas",
    "Lake Hamilton restaurants",
    "Lake Hamilton cabins",
    "Lake Hamilton hotels",
    "things to do near Lake Hamilton",
    "Hot Springs Arkansas lake",
    "Lake Hamilton vacation",
    "Lake Hamilton weekend trip",
    "Lake Hamilton fishing",
    "Lake Hamilton boat rentals",
  ],
};

const featuredRestaurants = [
  {
    name: "Fisherman’s Wharf Steak & Seafood",
    type: "Lakefront Seafood • Steak • Views",
    text: "One of the best-known Lake Hamilton dining stops, with seafood, steaks, cocktails, and lake views.",
    href: "/lake-hamilton-restaurants",
  },
  {
    name: "Back Porch Grill",
    type: "Lake Hamilton • Patio • Boater-Friendly",
    text: "A family-friendly restaurant on Lake Hamilton with outdoor patio dining, warm interior space, and access for boaters and walk-ins.",
    href: "/lake-hamilton-restaurants",
  },
  {
    name: "Sam’s Pizza Pub",
    type: "Pizza • Lakefront • Local Favorite",
    text: "A long-running Lake Hamilton pizza spot known for casual lake-area dining and access by car or boat.",
    href: "/lake-hamilton-restaurants",
  },
];

const featuredStays = [
  {
    name: "Edgewater Resort",
    type: "Lake Hamilton Cottages • Waterfront Stay",
    text: "A lakeside resort option with vacation rental cottages on the water for visitors wanting a quiet Lake Hamilton base.",
    href: "/lake-hamilton-cabins",
  },
  {
    name: "Five Points Lake Hamilton",
    type: "Rustic Cabins • Lake Area",
    text: "Cabins spread across wooded lake-area property, giving visitors a quieter stay while still being close to Central Avenue.",
    href: "/lake-hamilton-cabins",
  },
  {
    name: "Lookout Point Lakeside Inn",
    type: "Boutique Inn • Lake Views",
    text: "A lake-view stay option for visitors wanting something more polished and peaceful around Lake Hamilton.",
    href: "/hot-springs-ar-hotels",
  },
];

const lakeSections = [
  {
    title: "Lake Hamilton Restaurants",
    text: "Find lakefront restaurants, casual food, seafood, pizza, patio dining, drinks, and places to eat around the water.",
    href: "/lake-hamilton-restaurants",
    cta: "View Lake Restaurants",
  },
  {
    title: "Lake Hamilton Cabins & Stays",
    text: "Browse cabins, lake houses, cottages, condos, resorts, and quiet places to stay near Lake Hamilton.",
    href: "/lake-hamilton-cabins",
    cta: "View Lake Stays",
  },
  {
    title: "Hotels Near Lake Hamilton",
    text: "Compare hotels and inns near Lake Hamilton, Central Avenue, Oaklawn, downtown Hot Springs, and local attractions.",
    href: "/hot-springs-ar-hotels",
    cta: "View Hotels",
  },
  {
    title: "Things To Do Near Lake Hamilton",
    text: "Plan lake time, fishing, boating, downtown exploring, Bathhouse Row, Oaklawn, trails, and family attractions.",
    href: "/things-to-do-in-hot-springs-ar",
    cta: "View Things To Do",
  },
];

const tripIdeas = [
  {
    title: "Lake Weekend",
    text: "Book a cabin, condo, or lakeside hotel, keep one evening open for a lakefront dinner, and use the rest of the trip for downtown Hot Springs, trails, or Oaklawn.",
  },
  {
    title: "Food & Views",
    text: "Build your trip around Lake Hamilton restaurants, then add Bathhouse Row, shops, spas, and a scenic drive through Hot Springs.",
  },
  {
    title: "Family Lake Trip",
    text: "Choose a stay with more room, add easy meals, lake time, family attractions, and a mix of relaxed mornings and busier afternoons.",
  },
];

const faqs = [
  {
    question: "Is Lake Hamilton a good area to stay in Hot Springs?",
    answer:
      "Yes. Lake Hamilton is a good area to stay if you want water views, cabins, condos, hotels, restaurants, and a slower setting while still being close to downtown Hot Springs, Oaklawn, and local attractions.",
  },
  {
    question: "Are there restaurants on Lake Hamilton?",
    answer:
      "Yes. Lake Hamilton has several lakefront and lake-area restaurants, including seafood, steak, pizza, casual dining, and places with water views.",
  },
  {
    question: "What is Lake Hamilton known for?",
    answer:
      "Lake Hamilton is known for lake views, boating, fishing, lakefront restaurants, cabins, condos, hotels, and being one of the main lake getaway areas around Hot Springs.",
  },
];

export default function LakeHamiltonPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Lake Hamilton Hot Springs Arkansas",
              description:
                "A local travel guide to Lake Hamilton in Hot Springs, Arkansas including restaurants, cabins, hotels, lake stays, and things to do.",
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
        eyebrow="LAKE HAMILTON"
        title="Lake Hamilton in Hot Springs, Arkansas"
        description="Plan the lake side of your Hot Springs trip with Lake Hamilton restaurants, cabins, hotels, lake views, boating, fishing, and quieter places to stay."
        image="/images/hero/lake-hamilton.jpg"
        primaryCta={{
          label: "Lake Restaurants",
          href: "/lake-hamilton-restaurants",
        }}
        secondaryCta={{
          label: "Lake Cabins & Stays",
          href: "/lake-hamilton-cabins",
        }}
      />

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Lake Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Lake Hamilton gives Hot Springs a slower, more scenic side.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Lake Hamilton is one of the best areas around Hot Springs for
                travelers who want water views, lake-area restaurants, cabins,
                hotels, condos, fishing, boating, and a little more room to slow
                down.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This page is a starting point for planning the lake part of your
                trip. Use it to jump into the dedicated Lake Hamilton restaurant
                guide, cabin and stay options, nearby hotels, and things to do
                around Hot Springs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LAKE PLANNING CARDS */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {lakeSections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border bg-[color:var(--surface)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-3xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.text}
                </p>

                <span
                  className="mt-6 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {item.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Lake Hamilton Restaurants</h2>
            <p>
              A few well-known lake-area places to start with. For the full
              list, use the dedicated Lake Hamilton restaurant guide.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredRestaurants.map((place) => (
              <Link
                key={place.name}
                href={place.href}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {place.type}
                </p>

                <h3 className="text-2xl font-semibold leading-tight">
                  {place.name}
                </h3>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {place.text}
                </p>

                <span
                  className="mt-5 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  View restaurant guide →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/lake-hamilton-restaurants" className="btn-primary">
              See All Lake Hamilton Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/hero/lake-hamilton.jpg"
          alt="Lake Hamilton in Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Lake Views, Cabins & Quiet Evenings
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Stay near the water and still explore the city.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Lake Hamilton gives visitors a different side of Hot Springs:
              more water, more space, and an easy way to balance downtown
              attractions with a slower place to unwind.
            </p>

            <Link
              href="/lake-hamilton-cabins"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              View Lake Cabins & Stays
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED STAYS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Lake Hamilton Stays</h2>
            <p>
              A few lake-area stay options to start with. The full list belongs
              on the Lake Hamilton cabins and stays page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredStays.map((stay) => (
              <Link
                key={stay.name}
                href={stay.href}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {stay.type}
                </p>

                <h3 className="text-2xl font-semibold leading-tight">
                  {stay.name}
                </h3>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {stay.text}
                </p>

                <span
                  className="mt-5 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  View stay options →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/lake-hamilton-cabins" className="btn-primary">
              See Lake Cabins & Stays
            </Link>

            <Link href="/hot-springs-ar-hotels" className="btn-secondary">
              Compare Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* TRIP IDEAS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Lake Hamilton Trip Ideas</h2>
            <p>
              The lake works best when you use it as a home base, then build in
              downtown, food, trails, and attractions around it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tripIdeas.map((idea) => (
              <div
                key={idea.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{idea.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {idea.text}
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
            <h2>Lake Hamilton FAQs</h2>
            <p>
              Quick answers for visitors planning a Lake Hamilton-focused Hot
              Springs trip.
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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Planning around Lake Hamilton?</h2>
              <p>
                Start with the lake guide, then compare restaurants, cabins,
                hotels, downtown attractions, and things to do around Hot
                Springs.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/lake-hamilton-restaurants" className="btn-primary">
                Lake Restaurants
              </Link>

              <Link href="/lake-hamilton-cabins" className="btn-secondary">
                Lake Cabins
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}