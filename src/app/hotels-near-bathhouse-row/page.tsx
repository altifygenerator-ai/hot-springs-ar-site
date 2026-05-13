import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Hotels Near Bathhouse Row | Downtown Hot Springs Arkansas Places to Stay",
  description:
    "Find hotels near Bathhouse Row in downtown Hot Springs, Arkansas, including historic hotels, boutique stays, convention center hotels, and walkable lodging near restaurants, shops, spas, and Hot Springs National Park.",
  keywords: [
    "hotels near Bathhouse Row",
    "Bathhouse Row hotels",
    "downtown Hot Springs hotels",
    "hotels near Hot Springs National Park",
    "hotels near Central Avenue Hot Springs",
    "The Waters Hot Springs",
    "Arlington Hotel Hot Springs",
    "Hotel Hale Hot Springs",
    "The Hotel Hot Springs",
    "places to stay near Bathhouse Row",
  ],
};

const featuredHotels = [
  {
    name: "The Waters Hot Springs",
    type: "Boutique Hotel • Across From Bathhouse Row",
    description:
      "A downtown boutique hotel on Central Avenue with one of the strongest locations for visitors wanting Bathhouse Row, restaurants, shops, and Hot Springs National Park within easy walking distance.",
    address: "340 Central Ave, Hot Springs, AR 71901",
    phone: "501-321-0001",
    image: "/images/businesses/the-waters-hotel.jpg",
    href: "https://thewatershs.com/",
  },
  {
    name: "The Arlington Resort Hotel & Spa",
    type: "Historic Hotel • Downtown • Spa",
    description:
      "One of the most recognizable historic hotels in Hot Springs, located at the north end of downtown near Bathhouse Row, restaurants, shops, trails, and the national park.",
    address: "239 Central Ave, Hot Springs, AR 71901",
    phone: "501-623-7771",
    image: "/images/businesses/arlington-hotel.webp",
    href: "https://www.arlingtonhotel.com/",
  },
  {
    name: "Hotel Hale",
    type: "Historic Bathhouse Stay • Boutique Suites",
    description:
      "A unique boutique hotel inside the former Hale Bathhouse on Bathhouse Row, with a small number of suites and a stay that feels directly tied to Hot Springs history.",
    address: "341 Central Ave, Hot Springs, AR 71901",
    phone: "501-760-9010",
    image: "/images/businesses/hotel-hale.jpg",
    href: "https://www.hotelhale.com/",
  },
];

const otherHotels = [
  {
    name: "The Hotel Hot Springs",
    type: "Convention Center Hotel • Downtown",
    description:
      "A downtown hotel attached to the Hot Springs Convention Center and within walking distance of the historic downtown area, Bathhouse Row, restaurants, and national park stops.",
    address: "305 Malvern Ave, Hot Springs, AR 71901",
    phone: "501-623-6600",
    href: "https://hotelhotsprings.org/",
  },
  {
    name: "Embassy Suites by Hilton Hot Springs",
    type: "Downtown Suites • Convention Center Area",
    description:
      "A suite-style hotel near the convention center area that works well for visitors who want downtown access, extra room, and a short drive or walk to central attractions.",
    address: "400 Convention Blvd, Hot Springs, AR 71901",
    phone: "501-624-9200",
    href: "https://www.hilton.com/en/hotels/hoteses-embassy-suites-hot-springs-hotel-and-spa/",
  },
  {
    name: "Best Court",
    type: "Historic Motor Court • Downtown Area",
    description:
      "A restored historic motor court-style stay near downtown Hot Springs, useful for visitors who want something different from a standard hotel.",
    address: "638 Ouachita Ave, Hot Springs, AR 71901",
    phone: "501-624-2020",
    href: "https://www.bestcourthotsprings.com/",
  },
  {
    name: "The Reserve at Hot Springs",
    type: "Boutique Stay • Near Downtown",
    description:
      "A polished boutique-style stay along Central Avenue, good for visitors who want a quieter elevated lodging option while still staying within reach of downtown and Oaklawn.",
    address: "2330 Central Ave, Hot Springs, AR 71901",
    phone: "501-625-3883",
    href: "https://thereserveathotsprings.com/",
  },
  {
    name: "Dame Fortune’s Cottage Court",
    type: "Cottage Court • Near Downtown",
    description:
      "A vintage-style cottage court near downtown Hot Springs, useful for visitors who want character, simple access, and a different feel than a chain hotel.",
    address: "609 Park Ave, Hot Springs, AR 71901",
    phone: "501-386-4424",
    href: "https://www.damefortunes.com/",
  },
  {
    name: "1890 Williams House Inn",
    type: "Historic Inn • Downtown Area",
    description:
      "A historic inn option near downtown Hot Springs for travelers wanting a more personal stay close to the older part of the city.",
    address: "420 Quapaw Ave, Hot Springs, AR 71901",
    phone: "501-624-7897",
    href: "https://1890williamshouse.com/",
  },
];

const tripTips = [
  {
    title: "Stay downtown for walkability.",
    text: "If your trip is built around Bathhouse Row, restaurants, spas, shops, and Hot Springs National Park, staying downtown keeps the day simple and cuts down on driving.",
  },
  {
    title: "Book early for event weekends.",
    text: "Downtown hotels can fill faster during concerts, convention weekends, holidays, racing season, and busy travel weekends.",
  },
  {
    title: "Choose the area based on your trip.",
    text: "Stay near Bathhouse Row for history and walkability, near Oaklawn for racing and casino trips, or near Lake Hamilton for water views and slower evenings.",
  },
];

const faqs = [
  {
    question: "What hotels are closest to Bathhouse Row?",
    answer:
      "The Waters, Hotel Hale, and The Arlington Resort Hotel & Spa are among the closest and most directly connected lodging options near Bathhouse Row in downtown Hot Springs.",
  },
  {
    question: "Can you stay on Bathhouse Row?",
    answer:
      "Yes. Hotel Hale is located inside the former Hale Bathhouse on Bathhouse Row, and The Waters sits across from Bathhouse Row on Central Avenue.",
  },
  {
    question: "Is downtown Hot Springs a good area to stay?",
    answer:
      "Downtown Hot Springs is a good area to stay if you want walkable access to Bathhouse Row, restaurants, shops, spas, museums, Hot Springs National Park, and historic Central Avenue.",
  },
  {
    question: "Should I stay near Bathhouse Row or Lake Hamilton?",
    answer:
      "Stay near Bathhouse Row if you want history, restaurants, shops, and walkability. Stay near Lake Hamilton if you want lake views, cabins, condos, and a slower getaway feel.",
  },
];

export default function HotelsNearBathhouseRowPage() {
  const main = featuredHotels[0];
  const side = featuredHotels.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Hotels Near Bathhouse Row",
              description:
                "A local guide to hotels near Bathhouse Row and downtown Hot Springs, Arkansas.",
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
        eyebrow="DOWNTOWN HOT SPRINGS HOTELS"
        title="Hotels Near Bathhouse Row"
        description="Find hotels, historic stays, boutique inns, and downtown lodging near Bathhouse Row, Central Avenue, Hot Springs National Park, restaurants, shops, and spas."
        image="/images/businesses/bathhouse-row.webp"
        primaryCta={{
          label: "View All Hotels",
          href: "/hot-springs-ar-hotels",
        }}
        secondaryCta={{
          label: "Bathhouse Row Guide",
          href: "/bathhouse-row",
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
                Downtown Lodging Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Stay close to the historic heart of Hot Springs.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Staying near Bathhouse Row puts you close to the part of Hot
                Springs most visitors want to see first: historic bathhouses,
                Central Avenue, restaurants, shops, spas, trails, museums, and
                Hot Springs National Park.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide focuses on downtown hotels and nearby stays that make
                sense for visitors who want walkability, history, and easy
                access to the main Hot Springs attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/hot-springs-ar-hotels" className="btn">
            All Hot Springs Hotels
          </Link>

          <Link href="/hotels-near-oaklawn" className="btn">
            Hotels Near Oaklawn
          </Link>

          <Link href="/restaurants-near-bathhouse-row" className="btn">
            Restaurants Nearby
          </Link>

          <Link href="/bathhouse-row" className="btn">
            Bathhouse Row
          </Link>

          <Link href="/explore" className="btn">
            Explore Hot Springs
          </Link>
        </div>
      </section>

      {/* FEATURED HOTELS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Hotels Near Bathhouse Row</h2>
            <p>
              Start with these walkable downtown stays, then browse more nearby
              options below.
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
                  Featured Downtown Hotel
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
                  Visit hotel →
                </span>
              </div>
            </a>

            <div className="grid gap-6 lg:grid-cols-2">
              {side.map((hotel) => (
                <a
                  href={hotel.href}
                  key={hotel.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Featured Hotel
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {hotel.name}
                    </h3>

                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                      {hotel.type}
                    </p>

                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {hotel.description}
                    </p>

                    <div className="mt-4 space-y-1 text-sm">
                      <p style={{ color: "var(--text)" }}>
                        <strong>Address:</strong> {hotel.address}
                      </p>
                      <p style={{ color: "var(--text)" }}>
                        <strong>Phone:</strong> {hotel.phone}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER HOTELS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More Downtown Hot Springs Stays</h2>
            <p>
              Other nearby stays that can work well for visitors wanting
              downtown access, history, restaurants, or a short drive to other
              Hot Springs attractions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherHotels.map((hotel) => (
              <article
                key={hotel.name}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {hotel.type}
                </p>

                <h3 className="text-2xl font-semibold">{hotel.name}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {hotel.description}
                </p>

                <div className="mt-4 space-y-1 text-sm">
                  <p style={{ color: "var(--text)" }}>
                    <strong>Address:</strong> {hotel.address}
                  </p>
                  <p style={{ color: "var(--text)" }}>
                    <strong>Phone:</strong> {hotel.phone}
                  </p>
                </div>

                <a
                  href={hotel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Visit hotel →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRIP TIPS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Tips for Staying Near Bathhouse Row</h2>
            <p>
              A downtown stay works best when your trip is built around walking,
              history, restaurants, spas, and Hot Springs National Park.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tripTips.map((tip) => (
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
            <h2>Hotels Near Bathhouse Row FAQs</h2>
            <p>
              Quick answers for visitors choosing where to stay in downtown Hot
              Springs.
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
              <h2>Planning a downtown Hot Springs trip?</h2>
              <p>
                Compare hotels, Bathhouse Row, restaurants, spas, things to do,
                Oaklawn, Lake Hamilton, and local businesses.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/bathhouse-row" className="btn-primary">
                Bathhouse Row
              </Link>

              <Link href="/hot-springs-ar-hotels" className="btn-secondary">
                All Hotels
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}