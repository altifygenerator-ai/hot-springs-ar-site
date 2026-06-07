import Link from "next/link";

const updates = [
  {
    label: "Seasonal guide",
    title: "Fourth of July in Hot Springs",
    text: "A new seasonal guide has been added for July 4 in Hot Springs, including verified fireworks, downtown events, Lake Hamilton tips, Magic Springs, the farmers market, and ways to plan the holiday around town.",
    href: "/hot-springs-fourth-of-july",
  },
  {
    label: "New history article",
    title: "History of Hot Springs Gambling Museum",
    text: "A new Hot Springs history feature has been added covering the city’s gambling era, restored slot machines, casino rooms, 1967 raids, and why this small museum preserves an important side of Spa City history.",
    href: "/articles/history-of-hot-springs-gambling-museum",
  },
  {
    label: "New shopping guide",
    title: "Antique, Thrift & Flea Markets",
    text: "A new Hot Springs shopping guide has been added for antique stores, thrift shops, flea markets, vendor malls, vintage finds, resale shops, and local places worth wandering through.",
    href: "/hot-springs-antique-thrift-flea-markets",
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
              The Hot Springs guide is growing with more local events, seasonal
              guides, helpful visitor pages, shopping guides, business listings,
              history articles, family-friendly ideas, and places worth checking
              out around town.
            </p>
          </div>

          <div className="home-events-actions">
            <Link href="/hot-springs-fourth-of-july" className="btn-primary">
              Fourth of July Guide
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