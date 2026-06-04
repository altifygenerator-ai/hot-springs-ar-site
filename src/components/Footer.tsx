import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/explore", label: "Explore Hot Springs" },
      { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
      { href: "/events", label: "Events" },
      { href: "/this-weekend", label: "This Weekend" },
      { href: "/history", label: "History" },
      { href: "/free-things-to-do-hot-springs", label: "Free Things To Do" },
    ],
  },
  {
    title: "Food & Local",
    links: [
      { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
      {
        href: "/restaurants-near-bathhouse-row",
        label: "Near Bathhouse Row",
      },
      {
        href: "/lake-hamilton-restaurants",
        label: "Lake Hamilton Restaurants",
      },
      {
        href: "/hot-springs-antique-thrift-flea-markets",
        label: "Antique, Thrift & Flea Markets",
      },
      { href: "/hot-springs-local-spots", label: "Local Hidden Gems" },
      { href: "/hot-springs-family-friendly", label: "Family-Friendly Finds" },
    ],
  },
  {
    title: "Stay",
    links: [
      { href: "/hot-springs-ar-hotels", label: "Hotels" },
      { href: "/hotels-near-bathhouse-row", label: "Hotels Near Bathhouse Row" },
      { href: "/hotels-near-oaklawn", label: "Hotels Near Oaklawn" },
      { href: "/hot-springs-ar-cabins", label: "Cabins" },
      { href: "/lake-hamilton-cabins", label: "Lake Hamilton Cabins" },
    ],
  },
  {
    title: "Areas",
    links: [
      { href: "/bathhouse-row", label: "Bathhouse Row" },
      { href: "/lake-hamilton", label: "Lake Hamilton" },
      { href: "/hot-springs-ouachita-avenue", label: "Ouachita Avenue" },
      {
        href: "/hot-springs-bathhouse-row-local-finds",
        label: "Bathhouse Row Local Finds",
      },
    ],
  },
  {
    title: "Business",
    links: [
      {
  label: "Submit a Photo",
  href: "/submit-photo",
},
      { href: "/local-businesses", label: "Local Businesses" },
      { href: "/contact", label: "Get Listed" },
      { href: "/submit-event", label: "Submit an Event" },
    ],
  },
 {
  title: "Articles",
  links: [
    { href: "/articles", label: "All Articles" },
    {
      href: "/articles/bathhouse-row",
      label: "Bathhouse Row: Why It Still Matters",
    },
    {
      href: "/articles/history-of-hot-springs-gambling-museum",
      label: "History of Hot Springs Gambling Museum",
    },
  ],
},
];

const sisterSites = [
  { href: "https://glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://amityarkansas.org", label: "Amity Arkansas" },
  { href: "https://mountidaarkansas.org", label: "Mount Ida Arkansas" },
];

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}) {
  return (
    <div className="footer-group">
      <h4>{title}</h4>

      <div className="footer-link-list">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-row">
          <div>
            <h3>Hot Springs Arkansas</h3>
            <p>
              A local guide to things to do, restaurants, places to stay,
              events, shopping, attractions, and small businesses around Hot
              Springs, Arkansas.
            </p>
          </div>

          <div className="footer-brand-actions">
            <Link href="/contact" className="footer-button footer-button-light">
              Get Listed
            </Link>

            <Link href="/events" className="footer-button footer-button-outline">
              View Events
            </Link>
            
          </div>
        </div>

        <div className="footer-link-grid">
          {footerGroups.map((group) => (
            <FooterGroup
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>

        <div className="footer-sister-row">
          <span>Nearby Arkansas guides</span>

          <div>
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
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Hot Springs Arkansas. Built as a local
          tourism and business guide.
        </p>

        <p>
          Part of the{" "}
          <a
            href="https://naturalstatetourismproject.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natural State Tourism Project
          </a>
        </p>

        <p>
          Website by{" "}
          <a
            href="https://hometownwebservicesar.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hometown Web Services
          </a>
        </p>
      </div>
    </footer>
  );
}