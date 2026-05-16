import Link from "next/link";
import AdvertiseQuoteForm from "@/components/AdvertiseQuoteForm";

export const metadata = {
  title: "Advertise With Hot Springs Arkansas Guide | Get Listed Locally",
  description:
    "Advertise your Hot Springs, Arkansas business on the local guide. Get listed as a restaurant, hotel, cabin, attraction, shop, service business, or local tourism business.",
  keywords: [
    "advertise Hot Springs Arkansas",
    "Hot Springs Arkansas business listing",
    "Hot Springs Arkansas local business advertising",
    "get listed Hot Springs Arkansas",
    "Hot Springs Arkansas tourism advertising",
    "Hot Springs Arkansas restaurant listing",
    "Hot Springs Arkansas cabin listing",
    "Hot Springs Arkansas hotel listing",
    "Hot Springs Arkansas local guide advertising",
  ],
};

const listingOptions = [
  {
    title: "Basic Listing",
    text: "A simple listing with your business name, category, short description, contact info, website or Facebook link, and directions.",
  },
  {
    title: "Featured Placement",
    text: "A stronger placement with a larger card, better visibility on category pages, photos, and a more detailed write-up.",
  },
  {
    title: "Sponsored Feature",
    text: "Premium placement for businesses that want more visibility across relevant guide pages, social posts, or featured sections.",
  },
];

const businessTypes = [
  "Restaurants",
  "Cabins & vacation rentals",
  "Hotels & bed and breakfasts",
  "Attractions",
  "Spas & bathhouses",
  "Coffee shops",
  "Local shops",
  "Outdoor recreation",
  "Guides & rentals",
  "Local service businesses",
  "Event venues",
  "Tourism-related businesses",
];

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Advertise Locally
              </p>

              <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
                Get your Hot Springs business in front of visitors.
              </h1>

              <p
                className="mt-6 max-w-2xl text-lg leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Hot Springs Arkansas Guide helps visitors find local places to
                eat, stay, shop, explore, and plan their trip. If you own a
                restaurant, cabin, hotel, attraction, shop, rental, or local
                service that visitors should know about, this is a simple way to
                get in front of them.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div
                  className="rounded-3xl border bg-[color:var(--surface)] p-5 shadow-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h3 className="text-xl font-semibold">Built for visitors</h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    The guide is organized around what people are already
                    searching for: restaurants, hotels, cabins, lake stays,
                    attractions, and things to do.
                  </p>
                </div>

                <div
                  className="rounded-3xl border bg-[color:var(--surface)] p-5 shadow-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h3 className="text-xl font-semibold">Local visibility</h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    Listings help put your business in front of people planning
                    trips, looking for food, comparing stays, or exploring Hot
                    Springs.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:naturalstatetourismproject@gmail.com"
                  className="btn-primary"
                >
                  Email Us
                </a>

                <Link href="/local-businesses" className="btn-secondary">
                  View Local Businesses
                </Link>
              </div>
            </div>

            <AdvertiseQuoteForm />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Who can get listed?</h2>
            <p>
              The guide is built for businesses that help visitors and locals
              find useful places around Hot Springs and the surrounding area.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border bg-[color:var(--surface)] p-5 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="font-semibold" style={{ color: "var(--green)" }}>
                  {type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Listing & advertising options</h2>
            <p>
              We keep it simple. Businesses can start with a basic listing or
              ask about featured placement for more visibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {listingOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{option.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {option.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[560px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/businesses/bathhouse-row.webp"
          alt="Hot Springs Arkansas local business advertising"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Local Visibility
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Visitors are already searching. Help them find you.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Whether someone is planning a weekend trip, looking for dinner,
              comparing cabins, booking a hotel, or finding things to do, the
              goal is to make local businesses easier to discover.
            </p>

            <a
              href="#top"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Fill Out the Form
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="rounded-[2rem] border bg-[color:var(--surface)] p-8 text-center shadow-sm md:p-10"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Natural State Tourism Project
            </p>

            <h2 className="text-4xl font-semibold">
              Built to support local discovery.
            </h2>

            <p
              className="mx-auto mt-4 max-w-2xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Hot Springs Arkansas Guide is part of the Natural State Tourism
              Project, an independent local tourism guide network for Arkansas
              towns. The goal is to help visitors find real local places to eat,
              stay, shop, and explore.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/hot-springs-ar-restaurants" className="btn-primary">
                View Restaurants
              </Link>

              <Link href="/hot-springs-ar-cabins" className="btn-secondary">
                View Cabins & Stays
              </Link>

              <Link href="/local-businesses" className="btn-secondary">
                View Local Businesses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}