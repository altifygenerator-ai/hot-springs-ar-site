import Link from "next/link";
import styles from "./TripConnections.module.css";

export const hotSpringsPaths = [
  { href: "/bathhouse-row", label: "Bathhouse Row" },
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  { href: "/hot-springs-boutiques-shops", label: "Shopping" },
  { href: "/lake-hamilton", label: "Lake Hamilton" },
  { href: "/things-to-do-in-hot-springs-ar", label: "Things to do" },
  { href: "/this-weekend", label: "This weekend" },
];

export default function TripConnections({ heading, links = hotSpringsPaths, compact = false }: {
  heading: string;
  links?: { href: string; label: string }[];
  compact?: boolean;
}) {
  return (
    <section className={compact ? styles.compact : styles.next} aria-label={heading}>
      <div className="container">
        {compact ? <p className={styles.label}>{heading}</p> : <h2 className={styles.heading}>{heading}</h2>}
        <nav aria-label={heading} className={styles.links}>
          {links.map(link => <Link key={link.href} href={link.href} className="btn-secondary">{link.label}</Link>)}
        </nav>
      </div>
    </section>
  );
}
