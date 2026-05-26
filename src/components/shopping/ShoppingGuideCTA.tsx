import Link from "next/link";

type ShoppingGuideCTAProps = {
  kicker: string;
  title: string;
  text: string;
  href: string;
  label: string;
};

export default function ShoppingGuideCTA({
  kicker,
  title,
  text,
  href,
  label,
}: ShoppingGuideCTAProps) {
  return (
    <section className="shopping-section shopping-note-section">
      <div className="container">
        <div className="shopping-note-card">
          <div>
            <p className="shopping-kicker">{kicker}</p>
            <h2>{title}</h2>
          </div>

          <p>{text}</p>

          <Link href={href} className="btn-primary">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}