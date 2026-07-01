import Link from "next/link";
import LocalSpotHero from "@/components/local-spots/LocalSpotHero";
import LocalSpotSection from "@/components/local-spots/LocalSpotSection";
import LocalSpotCTA from "@/components/local-spots/LocalSpotCTA";
import { familyFriendlySpots } from "@/data/local-spots/hiddenGems";

export const metadata = {
  title:
    "Family-Friendly Things To Do in Hot Springs Arkansas | Local Picks & Kid-Friendly Stops",
  description:
    "Explore family-friendly local picks in Hot Springs, Arkansas, including kid-friendly attractions, duck tours, parks, trails, museums, sweets, easy food stops, and local suggestions from families.",
  keywords: [
    "family friendly Hot Springs Arkansas",
    "things to do with kids in Hot Springs Arkansas",
    "Hot Springs Arkansas family activities",
    "kid friendly Hot Springs AR",
    "Hot Springs Arkansas local spots",
    "Hot Springs Arkansas hidden gems",
    "National Park Duck Tours Hot Springs",
    "Cedar Glades Park Hot Springs",
    "Gangster Museum Hot Springs families",
  ],

  alternates: {
    canonical: "/hot-springs-family-friendly",
  },
};

const familyHighlights = [
  {
    title: "National Park Duck Tours",
    eyebrow: "Tour • Family Activity",
    text:
      "A land-and-water tour that starts downtown and gives families an easy way to see more of Hot Springs without planning every stop on their own.",
    image: "/images/businesses/national-park-duck-tours.jpg",
    website: "https://rideaduck.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=National+Park+Duck+Tours+418+Central+Ave+Hot+Springs+AR",
  },
  {
    title: "Cedar Glades Park",
    eyebrow: "Park • Trails • Outdoor Time",
    text:
      "A good outdoor stop when kids need room to move, with trails, disc golf, open space, and a more local park feel outside the main downtown attractions.",
    image: "/images/businesses/cedar-glades-park.png",
    website: "https://www.garlandcounty.org/263/Cedar-Glades-Park",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Cedar+Glades+Park+461+Wildcat+Rd+Hot+Springs+AR",
  },
  {
    title: "The Gangster Museum of America",
    eyebrow: "Museum • History • Older Kids",
    text:
      "A downtown history stop that may be a better fit for older kids, teens, and families interested in Hot Springs’ gangster, gambling, bootlegging, and early city history.",
    image: "/images/businesses/gangster-museum-of-america.png",
    website: "https://thegangstermuseum.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Gangster+Museum+of+America+510+Central+Ave+Hot+Springs+AR",
  },
];

export default function HotSpringsFamilyFriendlyPage() {
  return (
    <main>
      <LocalSpotHero
        eyebrow="Family-Friendly Local Finds"
        title="Easy family stops locals mentioned around Hot Springs."
        description="These are kid-friendly places, creative stops, outdoor areas, classic food spots, and simple local ideas that work well for families visiting Hot Springs."
        image="/images/local-spots/family-hero.png"
      />

      <section>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="hero-eyebrow">Family Guide</p>

              <h2>Not every family stop has to be a full-day attraction.</h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Some of the best family ideas are the simple ones: a hands-on
                shop, a creekside walk, an old-school burger and ice cream stop,
                a creative indoor activity, a tour, a museum, or a place where
                kids can burn off some energy before the next part of the trip.
              </p>

              <p
                className="leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                This page pulls together local suggestions that fit families,
                visitors with kids, rainy days, hot summer afternoons, and
                people who want something a little more local than the standard
                tourist checklist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/things-to-do-in-hot-springs-ar" className="btn-secondary">
            Things To Do
          </Link>

          <Link href="/hot-springs-ar-restaurants" className="btn-secondary">
            Restaurants
          </Link>

          <Link href="/events" className="btn-secondary">
            Events
          </Link>

          <Link href="/hot-springs-local-spots" className="btn-secondary">
            All Local Spots
          </Link>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div
            className="rounded-3xl border p-6 shadow-sm md:p-8"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p className="hero-eyebrow">Local Note</p>

            <h2 className="mb-4">
              Good for kids, but still worth checking ahead.
            </h2>

            <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
              Hours, prices, specials, tour times, age fit, and seasonal details
              can change, especially for small local businesses and attractions.
              Use this as a starting point, then check the business page or
              website before loading everybody in the car.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Family Highlights</p>

            <h2>More easy stops to consider with kids or visiting family.</h2>

            <p>
              These are not the only family-friendly stops in Hot Springs, but
              they are useful additions when you want a tour, outdoor space, or
              a downtown history stop that works better for older kids and teens.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {familyHighlights.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 flex-1 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Official Site
                    </a>

                    <a
                      href={item.directions}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocalSpotSection
        groupSlug="family-friendly"
        spots={familyFriendlySpots}
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
                Family Trip Planning
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Planning around kids, weather, and snacks?
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                Check the events page too. Local markets, family events,
                downtown activities, and seasonal things to do will show there
                as they’re added and approved.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/this-weekend"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "var(--green)",
                  }}
                >
                  See This Weekend
                </Link>

                <Link
                  href="/submit-event"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Submit a Family Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocalSpotCTA
        title="Know another family-friendly local spot?"
        text="If there’s a park, food stop, activity, event, or easy family idea around Hot Springs that visitors should know about, send it in so we can keep building this guide from real local suggestions."
      />
    </main>
  );
}