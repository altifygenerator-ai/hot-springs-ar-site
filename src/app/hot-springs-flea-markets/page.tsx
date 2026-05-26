import ShoppingGuideCTA from "@/components/shopping/ShoppingGuideCTA";
import ShoppingHero from "@/components/shopping/ShoppingHero";
import ShoppingPlaceCard from "@/components/shopping/ShoppingPlaceCard";
import { antiquePlaces, fleaPlaces, thriftPlaces } from "@/data/shoppingGuides";

export const metadata = {
  title: "Flea Markets in Hot Springs, Arkansas",
  description:
    "A local guide to flea markets, vendor malls, antique malls, indoor markets, collectibles, furniture, vintage goods, and booth-style shopping around Hot Springs, Arkansas.",
  keywords: [
    "flea markets Hot Springs Arkansas",
    "Hot Springs flea market",
    "vendor malls Hot Springs AR",
    "Hot Springs AR antique mall",
    "Central Avenue Marketplace Hot Springs",
    "Airport Flea Market Hot Springs",
  ],
};

const featuredFleaPlaces = fleaPlaces.filter((place) => place.featured);
const otherFleaPlaces = fleaPlaces.filter((place) => !place.featured);

export default function HotSpringsFleaMarketsPage() {
  return (
    <main>
      <ShoppingHero
        kicker="Hot Springs Flea Markets"
        title="Vendor booths, antique malls, and flea markets built for wandering."
        text="The flea market side of Hot Springs is where the shopping gets unpredictable in the best way. One booth might have old tools and furniture. The next might have vintage jewelry, glassware, records, handmade goods, signs, seasonal decor, or Hot Springs memorabilia."
        primaryHref="/hot-springs-antique-thrift-flea-markets"
        primaryLabel="Back to Shopping Hub"
        secondaryLinks={[
          {
            href: "/hot-springs-antique-stores",
            label: "Antique Stores",
          },
          {
            href: "/hot-springs-thrift-stores",
            label: "Thrift Stores",
          },
        ]}
        cardTitle="Vendor markets change constantly."
        cardText="Booths, vendors, inventory, and hours can change, especially with smaller flea markets. Use this guide to plan your route, then check Facebook, Google, or call before making a special trip."
        image="/images/shopping/flea-markets-hero.jpg"
      />

      <section className="shopping-section shopping-section-tight">
        <div className="container">
          <div className="shopping-stat-row">
            <div className="shopping-stat-card">
              <strong>{fleaPlaces.length}</strong>
              <span>flea markets and vendor malls found</span>
            </div>

            <div className="shopping-stat-card">
              <strong>{featuredFleaPlaces.length}</strong>
              <span>strong featured stops</span>
            </div>

            <div className="shopping-stat-card">
              <strong>{antiquePlaces.length + thriftPlaces.length}</strong>
              <span>nearby antique and thrift options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping-section">
        <div className="container shopping-story-grid">
          <div className="shopping-story-card">
            <p className="shopping-kicker">Flea market wandering</p>
            <h2>The fun is not always knowing what you will find.</h2>
          </div>

          <div className="shopping-story-copy">
            <p>
              Flea markets and vendor malls fit Hot Springs well because the
              town already has that wandering kind of energy. You can start on
              Central Avenue, head toward Airport Road, or work your way through
              a larger indoor market where every booth has its own personality.
            </p>

            <p>
              Some places lean more antique. Some feel more like a classic flea
              market. Some mix in handmade goods, seasonal decor, gifts,
              furniture, collectibles, and local odds and ends. This page keeps
              them together because most shoppers looking for one will probably
              enjoy the others too.
            </p>
          </div>
        </div>
      </section>

      {featuredFleaPlaces.length > 0 && (
        <section className="shopping-section shopping-preview-section">
          <div className="container">
            <div className="shopping-section-heading">
              <p className="shopping-kicker">Good places to start</p>
              <h2>Featured flea markets and vendor malls.</h2>
              <p>
                These are the strongest flea market and vendor-style stops to
                start with because they have clearer public information, useful
                visitor details, and the kind of broad inventory that makes a
                flea market guide feel worthwhile.
              </p>
            </div>

            <div className="shopping-place-grid">
              {featuredFleaPlaces.map((place) => (
                <ShoppingPlaceCard key={place.name} place={place} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="shopping-section">
        <div className="container">
          <div className="shopping-section-heading">
            <p className="shopping-kicker">More markets to check</p>
            <h2>Other flea market and vendor-style stops around Hot Springs.</h2>
            <p>
              These are worth keeping in the guide, but some need current hours,
              spelling, phone number, or status checked before we would push
              them too hard. That is normal with flea markets, where details can
              change faster than regular retail.
            </p>
          </div>

          <div className="shopping-place-grid">
            {otherFleaPlaces.map((place) => (
              <ShoppingPlaceCard key={place.name} place={place} />
            ))}
          </div>
        </div>
      </section>

      <ShoppingGuideCTA
        kicker="Local help"
        title="Know a flea market or vendor mall we should add?"
        text="If there is a vendor mall, antique booth market, weekend flea market, or small local resale stop that belongs here, send it in. We want this guide to stay useful instead of turning into an outdated list."
        href="/contact"
        label="Send a suggestion"
      />
    </main>
  );
}