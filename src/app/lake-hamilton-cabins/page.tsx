import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Lake Hamilton Cabins & Stays | Hot Springs Arkansas Lakefront Lodging",
  description:
    "Find cabins, cottages, resorts, inns, lakefront stays, and vacation rental options around Lake Hamilton in Hot Springs, Arkansas.",
  keywords: [
    "Lake Hamilton cabins",
    "Lake Hamilton cabin rentals",
    "Lake Hamilton cottages",
    "Lake Hamilton lodging",
    "Lake Hamilton hotels",
    "Hot Springs lake cabins",
    "Hot Springs Arkansas cabins",
    "Lake Hamilton vacation rentals",
    "cabins on Lake Hamilton Arkansas",
    "lakefront cabins Hot Springs AR",
  ],
};

const featuredStays = [
  {
    name: "Edgewater Resort",
    type: "Lake Hamilton Cottages • Waterfront Resort",
    description:
      "A Lake Hamilton resort with vacation rental cottages on the water, suited for visitors wanting a peaceful lake escape close to Hot Springs.",
    address: "200 Edgewater Circle, Hot Springs, AR 71913",
    phone: "501-525-3555",
    image: "/images/businesses/edgewater-resort.webp",
    href: "https://www.ewresort.com/",
  },
  {
    name: "Five Points Lake Hamilton",
    type: "Rustic Cabins • Wooded Lake Area",
    description:
      "A quiet cabin property with multiple cabins spread across wooded hillside near the lake, close to Central Avenue while still feeling tucked away.",
    address: "Hot Springs, AR 71913",
    phone: "Contact property directly",
    image: "/images/businesses/five-points-lake-hamilton.jpg",
    href: "https://fivepointslakehamilton.com/",
  },
  {
    name: "Lookout Point Lakeside Inn",
    type: "Boutique Inn • Lake Views • Breakfast",
    description:
      "A polished lakeside inn with peaceful Lake Hamilton views, breakfast, and a quieter stay for couples or visitors wanting something more refined.",
    address: "104 Lookout Circle, Hot Springs, AR 71913",
    phone: "501-525-6155",
    image: "/images/businesses/lookout-point-lakeside-inn.webp",
    href: "https://lookoutpointinn.com/",
  },
];

const otherStays = [
  {
    name: "Knollwood Lodge",
    type: "Lakefront Cabin Rentals",
    description:
      "Lakefront cabin rentals on Lake Hamilton for families, couples, and visitors looking to relax, fish, and enjoy the water.",
    address: "Lake Hamilton / Hot Springs Area",
    phone: "Contact property directly",
  },
  {
    name: "Lake Hamilton Escape RV & Cabin Campground",
    type: "RV & Cabin Campground",
    description:
      "A directly-on-lake lodging option listed for visitors looking for campground, RV, or cabin-style stays around Lake Hamilton.",
    address: "200 River Oaks Drive, Hot Springs, AR 71913",
    phone: "501-528-5253",
  },
  {
    name: "Hamilton House Estate",
    type: "Historic Estate • Bed & Breakfast",
    description:
      "A historic Lake Hamilton-area estate and bed-and-breakfast option close to Hot Springs attractions.",
    address: "130 Van Lyell Terrace, Hot Springs, AR 71913",
    phone: "Contact property directly",
  },
  {
    name: "Lake Hamilton Vacation Rentals",
    type: "Condos • Lake Houses • Private Rentals",
    description:
      "Visitors can also find lake houses, condos, private rentals, and waterfront stays around Lake Hamilton through major vacation rental platforms.",
    address: "Lake Hamilton Area",
    phone: "Varies by property",
  },
];

const faqs = [
  {
    question: "Are there cabins on Lake Hamilton?",
    answer:
      "Yes. Lake Hamilton has cabins, cottages, resorts, lake houses, condos, and vacation rental options around the water and nearby Hot Springs.",
  },
  {
    question: "Is Lake Hamilton a good place to stay in Hot Springs?",
    answer:
      "Lake Hamilton is a good place to stay if you want water views, a quieter feel, cabins or lake rentals, and still want to be close to downtown Hot Springs, Oaklawn, restaurants, and attractions.",
  },
  {
    question: "Should I stay downtown or near Lake Hamilton?",
    answer:
      "Stay downtown if you want walkable restaurants, Bathhouse Row, shops, and spas. Stay near Lake Hamilton if you want lake views, cabins, condos, fishing, boating, and a slower getaway feel.",
  },
];

export default function LakeHamiltonCabinsPage() {
  const main = featuredStays[0];
  const side = featuredStays.slice(1);

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
        eyebrow="LAKE HAMILTON STAYS"
        title="Lake Hamilton Cabins & Places to Stay"
        description="Find cabins, cottages, resorts, lakefront inns, hotels, condos, and vacation rental options around Lake Hamilton in Hot Springs, Arkansas."
        image="/images/hero/lake-hamilton.jpg"
        primaryCta={{
          label: "Lake Hamilton Guide",
          href: "/lake-hamilton",
        }}
        secondaryCta={{
          label: "Lake Restaurants",
          href: "/lake-hamilton-restaurants",
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
                Lakefront Lodging Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Stay near the water without being far from Hot Springs.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Lake Hamilton is a strong choice for visitors who want cabins,
                cottages, lake houses, condos, resorts, inns, or hotels with a
                slower lake-area feel.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Staying around the lake gives you easy access to restaurants,
                water views, fishing, boating, and quieter evenings while still
                keeping downtown Hot Springs, Bathhouse Row, Oaklawn, and local
                attractions within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STAYS */}
      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Lake Hamilton Cabins & Stays</h2>
            <p>
              Start with these lake-area stay options, then browse more cabins,
              campgrounds, inns, and rentals below.
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
                  Featured Lake Stay
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
                  Visit property →
                </span>
              </div>
            </a>

            <div className="grid gap-6 lg:grid-cols-2">
              {side.map((stay) => (
                <a
                  href={stay.href}
                  key={stay.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={stay.image}
                      alt={stay.name}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Featured Stay
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {stay.name}
                    </h3>

                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                      {stay.type}
                    </p>

                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {stay.description}
                    </p>

                    <div className="mt-4 space-y-1 text-sm">
                      <p style={{ color: "var(--text)" }}>
                        <strong>Address:</strong> {stay.address}
                      </p>
                      <p style={{ color: "var(--text)" }}>
                        <strong>Phone:</strong> {stay.phone}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER STAYS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More Lake Hamilton Stays</h2>
            <p>
              Other lake-area lodging options, from campgrounds and cabins to
              historic inns and vacation rentals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherStays.map((stay) => (
              <article
                key={stay.name}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {stay.type}
                </p>

                <h3 className="text-2xl font-semibold">{stay.name}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {stay.description}
                </p>

                <div className="mt-4 space-y-1 text-sm">
                  <p style={{ color: "var(--text)" }}>
                    <strong>Address:</strong> {stay.address}
                  </p>
                  <p style={{ color: "var(--text)" }}>
                    <strong>Phone:</strong> {stay.phone}
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
            <h2>Lake Hamilton Cabins & Stays FAQs</h2>
            <p>
              Quick answers for visitors deciding where to stay around Lake
              Hamilton.
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
              <h2>Planning a Lake Hamilton stay?</h2>
              <p>
                Compare lake stays, restaurants, downtown attractions, and
                things to do around Hot Springs.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/lake-hamilton" className="btn-primary">
                Lake Hamilton Guide
              </Link>

              <Link href="/lake-hamilton-restaurants" className="btn-secondary">
                Lake Restaurants
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}