import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Lake Hamilton Restaurants | Lakefront Dining in Hot Springs Arkansas",
  description:
    "Find restaurants around Lake Hamilton in Hot Springs, Arkansas including lakefront dining, seafood, pizza, patios, casual food, drinks, and places to eat near the water.",
  keywords: [
    "Lake Hamilton restaurants",
    "restaurants on Lake Hamilton",
    "Lake Hamilton Hot Springs restaurants",
    "lakefront restaurants Hot Springs Arkansas",
    "Fisherman's Wharf Hot Springs",
    "Back Porch Grill Hot Springs",
    "Sam's Pizza Pub Lake Hamilton",
    "Bubba Brews Lake Hamilton",
    "Trejo's Del Lago",
    "Hot Springs Arkansas lake restaurants",
  ],
};

const featuredRestaurants = [
  {
    name: "Fisherman’s Wharf Steak & Seafood",
    type: "Lakefront Seafood • Steak • Classic Hot Springs Stop",
    description:
      "One of the best-known Lake Hamilton restaurants, Fisherman’s Wharf is a strong pick for visitors looking for seafood, steaks, cocktails, and lake views.",
    address: "5101 Central Ave, Hot Springs, AR 71913",
    phone: "501-525-7437",
    image: "/images/businesses/fishermans-wharf.jpg",
    href: "https://www.facebook.com/5101spacity/",
  },
  {
    name: "Back Porch Grill",
    type: "Lake Hamilton • Patio Dining • Boater-Friendly",
    description:
      "A family-friendly Lake Hamilton restaurant with a relaxed patio, warm interior space, and easy access for both walk-ins and boaters.",
    address: "4810 Central Ave, Hot Springs, AR 71913",
    phone: "501-525-0885",
    image: "/images/businesses/back-porch-grill.jpg",
    href: "https://www.backporchgrill.com/",
  },
  {
    name: "Sam’s Pizza Pub",
    type: "Pizza • Lakefront • Local Favorite",
    description:
      "A long-running pizza spot right on Lake Hamilton, known for casual lake-area dining and access by car or boat.",
    address: "401 Burchwood Bay Rd, Hot Springs, AR 71913",
    phone: "501-525-0780",
    image: "/images/businesses/sams-pizza-pub.jpg",
    href: "https://samspizzapub.com/",
  },
];

const otherRestaurants = [
  {
    name: "Bubba Brews on Lake Hamilton",
    type: "Sports Pub • Drinks • Lake View",
    description:
      "A casual lake-area pub and grill option for visitors wanting drinks, food, and a relaxed setting near the water.",
    address: "1252 Airport Rd, Hot Springs, AR 71913",
    phone: "501-547-2020",
  },
  {
    name: "Trejo’s Del Lago",
    type: "Mexican Food • Lakefront Dining",
    description:
      "A Lake Hamilton restaurant option for Mexican food, drinks, and dining near the water.",
    address: "4904 Central Ave, Hot Springs, AR 71913",
    phone: "501-525-4300",
  },
  {
    name: "Cajun Boilers",
    type: "Seafood • Cajun • Casual Dining",
    description:
      "A nearby seafood and Cajun-style restaurant option close to the Lake Hamilton side of Hot Springs.",
    address: "2806 Albert Pike Rd, Hot Springs, AR 71913",
    phone: "501-767-5695",
  },
  {
    name: "Luna Bella",
    type: "Italian • Dinner • Date Night",
    description:
      "A polished dinner option in the Lake Hamilton area, useful for visitors looking for a quieter evening meal.",
    address: "104 Grand Isle Way, Hot Springs, AR 71913",
    phone: "501-520-5862",
  },
];

const faqs = [
  {
    question: "What are the best restaurants on Lake Hamilton?",
    answer:
      "Popular Lake Hamilton restaurants include Fisherman’s Wharf Steak & Seafood, Back Porch Grill, Sam’s Pizza Pub, Bubba Brews on Lake Hamilton, and Trejo’s Del Lago.",
  },
  {
    question: "Are there lakefront restaurants in Hot Springs?",
    answer:
      "Yes. Lake Hamilton has several lakefront and lake-area restaurants with water views, patios, seafood, pizza, drinks, and casual dining.",
  },
  {
    question: "Can you get to Lake Hamilton restaurants by boat?",
    answer:
      "Some Lake Hamilton restaurants are known for being accessible by boat, including Back Porch Grill and Sam’s Pizza Pub. Visitors should confirm dock access and current conditions before going.",
  },
];

export default function LakeHamiltonRestaurantsPage() {
  const main = featuredRestaurants[0];
  const side = featuredRestaurants.slice(1);

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
        eyebrow="LAKE HAMILTON RESTAURANTS"
        title="Restaurants Around Lake Hamilton"
        description="Find lakefront dining, casual food, seafood, pizza, patios, drinks, and visitor-friendly restaurants around Lake Hamilton in Hot Springs, Arkansas."
        image="/images/businesses/lake-hamilton2.jpg"
        primaryCta={{
          label: "Lake Hamilton Guide",
          href: "/lake-hamilton",
        }}
        secondaryCta={{
          label: "Hot Springs Restaurants",
          href: "/hot-springs-ar-restaurants",
        }}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Lakefront Dining Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Eat near the water while still staying close to Hot Springs.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Lake Hamilton is one of the best areas in Hot Springs for
                visitors who want dinner with a view, casual lake food, seafood,
                pizza, drinks, patios, and restaurants that feel more like a
                vacation stop than a quick meal.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide focuses on restaurants around Lake Hamilton. For the
                full citywide food guide, visit the Hot Springs restaurants page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Lake Hamilton Restaurants</h2>
            <p>
              Start with these well-known lake-area restaurants, then browse the
              rest of the nearby options below.
            </p>
          </div>

          <div className="space-y-8">
            <a
              href={main.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-[1.1fr_0.9fr]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <img
                  src={main.image}
                  alt={main.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Featured Lakefront Restaurant
                </p>

                <h3 className="mb-4 text-4xl font-semibold leading-tight">
                  {main.name}
                </h3>

                <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                  {main.type}
                </p>

                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                  {main.description}
                </p>

                <div className="mt-5 space-y-1 text-sm">
                  <p style={{ color: "var(--text)" }}>
                    <strong>Address:</strong> {main.address}
                  </p>
                  <p style={{ color: "var(--text)" }}>
                    <strong>Phone:</strong> {main.phone}
                  </p>
                </div>

                <span
                  className="mt-6 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Visit restaurant →
                </span>
              </div>
            </a>

            <div className="grid gap-6 lg:grid-cols-2">
              {side.map((place) => (
                <a
                  href={place.href}
                  key={place.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Featured Restaurant
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {place.name}
                    </h3>

                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                      {place.type}
                    </p>

                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {place.description}
                    </p>

                    <div className="mt-4 space-y-1 text-sm">
                      <p style={{ color: "var(--text)" }}>
                        <strong>Address:</strong> {place.address}
                      </p>
                      <p style={{ color: "var(--text)" }}>
                        <strong>Phone:</strong> {place.phone}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER RESTAURANTS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More Restaurants Near Lake Hamilton</h2>
            <p>
              Other lake-area and nearby food options worth checking while you
              are staying around Lake Hamilton.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherRestaurants.map((place) => (
              <article
                key={place.name}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {place.type}
                </p>

                <h3 className="text-2xl font-semibold">{place.name}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {place.description}
                </p>

                <div className="mt-4 space-y-1 text-sm">
                  <p style={{ color: "var(--text)" }}>
                    <strong>Address:</strong> {place.address}
                  </p>
                  <p style={{ color: "var(--text)" }}>
                    <strong>Phone:</strong> {place.phone}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Lake Hamilton Restaurant FAQs</h2>
            <p>
              Quick answers for visitors looking for food around the lake.
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
              <h2>Planning the lake side of your trip?</h2>
              <p>
                Use the Lake Hamilton guide to compare restaurants, cabins,
                hotels, and things to do near the water.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/lake-hamilton" className="btn-primary">
                Lake Hamilton Guide
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