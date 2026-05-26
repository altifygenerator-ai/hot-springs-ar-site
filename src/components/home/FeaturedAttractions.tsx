import Link from "next/link";

const attractions = [
  {
    name: "Bathhouse Row",
    type: "Historic District • Downtown Hot Springs",
    description:
      "Bathhouse Row is the place most people picture first when they think of Hot Springs: old bathhouse buildings, thermal water, shaded sidewalks, downtown shops, museums, and the feeling that the city’s history is still right there in front of you.",
    image: "/images/businesses/bathhouse-row.webp",
    href: "/bathhouse-row",
    tags: ["Historic", "Downtown", "Walkable"],
  },
  {
    name: "Hot Springs National Park",
    type: "National Park • Trails • Thermal Springs",
    description:
      "A national park woven directly into town, with mountain trails, overlooks, historic bathhouses, thermal springs, and easy ways to mix outdoor time with downtown exploring.",
    image: "/images/businesses/hot-springs-national-park.webp",
    href: "/things-to-do-in-hot-springs-ar",
    tags: ["Trails", "Thermal water", "Scenic views"],
  },
  {
    name: "Oaklawn Racing Casino Resort",
    type: "Horse Racing • Casino • Entertainment",
    description:
      "One of Hot Springs’ biggest visitor draws, with horse racing, casino gaming, dining, events, and resort-style entertainment not far from the main visitor areas.",
    image: "/images/businesses/oaklawn.webp",
    href: "/things-to-do-in-hot-springs-ar",
    tags: ["Racing", "Entertainment", "Events"],
  },
];

const attractionLinks = [
  {
    href: "/things-to-do-in-hot-springs-ar",
    label: "Things To Do",
  },
  {
    href: "/bathhouse-row",
    label: "Bathhouse Row",
  },
  {
    href: "/hot-springs-family-friendly",
    label: "Family-Friendly",
  },
  {
    href: "/free-things-to-do-hot-springs",
    label: "Free Things To Do",
  },
  {
    href: "/events",
    label: "Events",
  },
];

const tripStyles = [
  "Historic downtown",
  "National park trails",
  "Thermal water",
  "Family stops",
  "Oaklawn weekends",
  "Scenic overlooks",
  "Museums",
];

export default function FeaturedAttractions() {
  const main = attractions[0];
  const side = attractions.slice(1);

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Visitor Highlights
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              The places most Hot Springs trips are built around.
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              A first trip to Hot Springs usually starts with{" "}
              <Link
                href="/bathhouse-row"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                Bathhouse Row
              </Link>
              , the national park, downtown, and maybe a weekend around Oaklawn.
              From there, it is easy to add trails, family stops, lake views,
              local restaurants, and quieter places around town.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tripStyles.map((style) => (
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
            href={main.href}
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
                Hot Springs Highlight
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
                Learn about Bathhouse Row →
              </span>
            </div>
          </Link>

          <div className="grid gap-6">
            {side.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="group grid overflow-hidden rounded-[1.75rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.42fr_0.58fr]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative min-h-[220px] overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-5">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Visitor Favorite
                  </p>

                  <h3
                    className="text-2xl font-semibold leading-tight"
                    style={{ color: "var(--green)" }}
                  >
                    {item.name}
                  </h3>

                  <p
                    className="mt-2 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {item.type}
                  </p>

                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
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
                Keep planning
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Build the rest of your trip around trails, free things to do,
                family-friendly stops, events, and the main Hot Springs guide.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {attractionLinks.map((link) => (
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