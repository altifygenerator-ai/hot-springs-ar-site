import Link from "next/link";
import {
  antiquePlaces,
  fleaPlaces,
  hubFeaturedPlaces,
  shoppingCategories,
  thriftPlaces,
} from "@/data/shoppingGuides";
import ShoppingHero from "@/components/shopping/ShoppingHero";
import ShoppingCategoryCards from "@/components/shopping/ShoppingCategoryCards";
import ShoppingFeaturedGrid from "@/components/shopping/ShoppingFeaturedGrid";
import ShoppingGuideCTA from "@/components/shopping/ShoppingGuideCTA";

export const metadata = {
  title:
    "Antique Stores, Thrift Stores & Flea Markets in Hot Springs, Arkansas",
  description:
    "A local guide to antique stores, thrift shops, resale stores, flea markets, vendor malls, vintage shops, and secondhand shopping around Hot Springs, Arkansas.",

  alternates: {
    canonical: "/hot-springs-antique-thrift-flea-markets",
  },
};

const quickStats = [
  {
    value: antiquePlaces.length,
    label: "antique and vintage stops",
  },
  {
    value: thriftPlaces.length,
    label: "thrift and resale shops",
  },
  {
    value: fleaPlaces.length,
    label: "flea markets and vendor malls",
  },
];

function PlacePreviewList({
  title,
  text,
  places,
  href,
}: {
  title: string;
  text: string;
  places: typeof antiquePlaces;
  href: string;
}) {
  return (
    <div className="shopping-preview-panel">
      <div>
        <p className="shopping-kicker">Browse the guide</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <div className="shopping-mini-list">
        {places.slice(0, 5).map((place) => (
          <div key={place.name} className="shopping-mini-item">
            <div>
              <strong>{place.name}</strong>
              <span>{place.label}</span>
            </div>

            {place.address && <p>{place.address}</p>}
          </div>
        ))}
      </div>

      <Link href={href} className="shopping-text-link">
        View full guide →
      </Link>
    </div>
  );
}

export default function AntiqueThriftFleaMarketsPage() {
  return (
    <main>
      <ShoppingHero
        kicker="Hot Springs Shopping Guide"
        title="Antique stores, thrift shops, and flea markets around Hot Springs."
        text="Some Hot Springs trips are built around bathhouses, lake views, or a weekend at Oaklawn. But there is another kind of day here too: the slower one, where you wander through vendor booths, old furniture, estate jewelry, resale racks, dusty shelves, and odd little finds you did not know you were looking for."
        primaryHref="/hot-springs-antique-stores"
        primaryLabel="Antique Stores"
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
        cardTitle="Call or check Facebook first."
        cardText="Flea markets, vendor malls, and smaller resale shops can change hours, booth inventory, locations, and weekend schedules. This guide is built to help you narrow the trip, but a quick check can save you from driving across town for a closed door."
      />

      <section className="shopping-section shopping-section-tight">
        <div className="container">
          <div className="shopping-stat-row">
            {quickStats.map((item) => (
              <div key={item.label} className="shopping-stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShoppingCategoryCards
        kicker="Start here"
        title="Pick the kind of treasure hunt you are in the mood for."
        text="Hot Springs has a mix of polished antique shops, practical thrift stores, nonprofit resale stops, and booth-style markets. This hub keeps the big picture simple, then lets you dig deeper into the kind of shopping day you actually want."
        categories={shoppingCategories}
      />

      <ShoppingFeaturedGrid
        kicker="Featured stops"
        title="Three strong places to start."
        text="These are not the only places worth visiting, but they give each category a clear starting point: one downtown antique stop, one practical thrift/resale anchor, and one larger vendor marketplace for wandering."
        places={hubFeaturedPlaces}
      />

      <section className="shopping-section">
        <div className="container shopping-story-grid">
          <div className="shopping-story-card">
            <p className="shopping-kicker">Why this guide belongs here</p>
            <h2>Hot Springs has always been good for wandering.</h2>
          </div>

          <div className="shopping-story-copy">
            <p>
              The best shopping days in Hot Springs are not always built around
              one perfect store. Sometimes it is a stretch of Central Avenue, a
              stop on Airport Road, a small thrift shop with a good cause behind
              it, or an antique booth where one old lamp, sign, record, or piece
              of furniture makes the whole stop worth it.
            </p>

            <p>
              This guide is meant to be useful without pretending every place is
              the same kind of experience. Some shops are curated and polished.
              Some are practical thrift stores. Some are vendor malls where the
              inventory can change from one booth to the next. That variety is
              part of the point.
            </p>
          </div>
        </div>
      </section>

      <section className="shopping-section shopping-preview-section">
        <div className="container">
          <div className="shopping-section-heading">
            <p className="shopping-kicker">Dig deeper</p>
            <h2>Use the deeper guides when you want more than a quick list.</h2>
            <p>
              Each guide breaks the category down with the places we have found,
              what they are best for, and which ones need a quick call or
              Facebook check before you drive over.
            </p>
          </div>

          <div className="shopping-preview-grid">
            <PlacePreviewList
              title="Antique stores and vintage shops"
              text="Downtown antiques, Hobson Avenue stops, curated vintage decor, upscale consignment, retro clothing, and collectible-focused places."
              places={antiquePlaces}
              href="/hot-springs-antique-stores"
            />

            <PlacePreviewList
              title="Thrift stores and resale shops"
              text="Nonprofit shops, cause-based thrift stores, local resale, clothing, home goods, furniture, and practical secondhand stops."
              places={thriftPlaces}
              href="/hot-springs-thrift-stores"
            />

            <PlacePreviewList
              title="Flea markets and vendor malls"
              text="Indoor markets, booth-style shopping, antiques, collectibles, home decor, handmade goods, vintage finds, and places built for slow browsing."
              places={fleaPlaces}
              href="/hot-springs-flea-markets"
            />
          </div>
        </div>
      </section>

      <ShoppingGuideCTA
        kicker="Local note"
        title="Know a shop we should add?"
        text="We are building this as a practical local guide, not a closed directory. If a flea market moved, a thrift shop changed hours, or a small vintage shop deserves a spot here, send it in so this page can stay useful for locals and visitors."
        href="/contact"
        label="Send a suggestion"
      />
    </main>
  );
}