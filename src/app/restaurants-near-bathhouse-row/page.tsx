import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Restaurants Near Bathhouse Row | Downtown Hot Springs Arkansas Dining",
  description:
    "Find restaurants near Bathhouse Row in Hot Springs, Arkansas including breakfast spots, historic bars, breweries, pizza, Mexican food, German dining, and downtown favorites.",
  keywords: [
    "restaurants near Bathhouse Row",
    "Bathhouse Row restaurants",
    "downtown Hot Springs restaurants",
    "restaurants near Hot Springs National Park",
    "places to eat near Bathhouse Row",
    "Hot Springs Arkansas restaurants downtown",
    "The Pancake Shop Hot Springs",
    "Ohio Club Hot Springs",
    "Rolando's Hot Springs",
    "Superior Bathhouse Brewery",
    "SQZBX Hot Springs",
    "Grateful Head Pizza Hot Springs",
  ],
};

const featuredRestaurants = [
  {
    name: "The Ohio Club",
    type: "Historic Bar • Restaurant • Live Music",
    description:
      "One of the most recognizable downtown Hot Springs stops, The Ohio Club is a historic bar and restaurant on Central Avenue with food, drinks, live music, and classic Hot Springs character.",
    address: "336 Central Ave, Hot Springs, AR 71901",
    phone: "501-627-0702",
    image: "/images/businesses/ohio-club.webp",
    href: "https://www.theohioclub.com/",
  },
  {
    name: "The Pancake Shop",
    type: "Breakfast • Downtown • Local Favorite",
    description:
      "A longtime breakfast stop on Central Avenue, close to Bathhouse Row, downtown shops, hotels, and Hot Springs National Park.",
    address: "216 Central Ave, Hot Springs, AR 71901",
    phone: "501-624-5720",
    image: "/images/businesses/the-pancake-shop.jpeg",
    href: "https://www.pancakeshop.com/",
  },
  {
    name: "Rolando’s Restaurante",
    type: "Latin Food • Downtown • Patio Dining",
    description:
      "A downtown Hot Springs restaurant near Bathhouse Row serving Latin-inspired food in a visitor-friendly location on Central Avenue.",
    address: "210 Central Ave, Hot Springs, AR 71901",
    phone: "501-318-6054",
    image: "/images/businesses/rolandos.webp",
    href: "https://www.rolandosrestaurant.com/",
  },
];

const otherRestaurants = [
  {
    name: "Superior Bathhouse Brewery",
    type: "Brewery • Restaurant • Bathhouse Row",
    description:
      "A historic bathhouse turned brewery and restaurant inside Hot Springs National Park, known for beer brewed with thermal spring water.",
    address: "329 Central Ave, Hot Springs, AR 71901",
    phone: "501-624-2337",
    href: "https://www.superiorbathhouse.com/",
  },
  {
    name: "SQZBX Brewery & Pizza Joint",
    type: "Pizza • Brewery • Downtown",
    description:
      "A downtown pizza and brewery spot on Ouachita Avenue serving hand-tossed pizza, subs, salads, and house-made beer.",
    address: "236 Ouachita Ave, Hot Springs, AR 71901",
    phone: "501-609-0609",
    href: "https://sqzbx.com/",
  },
  {
    name: "Grateful Head Pizza Oven & Beer Garden",
    type: "Pizza • Beer Garden • Downtown Views",
    description:
      "A downtown pizza and beer garden option with mountain-side dining, views of Hot Springs, and a casual visitor-friendly feel.",
    address: "100 Exchange St, Hot Springs, AR 71901",
    phone: "501-781-3405",
    href: "https://gratefulheadpizza.com/",
  },
  {
    name: "Steinhaus Keller",
    type: "German Food • Downtown • Dinner",
    description:
      "A German restaurant tucked into Spencer’s Corner on Central Avenue, offering a different kind of downtown dinner stop near the main visitor areas.",
    address: "801 Central Ave, Suite 15, Hot Springs, AR 71901",
    phone: "501-624-7866",
    href: "https://steinhauskeller.com/",
  },
  {
    name: "DONS Southern Social",
    type: "Southern Food • Speakeasy Feel • Downtown",
    description:
      "A downtown restaurant on Central Avenue with a Southern-inspired menu and a more polished dinner experience.",
    address: "901 Central Ave, Hot Springs, AR 71901",
    phone: "501-359-3781",
    href: "https://www.facebook.com/seeyouatdons/",
  },
  {
    name: "Brick House Grill",
    type: "Grill • Downtown • Lunch & Dinner",
    description:
      "A downtown Hot Springs restaurant option near the main visitor corridor, useful for lunch, dinner, and casual meals while exploring.",
    address: "801 Central Ave, Hot Springs, AR 71901",
    phone: "501-321-2926",
    href: "/hot-springs-ar-restaurants",
  },
];

const tripTips = [
  {
    title: "Breakfast before Bathhouse Row",
    text: "Start with breakfast downtown, then walk Bathhouse Row, visit the Fordyce visitor center, shop Central Avenue, or head into Hot Springs National Park.",
  },
  {
    title: "Lunch between downtown stops",
    text: "Downtown works well for visitors who want to park once, walk to restaurants, explore shops, then keep going without driving across town.",
  },
  {
    title: "Dinner after the national park",
    text: "After hiking, soaking, shopping, or sightseeing, downtown restaurants give you plenty of options without leaving the historic district.",
  },
];

const faqs = [
  {
    question: "Are there restaurants within walking distance of Bathhouse Row?",
    answer:
      "Yes. Bathhouse Row sits along Central Avenue in downtown Hot Springs, and there are several restaurants, bars, breweries, breakfast spots, and pizza places within a short walk.",
  },
  {
    question: "What are popular restaurants near Bathhouse Row?",
    answer:
      "Popular restaurants near Bathhouse Row include The Ohio Club, The Pancake Shop, Rolando’s Restaurante, Superior Bathhouse Brewery, SQZBX Brewery & Pizza Joint, Grateful Head Pizza, Steinhaus Keller, and DONS Southern Social.",
  },
  {
    question: "Is there breakfast near Bathhouse Row?",
    answer:
      "Yes. The Pancake Shop is one of the best-known breakfast spots near Bathhouse Row and is located on Central Avenue in downtown Hot Springs.",
  },
  {
    question: "Can I eat downtown and then walk Bathhouse Row?",
    answer:
      "Yes. Downtown Hot Springs is one of the easiest areas to park, eat, walk Bathhouse Row, visit shops, and explore Hot Springs National Park from the same general area.",
  },
];

export default function RestaurantsNearBathhouseRowPage() {
  const main = featuredRestaurants[0];
  const side = featuredRestaurants.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Restaurants Near Bathhouse Row",
              description:
                "A local guide to restaurants near Bathhouse Row and downtown Hot Springs, Arkansas.",
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
        eyebrow="DOWNTOWN HOT SPRINGS DINING"
        title="Restaurants Near Bathhouse Row"
        description="Find breakfast, lunch, dinner, breweries, pizza, historic bars, Mexican food, and downtown dining within easy reach of Bathhouse Row in Hot Springs, Arkansas."
        image="/images/businesses/bathhouse-row.webp"
        primaryCta={{
          label: "Hot Springs Restaurants",
          href: "/hot-springs-ar-restaurants",
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
                Downtown Food Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Eat downtown before or after exploring Bathhouse Row.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Bathhouse Row is one of the easiest areas in Hot Springs to
                build a day around. You can walk the historic bathhouses, visit
                Hot Springs National Park, shop downtown, then stop for
                breakfast, lunch, dinner, drinks, or dessert nearby.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This page focuses on restaurants near Bathhouse Row and downtown
                Hot Springs. For a broader citywide guide, use the main Hot
                Springs restaurants page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/bathhouse-row" className="btn">
            Bathhouse Row
          </Link>

          <Link href="/hot-springs-ar-restaurants" className="btn">
            All Restaurants
          </Link>

          <Link href="/lake-hamilton-restaurants" className="btn">
            Lake Hamilton Restaurants
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn">
            Nearby Hotels
          </Link>

          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Restaurants Near Bathhouse Row</h2>
            <p>
              Start with these well-known downtown Hot Springs restaurants, then
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
                  Featured Downtown Restaurant
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
            <h2>More Places to Eat Near Bathhouse Row</h2>
            <p>
              These downtown and nearby restaurants are useful if you are
              staying near Bathhouse Row, walking Central Avenue, or exploring
              Hot Springs National Park.
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

                <a
                  href={place.href}
                  target={place.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    place.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Learn more →
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
            <h2>How to Build Food Into a Bathhouse Row Day</h2>
            <p>
              Downtown is one of the easiest areas to plan around because food,
              shops, history, and the national park are all close together.
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

      {/* VISUAL BREAK */}
      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/bathhouse-row.webp"
          alt="Downtown Hot Springs Arkansas near Bathhouse Row"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Downtown, Food & Bathhouse Row
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Park once, eat downtown, then walk the historic district.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Bathhouse Row is one of the best parts of Hot Springs to explore
              on foot, especially when you pair it with breakfast, lunch, dinner,
              or drinks nearby.
            </p>

            <Link
              href="/bathhouse-row"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Explore Bathhouse Row
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Restaurants Near Bathhouse Row FAQs</h2>
            <p>
              Quick answers for visitors looking for food near downtown Hot
              Springs and Bathhouse Row.
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
              <h2>Planning a downtown Hot Springs day?</h2>
              <p>
                Use the Hot Springs guide to compare restaurants, Bathhouse Row,
                hotels, cabins, local businesses, and things to do.
              </p>
            </div>

            <div className="hero-buttons">
              <Link href="/bathhouse-row" className="btn-primary">
                Bathhouse Row
              </Link>

              <Link href="/hot-springs-ar-restaurants" className="btn-secondary">
                All Restaurants
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}