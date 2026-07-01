import Link from "next/link";

const categories = [
  {
    title: "Things To Do",
    eyebrow: "Start planning",
    text: "Start with the places people usually come to Hot Springs for: Bathhouse Row, mountain views, lake days, museums, gardens, trails, spas, family stops, and a few quieter places that are easy to miss if you only stay downtown.",
    image: "/images/categories/things-to-do.jpg",
    href: "/things-to-do-in-hot-springs-ar",
    links: [
      { href: "/bathhouse-row", label: "Bathhouse Row" },
      { href: "/lake-hamilton", label: "Lake Hamilton" },
      { href: "/hot-springs-family-friendly", label: "Family-Friendly" },
    ],
    featured: true,
  },
  {
    title: "Restaurants",
    eyebrow: "Eat local",
    text: "Hot Springs has old-school breakfast counters, lakefront meals, barbecue, pizza, coffee shops, breweries, Mexican food, Italian dinners, and local spots people come back to after the trip is over.",
    image: "/images/categories/restaurants.png",
    href: "/hot-springs-ar-restaurants",
    links: [
      { href: "/restaurants-near-bathhouse-row", label: "Near Bathhouse Row" },
      { href: "/lake-hamilton-restaurants", label: "Lake Hamilton Food" },
    ],
  },
  {
    title: "Cabins",
    eyebrow: "Stay awhile",
    text: "For a quieter trip, look toward cabins, wooded retreats, lake stays, romantic getaways, and places that give you a little more room to slow down outside the busy parts of town.",
    image: "/images/categories/cabins.jpg",
    href: "/hot-springs-ar-cabins",
    links: [
      { href: "/lake-hamilton-cabins", label: "Lake Hamilton Cabins" },
      { href: "/hot-springs-ar-hotels", label: "Hotels" },
    ],
  },
  {
    title: "Hotels",
    eyebrow: "Easy base camps",
    text: "Find hotels near Bathhouse Row, Oaklawn, downtown Hot Springs, Lake Hamilton, and Hot Springs National Park depending on whether you want walkability, lake access, or a simple place to land.",
    image: "/images/categories/hotels.jpg",
    href: "/hot-springs-ar-hotels",
    links: [
      { href: "/hotels-near-bathhouse-row", label: "Near Bathhouse Row" },
      { href: "/hotels-near-oaklawn", label: "Near Oaklawn" },
    ],
  },
  {
    title: "Local Finds",
    eyebrow: "Beyond the obvious",
    text: "Some of the best parts of a Hot Springs trip are the smaller stops: local shops, antique and thrift finds, Ouachita Avenue, hidden gems, and places that feel more like the town than a brochure.",
    image: "/images/categories/explore.jpg",
    href: "/explore",
    links: [
      { href: "/hot-springs-local-spots", label: "Hidden Gems" },
      {
        href: "/hot-springs-antique-thrift-flea-markets",
        label: "Antique & Thrift",
      },
      { href: "/hot-springs-ouachita-avenue", label: "Ouachita Avenue" },
    ],
  },
  {
    title: "Local Businesses",
    eyebrow: "Support the area",
    text: "Browse visitor-friendly businesses around Hot Springs, from attractions and local services to shops, guides, spas, outdoor stops, and small businesses that help make the city easier to explore.",
    image: "/images/categories/local-business.webp",
    href: "/local-businesses",
    links: [
      { href: "/contact", label: "Get Listed" },
      { href: "/submit-event", label: "Submit an Event" },
    ],
  },
];

export default function CategoryGrid() {
  return (
    <section className="section section-steam-wash">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Plan Your Visit
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Explore Hot Springs by the kind of trip you want.
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Hot Springs is easy to visit, but it helps to know where to start.
              Use these main guides to move between{" "}
              <Link
                href="/bathhouse-row"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                Bathhouse Row
              </Link>
              ,{" "}
              <Link
                href="/lake-hamilton"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                Lake Hamilton
              </Link>
              , downtown restaurants, local shops, places to stay, and the
              quieter corners that make the area feel more personal.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={
                category.featured
                  ? "group flex h-full flex-col overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                  : "group flex h-full flex-col overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              }
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className={
                  category.featured
                    ? "relative h-[260px] w-full overflow-hidden bg-[color:var(--surface-strong)] lg:h-full"
                    : "relative h-[210px] w-full overflow-hidden bg-[color:var(--surface-strong)]"
                }
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                  {category.eyebrow}
                </div>
              </div>

              <div
                className={
                  category.featured
                    ? "flex flex-1 flex-col justify-center p-7 md:p-8"
                    : "flex flex-1 flex-col p-6"
                }
              >
                <h3
                  className={
                    category.featured
                      ? "text-3xl font-semibold leading-tight md:text-4xl"
                      : "text-2xl font-semibold leading-tight"
                  }
                  style={{ color: "var(--green)" }}
                >
                  {category.title}
                </h3>

                <p
                  className="mt-3 flex-1 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {category.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.links.map((link) => (
                    <span
                      key={link.href}
                      className="rounded-full border px-3 py-1 text-xs font-bold"
                      style={{
                        borderColor: "rgba(155, 95, 45, 0.18)",
                        background: "rgba(155, 95, 45, 0.08)",
                        color: "var(--accent-dark)",
                      }}
                    >
                      {link.label}
                    </span>
                  ))}
                </div>

                <span
                  className="mt-6 inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold transition group-hover:translate-x-1"
                  style={{
                    background: "rgba(155, 95, 45, 0.1)",
                    color: "var(--accent-dark)",
                  }}
                >
                  Open guide →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}