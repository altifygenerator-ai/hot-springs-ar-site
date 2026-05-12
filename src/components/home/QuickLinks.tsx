import Link from "next/link";

const links = [
  { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
  { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
  { label: "Cabins", href: "/hot-springs-ar-cabins" },
  { label: "Hotels", href: "/hot-springs-ar-hotels" },
  { label: "Explore", href: "/explore" },
  { label: "Local Businesses", href: "/local-businesses" },
];

export default function QuickLinks() {
  return (
    <section className="section pt-8 pb-0">
      <div className="container flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="btn">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}