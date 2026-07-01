import Link from "next/link";

const updates = [
  {
    label: "Featured business",
    title: "Spa City Aesthetics Spotlight",
    text: "A new featured business spotlight has been added for Spa City Aesthetics, a Hot Springs aesthetics studio focused on personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic support, hair and scalp care, and skin longevity.",
    href: "/spa-city-aesthetics-hot-springs",
  },
  {
    label: "Site update",
    title: "Search Added to the Hot Springs Guide",
    text: "A new search bar has been added to help visitors find Hot Springs guides faster, including restaurants, cabins, hotels, Bathhouse Row, Lake Hamilton, spas, events, local spots, shopping, and family-friendly ideas.",
    href: "/search",
  },
];

const communityUpdateLinks = [
  {
    href: "/search",
    label: "Search the Guide",
  },
  {
    href: "/hot-springs-ar-restaurants",
    label: "Restaurant Guide",
  },
  {
    href: "/restaurants-near-bathhouse-row",
    label: "Restaurants Near Bathhouse Row",
  },
  {
    href: "/hot-springs-local-spots",
    label: "Local Hidden Gems",
  },
  {
    href: "/hot-springs-spas-wellness",
    label: "Spas & Wellness",
  },
  {
    href: "/hot-springs-family-friendly",
    label: "Family-Friendly Finds",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section hot-springs-recent-updates section-warm-wash">
      <div className="container">
        <div className="home-events-heading">
          <div>
            <p className="hero-eyebrow">Recent Updates</p>

            <h2>New and updated Hot Springs guides.</h2>

            <p>
              The Hot Springs guide is growing with more local events, seasonal
              guides, helpful visitor pages, shopping guides, business listings,
              history articles, family-friendly ideas, wellness stops, and
              places worth checking out around town.
            </p>
          </div>

          <div className="home-events-actions">
            <Link
              href="/spa-city-aesthetics-hot-springs"
              className="btn-primary"
            >
              Spa City Spotlight
            </Link>

            <Link href="/search" className="btn-secondary">
              Search the Guide
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

          <article className="category-card">
            <div className="category-content">
              <p className="hero-eyebrow">Guide shortcuts</p>

              <h3>Find Hot Springs pages faster</h3>

              <p>
                Visitors can now search across the Hot Springs guide or jump
                straight into popular planning pages for restaurants, Bathhouse
                Row, spas and wellness, local hidden gems, family-friendly
                ideas, and shopping around town.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {communityUpdateLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-full border px-3 py-2 text-xs font-bold transition hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--green)",
                      background: "var(--surface-strong)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}