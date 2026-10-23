import Link from "next/link";
import FindAPlaceBookingCTA from "@/components/FindAPlaceBookingCTA";
import FindAPlaceLoneCedarStays from "@/components/FindAPlaceLoneCedarStays";
import WeeklyFindAPlaceStays from "@/components/WeeklyFindAPlaceStays";
import Hero from "@/components/Hero";
import { cabinsHero } from "@/data/hero";
import { businesses } from "@/data/businesses";
import EventsCTA from "@/components/events/EventsCTA";
import LynLiliRentalCleaningBanner from "@/components/ads/LynLiliRentalCleaningBanner";
import { businessClickTracking, getPlacementType } from "@/lib/tracking";

export const metadata = {
  title:
    "Cabins in Hot Springs, Arkansas | Lake Hamilton, Treehouses & Quiet Stays",
  description:
    "Find cabins in Hot Springs, Arkansas, including treehouse stays, lake-area cottages, wooded retreats, romantic getaways, RV resorts, vacation rentals, and quiet places to stay near Lake Hamilton, Lake Catherine, Bathhouse Row, Oaklawn, and Hot Springs National Park.",
  keywords: [
    "cabins in Hot Springs Arkansas",
    "Hot Springs AR cabins",
    "Hot Springs Arkansas cabin rentals",
    "cabins near Lake Hamilton",
    "cabins near Hot Springs National Park",
    "romantic cabins Hot Springs Arkansas",
    "treehouse cabins Hot Springs Arkansas",
    "Hot Springs Arkansas vacation rentals",
    "places to stay Hot Springs Arkansas",
    "Lake Hamilton cabins",
    "Lake Catherine cabins",
  ],

  alternates: {
    canonical: "/hot-springs-ar-cabins",
  },
};

const allCabins = businesses.filter(
  (business) => business.category === "Cabins & Lodging"
);

const featuredCabins = allCabins.filter((business) => business.featured);

const standardCabins = allCabins.filter((business) => !business.featured && business.name !== "Lone Cedar Cabins");

const faqs = [
  {
    question: "Are there cabins in Hot Springs, Arkansas?",
    answer:
      "Yes. Hot Springs has cabins, cottages, lake-area stays, wooded retreats, treehouse-style stays, RV resorts, and vacation rentals near Lake Hamilton, Lake Catherine, downtown Hot Springs, and nearby outdoor attractions.",
  },
  {
    question: "Where is the best area to book a cabin in Hot Springs?",
    answer:
      "The best area depends on your trip. Lake Hamilton and Lake Catherine are good for water access and views, wooded areas are better for privacy, and stays closer to downtown are better for restaurants, Bathhouse Row, and Hot Springs National Park.",
  },
  {
    question: "Are Hot Springs cabins good for couples?",
    answer:
      "Yes. Hot Springs works well for couples because visitors can combine cabins, treehouse stays, spas, bathhouses, lake views, restaurants, gardens, and quiet mountain scenery.",
  },
  {
    question: "Are there family-friendly cabins near Hot Springs?",
    answer:
      "Yes. Families can find cabins, cottages, RV resorts, vacation rentals, and larger stays around Hot Springs, Lake Hamilton, Lake Catherine, and nearby outdoor areas.",
  },
  {
    question: "Should I stay in a cabin or hotel in Hot Springs?",
    answer:
      "Choose a cabin if you want more space, privacy, outdoor areas, lake access, or a quieter getaway. Choose a hotel if you want easier access to downtown, Bathhouse Row, Oaklawn, and walkable restaurants.",
  },
];

export default function CabinsPage() {
  const mainCabin = featuredCabins[0];
  const sideCabins = featuredCabins.slice(1, 3);
  const priorityCabins = standardCabins.slice(0, 2);
  const remainingCabins = standardCabins.slice(2);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Cabins in Hot Springs, Arkansas",
              description:
                "Cabins, treehouse stays, lake cottages, RV resorts, vacation rentals, and quiet lodging near Hot Springs, Arkansas.",
              itemListElement: allCabins.map((place, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "LodgingBusiness",
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
        eyebrow={cabinsHero.eyebrow}
        title={cabinsHero.title}
        description={cabinsHero.description}
        image={cabinsHero.image}
        primaryCta={cabinsHero.primaryCta}
        secondaryCta={cabinsHero.secondaryCta}
      />

      <nav aria-label="Browse the cabins guide" className="container flex flex-wrap items-center gap-3 py-7 text-sm">
        <span className="font-semibold" style={{ color: "var(--text)" }}>Browse:</span>
        <a className="rounded-full border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }} href="#hot-springs-featured">Featured stays</a>
        <a className="rounded-full border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }} href="#lone-cedar-stays">Bookable Lone Cedar stays</a>
        <a className="rounded-full border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }} href="#hot-springs-more">More cabins & resorts</a>
        <Link className="rounded-full border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }} href="/lake-hamilton-cabins">Lake Hamilton</Link>
        <Link className="rounded-full border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }} href="/hot-springs-ar-hotels">Hotels</Link>
      </nav>

      <div className="pb-4">
        <LynLiliRentalCleaningBanner context="cabins" />
      </div>

      <div id="hot-springs-featured" />
      {mainCabin && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Featured Cabins and Unique Stays Near Hot Springs</h2>

              <p>
                These featured stays are useful starting points for visitors
                looking for wooded getaways, lake-area lodging, cottages,
                romantic stays, and quiet places near Hot Springs attractions.
              </p>
            </div>

            <div className="space-y-8">
              <a
                href={
                  mainCabin.website ?? mainCabin.directions ?? mainCabin.href ?? "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                {...businessClickTracking({
                  action: mainCabin.website ? "website" : mainCabin.directions ? "directions" : "view-details",
                  business: mainCabin.name,
                  page: "/hot-springs-ar-cabins",
                  placement: "featured-cabins-main",
                  placementType: getPlacementType(mainCabin.name),
                })}
                className="grid overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-[1.1fr_0.9fr]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[360px] w-full overflow-hidden md:h-[500px]">
                  <img
                    src={mainCabin.image}
                    alt={mainCabin.name}
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
                    {mainCabin.name}
                  </h3>

                  <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                    {mainCabin.type}
                  </p>

                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {mainCabin.description}
                  </p>

                  <div
                    className="mt-6 space-y-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {mainCabin.address && <p>📍 {mainCabin.address}</p>}
                    {mainCabin.phone && <p>📞 {mainCabin.phone}</p>}
                  </div>

                  <span
                    className="mt-6 inline-block font-bold"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    View stay →
                  </span>
                </div>
              </a>

              <div className="grid gap-6 lg:grid-cols-2">
                {sideCabins.map((place) => (
                  <a
                    href={place.website ?? place.directions ?? place.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={place.name}
                    {...businessClickTracking({
                      action: place.website ? "website" : place.directions ? "directions" : "view-details",
                      business: place.name,
                      page: "/hot-springs-ar-cabins",
                      placement: "featured-cabins-side",
                      placementType: getPlacementType(place.name),
                    })}
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
                        Hot Springs Lodging
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
                        View stay →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div id="lone-cedar-stays" />
      <FindAPlaceLoneCedarStays />
      <WeeklyFindAPlaceStays />

      <div id="hot-springs-more" />
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                More Cabin-Style Stays
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Cabins, cottages, RV resorts, and quiet places near Hot Springs.
              </h2>
            </div>

            <p
              className="max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              These additional cabin-style stays and lodging options are useful
              for visitors comparing treehouses, lake cottages, wooded retreats,
              RV resorts, romantic getaways, and vacation rentals near local
              attractions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {priorityCabins.map((place) => (
              <div
                key={place.name}
                className="group overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[320px] overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wide backdrop-blur">
                    {place.type}
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-3xl font-semibold leading-tight">
                    {place.name}
                  </h3>

                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {place.description}
                  </p>

                  {place.address && (
                    <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
                      📍 {place.address}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    {place.phone && (
                      <a
                        href={`tel:${place.phone.replace(/[^\d]/g, "")}`}
                        className="inline-flex rounded-full px-5 py-2 text-sm font-bold shadow-sm transition hover:opacity-90"
                        style={{
                          background: "var(--green)",
                          color: "#ffffff",
                        }}
                      >
                        Call
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
                        {place.website?.includes("findaplacebooking.com") ? "Book on Find A Place" : "Website"}
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
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingCabins.map((place) => (
              <div
                key={place.name}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-56 overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-wide"
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
                    {place.description}
                  </p>

                  {place.address && (
                    <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
                      📍 {place.address}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-3 pt-5">
                    {place.phone && (
                      <a
                        href={`tel:${place.phone.replace(/[^\d]/g, "")}`}
                        className="inline-flex rounded-full px-4 py-2 text-sm font-bold shadow-sm transition hover:opacity-90"
                        style={{
                          background: "var(--green)",
                          color: "#ffffff",
                        }}
                      >
                        Call
                      </a>
                    )}

                    {place.website && (
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full border px-4 py-2 text-sm font-bold transition hover:opacity-90"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--green)",
                          background: "var(--surface-strong)",
                        }}
                      >
                        {place.website?.includes("findaplacebooking.com") ? "Book on Find A Place" : "Website"}
                      </a>
                    )}

                    {place.directions && (
                      <a
                        href={place.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full border px-4 py-2 text-sm font-bold transition hover:opacity-90"
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
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[620px] items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/in-the-trees.jpg"
          alt="Cabin stay near Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Quiet Getaways Near Hot Springs
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Cabins give the trip a slower, more private feel.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Stay in the trees, near the lake, close to trails, or just outside
              town when you want more space than a hotel and an easier place to
              unwind after exploring.
            </p>

            <Link
              href="/things-to-do-in-hot-springs-ar"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Plan Things To Do
            </Link>
          </div>
        </div>
      </section>

      <div className="pt-16 md:pt-20">
        <EventsCTA
          title="Staying in Hot Springs soon?"
          text="Before you book out your weekend, check what’s happening around town so you can plan around festivals, live music, markets, and local events."
        />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Hot Springs Cabin FAQs</h2>

            <p>
              Quick answers for visitors comparing cabins, hotels, vacation
              rentals, lake stays, romantic getaways, and family lodging around
              Hot Springs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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

      <FindAPlaceBookingCTA
        heading="Looking for a stay in Hot Springs?"
        text="Browse cabins, vacation rentals, and other stays on Find a Place Booking, with results already focused on Hot Springs."
        href="https://www.findaplacebooking.com/stays?where=Hot%20Springs"
        buttonLabel="Find a Stay in Hot Springs →"
      />

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
                For Cabin and Rental Owners
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Want your cabin or vacation rental listed here?
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                This Hot Springs cabin guide helps visitors compare places to
                stay while planning trips around Lake Hamilton, Lake Catherine,
                Bathhouse Row, restaurants, hiking, spas, and local attractions.
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
