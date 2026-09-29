import Link from "next/link";

const updates = [
  {
    label: "New article",
    title: "Hot Springs Mountain Tower Scenic Drive",
    text: "A new local guide covers the winding road above downtown, wooded picnic stops, the Zig-Zag Mountains, the Pagoda, trail access, and the view across Hot Springs.",
    href: "/articles/hot-springs-mountain-tower-zig-zag-mountains",
  },
  {
    label: "Featured business",
    title: "Spa City Aesthetics Spotlight",
    text: "Spa City Aesthetics is featured in the Hot Springs guide with a dedicated spotlight for personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic support, hair and scalp care, and skin longevity.",
    href: "/spa-city-aesthetics-hot-springs",
  },
  {
    label: "New guide",
    title: "Hot Springs Boutiques & Shops",
    text: "A new shopping guide has been added for visitors looking for boutiques, gift shops, local finds, downtown shopping stops, and places to browse around Hot Springs.",
    href: "/hot-springs-boutiques-shops",
  },
  {
    label: "New guide",
    title: "Hot Springs Attractions",
    text: "The attractions guide has been expanded to help visitors find classic Hot Springs stops, family-friendly places, downtown attractions, and popular things to do around town.",
    href: "/hot-springs-attractions",
  },
];

const communityUpdateLinks = [
  {
    href: "/search",
    label: "Search the Guide",
  },
  {
    href: "/local-businesses",
    label: "Local Business Directory",
  },
  {
    href: "/hot-springs-boutiques-shops",
    label: "Boutiques & Shops",
  },
  {
    href: "/hot-springs-attractions",
    label: "Attractions",
  },
  {
    href: "/hot-springs-outdoor-businesses",
    label: "Outdoor Businesses",
  },
  {
    href: "/hot-springs-local-services",
    label: "Local Services",
  },
  {
    href: "/hot-springs-spas-wellness",
    label: "Spas & Wellness",
  },
  {
    href: "/hot-springs-ar-restaurants",
    label: "Restaurant Guide",
  },
  {
    href: "/hot-springs-ar-cabins",
    label: "Cabins & Stays",
  },
  {
    href: "/events",
    label: "Events",
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
              The Hot Springs guide is getting easier to use with expanded local
              business categories, better visitor pages, shopping guides,
              attractions, outdoor stops, local services, events, wellness
              listings, restaurants, cabins, hotels, and helpful planning pages
              around town.
            </p>
          </div>

          <div className="home-events-actions">
            <Link href="/local-businesses" className="btn-primary">
              Browse Local Businesses
            </Link>

            <Link href="/search" className="btn-secondary">
              Search the Guide
            </Link>
          </div>
        </div>

        <div className="mb-6 overflow-hidden rounded-[1.6rem] border border-amber-900/15 bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950 p-6 text-white shadow-lg md:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="hero-eyebrow !text-amber-300">Featured Cabin Partner</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight !text-white md:text-3xl">
                River View Cabins on the Ouachita River
              </h3>
              <p className="mt-3 leading-7 !text-white/85">
                14 riverfront cabins with hot tubs, a pool, horseback riding, kayak and canoe trips, quartz-crystal hiking trails, direct river access, and fireplaces available November through March.
              </p>
            </div>
            <a
              href="https://riverviewcabins.com/"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-stone-950 transition hover:-translate-y-0.5"
            >
              Visit River View Cabins ↗
            </a>
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
                Visitors can search across the guide or jump straight into
                popular planning pages for local businesses, shopping,
                attractions, outdoor stops, services, restaurants, spas,
                cabins, events, and family-friendly things to do.
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