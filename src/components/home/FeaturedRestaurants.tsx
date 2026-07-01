import Link from "next/link";

const restaurants = [
  {
    name: "The Pancake Shop",
    type: "Breakfast • Downtown • Local Favorite",
    description:
      "A longtime downtown breakfast stop close to Bathhouse Row and Central Avenue, the kind of place people remember because it feels tied to an older Hot Springs morning.",
    image: "/images/businesses/the-pancake-shop.jpeg",
    tags: ["Breakfast", "Downtown", "Classic stop"],
  },
  {
    name: "Ohio Club",
    type: "Historic Bar • Restaurant • Downtown",
    description:
      "A historic downtown restaurant and bar with food, drinks, live music, and the kind of old Hot Springs character that makes it more than just a place to eat.",
    image: "/images/businesses/ohio-club.webp",
    tags: ["Historic", "Live music", "Downtown"],
  },
  {
    name: "Fisherman’s Wharf",
    type: "Lakefront Dining • Seafood • Steakhouse",
    description:
      "A Lake Hamilton restaurant with seafood, steaks, lake views, and a visitor-friendly setting for anyone wanting dinner close to the water.",
    image: "/images/businesses/fishermans-wharf.jpg",
    tags: ["Lake Hamilton", "Seafood", "Views"],
  },
];

const diningLinks = [
  {
    href: "/restaurants-near-bathhouse-row",
    label: "Near Bathhouse Row",
  },
  {
    href: "/lake-hamilton-restaurants",
    label: "Lake Hamilton Dining",
  },
  {
    href: "/hot-springs-local-spots",
    label: "Local Favorites",
  },
  {
    href: "/hot-springs-ar-restaurants",
    label: "Full Restaurant Guide",
  },
];

const foodStyles = [
  "Breakfast counters",
  "Lakefront dinners",
  "Patio drinks",
  "Barbecue",
  "Coffee shops",
  "Italian restaurants",
  "Mexican food",
  "Salvadoran food",
];

export default function FeaturedRestaurants() {
  const main = restaurants[0];
  const side = restaurants.slice(1);

  return (
    <section className="section section-soft-divider">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Eat Around Town
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Restaurants worth building into a Hot Springs trip.
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Food in Hot Springs can mean breakfast before Bathhouse Row,
              seafood on{" "}
              <Link
                href="/lake-hamilton-restaurants"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                Lake Hamilton
              </Link>
              , an old downtown bar, a patio with live music, or a smaller local
              place you find because somebody who lives here told you to go.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {foodStyles.map((style) => (
                <span
                  key={style}
                  className="rounded-full border px-3 py-1 text-xs font-bold"
                  style={{
                    borderColor: "rgba(155, 95, 45, 0.18)",
                    background: "rgba(155, 95, 45, 0.08)",
                    color: "var(--accent-dark)",
                  }}
                >
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Link
            href="/hot-springs-ar-restaurants"
            className="group overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="relative h-[340px] overflow-hidden bg-[color:var(--surface-strong)]">
              <img
                src={main.image}
                alt={main.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                Local Favorite
              </div>
            </div>

            <div className="p-7">
              <p
                className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-dark)" }}
              >
                {main.type}
              </p>

              <h3
                className="text-3xl font-semibold leading-tight md:text-4xl"
                style={{ color: "var(--green)" }}
              >
                {main.name}
              </h3>

              <p
                className="mt-4 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {main.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {main.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs font-bold"
                    style={{
                      borderColor: "rgba(35, 56, 47, 0.14)",
                      background: "rgba(35, 56, 47, 0.06)",
                      color: "var(--green)",
                    }}
                  >
                    {tag}
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
                View restaurant guide →
              </span>
            </div>
          </Link>

          <div className="grid gap-6">
            {side.map((place) => (
              <Link
                href="/hot-springs-ar-restaurants"
                key={place.name}
                className="group grid overflow-hidden rounded-[1.75rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.42fr_0.58fr]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative min-h-[220px] overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-5">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Hot Springs Dining
                  </p>

                  <h3
                    className="text-2xl font-semibold leading-tight"
                    style={{ color: "var(--green)" }}
                  >
                    {place.name}
                  </h3>

                  <p
                    className="mt-2 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {place.type}
                  </p>

                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {place.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {place.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-bold"
                        style={{
                          borderColor: "rgba(35, 56, 47, 0.14)",
                          background: "rgba(35, 56, 47, 0.06)",
                          color: "var(--green)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className="mt-5 inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold transition group-hover:translate-x-1"
                    style={{
                      background: "rgba(155, 95, 45, 0.1)",
                      color: "var(--accent-dark)",
                    }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-8 rounded-[1.75rem] border bg-[color:var(--surface)] p-5 shadow-sm"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-dark)" }}
              >
                More ways to eat around Hot Springs
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Break the food guide down by downtown dining, lake restaurants,
                local favorites, and places close to the main visitor areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {diningLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition hover:-translate-y-1 hover:shadow-md"
                  style={{
                    borderColor: "rgba(155, 95, 45, 0.18)",
                    background: "rgba(155, 95, 45, 0.08)",
                    color: "var(--accent-dark)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}