import Link from "next/link";
import Hero from "@/components/Hero";
import { restaurantsHero } from "@/data/hero";
import { businesses } from "@/data/businesses";

export const metadata = {
  title:
    "Restaurants in Hot Springs, Arkansas | Downtown Dining, Breakfast, Lakefront Food & Local Favorites",
  description:
    "Find restaurants in Hot Springs, Arkansas including downtown dining, breakfast spots, lakefront restaurants, barbecue, pizza, breweries, cafes, steakhouses, Mexican food, and places to eat near Bathhouse Row, Lake Hamilton, Oaklawn, cabins, and hotels.",
  keywords: [
    "restaurants in Hot Springs Arkansas",
    "Hot Springs AR restaurants",
    "best restaurants Hot Springs Arkansas",
    "downtown Hot Springs restaurants",
    "breakfast in Hot Springs Arkansas",
    "lakefront restaurants Hot Springs Arkansas",
    "restaurants near Bathhouse Row",
    "restaurants near Lake Hamilton",
    "restaurants near Oaklawn Hot Springs",
    "Hot Springs Arkansas dining",
    "places to eat in Hot Springs AR",
  ],
};

const allRestaurants = businesses.filter(
  (business) => business.category === "Restaurant"
);

const featuredRestaurants = allRestaurants.filter(
  (business) => business.featured
);

const standardRestaurants = allRestaurants.filter(
  (business) => !business.featured
);

const diningAreas = [
  {
    title: "Downtown and Bathhouse Row",
    text: "Best for visitors staying near Bathhouse Row, walking Central Avenue, visiting the national park, or wanting restaurants close to hotels, shops, and historic buildings.",
  },
  {
    title: "Lake Hamilton",
    text: "Best for lakefront meals, sunset dinners, seafood, vacation rentals, hotels near the water, and visitors who want to spend more time outside downtown.",
  },
  {
    title: "Oaklawn and Central Avenue",
    text: "Best for visitors coming in for racing, casino weekends, hotels, quick meals, and easy access along one of the city’s main roads.",
  },
  {
    title: "Local Favorites and Casual Stops",
    text: "Best for breakfast, barbecue, coffee, pizza, cafes, and restaurants that give a Hot Springs trip more local character.",
  },
];

const faqs = [
  {
    question: "What are the best restaurants in Hot Springs, Arkansas?",
    answer:
      "Hot Springs has downtown restaurants, breakfast spots, lakefront dining, barbecue, pizza, breweries, cafes, steakhouses, Mexican food, and casual local favorites. Many visitors start around Bathhouse Row, Central Avenue, Lake Hamilton, or Oaklawn depending on where they are staying.",
  },
  {
    question: "Where should I eat near Bathhouse Row?",
    answer:
      "Downtown Hot Springs and Central Avenue have several restaurants close to Bathhouse Row, including breakfast spots, breweries, historic bars, cafes, pizza, and dinner restaurants.",
  },
  {
    question: "Are there lakefront restaurants in Hot Springs?",
    answer:
      "Yes. Lake Hamilton has lakefront and lake-area restaurants that work well for visitors staying near the water or planning a slower evening outside downtown.",
  },
  {
    question: "Is Hot Springs good for a food weekend?",
    answer:
      "Yes. Hot Springs works well for a food-focused weekend because visitors can mix downtown breakfast, historic restaurants, lakefront dining, breweries, barbecue, coffee shops, and nicer dinner spots.",
  },
  {
    question: "Where can families eat in Hot Springs?",
    answer:
      "Families can find casual restaurants, breakfast spots, pizza, barbecue, lakefront food, cafes, and quick meals around Central Avenue, downtown, Lake Hamilton, and Oaklawn.",
  },
];

export default function RestaurantsPage() {
  const mainRestaurant = featuredRestaurants[0];
  const sideRestaurants = featuredRestaurants.slice(1, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Restaurants in Hot Springs, Arkansas",
              description:
                "Restaurants, breakfast spots, lakefront dining, barbecue, pizza, breweries, cafes, steakhouses, and places to eat around Hot Springs, Arkansas.",
              itemListElement: allRestaurants.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Restaurant",
                  name: place.name,
                  servesCuisine: place.type,
                  description: place.description,
                  address: place.address,
                  telephone: place.phone,
                  url: place.website ?? place.directions ?? place.href,
                },
              })),
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
        eyebrow={restaurantsHero.eyebrow}
        title={restaurantsHero.title}
        description={restaurantsHero.description}
        image={restaurantsHero.image}
        primaryCta={restaurantsHero.primaryCta}
        secondaryCta={restaurantsHero.secondaryCta}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Dining Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Find the right place to eat without scrolling forever.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Hot Springs has a better food scene than people expect. You can
                start with breakfast downtown, grab lunch near Bathhouse Row,
                plan dinner by Lake Hamilton, or find a casual local stop after
                hiking, shopping, racing, or exploring the national park.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Use this guide to compare restaurants near{" "}
                <Link
                  href="/bathhouse-row"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Bathhouse Row
                </Link>
                ,{" "}
                <Link
                  href="/things-to-do-in-hot-springs-ar"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  things to do
                </Link>
                ,{" "}
                <Link
                  href="/hot-springs-ar-hotels"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  hotels
                </Link>
                ,{" "}
                <Link
                  href="/hot-springs-ar-cabins"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  cabins
                </Link>
                , Lake Hamilton, Oaklawn, and downtown Hot Springs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels
          </Link>

          <Link href="/hot-springs-ar-cabins" className="btn">
            Cabins
          </Link>

          <Link href="/explore" className="btn">
            Explore Hot Springs
          </Link>
        </div>
      </section>

      {mainRestaurant && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Featured Places to Eat in Hot Springs</h2>

              <p>
                These are strong starting points for visitors planning meals
                around downtown Hot Springs, Bathhouse Row, Lake Hamilton, and
                classic local stops.
              </p>
            </div>

            <div className="space-y-8">
              <a
                href={
                  mainRestaurant.website ??
                  mainRestaurant.directions ??
                  mainRestaurant.href ??
                  "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img
                    src={mainRestaurant.image}
                    alt={mainRestaurant.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p
                    className="mb-3 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Local Favorite
                  </p>

                  <h3 className="mb-4 text-4xl font-semibold leading-tight">
                    {mainRestaurant.name}
                  </h3>

                  <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                    {mainRestaurant.type}
                  </p>

                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {mainRestaurant.description}
                  </p>

                  <div
                    className="mt-6 space-y-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {mainRestaurant.address && (
                      <p>📍 {mainRestaurant.address}</p>
                    )}
                    {mainRestaurant.phone && <p>📞 {mainRestaurant.phone}</p>}
                  </div>

                  <span
                    className="mt-6 inline-block font-bold"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    View restaurant →
                  </span>
                </div>
              </a>

              <div className="grid gap-6 lg:grid-cols-2">
                {sideRestaurants.map((place) => (
                  <a
                    href={place.website ?? place.directions ?? place.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={place.name}
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
                        Hot Springs Dining
                      </p>

                      <h3 className="text-2xl font-semibold leading-tight">
                        {place.name}
                      </h3>

                      <p
                        className="mt-2 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {place.type}
                      </p>

                      <p
                        className="mt-4 leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {place.description}
                      </p>

                      <div
                        className="mt-5 space-y-2 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {place.address && <p>📍 {place.address}</p>}
                        {place.phone && <p>📞 {place.phone}</p>}
                      </div>

                      <span
                        className="mt-5 inline-block font-bold"
                        style={{ color: "var(--accent-dark)" }}
                      >
                        View restaurant →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More Restaurants and Places to Eat Near Hot Springs</h2>

            <p>
              These additional restaurants, cafes, breweries, barbecue spots,
              pizza places, and dinner stops are useful for visitors comparing
              where to eat around downtown, Lake Hamilton, Oaklawn, and nearby
              lodging.
            </p>
          </div>

          <div className="space-y-6">
            {standardRestaurants.map((place, index) => (
              <div
                key={place.name}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="relative h-[170px] overflow-hidden rounded-2xl bg-[color:var(--surface-strong)]">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {index + 1}. {place.name}
                    </h3>

                    <p
                      className="mt-1 text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {place.type}
                    </p>

                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {place.description}
                    </p>

                    {place.address && (
                      <p
                        className="mt-3 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        📍 {place.address}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-3">
                      {place.phone && (
                        <a
                          href={`tel:${place.phone.replace(/[^\d]/g, "")}`}
                          className="inline-flex rounded-full px-5 py-2 text-sm font-bold shadow-sm transition hover:opacity-90"
                          style={{
                            background: "var(--green)",
                            color: "#ffffff",
                          }}
                        >
                          Call {place.phone}
                        </a>
                      )}

                      {place.website && (
                        <a
                          href={place.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border px-5 py-2 text-sm font-bold transition hover:opacity-90"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--green)",
                            background: "var(--surface-strong)",
                          }}
                        >
                          View Website
                        </a>
                      )}

                      {place.directions && (
                        <a
                          href={place.directions}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border px-5 py-2 text-sm font-bold transition hover:opacity-90"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--accent-dark)",
                            background: "rgba(155,95,45,0.08)",
                          }}
                        >
                          Directions
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/fishermans-wharf.jpg"
          alt="Lakefront dining in Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Downtown, Lakefront & Local
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Build your meals around the kind of trip you’re taking.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Stay downtown for walkable food, head toward Lake Hamilton for
              water views, or look for casual local favorites when you want
              something simple between attractions.
            </p>

            <Link
              href="/hot-springs-ar-hotels"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Find Hotels Nearby
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Where to Eat Around Hot Springs</h2>

            <p>
              Different parts of town fit different kinds of meals. Here’s the
              simple way to think about it while planning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {diningAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{area.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Hot Springs Restaurant FAQs</h2>

            <p>
              Quick answers for visitors comparing places to eat around
              downtown, Bathhouse Row, Lake Hamilton, Oaklawn, hotels, cabins,
              and local attractions.
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

      <section className="section">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[32px] border p-8 shadow-2xl md:p-12"
            style={{
              background:
                "linear-gradient(135deg, var(--green) 0%, #1d332a 55%, var(--accent-dark) 100%)",
              borderColor: "rgba(255,255,255,0.16)",
            }}
          >
            <div
              className="absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            <div className="relative z-10 max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                For Local Restaurants
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Want your restaurant listed here?
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                This restaurant guide helps visitors find places to eat while
                planning trips around Bathhouse Row, Lake Hamilton, Oaklawn,
                hotels, cabins, and Hot Springs attractions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "var(--green)",
                  }}
                >
                  Get Listed
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Ask About Featured Placement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}