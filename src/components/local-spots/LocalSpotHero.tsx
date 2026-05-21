type LocalSpotHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export default function LocalSpotHero({
  eyebrow,
  title,
  description,
  image,
}: LocalSpotHeroProps) {
  return (
    <section
      className={`local-spots-hero ${
        image ? "local-spots-hero-with-image" : ""
      }`}
    >
      {image && (
        <>
          <img src={image} alt={title} className="local-spots-hero-bg" />
          <div className="local-spots-hero-overlay" />
        </>
      )}

      <div className="container local-spots-hero-inner">
        <p className="hero-eyebrow">{eyebrow}</p>

        <h1>{title}</h1>

        <p className="hero-description">{description}</p>
      </div>
    </section>
  );
}