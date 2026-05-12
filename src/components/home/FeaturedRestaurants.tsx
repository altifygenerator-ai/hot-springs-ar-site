import Link from "next/link";

const restaurants = [
  {
    name: "The Pancake Shop",
    type: "Breakfast • Downtown • Local Favorite",
    description:
      "A longtime downtown breakfast stop close to Bathhouse Row and Central Avenue.",
    image: "/images/businesses/the-pancake-shop.jpeg",
  },
  {
    name: "Ohio Club",
    type: "Historic Bar • Restaurant • Downtown",
    description:
      "A historic downtown restaurant and bar with food, drinks, live music, and classic Hot Springs character.",
    image: "/images/businesses/ohio-club.webp",
  },
  {
    name: "Fisherman’s Wharf",
    type: "Lakefront Dining • Seafood • Steakhouse",
    description:
      "A Lake Hamilton restaurant with seafood, steaks, lake views, and a visitor-friendly setting.",
    image: "/images/businesses/fishermans-wharf.jpg",
  },
];

export default function FeaturedRestaurants() {
  const main = restaurants[0];
  const side = restaurants.slice(1);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Popular Restaurants Around Hot Springs</h2>

          <p>
            From downtown breakfast spots to lakefront dinners and historic
            local restaurants, Hot Springs has plenty of places worth working
            into your trip.
          </p>
        </div>

        <div className="space-y-8">
          {/* LARGE FEATURE */}
          <Link
            href="/hot-springs-ar-restaurants"
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
                Local Favorite
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
                View restaurants →
              </span>
            </div>
          </Link>

          {/* SMALL FEATURES */}
          <div className="grid gap-6 lg:grid-cols-2">
            {side.map((place) => (
              <Link
                href="/hot-springs-ar-restaurants"
                key={place.name}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Hot Springs Dining
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {place.name}
                  </h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {place.type}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {place.description}
                  </p>

                  <span className="inline-block mt-5 font-medium text-[color:var(--color-accent)]">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/hot-springs-ar-restaurants" className="btn">
            View More Restaurants
          </Link>
        </div>
      </div>
    </section>
  );
}