import Link from "next/link";

const updates = [
  {
    label: "Events updated",
    title: "This Weekend in Hot Springs",
    text: "New local events and things happening around Hot Springs have been added for visitors and locals planning the next few days.",
    href: "/this-weekend",
  },
  {
    label: "Local guide",
    title: "Locals’ Picks & Hidden Gems",
    text: "A growing guide to local shops, food stops, family finds, downtown corners, and places visitors might miss.",
    href: "/hot-springs-local-spots",
  },
  {
    label: "Trip planning",
    title: "Free Things To Do in Hot Springs",
    text: "A practical guide for visitors looking for budget-friendly stops, outdoor areas, downtown walks, and easy local ideas.",
    href: "/free-things-to-do-hot-springs",
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
              visitor pages, family-friendly ideas, and places worth checking
              out around town.
            </p>
          </div>

          <div className="home-events-actions">
            <Link href="/this-weekend" className="btn-primary">
              This Weekend
            </Link>

            <Link href="/submit-event" className="btn-secondary">
              Submit Event
            </Link>
          </div>
        </div>

        <div className="categories-grid">
          {updates.map((update) => (
            <Link key={update.title} href={update.href} className="category-card">
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