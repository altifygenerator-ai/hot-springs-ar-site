import RelatedLocalLinks from "@/components/local-spots/RelatedLocalLinks";
import type { LocalSpot } from "@/data/local-spots/hiddenGems";

type LocalSpotCardProps = {
  spot: LocalSpot;
};

export default function LocalSpotCard({ spot }: LocalSpotCardProps) {
  const hasImage = spot.imageAvailable && spot.image;

  return (
    <article className={`local-spot-card ${hasImage ? "has-image" : ""}`}>
      {hasImage && (
        <div className="local-spot-image-wrap">
          <img
            src={spot.image!}
            alt={spot.imageAlt || spot.name}
            className="local-spot-image"
          />
        </div>
      )}

      <div className="local-spot-content">
        <div className="local-spot-topline">
          <span>{spot.categories[0]}</span>

          {spot.verificationStatus !== "verified" && (
            <span className="local-spot-status">Needs Follow-Up</span>
          )}
        </div>

        <h3>{spot.name}</h3>

        <p className="local-spot-area">{spot.area}</p>

        <p>{spot.description}</p>

        <div className="local-spot-angle">
          <strong>Why locals mentioned it:</strong>
          <p>{spot.localAngle}</p>
        </div>

        {spot.goodFor.length > 0 && (
          <div className="local-spot-tags">
            {spot.goodFor.slice(0, 5).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        {(spot.address || spot.phone) && (
          <div className="local-spot-info">
            {spot.address && <p>📍 {spot.address}</p>}
            {spot.phone && <p>📞 {spot.phone}</p>}
          </div>
        )}

        <div className="local-spot-actions">
          {spot.website && (
            <a href={spot.website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}

          {spot.facebook && (
            <a href={spot.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}

          {spot.instagram && (
            <a href={spot.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </div>

        <RelatedLocalLinks links={spot.relatedPages} />

        {spot.needsFollowUp && (
          <p className="local-spot-note">{spot.needsFollowUp}</p>
        )}
      </div>
    </article>
  );
}