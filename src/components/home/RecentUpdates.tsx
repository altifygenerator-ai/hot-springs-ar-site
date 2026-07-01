import Link from "next/link";

const updates = [
  {
    label: "Featured business",
    title: "Spa City Aesthetics Spotlight",
    text: "A new featured business spotlight has been added for Spa City Aesthetics, a Hot Springs aesthetics studio focused on personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic support, hair and scalp care, and skin longevity.",
    href: "/spa-city-aesthetics-hot-springs",
  },
  {
    label: "Local listings update",
    title: "New Hot Springs businesses added",
    text: "Several local suggestions have been added across the Hot Springs guide, including new restaurant listings, sweet shops, wellness stops, local hidden gems, and a nearby Lake Ouachita area cafe worth knowing about.",
    href: "/local-businesses",
  },
];

const communityUpdateLinks = [
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
  {
    href: "/hot-springs-antique-thrift-flea-markets",
    label: "Shopping Guide",
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

            <Link href="/local-businesses" className="btn-secondary">
              Local Businesses
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
              <p className="hero-eyebrow">Community suggestions</p>

              <h3>Recent local suggestion updates</h3>

              <p>
                Recent local suggestions have been worked into the guide,
                including Rock N Roll Sushi, Ambrosia at Angel&apos;s, La
                Bruja&apos;s Dulceria & Bakery, The Electric Strawberry,
                Destinations Day Spa, Inner Peace Massage & Facials, Aura Room,
                and Sunshine Store & Cafe near Royal and the Lake Ouachita side
                of Hot Springs.
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