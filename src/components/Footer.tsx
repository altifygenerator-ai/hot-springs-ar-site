import Link from "next/link";

const exploreLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
  { href: "/history", label: "History" },
];

const visitorLinks = [
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  { href: "/hot-springs-ar-cabins", label: "Cabins" },
  { href: "/hot-springs-ar-hotels", label: "Hotels" },
];

const businessLinks = [
  { href: "/local-businesses", label: "Local Businesses" },
  { href: "/local-businesses", label: "Get Listed" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Hot Springs Arkansas</h3>
          <p>
            A local guide for exploring Hot Springs, Arkansas — from things to
            do and places to stay to restaurants, history, and local businesses.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          {exploreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Visitor Guide</h4>
          {visitorLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Local Businesses</h4>
          {businessLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hot Springs Arkansas. Built as a local
          tourism and business guide.
        </p>
      </div>
    </footer>
  );
}