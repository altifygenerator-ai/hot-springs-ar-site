import Link from "next/link";

const picks = [
  {
    label: "Scenic drive",
    title: "Hot Springs Mountain Tower",
    text: "A quieter way to see the city: mountain roads, picnic stops, trailheads and overlooks above downtown.",
    href: "/articles/hot-springs-mountain-tower-zig-zag-mountains",
  },
  {
    label: "Business spotlight",
    title: "Spa City Aesthetics",
    text: "A closer look at this Hot Springs wellness business and the treatments it offers.",
    href: "/spa-city-aesthetics-hot-springs",
  },
  {
    label: "Local shopping",
    title: "Boutiques & Shops",
    text: "Find locally owned shops, gift stops and places to browse around downtown.",
    href: "/hot-springs-boutiques-shops",
  },
];

const moreGuides = [
  { href: "/hot-springs-attractions", label: "Attractions" },
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  { href: "/hot-springs-ar-cabins", label: "Cabins" },
  { href: "/events", label: "Upcoming events" },
  { href: "/local-businesses", label: "Local businesses" },
];

export default function RecentUpdates() {
  return (
    <section className="section hot-springs-recent-updates section-warm-wash">
      <div className="container">
        <div className="home-events-heading">
          <div>
            <p className="hero-eyebrow">From the guide</p>
            <h2>Worth a look before you go.</h2>
            <p>Good local finds, a scenic route and a few places to explore while you're here.</p>
          </div>
          <Link href="/search" className="btn-secondary">Explore the guide</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {picks.map((pick) => (
            <Link key={pick.href} href={pick.href}
              className="group flex h-full flex-col rounded-[18px] border bg-[color:var(--surface)] p-6 transition hover:shadow-md"
              style={{ borderColor: "var(--border)" }}>
              <p className="hero-eyebrow">{pick.label}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight">{pick.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7">{pick.text}</p>
              <span className="mt-5 text-sm font-semibold text-[color:var(--accent-dark)] group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <nav aria-label="More Hot Springs guides" className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-5"
          style={{ borderColor: "var(--border)" }}>
          {moreGuides.map((guide) => (
            <Link key={guide.href} href={guide.href}
              className="text-sm font-semibold text-[color:var(--green)] underline-offset-4 hover:underline">
              {guide.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
