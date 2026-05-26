import Link from "next/link";

type ShoppingHeroProps = {
  kicker: string;
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryLinks?: {
    href: string;
    label: string;
  }[];
  cardTitle: string;
  cardText: string;
  image?: string;
};

export default function ShoppingHero({
  kicker,
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryLinks = [],
  cardTitle,
  cardText,
  image = "/images/shopping/shopping-hero.webp",
}: ShoppingHeroProps) {
  return (
    <section className="shopping-hero">
      <div className="shopping-hero-bg">
        <img src={image} alt="" aria-hidden="true" />
      </div>

      <div className="shopping-hero-overlay" />

      <div className="container shopping-hero-grid">
        <div className="shopping-hero-copy">
          <p className="shopping-kicker">{kicker}</p>

          <h1>{title}</h1>

          <p className="shopping-hero-text">{text}</p>

          <div className="shopping-hero-actions">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>

            {secondaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn-secondary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="shopping-hero-card">
          <p>Before you go</p>
          <h2>{cardTitle}</h2>
          <span>{cardText}</span>
        </div>
      </div>
    </section>
  );
}