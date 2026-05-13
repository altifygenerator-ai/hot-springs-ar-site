import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title:
    "Bathhouse Row in Hot Springs, Arkansas | Historic Bathhouses, Spas & Downtown Guide",
  description:
    "Explore Bathhouse Row in Hot Springs, Arkansas with historic bathhouses, thermal water, downtown restaurants, shops, hotels, Hot Springs National Park, spas, and things to do nearby.",
  keywords: [
    "Bathhouse Row Hot Springs Arkansas",
    "Bathhouse Row Hot Springs AR",
    "historic bathhouses Hot Springs",
    "Hot Springs Arkansas bathhouses",
    "things to do near Bathhouse Row",
    "restaurants near Bathhouse Row",
    "hotels near Bathhouse Row",
    "Hot Springs National Park Bathhouse Row",
    "downtown Hot Springs Arkansas",
  ],
};

const hero = {
  eyebrow: "BATHHOUSE ROW",
  title: "Bathhouse Row in Hot Springs, Arkansas",
  description:
    "Walk the historic heart of Hot Springs with classic bathhouses, thermal water, downtown shops, restaurants, museums, spas, and Hot Springs National Park all close together.",
  image: "/images/businesses/bathhouse-row.webp",
  primaryCta: {
  label: "Restaurants Nearby",
  href: "/restaurants-near-bathhouse-row",
},
secondaryCta: {
  label: "Things To Do Nearby",
  href: "/things-to-do-in-hot-springs-ar",
},
};

const bathhouses = [
  {
    name: "Fordyce Bathhouse",
    type: "Visitor Center • Museum • Historic Bathhouse",
    description:
      "One of the best starting points for understanding Bathhouse Row. The Fordyce Bathhouse gives visitors a look at the history, architecture, and old bathing culture that helped make Hot Springs famous.",
    image: "/images/businesses/fordyce-bathhouse.jpg",
  },
  {
    name: "Quapaw Baths & Spa",
    type: "Thermal Baths • Spa • Bathhouse Experience",
    description:
      "A working bathhouse where visitors can experience thermal pools, spa services, and a more modern version of the classic Hot Springs bathhouse visit.",
    image: "/images/businesses/quapaw-baths.jpg",
  },
  {
    name: "Buckstaff Bathhouse",
    type: "Traditional Bathhouse • Historic Spa",
    description:
      "A historic operating bathhouse offering a more traditional bathing experience in the middle of Bathhouse Row.",
    image: "/images/businesses/buckstaff-bathhouse.jpg",
  },
];

const thingsNearby = [
  {
    title: "Walk Central Avenue",
    text: "Bathhouse Row sits along Central Avenue, so it is easy to walk between historic buildings, restaurants, shops, galleries, hotels, and downtown stops.",
  },
  {
    title: "Visit Hot Springs National Park",
    text: "The national park is woven directly into the downtown area, making it simple to mix Bathhouse Row with trails, overlooks, thermal water, and visitor center stops.",
  },
  {
    title: "Try a Bathhouse or Spa",
    text: "Some visitors come mainly for the history, while others want the spa side of Hot Springs. Bathhouse Row gives you access to both.",
  },
  {
    title: "Eat Downtown",
    text: "Several restaurants, breakfast spots, breweries, cafes, and historic bars are close enough to work into the same visit without much planning.",
  },
];

const tripTips = [
  {
    title: "Best for First-Time Visitors",
    text: "If it is your first trip to Hot Springs, Bathhouse Row should probably be near the top of your list. It gives you the history, architecture, walkability, and downtown feel all in one area.",
  },
  {
    title: "Easy to Pair With Food",
    text: "Plan Bathhouse Row before or after a meal downtown. Breakfast, lunch, coffee, breweries, historic bars, and dinner spots are all nearby.",
  },
  {
    title: "Good for a Slow Morning",
    text: "This area works well when you do not want a rushed itinerary. Walk, take photos, stop inside the visitor center, grab coffee, and enjoy the older Hot Springs feel.",
  },
  {
    title: "Better With Comfortable Shoes",
    text: "Bathhouse Row is walkable, but you will enjoy it more if you are dressed for sidewalks, stairs, shops, and short walks around downtown.",
  },
];

const faqs = [
  {
    question: "What is Bathhouse Row in Hot Springs?",
    answer:
      "Bathhouse Row is the historic downtown area in Hot Springs, Arkansas known for its bathhouse buildings, thermal water history, architecture, museums, spas, restaurants, shops, and connection to Hot Springs National Park.",
  },
  {
    question: "Can you still use the bathhouses in Hot Springs?",
    answer:
      "Yes. Some bathhouses still offer spa or bathing experiences, while others are used for visitor information, museums, restaurants, shops, or other public uses.",
  },
  {
    question: "Is Bathhouse Row walkable?",
    answer:
      "Yes. Bathhouse Row is one of the most walkable areas in Hot Springs. Visitors can explore historic buildings, restaurants, shops, hotels, and national park stops along or near Central Avenue.",
  },
  {
    question: "Are there restaurants near Bathhouse Row?",
    answer:
      "Yes. Downtown Hot Springs has breakfast spots, cafes, breweries, historic bars, casual restaurants, and dinner options close to Bathhouse Row.",
  },
  {
    question: "Where should I stay near Bathhouse Row?",
    answer:
      "Visitors who want walkable access often stay downtown near Bathhouse Row, Central Avenue, Hot Springs National Park, restaurants, shops, and historic attractions.",
  },
];

export default function BathhouseRowPage() {
  const mainBathhouse = bathhouses[0];
  const sideBathhouses = bathhouses.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Bathhouse Row",
              description:
                "Historic bathhouses, thermal water, downtown restaurants, shops, spas, museums, and Hot Springs National Park access in Hot Springs, Arkansas.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hot Springs",
                addressRegion: "AR",
                addressCountry: "US",
              },
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
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Historic Downtown Hot Springs
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                This is the part of Hot Springs most visitors should see first.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Bathhouse Row is where the old Hot Springs story feels the most
                obvious. Historic buildings line Central Avenue, thermal water
                history is everywhere, and visitors can walk between bathhouses,
                restaurants, shops, hotels, museums, and national park stops
                without needing to over-plan the day.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                It pairs naturally with{" "}
                <Link
  href="/restaurants-near-bathhouse-row"
  className="font-semibold underline underline-offset-4"
  style={{ color: "var(--accent-dark)" }}
>
  restaurants near Bathhouse Row
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
                  href="/things-to-do-in-hot-springs-ar"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: "var(--accent-dark)" }}
                >
                  things to do
                </Link>
                , spas, hiking, shopping, and exploring downtown Hot Springs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/restaurants-near-bathhouse-row" className="btn">
            Restaurants Near Bathhouse Row
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn">
            Hotels Near Downtown
          </Link>

          <Link href="/things-to-do-in-hot-springs-ar" className="btn">
            Things To Do Nearby
          </Link>

          <Link href="/explore" className="btn">
            Explore Hot Springs
          </Link>
        </div>
      </section>
      

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Historic Bathhouses and Stops on Bathhouse Row</h2>

            <p>
              Bathhouse Row is not just one building. It is a historic district
              with old bathhouses, visitor stops, spa experiences, architecture,
              and downtown places that help tell the Hot Springs story.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="overflow-hidden rounded-3xl border bg-[color:var(--surface)] shadow-[var(--shadow)] grid lg:grid-cols-[1.1fr_0.9fr]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative h-[500px] w-full overflow-hidden">
                <img
                  src={mainBathhouse.image}
                  alt={mainBathhouse.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Start Here
                </p>

                <h3 className="mb-4 text-4xl font-semibold leading-tight">
                  {mainBathhouse.name}
                </h3>

                <p className="mb-5 text-sm" style={{ color: "var(--muted)" }}>
                  {mainBathhouse.type}
                </p>

                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                  {mainBathhouse.description}
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {sideBathhouses.map((item) => (
                <div
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
                      Bathhouse Row Stop
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/hero/hot-springs-history.jpg"
          alt="Historic downtown Hot Springs Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Historic Streets & Thermal Water
            </p>

            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ color: "#ffffff" }}
            >
              Bathhouse Row is where Hot Springs feels different.
            </h2>

            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              The buildings, sidewalks, steam, history, and downtown setting all
              come together here. It is the part of town that feels the least
              replaceable.
            </p>

            <Link
              href="/hot-springs-ar-restaurants"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: "var(--green)" }}
            >
              Find Restaurants Nearby
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Things To Do Near Bathhouse Row</h2>

            <p>
              The best part about Bathhouse Row is how easy it is to build the
              rest of your day around it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {thingsNearby.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
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
            <h2>Tips for Visiting Bathhouse Row</h2>

            <p>
              You do not need a complicated plan, but a few simple choices make
              the visit better.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tripTips.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
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
            <h2>Bathhouse Row FAQs</h2>

            <p>
              Quick answers for visitors planning a downtown Hot Springs visit,
              bathhouse experience, spa stop, hotel stay, or walk along Central
              Avenue.
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

                <p
                  className="mt-3 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
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
                Plan the Rest of the Trip
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Build your Hot Springs day around Bathhouse Row.
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                After you walk the historic district, find restaurants, hotels,
                spas, trails, shops, and other Hot Springs attractions nearby.
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
                  href="/things-to-do-in-hot-springs-ar"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  More Things To Do
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}