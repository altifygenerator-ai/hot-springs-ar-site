import type { ShoppingPlace } from "@/data/shoppingGuides";

type ShoppingFeaturedGridProps = {
  kicker: string;
  title: string;
  text: string;
  places: ShoppingPlace[];
};

export default function ShoppingFeaturedGrid({
  kicker,
  title,
  text,
  places,
}: ShoppingFeaturedGridProps) {
  return (
    <section className="shopping-section shopping-featured-section">
      <div className="container">
        <div className="shopping-section-heading shopping-section-heading-light">
          <p className="shopping-kicker">{kicker}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="shopping-featured-grid">
          {places.map((place) => {
            const hasRealLink = Boolean(place.website);
            const CardTag = hasRealLink ? "a" : "div";

            return (
              <CardTag
                key={place.name}
                href={hasRealLink ? place.website : undefined}
                target={hasRealLink ? "_blank" : undefined}
                rel={hasRealLink ? "noopener noreferrer" : undefined}
                className="shopping-feature-card"
              >
                {place.image && (
                  <div className="shopping-feature-image">
                    <img src={place.image} alt={place.name} />
                  </div>
                )}

                <div className="shopping-feature-content">
                  <p>{place.label}</p>
                  <h3>{place.name}</h3>
                  <span>{place.description}</span>

                  <div className="shopping-detail-list">
                    {place.address && <small>📍 {place.address}</small>}
                    {place.phone && <small>📞 {place.phone}</small>}
                  </div>

                  <strong>
                    {hasRealLink ? "Visit website →" : "See details below"}
                  </strong>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}