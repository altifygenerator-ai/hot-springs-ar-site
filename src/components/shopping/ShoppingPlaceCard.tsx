import type { ShoppingPlace } from "@/data/shoppingGuides";

type ShoppingPlaceCardProps = {
  place: ShoppingPlace;
};

export default function ShoppingPlaceCard({ place }: ShoppingPlaceCardProps) {
  return (
    <article
      className={
        place.image
          ? "shopping-place-card shopping-place-card-with-image"
          : "shopping-place-card"
      }
    >
      {place.image && (
        <div className="shopping-place-image">
          <img src={place.image} alt={place.name} />
        </div>
      )}

      <div className="shopping-place-content">
        <p>{place.label}</p>
        <h3>{place.name}</h3>
        <span>{place.description}</span>

        <div className="shopping-place-details">
          {place.address && <small>📍 {place.address}</small>}
          {place.phone && <small>📞 {place.phone}</small>}
          {place.email && <small>✉️ {place.email}</small>}
        </div>

        {place.bestFor.length > 0 && (
          <div className="shopping-tag-row">
            {place.bestFor.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        {place.note && <em>{place.note}</em>}

        {place.website && (
          <a href={place.website} target="_blank" rel="noopener noreferrer">
            Visit website →
          </a>
        )}
      </div>
    </article>
  );
}