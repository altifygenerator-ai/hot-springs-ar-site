import Link from "next/link";

const updates = [
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
  {
    label: "Local businesses",
    title: "Updated Local Business Guide",
    text: "The local business page has been cleaned up and expanded with a better look at shops, attractions, outdoor recreation, spas, visitor-friendly businesses, and places that do not fit neatly into one category.",
    href: "/local-businesses",
  },
  {
    title: "Community photo submissions are now open",
    text: "You can now send in local photos from around Hot Springs, Lake Hamilton, Bathhouse Row, events, restaurants, trails, and nearby places. Approved photos may be featured in future guides, posts, and community updates.",
    href: "/submit-photo",
    label: "Submit a Photo",
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
            <Link
              href="/articles/history-of-hot-springs-gambling-museum"
              className="btn-primary"
            >
              New History Article
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