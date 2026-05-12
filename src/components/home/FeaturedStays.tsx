import Link from "next/link";

const stays = [
  {
    name: "The Waters Hot Springs",
    type: "Boutique Hotel • Downtown",
    description:
      "A downtown stay near Bathhouse Row, restaurants, shops, and Hot Springs National Park.",
    image: "/images/businesses/the-waters-hotel.jpg",
    href: "/hot-springs-ar-hotels",
  },
  {
    name: "In The Trees",
    type: "Treehouse Stay • Cabins • Romantic Getaway",
    description:
      "A secluded forest stay for visitors wanting something quieter and more memorable near Hot Springs.",
    image: "/images/businesses/in-the-trees.jpg",
    href: "/hot-springs-ar-cabins",
  },
  {
    name: "Arlington Resort Hotel & Spa",
    type: "Historic Hotel • Downtown",
    description:
      "One of the classic Hot Springs hotels, close to Bathhouse Row and downtown attractions.",
    image: "/images/businesses/arlington-hotel.webp",
    href: "/hot-springs-ar-hotels",
  },
];

export default function FeaturedStays() {
  const main = stays[0];
  const side = stays.slice(1);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Places to Stay Around Hot Springs</h2>

          <p>
            Stay downtown near the bathhouses, book a quiet cabin, find a lake
            stay, or choose a hotel close to the attractions you care about
            most.
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
                Featured Stay
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
                Explore stays →
              </span>
            </div>
          </Link>

          {/* SMALL FEATURES */}
          <div className="grid gap-6 lg:grid-cols-2">
            {side.map((stay) => (
              <Link
                href={stay.href}
                key={stay.name}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Hot Springs Lodging
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {stay.name}
                  </h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {stay.type}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {stay.description}
                  </p>

                  <span className="inline-block mt-5 font-medium text-[color:var(--color-accent)]">
                    View stay →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/hot-springs-ar-hotels" className="btn">
            View Hotels
          </Link>

          <Link href="/hot-springs-ar-cabins" className="btn">
            View Cabins
          </Link>
        </div>
      </div>
    </section>
  );
}