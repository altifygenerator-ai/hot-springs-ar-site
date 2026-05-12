import Link from "next/link";
import Hero from "@/components/Hero";
import { thingsToDoHero } from "@/data/hero";

export const metadata = {
  title:
    "Things To Do in Hot Springs, Arkansas | Bathhouse Row, Lake Hamilton & Attractions",
  description:
    "Explore the best things to do in Hot Springs, Arkansas including Bathhouse Row, Hot Springs National Park, Lake Hamilton, Oaklawn, Garvan Woodland Gardens, hiking, spas, museums, restaurants, cabins, hotels, and family attractions.",
  keywords: [
    "things to do in Hot Springs Arkansas",
    "things to do in Hot Springs AR",
    "Hot Springs Arkansas attractions",
    "Hot Springs National Park",
    "Bathhouse Row",
    "Lake Hamilton",
    "Oaklawn Hot Springs",
    "Garvan Woodland Gardens",
    "Hot Springs Arkansas family activities",
    "Hot Springs Arkansas weekend trip",
    "Hot Springs Arkansas travel guide",
    "Hot Springs hiking trails",
    "Hot Springs restaurants",
    "Hot Springs hotels",
    "Hot Springs cabins",
  ],
};

const featuredAttractions = [
  {
    name: "Bathhouse Row",
    type: "Historic District • Downtown Hot Springs",
    description:
      "Walk the historic heart of Hot Springs with bathhouses, thermal water, downtown shops, museums, restaurants, and some of the city’s most recognizable architecture.",
    image: "/images/businesses/bathhouse-row.webp",
    href: "/bathhouse-row",
  },
  {
    name: "Hot Springs National Park",
    type: "National Park • Trails • Scenic Views",
    description:
      "Explore one of the country’s most unique national parks, with mountain trails, scenic overlooks, historic bathhouses, thermal springs, and easy access from downtown.",
    image: "/images/businesses/hot-springs-national-park.webp",
    href: "/explore",
  },
  {
    name: "Oaklawn Racing Casino Resort",
    type: "Horse Racing • Casino • Entertainment",
    description:
      "A major Hot Springs destination for horse racing, casino gaming, dining, events, and resort-style entertainment.",
    image: "/images/businesses/oaklawn.webp",
    href: "/explore",
  },
];

const thingsToDo = [
  {
    title: "Walk Bathhouse Row",
    category: "History • Downtown",
    description:
      "Bathhouse Row is one of the main reasons people visit Hot Springs. It is easy to walk, close to shops and restaurants, and gives the city its classic historic feel.",
    image: "/images/businesses/bathhouse-row.webp",
  },
  {
    title: "Visit Hot Springs National Park",
    category: "National Park • Hiking",
    description:
      "The national park sits right around downtown, making it easy to mix hiking, overlooks, historic buildings, thermal water, and local food into the same day.",
    image: "/images/businesses/hot-springs-national-park.webp",
  },
  {
    title: "Spend Time on Lake Hamilton",
    category: "Lake • Boating • Views",
    description:
      "Lake Hamilton is a big part of the Hot Springs getaway feel, with lakefront restaurants, boating, fishing, vacation rentals, hotels, and sunset views.",
    image: "/images/hero/lake-hamilton.jpg",
  },
  {
    title: "Explore Garvan Woodland Gardens",
    category: "Gardens • Walking • Photos",
    description:
      "Garvan Woodland Gardens is one of the prettiest outdoor stops near Hot Springs, with landscaped trails, seasonal color, lake views, and the well-known Anthony Chapel.",
    image: "/images/businesses/garven-woodland-gardens.jpg",
  },
  {
    title: "Visit Oaklawn",
    category: "Racing • Casino • Events",
    description:
      "Oaklawn brings horse racing, gaming, restaurants, events, and resort energy to Hot Springs, especially during racing season and busy weekends.",
    image: "/images/businesses/oaklawn.webp",
  },
  {
    title: "Try a Bathhouse or Spa",
    category: "Spa • Thermal Water",
    description:
      "Hot Springs is known for its bathhouse history, and visitors can still plan spa time, thermal bathing, massages, and a slower downtown experience.",
    image: "/images/businesses/quapaw-baths.jpg",
  },
  {
    title: "Take in Mountain Views",
    category: "Scenic Drives • Overlooks",
    description:
      "The city is surrounded by mountain scenery, with overlooks, winding roads, trails, and viewpoints that make Hot Springs feel different from a normal downtown trip.",
    image: "/images/businesses/hot-springs-mountain-tower.webp",
  },
  {
    title: "Find Family Attractions",
    category: "Family • Museums • Activities",
    description:
      "Families can mix outdoor stops with museums, parks, kid-friendly restaurants, Magic Springs, Mid-America Science Museum, and easy downtown exploring.",
    image: "/images/businesses/mid-america-science-museum.jpg",
  },
  {
    title: "Eat Downtown or by the Lake",
    category: "Restaurants • Local Food",
    description:
      "Hot Springs has everything from breakfast spots and historic bars to lakefront seafood, barbecue, pizza, breweries, cafes, and more polished dinner spots.",
    image: "/images/businesses/fishermans-wharf.jpg",
  },
];

const tripStyles = [
  {
    title: "For a First-Time Visit",
    text: "Start with Bathhouse Row, Hot Springs National Park, downtown shops, a local restaurant, and a scenic overlook. That gives you the classic Hot Springs experience without overcomplicating the day.",
  },
  {
    title: "For a Family Trip",
    text: "Mix easier attractions like Mid-America Science Museum, Magic Springs, Lake Hamilton, downtown treats, family-friendly restaurants, and short scenic stops.",
  },
  {
    title: "For a Couples Getaway",
    text: "Look at bathhouses, spas, nicer restaurants, boutique hotels, cabins, lake views, gardens, and slower downtown exploring.",
  },
  {
    title: "For an Outdoor Weekend",
    text: "Build the trip around hiking, mountain views, Lake Hamilton, Lake Catherine, scenic drives, kayaking, fishing, and a cabin or lake stay.",
  },
];

const faqs = [
  {
    question: "What are the best things to do in Hot Springs, Arkansas?",
    answer:
      "Popular things to do in Hot Springs include walking Bathhouse Row, visiting Hot Springs National Park, spending time on Lake Hamilton, going to Oaklawn, exploring Garvan Woodland Gardens, hiking, visiting museums, trying local restaurants, and booking a spa or bathhouse experience.",
  },
  {
    question: "Is Hot Springs, Arkansas good for a weekend trip?",
    answer:
      "Yes. Hot Springs works very well for weekend trips because you can fit in downtown exploring, national park trails, restaurants, bathhouses, lake views, hotels, cabins, and local attractions without driving far between stops.",
  },
  {
    question: "What is Hot Springs known for?",
    answer:
      "Hot Springs is known for Bathhouse Row, natural thermal water, Hot Springs National Park, historic downtown, Oaklawn, Lake Hamilton, spas, hiking trails, and Arkansas getaway trips.",
  },
  {
    question: "What can families do in Hot Springs?",
    answer:
      "Families can visit Mid-America Science Museum, Magic Springs, Hot Springs National Park, Lake Hamilton, Garvan Woodland Gardens, downtown shops, kid-friendly restaurants, and scenic outdoor spots.",
  },
  {
    question: "Where should I stay when visiting Hot Springs?",
    answer:
      "Many visitors stay downtown near Bathhouse Row, near Oaklawn, around Lake Hamilton, or in cabins and vacation rentals just outside the busiest parts of town.",
  },
];

export default function ThingsToDoPage() {
  const mainAttraction = featuredAttractions[0];
  const sideAttractions = featuredAttractions.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              name: "Things To Do in Hot Springs, Arkansas",
              description:
                "A travel guide to things to do in Hot Springs, Arkansas including Bathhouse Row, Hot Springs National Park, Lake Hamilton, Oaklawn, Garvan Woodland Gardens, restaurants, hotels, cabins, spas, hiking, and family attractions.",
              touristType: [
                "Families",
                "Couples",
                "Weekend travelers",
                "Outdoor travelers",
                "History visitors",
                "Lake visitors",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Popular Things To Do in Hot Springs, Arkansas",
              itemListElement: thingsToDo.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "TouristAttraction",
                  name: item.title,
                  description: item.description,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      <Hero
        eyebrow={thingsToDoHero.eyebrow}
        title={thingsToDoHero.title}
        description={thingsToDoHero.description}
        image={thingsToDoHero.image}
        primaryCta={thingsToDoHero.primaryCta}
        secondaryCta={thingsToDoHero.secondaryCta}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Hot Springs Trip Planning
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Start with the places that make Hot Springs worth visiting.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Hot Springs is easy to build a trip around because the city has
                a real mix of history, nature, food, lake time, spas, and family
                attractions. You can walk Bathhouse Row in the morning, hike
                above downtown, spend time around Lake Hamilton, eat somewhere
                local, and still have plenty left for another day.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Use this guide to compare the main{" "}
                <Link
                  href="/hot-springs-ar-restaurants"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  restaurants
                </Link>
                ,{" "}
                <Link
                  href="/hot-springs-ar-hotels"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  hotels
                </Link>
                ,{" "}
                <Link
                  href="/hot-springs-ar-cabins"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  cabins
                </Link>
                , attractions, and local stops before you visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/hot-springs-ar-restaurants" className="btn">
            Restaurants
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels
          </Link>

          <Link href="/hot-springs-ar-cabins" className="btn">
            Cabins
          </Link>

          <Link href="/bathhouse-row" className="btn">
            Explore Hot Springs
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Classic Hot Springs Stops</h2>

            <p>
              These are the places most visitors recognize first: historic
              downtown, the national park, thermal water, Oaklawn, lake views,
              gardens, trails, and the parts of town that give Hot Springs its
              identity.
            </p>
          </div>

          <div className="space-y-8">
            <Link
              href={mainAttraction.href}
              className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr] transition hover:-translate-y-1 hover:shadow-2xl"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <img
                  src={mainAttraction.image}
                  alt={mainAttraction.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Hot Springs Highlight
                </p>

                <h3 className="mb-4 text-4xl font-semibold leading-tight">
                  {mainAttraction.name}
                </h3>

                <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                  {mainAttraction.type}
                </p>

                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                  {mainAttraction.description}
                </p>

                <span
                  className="mt-6 inline-block font-bold"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Learn more →
                </span>
              </div>
            </Link>

            <div className="grid gap-6 lg:grid-cols-2">
              {sideAttractions.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="overflow-hidden rounded-2xl border bg-[color:var(--surface)] transition hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Visitor Favorite
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                      {item.type}
                    </p>

                    <p
                      className="mt-4 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {item.description}
                    </p>

                    <span
                      className="mt-5 inline-block font-bold"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More Things To Do Around Hot Springs</h2>

            <p>
              These are the activities and local experiences that help turn a
              quick stop into a full Hot Springs trip.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {thingsToDo.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 flex-1 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/hero/lake-hamilton.jpg"
          alt="Lake Hamilton near Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Lake Days & Mountain Views
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Hot Springs works because you can mix city, lake, and outdoors.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Spend one part of the day downtown, another part near the water,
              and still have time for food, hiking, shopping, or a quiet place
              to stay.
            </p>

            <Link
              href="/hot-springs-ar-cabins"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Find Cabins & Lake Stays
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Plan Around the Kind of Trip You Want</h2>

            <p>
              Hot Springs can be a historic downtown trip, a lake weekend, a
              family vacation, a couples getaway, or an outdoor base. The best
              plan depends on why you’re coming.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tripStyles.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Hot Springs Things To Do FAQs</h2>

            <p>
              Quick answers for people planning a Hot Springs weekend, lake
              trip, downtown stay, family visit, or Arkansas getaway.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>

                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[32px] border p-8 shadow-2xl md:p-12"
            style={{
              background:
                "linear-gradient(135deg, var(--green) 0%, #1d332a 55%, var(--accent-dark) 100%)",
              borderColor: "rgba(255,255,255,0.16)",
            }}
          >
            <div
              className="absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            <div className="relative z-10 max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Planning Your Stay
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Make the rest of the trip easier too.
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                Once you know what you want to do, find restaurants, hotels,
                cabins, and local businesses close to the parts of Hot Springs
                you actually plan to visit.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hot-springs-ar-restaurants"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "var(--green)",
                  }}
                >
                  Find Restaurants
                </Link>

                <Link
                  href="/hot-springs-ar-hotels"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Find Hotels
                </Link>

                <Link
                  href="/hot-springs-ar-cabins"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Find Cabins
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}