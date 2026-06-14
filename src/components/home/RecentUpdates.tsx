import Link from "next/link";

const updates = [
  {
    label: "Featured business",
    title: "Spa City Aesthetics Spotlight",
    text: "A new featured business spotlight has been added for Spa City Aesthetics, a Hot Springs aesthetics studio focused on personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic support, hair and scalp care, and skin longevity.",
    href: "/spa-city-aesthetics-hot-springs",
  },
  {
    label: "New wellness guide",
    title: "Spas & Wellness in Hot Springs",
    text: "The Hot Springs spa and wellness guide has been updated with historic bathhouses, thermal baths, resort spa options, modern aesthetics, skin care, body sculpting, relaxing ways to plan a wellness-focused visit, and a local maternity support note.",
    href: "/hot-springs-spas-wellness",
  },
  {
    label: "Seasonal guide",
    title: "Fourth of July in Hot Springs",
    text: "A seasonal guide has been added for July 4 in Hot Springs, including verified fireworks, downtown events, Lake Hamilton tips, Magic Springs, the farmers market, and ways to plan the holiday around town.",
    href: "/hot-springs-fourth-of-july",
  },
];

const communityUpdateLinks = [
  {
    href: "/pet-friendly-hot-springs",
    label: "Pet-Friendly Hot Springs",
  },
  {
    href: "/restaurants-near-bathhouse-row",
    label: "Restaurants Near Bathhouse Row",
  },
  {
    href: "/hot-springs-ar-restaurants",
    label: "Restaurant Guide",
  },
  {
    href: "/hot-springs-family-friendly",
    label: "Family-Friendly Finds",
  },
  {
    href: "/hot-springs-local-spots",
    label: "Local Hidden Gems",
  },
  {
    href: "/hot-springs-antique-thrift-flea-markets",
    label: "Shopping Guide",
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

            <Link href="/hot-springs-spas-wellness" className="btn-secondary">
              Spas & Wellness
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
                Several places and notes suggested by locals have been worked
                into the guide, including pet-friendly patio notes, downtown
                dining updates, family-friendly stops, local shops, parks,
                wellness notes, and shopping guide cleanup.
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