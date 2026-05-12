import Link from "next/link";

const attractions = [
  {
    name: "Bathhouse Row",
    type: "Historic District • Downtown Hot Springs",
    description:
      "Walk one of the most recognizable streets in Arkansas, with historic bathhouses, thermal water, downtown shops, museums, and classic Hot Springs scenery.",
    image: "/images/businesses/bathhouse-row.jpg",
    href: "/explore",
  },
  {
    name: "Hot Springs National Park",
    type: "National Park • Trails • Thermal Springs",
    description:
      "Explore mountain trails, scenic overlooks, historic bathhouses, thermal springs, and one of the most unique national park settings in the country.",
    image: "/images/businesses/hot-springs-national-park.jpg",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Oaklawn Racing Casino Resort",
    type: "Horse Racing • Casino • Entertainment",
    description:
      "One of Hot Springs’ biggest visitor draws, with horse racing, casino gaming, dining, events, and resort-style entertainment.",
    image: "/images/businesses/oaklawn.jpg",
    href: "/things-to-do-in-hot-springs-ar",
  },
];

export default function FeaturedAttractions() {
  const main = attractions[0];
  const side = attractions.slice(1);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Featured Hot Springs Attractions</h2>
          <p>
            These are the kinds of places most visitors build their trip around:
            historic bathhouses, national park scenery, racing, entertainment,
            lake views, gardens, and downtown exploring.
          </p>
        </div>

        <div className="space-y-8">
          <Link
            href={main.href}
            className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg grid lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div
              className="min-h-[420px] bg-cover bg-center"
              style={{ backgroundImage: `url('${main.image}')` }}
            />

            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                Featured Attraction
              </p>

              <h3 className="mb-4 text-4xl font-semibold">{main.name}</h3>

              <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                {main.type}
              </p>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                {main.description}
              </p>

              <span className="inline-block mt-6 font-medium text-[color:var(--color-accent)]">
                Learn more →
              </span>
            </div>
          </Link>

          <div className="grid gap-6 lg:grid-cols-2">
            {side.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)]"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Popular Stop
                  </p>

                  <h3 className="text-2xl font-semibold">{item.name}</h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {item.type}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}