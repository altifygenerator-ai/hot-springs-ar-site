import Link from "next/link";

const exploreLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
  { href: "/history", label: "History" },
  { href: "/bathhouse-row", label: "Bathhouse Row" },
];

const localPickLinks = [
  { href: "/hot-springs-local-spots", label: "Local Hidden Gems" },
  { href: "/hot-springs-family-friendly", label: "Family-Friendly Finds" },
  { href: "/hot-springs-ouachita-avenue", label: "Ouachita Avenue" },
  {
    href: "/hot-springs-bathhouse-row-local-finds",
    label: "Bathhouse Row Local Finds",
  },
];

const visitorLinks = [
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  { href: "/hot-springs-ar-cabins", label: "Cabins" },
  { href: "/hot-springs-ar-hotels", label: "Hotels" },
];

const eventLinks = [
  { href: "/events", label: "Events" },
  { href: "/this-weekend", label: "This Weekend" },
  { href: "/submit-event", label: "Submit an Event" },
];

const businessLinks = [
  { href: "/local-businesses", label: "Local Businesses" },
  { href: "/contact", label: "Get Listed" },
];

const sisterSites = [
  { href: "https://glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://amityarkansas.org", label: "Amity Arkansas" },
  { href: "https://mountidaarkansas.org", label: "Mount Ida Arkansas" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Hot Springs Arkansas</h3>
          <p>
            A local guide for exploring Hot Springs, Arkansas — from things to
            do and places to stay to restaurants, events, local picks, history,
            and small businesses.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          {exploreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}

          <h4 className="footer-subheading">Events</h4>
          {eventLinks.map((link) => (
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

          <h4 className="footer-subheading">Local Picks</h4>
          {localPickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Local Businesses</h4>
          {businessLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}

          <h4 className="footer-subheading">Sister Sites</h4>
          {sisterSites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Hot Springs Arkansas. Built as a local
          tourism and business guide.
        </p>

        <p className="md:text-right">
          Part of the{" "}
          <a
            href="https://naturalstatetourismproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:opacity-80"
          >
            Natural State Tourism Project
          </a>{" "}
          — an independent local tourism guide network.
        </p>
      </div>
    </footer>
  );
}