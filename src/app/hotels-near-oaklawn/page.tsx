import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Hotels Near Oaklawn Hot Springs AR | Casino, Racing & Central Avenue Stays",
  description:
    "Find hotels near Oaklawn Racing Casino Resort in Hot Springs, Arkansas, including casino resort stays, hotels across from Oaklawn, nearby Central Avenue lodging, downtown hotels, and Lake Hamilton options.",
  keywords: [
    "hotels near Oaklawn",
    "hotels near Oaklawn Hot Springs AR",
    "hotels near Oaklawn Racing Casino Resort",
    "Oaklawn hotel Hot Springs",
    "Hot Springs Arkansas hotels near casino",
    "hotels near Oaklawn Casino",
    "Best Western Winners Circle",
    "Oaklawn Racing Casino Resort hotel",
    "Microtel Hot Springs Oaklawn",
    "Central Avenue hotels Hot Springs AR",
  ],
};

const featuredHotels = [
  {
    name: "Oaklawn Racing Casino Resort",
    type: "Casino Resort • Trackside Hotel • Spa",
    description:
      "The closest and most direct stay for visitors planning a racing weekend, casino trip, concert, spa visit, or Oaklawn-focused getaway. The hotel is part of Oaklawn itself, with resort-style amenities and easy access to racing, gaming, dining, and entertainment.",
    address: "2705 Central Ave, Hot Springs, AR 71901",
    phone: "501-623-4411",
    image: "/images/businesses/oaklawn-resort.jpg",
    href: "https://oaklawn.com/resort/",
  },
  {
    name: "Best Western Winners Circle",
    type: "Across From Oaklawn • Central Avenue • Convenient Stay",
    description:
      "A practical and popular choice directly across from Oaklawn, useful for race weekends, casino trips, and visitors wanting to stay close without being inside the resort.",
    address: "2520 Central Ave, Hot Springs, AR 71901",
    phone: "501-624-2531",
    image: "/images/businesses/best-western-winners-circle.jpg",
    href: "https://www.bestwestern.com/en_US/book/hotels-in-hot-springs/best-western-winners-circle/propertyCode.04080.html",
  },
  {
    name: "Microtel Inn & Suites by Wyndham Hot Springs",
    type: "Nearby Hotel • Budget-Friendly • Oaklawn Area",
    description:
      "A nearby hotel option close to Oaklawn and Central Avenue, useful for visitors looking for a straightforward stay near the racing and casino area.",
    address: "410 Higdon Ferry Rd, Hot Springs, AR 71913",
    phone: "501-881-0100",
    image: "/images/businesses/microtel-hot-springs.jpg",
    href: "https://www.wyndhamhotels.com/microtel/hot-springs-arkansas/microtel-inn-and-suites-hot-springs/overview",
  },
];

const otherHotels = [
  {
    name: "The Reserve at Hot Springs",
    type: "Boutique Stay • Near Oaklawn",
    description:
      "A polished boutique-style stay near the Oaklawn area, useful for visitors wanting something quieter and more upscale than a standard chain hotel.",
    address: "2330 Central Ave, Hot Springs, AR 71901",
    phone: "501-625-3883",
    href: "https://thereserveathotsprings.com/",
  },
  {
    name: "Candlewood Suites Hot Springs",
    type: "Extended Stay • Central Avenue Area",
    description:
      "A useful option for longer visits, work trips, race weekends, or travelers who want simple access to Oaklawn, Central Avenue, and the rest of Hot Springs.",
    address: "3404 Central Ave, Hot Springs, AR 71913",
    phone: "501-624-4000",
    href: "https://www.ihg.com/candlewood/hotels/us/en/hot-springs/hotcw/hoteldetail",
  },
  {
    name: "Comfort Inn & Suites Hot Springs Midtown",
    type: "Midtown Hotel • Near Oaklawn",
    description:
      "A Midtown hotel option close enough to work well for Oaklawn trips, with easy access to Central Avenue, restaurants, shopping, and Hot Springs attractions.",
    address: "3627 Central Ave, Hot Springs, AR 71913",
    phone: "501-623-1700",
    href: "https://www.choicehotels.com/arkansas/hot-springs/comfort-inn-hotels/ar151",
  },
  {
    name: "Comfort Suites Near Hot Springs Park",
    type: "Suite Hotel • Midtown Area",
    description:
      "A suite-style hotel option in the Midtown/Central Avenue area, useful for visitors wanting more room while staying within a short drive of Oaklawn.",
    address: "320 Nash St, Hot Springs, AR 71913",
    phone: "501-624-3800",
    href: "https://www.choicehotels.com/arkansas/hot-springs/comfort-suites-hotels/ar153",
  },
  {
    name: "The Hotel Hot Springs",
    type: "Downtown Hotel • Convention Center Area",
    description:
      "A downtown hotel option that works better for visitors who want to split their trip between Oaklawn, Bathhouse Row, downtown restaurants, and the convention center area.",
    address: "305 Malvern Ave, Hot Springs, AR 71901",
    phone: "501-623-6600",
    href: "https://www.thehotelhotsprings.com/",
  },
  {
    name: "Embassy Suites by Hilton Hot Springs",
    type: "Downtown Suites • Convention Center",
    description:
      "A downtown suite-style hotel connected to the convention center area, useful if your trip includes events, downtown exploring, and a short drive to Oaklawn.",
    address: "400 Convention Blvd, Hot Springs, AR 71901",
    phone: "501-624-9200",
    href: "https://www.hilton.com/en/hotels/hoteses-embassy-suites-hot-springs-hotel-and-spa/",
  },
  {
    name: "DoubleTree by Hilton Hot Springs",
    type: "Lake Hamilton • Hotel • Water Access",
    description:
      "A Lake Hamilton hotel option for visitors who want to stay near the water while still being a short drive from Oaklawn, downtown, and other Hot Springs attractions.",
    address: "4813 Central Ave, Hot Springs, AR 71913",
    phone: "501-525-1391",
    href: "https://www.hilton.com/en/hotels/hothsdt-doubletree-hot-springs/",
  },
];

const tripTips = [
  {
    title: "Stay closest for race weekends.",
    text: "If your trip is built around Oaklawn, staying at Oaklawn itself or directly across the street makes the most sense. It cuts down on driving, parking, and back-and-forth during busy weekends.",
  },
  {
    title: "Use Central Avenue for convenience.",
    text: "Central Avenue has hotels, restaurants, shopping, and quick access to Oaklawn, downtown Hot Springs, Bathhouse Row, and Lake Hamilton.",
  },
  {
    title: "Book early during racing season.",
    text: "Hotels near Oaklawn can fill faster during racing season, casino events, holidays, concerts, and large Hot Springs weekends.",
  },
];

const faqs = [
  {
    question: "What hotel is closest to Oaklawn in Hot Springs?",
    answer:
      "The Oaklawn Racing Casino Resort hotel is the closest stay because it is part of the Oaklawn property. Best Western Winners Circle is another very close option located across from Oaklawn on Central Avenue.",
  },
  {
    question: "Are there hotels across from Oaklawn?",
    answer:
      "Yes. Best Western Winners Circle is commonly listed as being across from Oaklawn Racing Casino Resort, making it one of the most convenient nearby hotel options.",
  },
  {
    question: "Should I stay near Oaklawn or downtown Hot Springs?",
    answer:
      "Stay near Oaklawn if your trip is mainly for racing, casino visits, or Oaklawn events. Stay downtown if you want walkable access to Bathhouse Row, restaurants, shops, Hot Springs National Park, and the historic district.",
  },
  {
    question: "Are Lake Hamilton hotels close to Oaklawn?",
    answer:
      "Some Lake Hamilton hotels are a short drive from Oaklawn and can work well if you want lake views while still being close enough to the casino, racing, and Central Avenue.",
  },
];

export default function HotelsNearOaklawnPage() {
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
              name: "Hotels Near Oaklawn Hot Springs Arkansas",
              description:
                "A local guide to hotels near Oaklawn Racing Casino Resort in Hot Springs, Arkansas.",
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
        eyebrow="OAKLAWN HOTELS"
        title="Hotels Near Oaklawn in Hot Springs"
        description="Find places to stay near Oaklawn Racing Casino Resort, from the Oaklawn hotel itself to nearby Central Avenue hotels, downtown stays, and Lake Hamilton options."
        image="/images/businesses/oaklawn.webp"
        primaryCta={{
          label: "View Hot Springs Hotels",
          href: "/hot-springs-ar-hotels",
        }}
        secondaryCta={{
          label: "Explore Oaklawn Area",
          href: "/things-to-do-in-hot-springs-ar",
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
                Oaklawn Area Lodging Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Stay close to racing, casino trips, events, and Central Avenue.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Oaklawn is one of the biggest reasons people book a Hot Springs
                trip. Whether you are coming for horse racing, casino gaming,
                concerts, events, dining, or a weekend getaway, staying nearby
                can make the whole trip easier.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide focuses on hotels near Oaklawn and nearby areas that
                make sense for visitors, including Central Avenue, Midtown,
                downtown Hot Springs, and Lake Hamilton.
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

          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>

          <Link href="/hot-springs-ar-restaurants" className="btn">
            Restaurants
          </Link>

          <Link href="/lake-hamilton" className="btn">
            Lake Hamilton
          </Link>
        </div>
      </section>

      {/* FEATURED HOTELS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Hotels Near Oaklawn</h2>
            <p>
              Start with these close and convenient Oaklawn-area stays, then
              browse more nearby options below.
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
                  Featured Oaklawn Stay
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
            <h2>More Hotels Near Oaklawn</h2>
            <p>
              Other nearby hotels and stay options around Central Avenue,
              downtown Hot Springs, and Lake Hamilton.
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
            <h2>Tips for Staying Near Oaklawn</h2>
            <p>
              A few simple things to keep in mind if Oaklawn is the main reason
              for your Hot Springs trip.
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
            <h2>Hotels Near Oaklawn FAQs</h2>
            <p>
              Quick answers for visitors booking a stay near Oaklawn Racing
              Casino Resort.
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
              <h2>Planning an Oaklawn weekend?</h2>
              <p>
                Use the Hot Springs guide to compare hotels, restaurants,
                downtown attractions, Lake Hamilton, Bathhouse Row, and things
                to do.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/hot-springs-ar-hotels" className="btn-primary">
                All Hotels
              </Link>

              <Link href="/things-to-do-in-hot-springs-ar" className="btn-secondary">
                Things To Do
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}