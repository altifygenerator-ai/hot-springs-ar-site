import Link from "next/link";

type ShoppingCategory = {
  title: string;
  href: string;
  eyebrow: string;
  description: string;
};

type ShoppingCategoryCardsProps = {
  kicker: string;
  title: string;
  text: string;
  categories: ShoppingCategory[];
};

export default function ShoppingCategoryCards({
  kicker,
  title,
  text,
  categories,
}: ShoppingCategoryCardsProps) {
  return (
    <section className="shopping-section">
      <div className="container">
        <div className="shopping-section-heading">
          <p className="shopping-kicker">{kicker}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="shopping-category-grid">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="shopping-category-card"
            >
              <span>{category.eyebrow}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <strong>Open guide →</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}