import ShoppingGuideCTA from "@/components/shopping/ShoppingGuideCTA";
import ShoppingHero from "@/components/shopping/ShoppingHero";
import ShoppingPlaceCard from "@/components/shopping/ShoppingPlaceCard";
import { antiquePlaces, fleaPlaces, thriftPlaces } from "@/data/shoppingGuides";

export const metadata = {
  title: "Thrift Stores in Hot Springs, Arkansas",
  description:
    "A local guide to thrift stores, resale shops, nonprofit thrift shops, consignment stops, secondhand shopping, and cause-based resale around Hot Springs, Arkansas.",
  keywords: [
    "thrift stores Hot Springs Arkansas",
    "Hot Springs AR thrift shops",
    "resale shops Hot Springs Arkansas",
    "secondhand shopping Hot Springs AR",
    "Goodwill Hot Springs Arkansas",
    "Habitat ReStore Hot Springs",
  ],

  alternates: {
    canonical: "/hot-springs-thrift-stores",
  },
};

const featuredThriftPlaces = thriftPlaces.filter((place) => place.featured);
const causeBasedThriftPlaces = thriftPlaces.filter((place) =>
  place.bestFor.some((item) =>
    item.toLowerCase().includes("cause") ||
    item.toLowerCase().includes("animal") ||
    item.toLowerCase().includes("cat") ||
    item.toLowerCase().includes("mission")
  )
);

const otherThriftPlaces = thriftPlaces.filter(
  (place) =>
    !place.featured && !causeBasedThriftPlaces.some((item) => item.name === place.name)
);

export default function HotSpringsThriftStoresPage() {
  return (
    <main>
      <ShoppingHero
        kicker="Hot Springs Thrift Stores"
        title="Secondhand shops, resale stops, and thrift stores around Hot Springs."
        text="Thrift shopping in Hot Springs is less about one perfect store and more about knowing the mix. There are practical resale shops, nonprofit thrift stores, donation-based stops, furniture and home goods places, and smaller shops tied to local causes."
        primaryHref="/hot-springs-antique-thrift-flea-markets"
        primaryLabel="Back to Shopping Hub"
        secondaryLinks={[
          {
            href: "/hot-springs-antique-stores",
            label: "Antique Stores",
          },
          {
            href: "/hot-springs-flea-markets",
            label: "Flea Markets",
          },
        ]}
        cardTitle="Thrift stores are hit-or-miss by nature."
        cardText="Inventory changes constantly, and hours can vary more than regular retail stores. If you are trying to visit a specific shop, especially a smaller nonprofit or church-connected thrift store, it is worth calling or checking Facebook before you go."
        image="/images/shopping/thrift-stores-hero.png"
      />

      <section className="shopping-section shopping-section-tight">
        <div className="container">
          <div className="shopping-stat-row">
            <div className="shopping-stat-card">
              <strong>{thriftPlaces.length}</strong>
              <span>thrift and resale shops found</span>
            </div>

            <div className="shopping-stat-card">
              <strong>{causeBasedThriftPlaces.length}</strong>
              <span>cause-based resale stops</span>
            </div>

            <div className="shopping-stat-card">
              <strong>{antiquePlaces.length + fleaPlaces.length}</strong>
              <span>nearby antique and flea market options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping-section">
        <div className="container shopping-story-grid">
          <div className="shopping-story-card">
            <p className="shopping-kicker">Thrifting around town</p>
            <h2>The best finds usually come from checking more than one stop.</h2>
          </div>

          <div className="shopping-story-copy">
            <p>
              Hot Springs has a practical thrift scene. Some stores are better
              for furniture and home projects. Some are better for clothes,
              housewares, books, or small household basics. Others matter
              because the money supports a local cause, a church, a rescue, or a
              community organization.
            </p>

            <p>
              The honest truth is that thrift shopping can be uneven anywhere.
              One day a shop may feel picked over, and the next week it may have
              exactly what somebody was hoping to find. This guide keeps that
              spirit in mind and focuses on useful local stops instead of trying
              to oversell every place as a hidden gem.
            </p>
          </div>
        </div>
      </section>

      {featuredThriftPlaces.length > 0 && (
        <section className="shopping-section shopping-preview-section">
          <div className="container">
            <div className="shopping-section-heading">
              <p className="shopping-kicker">Good place to start</p>
              <h2>A strong thrift and resale anchor.</h2>
              <p>
                If you are starting with one practical resale stop, this is the
                one we would feature first because it fits furniture, home goods,
                DIY finds, and the broader secondhand-shopping angle.
              </p>
            </div>

            <div className="shopping-place-grid">
              {featuredThriftPlaces.map((place) => (
                <ShoppingPlaceCard key={place.name} place={place} />
              ))}
            </div>
          </div>
        </section>
      )}

      {causeBasedThriftPlaces.length > 0 && (
        <section className="shopping-section">
          <div className="container">
            <div className="shopping-section-heading">
              <p className="shopping-kicker">Shop for a cause</p>
              <h2>Thrift stores connected to local missions and nonprofits.</h2>
              <p>
                These are the thrift stops where the story behind the shop
                matters too. Some are tied to animal welfare, rescue work,
                ministry, or local community support.
              </p>
            </div>

            <div className="shopping-place-grid">
              {causeBasedThriftPlaces.map((place) => (
                <ShoppingPlaceCard key={place.name} place={place} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="shopping-section shopping-preview-section">
        <div className="container">
          <div className="shopping-section-heading">
            <p className="shopping-kicker">More resale stops</p>
            <h2>Other thrift and secondhand shops to check.</h2>
            <p>
              These shops round out the Hot Springs thrift list. Some details
              should be verified before making a special trip, but they belong
              in the guide because they give shoppers more options around town.
            </p>
          </div>

          <div className="shopping-place-grid">
            {otherThriftPlaces.map((place) => (
              <ShoppingPlaceCard key={place.name} place={place} />
            ))}
          </div>
        </div>
      </section>

      <ShoppingGuideCTA
        kicker="Local help"
        title="Know a thrift shop we should add?"
        text="If a local thrift store moved, changed hours, opened a new location, or deserves a spot on this page, send it in. These guides work better when locals help keep them current."
        href="/contact"
        label="Send a suggestion"
      />
    </main>
  );
}