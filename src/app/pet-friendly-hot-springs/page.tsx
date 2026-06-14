import Link from "next/link";
import LocalSpotHero from "@/components/local-spots/LocalSpotHero";

export const metadata = {
  title:
    "Pet-Friendly Hot Springs Arkansas | Dog Parks, Trails, Patios & Places To Stay",
  description:
    "Find pet-friendly places in Hot Springs, Arkansas, including Hot Springs Bark Park, Bathhouse Row walks, national park trails, dog-friendly patios, outdoor stops, and pet-friendly lodging notes.",
  keywords: [
    "pet friendly Hot Springs Arkansas",
    "dog friendly Hot Springs AR",
    "Hot Springs Bark Park",
    "dog friendly restaurants Hot Springs Arkansas",
    "pet friendly hotels Hot Springs AR",
    "dogs Hot Springs National Park",
    "pet friendly Bathhouse Row",
    "Fisherman’s Wharf pet friendly patio",
"pet friendly patio Hot Springs Arkansas",
"pet CPR Hot Springs Arkansas",
"canine first aid Hot Springs Arkansas",
  ],
};

const quickLinks = [
  {
    href: "#dog-park",
    label: "Dog Park",
  },
  {
    href: "#walks-trails",
    label: "Walks & Trails",
  },
  {
    href: "#restaurants",
    label: "Patios & Food",
  },
  {
    href: "#lodging",
    label: "Pet-Friendly Stays",
  },
  {
    href: "#pet-safety",
    label: "Pet Safety",
  },
];

const verifiedPlaces = [
  {
    title: "Hot Springs Bark Park",
    type: "Off-leash dog park",
    text: "Hot Springs Bark Park is the main verified dog park to know about in town. It is located at 410 Hollywood Avenue and is listed by the city as an off-leash dog park open year-round from dawn to dusk.",
    href: "https://www.hotspringsar.gov/782/Hot-Springs-Bark-Park",
    cta: "City dog park info",
  },
  {
    title: "Hot Springs National Park",
    type: "Bathhouse Row, trails, and walks",
    text: "Dogs are allowed on Hot Springs National Park trails and around Bathhouse Row, but not inside federal buildings unless they are service animals. Keep pets leashed, clean up after them, and check current park rules before you go.",
    href: "https://www.nps.gov/hosp/planyourvisit/pets.htm",
    cta: "National Park pet rules",
  },
  {
    title: "Garvan Woodland Gardens",
    type: "Garden walk",
    text: "Garvan Woodland Gardens allows well-behaved dogs under specific leash and admission rules. This can be a good scenic option when you want more than a quick sidewalk walk.",
    href: "https://www.garvangardens.org/",
    cta: "Check garden policy",
  },
  {
    title: "Superior Bathhouse Brewery",
    type: "Downtown food stop",
    text: "Superior Bathhouse Brewery is listed by Visit Hot Springs as a family and dog-friendly restaurant. Since restaurant policies can change by patio setup and season, check before heading over with a dog.",
    href: "https://www.hotsprings.org/places/restaurants/superior-bathhouse-brewery/",
    cta: "View listing",
  },
];

const patioPlaces = [
  {
    title: "Fisherman’s Wharf",
    text: "A local pet owner mentioned Fisherman’s Wharf as having an extremely pet-friendly patio and said they have taken their baby there multiple times over the years. Since patio policies can still change, check current rules before going.",
  },
  {
    title: "421 Beer Garden",
    text: "Already listed as a relaxed Hot Springs beer garden with a pet-friendly patio atmosphere. A good one to check for food, drinks, games, live music, and outdoor seating.",
  },
  {
    title: "Superior Bathhouse Brewery",
    text: "Listed by Visit Hot Springs as a family and dog-friendly restaurant. It is one of the stronger downtown options to check when planning around Bathhouse Row.",
  },
  {
    title: "SQZBX Brewery & Pizza",
    text: "Reported as dog-friendly by pet travel listings. A good one to check for pizza, drinks, and casual food near downtown.",
  },
  {
    title: "Grateful Head Pizza Oven & Beer Garden",
    text: "Reported as dog-friendly for outdoor tables. Patio availability and rules can change, so call or check current details first.",
  },
  {
    title: "Rolando’s",
    text: "Reported as dog-friendly by pet travel listings. Best used as a check-ahead option instead of assuming every table or day works.",
  },
  {
    title: "Steinhaus Keller",
    text: "Reported in dog-friendly restaurant listings. Confirm patio rules before planning around it with a pet.",
  },
  {
    title: "Fat Jack’s Oyster Sports Bar & Grill",
    text: "Reported as having dog-friendly outside tables. Check current patio setup before going.",
  },
];

const outdoorStops = [
  {
    title: "Bathhouse Row",
    text: "Good for a leashed walk, photos, downtown browsing, and getting a feel for Hot Springs without committing to a long hike.",
  },
  {
    title: "Hot Springs National Park Trails",
    text: "A strong option for active dogs and visitors who want a real walk. Keep dogs leashed and bring water, especially in summer.",
  },
  {
    title: "Lake Catherine State Park",
    text: "A nearby outdoor option for trails, lake views, and more space outside town. Check park rules before planning the day around it.",
  },
  {
    title: "Lake Ouachita State Park",
    text: "Another nearby outdoor option with trails, water, camping, and some pet-friendly lodging options through Arkansas State Parks.",
  },
];

const lodgingNotes = [
  {
    title: "Do your own check before booking.",
    text: "Pet-friendly lodging rules can change, and listings are not always updated everywhere. Search current options, then confirm directly with the hotel, cabin, RV park, or rental before you book.",
  },
  {
    title: "Check the exact room or unit.",
    text: "A property may allow pets in some rooms or cabins, but not every room, cabin, rental, or booking type may be pet-friendly.",
  },
  {
    title: "Ask about fees, size limits, and rules.",
    text: "Pet fees, weight limits, number of pets, breed rules, unattended pet policies, cleaning fees, and outdoor rules can vary a lot by property.",
  },
];
const petSafetyNotes = [
  {
    title: "Hot Springs Training and Consulting",
    text: "Hot Springs Training and Consulting mentioned that they teach canine and feline CPR and first aid by booked class. This is not a pet-friendly stop, but it may be useful information for locals, hikers, campers, and travelers who bring pets along.",
  },
  {
    title: "Useful for outdoor trips",
    text: "Pet first aid can matter when hiking, traveling, camping, or spending long days outside. Heat stress, cuts, bites, poisoning, and common injuries are all things pet owners may want to be prepared for.",
  },
  {
    title: "Book and verify first",
    text: "Classes may need to be booked ahead of time and may require minimum participation. Message Hot Springs Training and Consulting directly before planning around it.",
  },
];
const relatedGuides = [
  {
    href: "/bathhouse-row",
    label: "Bathhouse Row Guide",
  },
  {
    href: "/hot-springs-ar-restaurants",
    label: "Restaurants",
  },
  {
    href: "/hot-springs-ar-hotels",
    label: "Hotels",
  },
  {
    href: "/hot-springs-ar-cabins",
    label: "Cabins",
  },
  {
    href: "/this-weekend",
    label: "This Weekend",
  },
];

export default function PetFriendlyHotSpringsPage() {
  return (
    <main>
      <LocalSpotHero
        eyebrow="Pet-Friendly Hot Springs"
        title="Dog parks, trails, patios, and pet-friendly planning around Hot Springs."
        description="Plan a Hot Springs trip with your dog using verified pet-friendly stops, outdoor areas, downtown walking ideas, check-ahead patios, and lodging notes."
        image="/images/hero/dog-park-hero.webp"
      />

      <section>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Dog-Friendly Guide</p>

              <h2>
                Hot Springs is a solid town for visitors traveling with dogs.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Between Hot Springs Bark Park, Bathhouse Row walks, national
                park trails, nearby lake areas, patios to check ahead, and
                pet-friendly lodging options, there are several ways to build a
                trip that works when your dog is coming along.
              </p>

              <p
                className="leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Pet policies can change by season, patio setup, lodging unit,
                weather, and management. Use this guide as a starting point,
                then confirm current rules before you go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div
            className="rounded-[28px] border p-5 shadow-sm"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="hero-eyebrow">Start Here</p>
                <h3>Pick the part of the pet-friendly guide you need.</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="btn-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dog-park" className="section pt-0">
        <div className="container">
          <div
            className="grid gap-8 rounded-[34px] border p-8 shadow-sm lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
            style={{
              background:
                "linear-gradient(135deg, var(--green) 0%, #1d332a 60%, var(--accent-dark) 100%)",
              borderColor: "rgba(255,255,255,0.16)",
            }}
          >
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Main Dog Park
              </p>

              <h2
                className="text-4xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Hot Springs Bark Park is the main verified dog park in town.
              </h2>
            </div>

            <div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                The city lists Hot Springs Bark Park as an off-leash dog park at
                410 Hollywood Avenue. It is open year-round from dawn to dusk and
                is the easiest dog-specific stop to recommend for visitors.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.hotspringsar.gov/782/Hot-Springs-Bark-Park"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "var(--green)",
                  }}
                >
                  View City Dog Park Info
                </a>

                <a
                  href="#walks-trails"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.1)",
                  }}
                >
                  More Outdoor Ideas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="walks-trails" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Verified & Useful Stops</p>

            <h2>Pet-friendly places worth knowing about first.</h2>

            <p>
              These are the strongest starting points for a dog-friendly Hot
              Springs trip, especially if you want official rules or easy places
              to confirm before going.
            </p>
          </div>

          <div className="categories-grid">
            {verifiedPlaces.map((place) => (
              <article key={place.title} className="category-card">
                <div className="category-content">
                  <p className="hero-eyebrow">{place.type}</p>

                  <h3>{place.title}</h3>

                  <p>{place.text}</p>

                  <a href={place.href} target="_blank" rel="noreferrer">
                    {place.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div
            className="rounded-[32px] border p-8 shadow-sm md:p-10"
            style={{
              background:
                "linear-gradient(135deg, var(--surface) 0%, rgba(255,250,242,0.7) 100%)",
              borderColor: "var(--border)",
            }}
          >
            <div className="section-heading">
              <p className="hero-eyebrow">Outdoor Ideas</p>

              <h2>Easy places to think about when your dog needs room to move.</h2>

              <p>
                Some stops are better for short walks, while others are better
                for a longer outdoor day. Bring water, keep dogs leashed where
                required, and watch the heat on pavement in summer.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {outdoorStops.map((stop) => (
                <article
                  key={stop.title}
                  className="rounded-3xl border p-5"
                  style={{
                    background: "rgba(255,255,255,0.68)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3>{stop.title}</h3>

                  <p style={{ color: "var(--muted)" }}>{stop.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="restaurants" className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="hero-eyebrow">Patios & Food</p>

              <h2>Dog-friendly dining usually means checking the patio first.</h2>

              <p style={{ color: "var(--muted)" }}>
                Restaurant pet policies can change quickly. These are places
                reported as dog-friendly by pet travel listings or tourism
                listings, but it is still best to call or check current patio
                rules before planning around them.
              </p>

              <div className="mt-6">
                <Link href="/hot-springs-ar-restaurants" className="btn-primary">
                  View Restaurant Guide
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {patioPlaces.map((place) => (
                <article
                  key={place.title}
                  className="rounded-3xl border p-5"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3>{place.title}</h3>

                  <p style={{ color: "var(--muted)" }}>{place.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    <section id="lodging" className="section pt-0">
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

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Places To Stay
          </p>

          <h2
            className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#ffffff" }}
          >
            Pet-friendly lodging depends on the exact property and room.
          </h2>

          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Hot Springs has hotels, cabins, RV parks, resorts, and rentals that
            may allow pets, but the rules can change by property, room type,
            unit, pet size, fee, and season.
          </p>

          <p
            className="mt-4 max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Use this as a starting point, then do your own current search and
            confirm directly before booking anything.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/search?q=pet+friendly+lodging+Hot+Springs+Arkansas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
              style={{
                background: "#ffffff",
                color: "var(--green)",
              }}
            >
              Search Pet-Friendly Lodging
            </a>

            <Link
              href="/hot-springs-ar-hotels"
              className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
              style={{
                borderColor: "rgba(255,255,255,0.65)",
                color: "#ffffff",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              Hotel Guide
            </Link>

            <Link
              href="/hot-springs-ar-cabins"
              className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
              style={{
                borderColor: "rgba(255,255,255,0.65)",
                color: "#ffffff",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              Cabin Guide
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          {lodgingNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-3xl border p-5"
              style={{
                background: "rgba(255,255,255,0.09)",
                borderColor: "rgba(255,255,255,0.16)",
              }}
            >
              <h3 style={{ color: "#ffffff" }}>{note.title}</h3>

              <p style={{ color: "rgba(255,255,255,0.86)" }}>
                {note.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
<section id="pet-safety" className="section pt-0">
  <div className="container">
    <div
      className="rounded-[32px] border p-8 shadow-sm md:p-10"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="hero-eyebrow">Pet Safety Note</p>

          <h2>One local note for pet owners heading outdoors.</h2>

          <p className="mt-4" style={{ color: "var(--muted)" }}>
            This is not a pet-friendly attraction or patio listing, but it is a
            useful local note for people bringing pets on trails, lake days,
            camping trips, road trips, or long outdoor weekends around Hot
            Springs.
          </p>
        </div>

        <div className="grid gap-3">
          {petSafetyNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-3xl border p-5"
              style={{
                background: "rgba(255,255,255,0.68)",
                borderColor: "var(--border)",
              }}
            >
              <h3>{note.title}</h3>

              <p style={{ color: "var(--muted)" }}>{note.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="https://www.google.com/search?q=Hot+Springs+Training+and+Consulting+pet+CPR+first+aid"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          Search Pet CPR Info
        </a>

        <Link href="/pet-friendly-hot-springs" className="btn-primary">
          Back to Pet-Friendly Guide
        </Link>
      </div>
    </div>
  </div>
</section>
      <section className="section pt-0">
        <div className="container">
          <div
            className="rounded-[30px] border p-7 md:p-9"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="hero-eyebrow">Before You Go</p>

                <h2>Quick pet travel reminders.</h2>
              </div>

              <div className="space-y-4">
                <p style={{ color: "var(--text)" }}>
                  Always check current pet rules before you go, especially for
                  restaurants, lodging, events, gardens, tours, and state parks.
                </p>

                <p style={{ color: "var(--muted)" }}>
                  Keep dogs leashed where required, clean up after pets, bring
                  water, avoid hot pavement, and never leave pets unattended in
                  vehicles or lodging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <p className="hero-eyebrow">Keep Planning</p>

            <h2>Helpful Hot Springs guides for pet-friendly trips.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="btn-secondary">
                {guide.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}