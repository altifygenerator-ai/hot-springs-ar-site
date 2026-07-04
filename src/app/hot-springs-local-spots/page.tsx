import Link from "next/link";
import LocalSpotHero from "@/components/local-spots/LocalSpotHero";
import LocalSpotCard from "@/components/local-spots/LocalSpotCard";
import LocalSpotCTA from "@/components/local-spots/LocalSpotCTA";
import { localSpots } from "@/data/local-spots/hiddenGems";

export const metadata = {
  title: "Local Hidden Gems in Hot Springs Arkansas | Local Spots & Visitor Tips",
  description:
    "Explore local hidden gems in Hot Springs, Arkansas, including family-friendly stops, Ouachita Avenue spots, Bathhouse Row finds, local restaurants, boutiques, parks, shops, and creative places locals recommend.",
  keywords: [
    "Hot Springs Arkansas hidden gems",
    "local spots Hot Springs Arkansas",
    "things locals recommend in Hot Springs",
    "Hot Springs family friendly attractions",
    "Ouachita Avenue Hot Springs",
    "Bathhouse Row local shops",
    "Hot Springs local restaurants",
    "MT Savvy Styles Boutique",
    "The English Muffin Hot Springs",
    "Cedar Glades Park Hot Springs",
    "Hot Springs local boutiques",
    "Hot Springs local breakfast",
    "Hot Springs parks and trails",
  ],


  alternates: {
    canonical: "/hot-springs-local-spots",
  },
};

const guideLinks = [
  {
    href: "/hot-springs-ouachita-avenue",
    label: "Ouachita Avenue",
    text: "Food, drinks, coffee, shops, and creative stops locals said visitors overlook.",
  },
  {
    href: "/hot-springs-family-friendly",
    label: "Family-Friendly Finds",
    text: "Kid-friendly stops, creative activities, outdoor places, sweets, and easy family ideas.",
  },
  {
    href: "/hot-springs-bathhouse-row-local-finds",
    label: "Bathhouse Row Local Finds",
    text: "The Arlington mall level, books, ice cream, boutiques, bathhouses, and downtown tips.",
  },
];

const featuredSpotIds = [
  "ouachita-avenue",
  "bricks-and-minifigs",
  "black-ribbon-books",
  "sqzbx",
  "hot-springs-creek-greenway",
  "the-pho-house",
  "mt-savvy-styles-boutique",
  "the-english-muffin",
  "cedar-glades-park",
];

const featuredSpots = featuredSpotIds
  .map((id) => localSpots.find((spot) => spot.id === id))
  .filter((spot): spot is NonNullable<typeof spot> => Boolean(spot));

export default function HotSpringsLocalSpotsPage() {
  return (
    <main>
      <LocalSpotHero
  eyebrow="Local Picks"
  title="Local hidden gems and community favorites in Hot Springs."
  description="These are the places locals brought up when we asked what visitors usually miss, from Ouachita Avenue and Bathhouse Row finds to family stops, food spots, boutiques, coffee, parks, trails, and creative places around town."
  image="/images/local-spots/hero.png"
/>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Start Here</p>
            <h2>Browse by the kind of trip you’re planning.</h2>
            <p>
              These guides are built around real local suggestions, so visitors
              can find the stuff that does not always show up first on a normal
              travel search.
            </p>
          </div>

          <div className="categories-grid">
            {guideLinks.map((link) => (
              <Link key={link.href} href={link.href} className="category-card">
                <div className="category-content">
                  <h3>{link.label}</h3>
                  <p>{link.text}</p>
                  <span>Explore guide →</span>
                </div>
              </Link>
            ))}
          </div>
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
            <p className="hero-eyebrow">Community Built</p>

            <h2 className="mb-4">
              This section is built from real local suggestions.
            </h2>

            <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
              The goal is not to make another generic travel list. These pages
              are for the easy-to-miss shops, older food stops, creative
              corners, family-friendly ideas, and downtown finds locals actually
              bring up when someone asks what visitors should check out. Recent
              suggestions also added more sweets, books, coffee, wellness, and
              west Garland County food stops to the local guide.
            </p>
          </div>
        </div>
      </section>

      <section className="local-spot-section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Featured Local Picks</p>
            <h2>A few places to start.</h2>
            <p>
              These are sample local picks from across the full guides. Use the
              category pages above to dig into each area without this page
              getting overloaded.
            </p>
          </div>

          <div className="local-spots-grid">
            {featuredSpots.map((spot) => (
              <LocalSpotCard
                key={spot.id}
                spot={spot}
                trackingPage="/hot-springs-local-spots"
                trackingPlacement="local-spots-featured-picks"
                trackingPlacementType="editorial"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Quick Guide</p>
            <h2>Pick a local guide.</h2>
            <p>
              Each guide keeps the suggestions organized so visitors can find
              what fits their trip instead of scrolling through one giant list.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="mb-3">{link.label}</h3>
                <p style={{ color: "var(--muted)" }}>{link.text}</p>
                <span
                  className="mt-5 inline-block font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  View guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocalSpotCTA />
    </main>
  );
}