import Link from "next/link";
import Hero from "@/components/Hero";
import { hotelsHero } from "@/data/hero";
import { businesses } from "@/data/businesses";

export const metadata = {
  title:
    "Hotels in Hot Springs, Arkansas | Downtown, Bathhouse Row, Oaklawn & Lake Hamilton",
  description:
    "Find hotels in Hot Springs, Arkansas near Bathhouse Row, downtown Hot Springs, Hot Springs National Park, Oaklawn Racing Casino Resort, Lake Hamilton, restaurants, spas, cabins, and local attractions.",
  keywords: [
    "hotels in Hot Springs Arkansas",
    "Hot Springs AR hotels",
    "hotels near Bathhouse Row",
    "hotels near Oaklawn Hot Springs",
    "hotels near Lake Hamilton",
    "downtown Hot Springs hotels",
    "Hot Springs Arkansas places to stay",
    "Hot Springs Arkansas lodging",
    "boutique hotels Hot Springs Arkansas",
    "historic hotels Hot Springs Arkansas",
  ],
};

const allHotels = businesses.filter((business) => business.category === "Hotel");

const featuredHotels = allHotels.filter((business) => business.featured);

const standardHotels = allHotels.filter((business) => !business.featured);

const stayAreas = [
  {
    title: "Downtown and Bathhouse Row",
    text: "Best for visitors who want to walk to restaurants, shops, bathhouses, Hot Springs National Park, museums, and historic Central Avenue.",
  },
  {
    title: "Oaklawn Area",
    text: "Best for racing weekends, casino trips, events, quick food options, and visitors who want to stay close to one of Hot Springs’ biggest attractions.",
  },
  {
    title: "Lake Hamilton",
    text: "Best for lake views, slower weekends, waterfront dining, vacation rentals, boating, and a more relaxed Hot Springs stay.",
  },
  {
    title: "Quiet Stays Outside Downtown",
    text: "Best for visitors who want less traffic, more space, cabins, inns, lake stays, or a more peaceful base outside the busiest parts of town.",
  },
];

const faqs = [
  {
    question: "Where should I stay in Hot Springs, Arkansas?",
    answer:
      "Many visitors stay downtown near Bathhouse Row, near Oaklawn, around Lake Hamilton, or in quieter lodging outside the busiest parts of town. The best area depends on whether you want walkable downtown access, lake views, racing, restaurants, or a slower getaway.",
  },
  {
    question: "Are there hotels near Bathhouse Row?",
    answer:
      "Yes. Downtown Hot Springs has hotels close to Bathhouse Row, Central Avenue, restaurants, shops, Hot Springs National Park, and historic attractions.",
  },
  {
    question: "What hotels are near Oaklawn in Hot Springs?",
    answer:
      "Several hotels are located near Oaklawn Racing Casino Resort and along Central Avenue, making that area useful for racing weekends, casino trips, events, and quick access around town.",
  },
  {
    question: "Is it better to stay downtown or near Lake Hamilton?",
    answer:
      "Downtown is better if you want walkable restaurants, bathhouses, shops, and history. Lake Hamilton is better if you want water views, lakefront food, boating, and a quieter stay.",
  },
  {
    question: "Are there romantic hotels in Hot Springs?",
    answer:
      "Yes. Hot Springs has boutique hotels, historic hotels, lakeside inns, spa stays, and quieter lodging options that work well for couples trips and weekend getaways.",
  },
];

export default function HotelsPage() {
  const mainHotel = featuredHotels[0];
  const sideHotels = featuredHotels.slice(1, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Hotels in Hot Springs, Arkansas",
              description:
                "Hotels, boutique stays, historic lodging, lakeside inns, and places to stay near Hot Springs, Arkansas.",
              itemListElement: allHotels.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Hotel",
                  name: place.name,
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
        eyebrow={hotelsHero.eyebrow}
        title={hotelsHero.title}
        description={hotelsHero.description}
        image={hotelsHero.image}
        primaryCta={hotelsHero.primaryCta}
        secondaryCta={hotelsHero.secondaryCta}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Hotel Guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Find a stay that fits the trip you’re actually planning.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Hot Springs has several different kinds of stays. You can stay
                downtown near Bathhouse Row, book close to Oaklawn, find
                something around Lake Hamilton, or choose a quieter hotel or inn
                outside the busiest parts of town.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Use this guide to compare hotels near{" "}
                <Link
                  href="/explore"
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
                  href="/hot-springs-ar-restaurants"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  restaurants
                </Link>
                , Oaklawn, Lake Hamilton, spas, trails, and downtown Hot
                Springs.
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

          <Link href="/hot-springs-ar-restaurants" className="btn">
            Restaurants
          </Link>

          <Link href="/hot-springs-ar-cabins" className="btn">
            Cabins
          </Link>

          <Link href="/explore" className="btn">
            Explore Hot Springs
          </Link>
        </div>
      </section>

      {mainHotel && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Featured Hotels in Hot Springs</h2>

              <p>
                These featured stays are useful starting points for visitors
                looking near downtown, Bathhouse Row, Oaklawn, Lake Hamilton,
                restaurants, spas, and local attractions.
              </p>
            </div>

            <div className="space-y-8">
              <a
                href={mainHotel.website ?? mainHotel.directions ?? mainHotel.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img
                    src={mainHotel.image}
                    alt={mainHotel.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p
                    className="mb-3 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Featured Stay
                  </p>

                  <h3 className="mb-4 text-4xl font-semibold leading-tight">
                    {mainHotel.name}
                  </h3>

                  <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                    {mainHotel.type}
                  </p>

                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {mainHotel.description}
                  </p>

                  <div
                    className="mt-6 space-y-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {mainHotel.address && <p>📍 {mainHotel.address}</p>}
                    {mainHotel.phone && <p>📞 {mainHotel.phone}</p>}
                  </div>

                  <span
                    className="mt-6 inline-block font-bold"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    View hotel →
                  </span>
                </div>
              </a>

              <div className="grid gap-6 lg:grid-cols-2">
                {sideHotels.map((place) => (
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
                        Hot Springs Hotel
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
                        View hotel →
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
            <h2>More Hotels and Places to Stay Near Hot Springs</h2>

            <p>
              These additional hotels, inns, and lodging options are useful for
              visitors comparing downtown stays, lake-area stays, historic
              hotels, romantic getaways, and places near local attractions.
            </p>
          </div>

          <div className="space-y-6">
            {standardHotels.map((place, index) => (
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
          src="/images/businesses/the-waters-hotel.jpg"
          alt="Hotel stay in downtown Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Downtown, Lake Views & Weekend Stays
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Where you stay changes the whole trip.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Stay downtown if you want to walk to restaurants and bathhouses,
              stay near Oaklawn for racing and casino weekends, or look around
              Lake Hamilton for a slower getaway near the water.
            </p>

            <Link
              href="/hot-springs-ar-restaurants"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Find Restaurants Nearby
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Best Areas to Stay Around Hot Springs</h2>

            <p>
              Different parts of town work better for different kinds of trips.
              Here’s the simple way to think about it before booking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {stayAreas.map((area) => (
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
            <h2>Hot Springs Hotel FAQs</h2>

            <p>
              Quick answers for visitors comparing hotels, downtown stays,
              lake-area lodging, Oaklawn trips, cabins, restaurants, and
              attractions.
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
                For Hotels and Lodging Owners
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Want your hotel or stay listed here?
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                This Hot Springs lodging guide helps visitors compare places to
                stay while planning trips around Bathhouse Row, Lake Hamilton,
                Oaklawn, restaurants, spas, and local attractions.
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