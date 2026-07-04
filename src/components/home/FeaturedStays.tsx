import Link from "next/link";
import { businessClickTracking } from "@/lib/tracking";

const stays = [
  {
    name: "The Waters Hot Springs",
    type: "Boutique Hotel • Downtown • Walkable Stay",
    description:
      "A downtown hotel close to Bathhouse Row, Central Avenue, restaurants, shops, and Hot Springs National Park. A good fit for visitors who want to park once and spend more time walking.",
    image: "/images/businesses/the-waters-hotel.jpg",
    href: "/hot-springs-ar-hotels",
    tags: ["Downtown", "Bathhouse Row", "Walkable"],
  },
  {
    name: "In The Trees",
    type: "Treehouse Stay • Cabins • Romantic Getaway",
    description:
      "A quieter forest stay near Hot Springs for visitors who want something more private, memorable, and tucked away from the busiest parts of town.",
    image: "/images/businesses/in-the-trees.jpg",
    href: "/hot-springs-ar-cabins",
    tags: ["Cabins", "Romantic", "Wooded stay"],
  },
  {
    name: "Arlington Resort Hotel & Spa",
    type: "Historic Hotel • Downtown • Spa",
    description:
      "One of the classic Hot Springs hotels, tied closely to the city’s downtown history and set near Bathhouse Row, restaurants, shops, and local attractions.",
    image: "/images/businesses/arlington-hotel.webp",
    href: "/hot-springs-ar-hotels",
    tags: ["Historic", "Downtown", "Spa"],
  },
];

const stayLinks = [
  {
    href: "/hot-springs-ar-hotels",
    label: "Hotels",
  },
  {
    href: "/hotels-near-bathhouse-row",
    label: "Near Bathhouse Row",
  },
  {
    href: "/hotels-near-oaklawn",
    label: "Near Oaklawn",
  },
  {
    href: "/hot-springs-ar-cabins",
    label: "Cabins",
  },
  {
    href: "/lake-hamilton-cabins",
    label: "Lake Hamilton Cabins",
  },
];

const stayStyles = [
  "Downtown hotels",
  "Historic stays",
  "Cabins",
  "Lake stays",
  "Romantic getaways",
  "Oaklawn-area hotels",
  "Walkable weekends",
];

export default function FeaturedStays() {
  const main = stays[0];
  const side = stays.slice(1);

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Stay Around Hot Springs
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Pick the stay that fits the trip.
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Where you stay changes the feel of a Hot Springs trip. You can
              stay close to{" "}
              <Link
                href="/bathhouse-row"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                Bathhouse Row
              </Link>
              , look for a cabin tucked outside town, choose something near
              Oaklawn, or head toward Lake Hamilton when water views matter more
              than walking distance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {stayStyles.map((style) => (
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
            {...businessClickTracking({
              action: "view-details",
              business: main.name,
              page: "/",
              placement: "homepage-featured-stays-main",
              placementType: "editorial",
            })}
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
                Featured Stay
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
                View hotel guide →
              </span>
            </div>
          </Link>

          <div className="grid gap-6">
            {side.map((stay) => (
              <Link
                href={stay.href}
                key={stay.name}
                {...businessClickTracking({
                  action: "view-details",
                  business: stay.name,
                  page: "/",
                  placement: "homepage-featured-stays-side",
                  placementType: "editorial",
                })}
                className="group grid overflow-hidden rounded-[1.75rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.42fr_0.58fr]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative min-h-[220px] overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-5">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Hot Springs Lodging
                  </p>

                  <h3
                    className="text-2xl font-semibold leading-tight"
                    style={{ color: "var(--green)" }}
                  >
                    {stay.name}
                  </h3>

                  <p
                    className="mt-2 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {stay.type}
                  </p>

                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {stay.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stay.tags.slice(0, 2).map((tag) => (
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
                    View stay →
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
                More ways to stay
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Compare downtown hotels, cabins, Oaklawn-area stays, and lake
                options before you decide where to base your trip.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {stayLinks.map((link) => (
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
