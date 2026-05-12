import Link from "next/link";

const categories = [
  {
    title: "Things To Do",
    text: "Explore Bathhouse Row, hiking trails, lake activities, museums, spas, family attractions, and scenic spots around Hot Springs.",
    image: "/images/categories/things-to-do.jpg",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    title: "Restaurants",
    text: "Find breakfast spots, downtown dining, lakefront food, barbecue, pizza, cafes, breweries, and local favorites.",
    image: "/images/categories/restaurants.png",
    href: "/hot-springs-ar-restaurants",
  },
  {
    title: "Cabins",
    text: "Browse cabins, lake stays, wooded retreats, romantic getaways, and quiet places near Hot Springs and Lake Hamilton.",
    image: "/images/categories/cabins.jpg",
    href: "/hot-springs-ar-cabins",
  },
  {
    title: "Hotels",
    text: "Find hotels near Bathhouse Row, downtown Hot Springs, Oaklawn, Lake Hamilton, and Hot Springs National Park.",
    image: "/images/categories/hotels.jpg",
    href: "/hot-springs-ar-hotels",
  },
  {
    title: "Explore Hot Springs",
    text: "Get a bigger look at the city, from historic downtown and mountain views to local shops and outdoor stops.",
    image: "/images/categories/explore.jpg",
    href: "/explore",
  },
  {
    title: "Local Businesses",
    text: "Discover local shops, attractions, services, guides, restaurants, and visitor-friendly businesses around Hot Springs.",
    image: "/images/categories/local-business.webp",
    href: "/local-businesses",
  },
];

export default function CategoryGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Explore Hot Springs</h2>

          <p>
            Start with the main trip-planning categories, then dig deeper into
            the restaurants, stays, attractions, and local spots that make Hot
            Springs worth visiting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[230px] w-full overflow-hidden bg-[color:var(--surface-strong)]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-2xl font-semibold leading-tight"
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
    </section>
  );
}