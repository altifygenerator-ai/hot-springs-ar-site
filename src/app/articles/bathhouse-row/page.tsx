import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathhouse Row in Hot Springs: Why This Old Downtown Strip Still Matters",
  description:
    "A human, history-focused guide to Bathhouse Row in Hot Springs, Arkansas, including the thermal springs, historic bathhouses, preservation, modern uses, and what visitors can do today.",
  alternates: {
    canonical: "/articles/bathhouse-row",
  },
};

const bathhouses = [
  {
    name: "Hale Bathhouse",
    detail:
      "The oldest surviving bathhouse on the Row, built in the 1890s, and one of the clearest reminders of how far back the bathing story goes.",
  },
  {
    name: "Buckstaff Bathhouse",
    detail:
      "The traditional holdout. Buckstaff has kept the classic thermal bathing experience alive while most of the Row changed uses.",
  },
  {
    name: "Ozark Bathhouse",
    detail:
      "Known for its decorative look and cultural use, helping show how these old buildings can still serve the public in different ways.",
  },
  {
    name: "Quapaw Bathhouse",
    detail:
      "One of the most recognizable buildings on the Row, now tied to modern spa soaking and a more current version of the bathhouse experience.",
  },
  {
    name: "Fordyce Bathhouse",
    detail:
      "Now the national park visitor center and museum, and probably the best first stop for understanding what Bathhouse Row used to be.",
  },
  {
    name: "Maurice Bathhouse",
    detail:
      "A reminder that the bathhouses were not only about tubs. They were also social spaces with lounges, detail, and a sense of status.",
  },
  {
    name: "Lamar Bathhouse",
    detail:
      "The last major bathhouse to open on the Row, now used for the Bathhouse Emporium and park store.",
  },
  {
    name: "Superior Bathhouse",
    detail:
      "The smallest bathhouse on the Row, now one of the best examples of adaptive reuse as Superior Bathhouse Brewery.",
  },
];

const todayList = [
  "Walk Bathhouse Row and look at the architecture up close.",
  "Visit the Fordyce Bathhouse visitor center and museum.",
  "Book a traditional bath experience at Buckstaff.",
  "Try a modern spa experience at Quapaw.",
  "Stop at Superior Bathhouse Brewery.",
  "Walk the Grand Promenade behind the bathhouses.",
  "See the thermal water displays and public jug fountains.",
  "Use Bathhouse Row as a starting point for downtown Hot Springs.",
];

const pageLinks = [
  {
    label: "Bathhouse Row Guide",
    href: "/bathhouse-row",
  },
  {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    label: "Restaurants",
    href: "/hot-springs-ar-restaurants",
  },
  {
    label: "This Weekend",
    href: "/this-weekend",
  },
];

export default function BathhouseRowArticlePage() {
  return (
    <main>
      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src="/images/businesses/bathhouse-row.webp"
          alt="Bathhouse Row in Hot Springs Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/20" />

        <div className="container relative z-10 flex min-h-[82vh] items-end pb-14 pt-28">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/68 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/65">
              Hot Springs history
            </p>

            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              Bathhouse Row in Hot Springs: Why This Old Downtown Strip Still Matters
            </h1>

            <p className="max-w-2xl text-lg leading-8 !text-white/80">
              Most visitors walk past these buildings at some point. But if you
              slow down, Bathhouse Row tells the story of the water, the town,
              the national park, and why Hot Springs became Hot Springs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#story" className="btn-primary bg-white text-black">
                Read the Story
              </a>

              <a
                href="#visit"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                What to Do Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              More than old buildings
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
              You can walk Bathhouse Row in a few minutes, but the story under
              your feet runs a lot deeper than that.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                Most people who visit Hot Springs end up on Bathhouse Row at
                some point. Some stop for pictures. Some go inside the Fordyce.
                Some book a bath at Buckstaff or Quapaw. Some just walk past the
                old buildings on the way to lunch, coffee, a brewery, or a shop
                downtown.
              </p>

              <p>
                But Bathhouse Row is not just a pretty strip of historic
                buildings. It is the center of the Hot Springs story. The water,
                the national park, the old health resort days, the architecture,
                the decline of traditional bathing, and the way the city has
                reused its past all meet right there along Central Avenue.
              </p>

              <p>
                Most towns have a courthouse square, a main street, or an old
                depot that explains who they are. Hot Springs has Bathhouse Row.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Before the buildings
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                Hot Springs started with the water.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Before the bathhouses, before the hotels, before the downtown
                  crowds and the old gambling stories, there was the thermal
                  water coming out of the mountain.
                </p>

                <p>
                  The springs were the reason this place was protected in the
                  first place. Hot Springs Reservation was set aside in 1832,
                  long before the modern national park system existed. In 1921,
                  it became Hot Springs National Park.
                </p>

                <p>
                  That matters because Hot Springs is different from a lot of
                  park towns. The park is not outside town. The park and the town
                  grew into each other. Bathhouse Row is where that mix is the
                  easiest to see.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/hero/hot-springs-history.jpg"
                alt="Historic Hot Springs Arkansas"
                width={900}
                height={700}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  The water shaped everything.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  The bathhouses were built because people came for the thermal
                  springs. The city’s identity, downtown layout, and visitor
                  economy all grew around that water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/45 shadow-sm">
              <Image
                src="/images/businesses/fordyce-bathhouse.jpg"
                alt="Fordyce Bathhouse in Hot Springs Arkansas"
                width={900}
                height={900}
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                How the Row took shape
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                Bathhouse Row became the architectural center of downtown.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The Bathhouse Row people see today did not appear all at once.
                  Earlier bathhouses were more scattered, rougher, and more
                  vulnerable to fire, flooding, and rot. Over time, the spring
                  area was cleaned up, controlled, and rebuilt into a more
                  formal health resort.
                </p>

                <p>
                  The surviving bathhouses were built between the late 1800s and
                  early 1900s, with most of the Row taking on the grander look
                  people recognize today in the early twentieth century.
                </p>

                <p>
                  That is why the buildings feel different from ordinary
                  storefronts. They were meant to impress people. They were meant
                  to tell visitors that Hot Springs was not just a mountain town
                  with hot water. It was a national health destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              The eight bathhouses
            </p>

            <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
              Each building tells a slightly different part of the story.
            </h2>

            <p className="text-lg leading-8 text-[color:var(--color-muted)]">
              The eight surviving bathhouses are Hale, Buckstaff, Ozark,
              Quapaw, Fordyce, Maurice, Lamar, and Superior. Some still connect
              directly to bathing. Some became public spaces, cultural spaces,
              shops, or a brewery. Together, they show how Hot Springs has had
              to keep adapting without losing what made it different.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {bathhouses.map((bathhouse) => (
              <article
                key={bathhouse.name}
                className="rounded-[1.4rem] border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="mb-3 text-2xl font-semibold">
                  {bathhouse.name}
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {bathhouse.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm lg:col-span-1">
              <Image
                src="/images/businesses/buckstaff-bathhouse.jpg"
                alt="Buckstaff Bathhouse in Hot Springs Arkansas"
                width={700}
                height={700}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  Buckstaff kept the old experience alive.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  While much of the Row changed, Buckstaff remained tied to the
                  traditional thermal bathhouse experience.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm lg:col-span-1">
              <Image
                src="/images/businesses/quapaw-baths.jpg"
                alt="Quapaw Baths in Hot Springs Arkansas"
                width={700}
                height={700}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  Quapaw shows the modern side.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  Quapaw keeps the spa tradition going in a more modern way,
                  while still using one of the Row’s most recognizable buildings.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm lg:col-span-1">
              <Image
                src="/images/businesses/superior-bathhouse-brewery.jpg"
                alt="Superior Bathhouse Brewery in Hot Springs Arkansas"
                width={700}
                height={700}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  Superior became something new.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  Superior Bathhouse Brewery is one of the clearest examples of
                  Hot Springs reusing its history instead of letting it sit
                  empty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              The peak and the decline
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
              Bathhouse Row did not stay grand forever.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                At its height, the bathing industry brought huge numbers of
                people to Hot Springs. The bathhouses were not side attractions.
                They were the reason many visitors came. Doctors recommended
                the water, travelers planned around it, and downtown Hot Springs
                grew around that economy.
              </p>

              <p>
                But like a lot of old downtown stories, the original reason for
                the buildings started to fade. Medicine changed. Travel changed.
                Visitors changed. By the mid-twentieth century, the old bathing
                industry was no longer carrying the Row the way it once had.
              </p>

              <p>
                Some bathhouses closed. Some sat empty. Some needed expensive
                repairs. For a while, Bathhouse Row was not just historic. It
                was at risk.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Why preservation mattered
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                The Row survived because people decided it was worth saving.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The important thing is that Bathhouse Row did not get treated
                  like a disposable old strip of buildings. Preservation,
                  National Park Service involvement, historic recognition, and
                  adaptive reuse helped keep the Row from being lost.
                </p>

                <p>
                  That is a big part of why it still matters. Hot Springs could
                  have become a place that only talked about what used to be
                  there. Instead, visitors can still walk the Row, see the
                  buildings, step inside the Fordyce, take a bath, visit a spa,
                  grab a beer in a former bathhouse, and understand the city in
                  a more physical way.
                </p>

                <p>
                  You are not just reading a plaque. You are standing in the
                  middle of the story.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/businesses/grand-promenade.jpg"
                alt="Grand Promenade behind Bathhouse Row"
                width={900}
                height={900}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  The Row is still walkable history.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  The Grand Promenade, thermal water displays, mountain trails,
                  and downtown streets all connect around Bathhouse Row.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                What visitors can do today
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                Bathhouse Row is still one of the best places to start a Hot
                Springs visit.
              </h2>

              <p className="mb-7 text-lg leading-8 text-[color:var(--color-muted)]">
                Even if you are not booking a bath, the Row gives you a clear
                feel for the city. You can walk it slowly, step inside the
                Fordyce, see the architecture, follow the Grand Promenade, and
                build the rest of your day around downtown.
              </p>

              <div className="flex flex-wrap gap-3">
                {pageLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="btn-primary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
              <h3 className="mb-5 text-3xl font-semibold">
                Good ways to experience the Row
              </h3>

              <div className="grid gap-3">
                {todayList.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-black/10 bg-white/65 px-4 py-3 text-sm font-semibold leading-6 text-[color:var(--color-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
         <div className="dark-copy rounded-[2rem] bg-[#2d2a26] p-8 text-white md:p-12">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/55">
                Why it still matters
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Bathhouse Row is still the heart of Hot Springs because it
                connects the city’s past to what visitors experience now.
              </h2>

           <div className="space-y-5 text-lg leading-8">
  <p className="!text-white/78">
    A lot of places have old buildings. Bathhouse Row is
    different because those buildings still explain the city. They
    show why people came here, what Hot Springs built around, what
    almost faded, and what was important enough to preserve.
  </p>

  <p className="!text-white/78">
    You can enjoy Bathhouse Row without knowing every date or
    architectural detail. But knowing the story makes the walk
    better. It turns the Row from a photo stop into the center of
    the whole Hot Springs experience.
  </p>
</div>

            <div className="mt-8 flex flex-wrap gap-3">
  <Link
    href="/articles"
    className="rounded-full bg-white px-6 py-3 text-sm font-bold !text-[#2d2a26]"
  >
    More Articles
  </Link>

  <Link
    href="/bathhouse-row"
    className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold !text-white transition hover:bg-white/10"
  >
    Visitor Guide
  </Link>
</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}