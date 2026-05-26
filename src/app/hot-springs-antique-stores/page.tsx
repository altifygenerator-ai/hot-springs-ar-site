import ShoppingGuideCTA from "@/components/shopping/ShoppingGuideCTA";
import ShoppingHero from "@/components/shopping/ShoppingHero";
import ShoppingPlaceCard from "@/components/shopping/ShoppingPlaceCard";
import { antiquePlaces, fleaPlaces } from "@/data/shoppingGuides";

export const metadata = {
  title: "Antique Stores in Hot Springs, Arkansas",
  description:
    "A local guide to antique stores, vintage shops, curated decor, estate jewelry, collectibles, retro finds, and antique shopping around Hot Springs, Arkansas.",
  keywords: [
    "antique stores Hot Springs Arkansas",
    "Hot Springs AR antiques",
    "vintage shops Hot Springs Arkansas",
    "antique shopping Hot Springs",
    "Bathhouse Row antiques",
    "Hot Springs Arkansas collectibles",
  ],
};

const featuredAntiquePlaces = antiquePlaces.filter((place) => place.featured);
const otherAntiquePlaces = antiquePlaces.filter((place) => !place.featured);

export default function HotSpringsAntiqueStoresPage() {
  return (
    <main>
      <ShoppingHero
        kicker="Hot Springs Antique Stores"
        title="Old pieces, vintage finds, and antique stops worth slowing down for."
        text="Antique shopping in Hot Springs has a different pace to it. You might start near Bathhouse Row, drift toward Hobson Avenue, or find yourself in a vendor mall where the shelves are packed with old signs, glassware, furniture, jewelry, records, lamps, and things that feel like they came out of somebody’s family story."
        primaryHref="/hot-springs-antique-thrift-flea-markets"
        primaryLabel="Back to Shopping Hub"
        secondaryLinks={[
          {
            href: "/hot-springs-thrift-stores",
            label: "Thrift Stores",
          },
          {
            href: "/hot-springs-flea-markets",
            label: "Flea Markets",
          },
        ]}
        cardTitle="Antique inventory changes fast."
        cardText="If you are looking for a certain shop, a specific kind of piece, or you are driving in from out of town, check the shop’s website, Google listing, or Facebook page before you go. Smaller antique and vintage shops can change hours, locations, and inventory without much warning."
        image="/images/shopping/antique-store-hero.jpg"
      />

      <section className="shopping-section shopping-section-tight">
        <div className="container">
          <div className="shopping-stat-row">
            <div className="shopping-stat-card">
              <strong>{antiquePlaces.length}</strong>
              <span>antique and vintage stops found</span>
            </div>

            <div className="shopping-stat-card">
              <strong>{featuredAntiquePlaces.length}</strong>
              <span>strong starting places</span>
            </div>

            <div className="shopping-stat-card">
              <strong>{fleaPlaces.length}</strong>
              <span>nearby flea and vendor markets</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shopping-section">
        <div className="container shopping-story-grid">
          <div className="shopping-story-card">
            <p className="shopping-kicker">Antique shopping in Hot Springs</p>
            <h2>Some places are polished. Some are packed. Both can be worth it.</h2>
          </div>

          <div className="shopping-story-copy">
            <p>
              Hot Springs antique shopping is not just one kind of thing. You
              can find downtown antique stops close to the historic district,
              more character-heavy shops around Hobson Avenue, curated vintage
              decor, retro clothing, collectibles, and larger vendor-style
              places where antiques mix with flea market finds.
            </p>

            <p>
              That mix is what makes the area interesting. One stop might be
              better for estate jewelry and period lighting. Another might be
              better for furniture, old books, signs, records, or odd little
              pieces that do not fit neatly into a category. This guide is meant
              to help you narrow down where to start without pretending every
              shop is the same.
            </p>
          </div>
        </div>
      </section>

      {featuredAntiquePlaces.length > 0 && (
        <section className="shopping-section shopping-preview-section">
          <div className="container">
            <div className="shopping-section-heading">
              <p className="shopping-kicker">Good places to start</p>
              <h2>Featured antique and vintage stops.</h2>
              <p>
                These are the antique and vintage shops that stand out most as
                visitor-friendly starting points based on location, available
                information, and how well they fit a Hot Springs shopping day.
              </p>
            </div>

            <div className="shopping-place-grid">
              {featuredAntiquePlaces.map((place) => (
                <ShoppingPlaceCard key={place.name} place={place} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="shopping-section">
        <div className="container">
          <div className="shopping-section-heading">
            <p className="shopping-kicker">More antique and vintage finds</p>
            <h2>Other shops and stops to keep on your list.</h2>
            <p>
              A few of these need a quick address or hours check before we would
              feature them heavily, but they are still worth keeping in the
              antique and vintage guide because they show how much variety there
              is around Hot Springs.
            </p>
          </div>

          <div className="shopping-place-grid">
            {otherAntiquePlaces.map((place) => (
              <ShoppingPlaceCard key={place.name} place={place} />
            ))}
          </div>
        </div>
      </section>

      <ShoppingGuideCTA
        kicker="Local help"
        title="Know an antique shop we missed?"
        text="If there is a vintage shop, antique booth, resale decor store, or old-school Hot Springs stop that belongs on this guide, send it in. We want this to stay useful for locals, visitors, and the small shops that make wandering around town more interesting."
        href="/contact"
        label="Send a suggestion"
      />
    </main>
  );
}