import Link from "next/link";

const updates = [
  {
    label: "New shopping guide",
    title: "Antique, Thrift & Flea Markets",
    text: "A new Hot Springs shopping guide has been added for antique stores, thrift shops, flea markets, vendor malls, vintage finds, resale shops, and local places worth wandering through.",
    href: "/hot-springs-antique-thrift-flea-markets",
  },
  {
    label: "Local businesses",
    title: "Updated Local Business Guide",
    text: "The local business page has been cleaned up and expanded with a better look at shops, attractions, outdoor recreation, spas, visitor-friendly businesses, and places that do not fit neatly into one category.",
    href: "/local-businesses",
  },
  {
    label: "Events updated",
    title: "This Weekend in Hot Springs",
    text: "New local events and things happening around Hot Springs have been added for visitors and locals planning the next few days.",
    href: "/this-weekend",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section hot-springs-recent-updates">
      <div className="container">
        <div className="home-events-heading">
          <div>
            <p className="hero-eyebrow">Recent Updates</p>

            <h2>New and updated Hot Springs guides.</h2>

            <p>
              The Hot Springs guide is growing with more local events, helpful
              visitor pages, shopping guides, business listings, history
              articles, family-friendly ideas, and places worth checking out
              around town.
            </p>
          </div>

          <div className="home-events-actions">
            <Link href="/hot-springs-antique-thrift-flea-markets" className="btn-primary">
              Shopping Guide
            </Link>

            <Link href="/this-weekend" className="btn-secondary">
              This Weekend
            </Link>
          </div>
        </div>

        <div className="categories-grid">
          {updates.map((update) => (
            <Link
              key={update.title}
              href={update.href}
              className="category-card"
            >
              <div className="category-content">
                <p className="hero-eyebrow">{update.label}</p>

                <h3>{update.title}</h3>

                <p>{update.text}</p>

                <span>View update →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}