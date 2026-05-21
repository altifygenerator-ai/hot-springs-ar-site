import Link from "next/link";
import { localSpots } from "@/data/local-spots/hiddenGems";

const featuredIds = [
  "ouachita-avenue",
  "bricks-and-minifigs",
  "black-ribbon-books",
];

const featuredSpots = featuredIds
  .map((id) => localSpots.find((spot) => spot.id === id))
  .filter((spot): spot is NonNullable<typeof spot> => Boolean(spot));

export default function LocalSpotsPreview() {
  return (
    <section className="section local-spots-home-preview">
      <div className="container">
        <div className="home-events-heading">
          <div>
            <p className="hero-eyebrow">Locals’ Picks</p>

            <h2>Places visitors might miss.</h2>

            <p>
              Local suggestions from people who know Hot Springs — hidden shops,
              family stops, food spots, downtown corners, and easy-to-miss
              places worth checking out.
            </p>
          </div>

          <div className="home-events-actions">
            <Link href="/hot-springs-local-spots" className="btn-primary">
              View Local Spots
            </Link>

            <Link href="/hot-springs-family-friendly" className="btn-secondary">
              Family Finds
            </Link>
          </div>
        </div>

        <div className="categories-grid">
          {featuredSpots.map((spot) => (
            <Link
              key={spot.id}
              href="/hot-springs-local-spots"
              className="category-card"
            >
              {spot.imageAvailable && spot.image && (
                <div className="category-image-wrap">
                  <img
                    src={spot.image}
                    alt={spot.imageAlt || spot.name}
                    className="category-image"
                  />
                </div>
              )}

              <div className="category-content">
                <h3>{spot.name}</h3>
                <p>{spot.localAngle}</p>
                <span>See local picks →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}