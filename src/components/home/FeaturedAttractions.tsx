import Link from "next/link";

const attractions = [
  {
    name: "Bathhouse Row",
    type: "Historic District • Downtown Hot Springs",
    description:
      "Walk one of the most recognizable streets in Arkansas, with historic bathhouses, thermal water, downtown shops, museums, and classic Hot Springs scenery.",
    image: "/images/businesses/bathhouse-row.webp",
    href: "/bathhouse-row",
  },
  {
    name: "Hot Springs National Park",
    type: "National Park • Trails • Thermal Springs",
    description:
      "Explore mountain trails, scenic overlooks, historic bathhouses, thermal springs, and one of the most unique national park settings in the country.",
    image: "/images/businesses/hot-springs-national-park.webp",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Oaklawn Racing Casino Resort",
    type: "Horse Racing • Casino • Entertainment",
    description:
      "One of Hot Springs’ biggest visitor draws, with horse racing, casino gaming, dining, events, and resort-style entertainment.",
    image: "/images/businesses/oaklawn.webp",
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
          <h2>The Places Most Visitors Come For</h2>

          <p>
            From Bathhouse Row and Hot Springs National Park to Oaklawn and
            downtown exploring, these are the places that shape most Hot
            Springs trips.
          </p>
        </div>

        <div className="space-y-8">
          {/* LARGE FEATURE */}
          <Link
            href={main.href}
            className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-[500px] w-full overflow-hidden">
              <img
                src={main.image}
                alt={main.name}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                Hot Springs Highlight
              </p>

              <h3 className="mb-4 text-4xl font-semibold leading-tight">
                {main.name}
              </h3>

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

          {/* SMALL FEATURES */}
          <div className="grid gap-6 lg:grid-cols-2">
            {side.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Visitor Favorite
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {item.type}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {item.description}
                  </p>

                  <span className="inline-block mt-5 font-medium text-[color:var(--color-accent)]">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}