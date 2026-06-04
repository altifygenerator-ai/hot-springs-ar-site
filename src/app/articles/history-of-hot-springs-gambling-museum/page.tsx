import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "History of Hot Springs Gambling Museum: Slot Machines, Raids, and the Spa City’s Casino Past",
  description:
    "A history-focused Hot Springs guide to the History of Hot Springs Gambling Museum, the city’s illegal gambling era, restored slot machines, casino tables, 1967 raids, and what visitors should know before going.",
  alternates: {
    canonical: "/articles/history-of-hot-springs-gambling-museum",
  },
};

const quickFacts = [
  {
    label: "Museum",
    value: "History of Hot Springs Gambling Museum",
  },
  {
    label: "Address",
    value: "3339-C Central Avenue, Hot Springs, Arkansas",
  },
  {
    label: "Best for",
    value: "Hot Springs history, vintage slot machines, casino memorabilia, local gambling-era stories",
  },
  {
    label: "Good to know",
    value: "Hours can be limited, so check the museum’s current page or call before making a special trip.",
  },
];

const places = [
  {
    name: "The Southern Club",
    text: "One of the best-known gambling and entertainment spots on Central Avenue, tied closely to the downtown gambling story.",
  },
  {
    name: "The Vapors",
    text: "A later Hot Springs nightlife landmark that became part of the city’s mid-century gambling and entertainment memory.",
  },
  {
    name: "The Belvedere Club",
    text: "Another name connected to the casino-era collection and the private club side of Hot Springs history.",
  },
  {
    name: "Oaklawn",
    text: "Horse racing gave Hot Springs a legal gambling thread while the city’s illegal casino world grew around it.",
  },
  {
    name: "Essex Park",
    text: "Part of the early racing story before Oaklawn became the name most visitors know today.",
  },
];

const visitPairings = [
  {
    title: "Bathhouse Row",
    href: "/articles/bathhouse-row",
    text: "Start with the polished national park story, then use the museum to understand the rougher side of the same resort town.",
  },
  {
    title: "The Gangster Museum of America",
    href: "https://www.tgmoa.com/",
    text: "A separate museum downtown that leans more into the gangster and organized-crime side of Hot Springs history.",
    external: true,
  },
  {
    title: "Oaklawn",
    href: "/local-businesses",
    text: "A modern racing and casino destination with roots in Hot Springs’ older racing culture.",
  },
  {
    title: "Downtown Hot Springs",
    href: "/things-to-do-in-hot-springs-ar",
    text: "Walk Central Avenue with the gambling story in mind and the old buildings start to feel a little different.",
  },
];

export default function HistoryOfHotSpringsGamblingMuseumPage() {
  return (
    <main>
      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src="/images/articles/gambling-museum-slot-machines.jpg"
          alt="Vintage slot machines and gaming tables inside the History of Hot Springs Gambling Museum"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/68 to-black/20" />

        <div className="container relative z-10 flex min-h-[82vh] items-end pb-14 pt-28">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/68 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/65">
              Hot Springs history
            </p>

            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              History of Hot Springs Gambling Museum: Slot Machines, Raids, and
              the Spa City’s Casino Past
            </h1>

            <p className="max-w-2xl text-lg leading-8 !text-white/80">
              Hot Springs is known for bathhouses, mountain views, and weekend
              trips. But tucked into the city’s story is another chapter, one
              built around casino rooms, racing crowds, slot machines, and a
              gambling era people still talk about.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#story" className="btn-primary bg-white text-black">
                Read the Story
              </a>

              <a
                href="#visit"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Visitor Notes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.4rem] border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {fact.label}
                </p>
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              The other Hot Springs story
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
              Hot Springs has always had more than one version of itself.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                There is the Hot Springs most visitors see first: Bathhouse Row,
                the national park, the mountain drives, the old hotels, the
                restaurants, the lake weekends, and the clean postcard version
                of a historic Arkansas town.
              </p>

              <p>
                Then there is the Hot Springs people remember in stories. The
                one with back rooms, racing crowds, private clubs, slot
                machines, political protection, famous visitors, and a gambling
                business that ran in the open even when it was not legal in
                Arkansas.
              </p>

              <p>
                The History of Hot Springs Gambling Museum matters because it
                does not treat that past like a rumor. It puts the objects in
                front of you. Slot machines, gaming tables, advertisements,
                dice, cards, documents, and pieces of casino life help turn a
                half-whispered local memory into something you can actually
                study.
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
                What the museum preserves
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                This is not just gangster folklore. It is a collection of the
                gambling equipment Hot Springs was known for.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The museum was established in 2016 by local collectors Lanny
                  Beavers and Chris Hendrix, who wanted to preserve and display
                  Hot Springs gambling memorabilia instead of letting it stay
                  hidden away in private collections.
                </p>

                <p>
                  The collection is built around restored gambling equipment:
                  slot machines, tables, casino pieces, paper items, and objects
                  tied to the clubs, racetracks, and operators that shaped this
                  part of the city’s identity.
                </p>

                <p>
                  That physical side is important. Hot Springs’ gambling past
                  can sound almost too big or too colorful when it is only told
                  through stories. Seeing the machines and tables makes it feel
                  less like legend and more like local history that had weight,
                  money, workers, customers, mechanics, and consequences.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/articles/gambling-museum-tables.jpg"
                alt="Gaming tables and casino memorabilia display inside the History of Hot Springs Gambling Museum"
                width={900}
                height={700}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  A hands-on kind of history.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  The museum is known for restored machines and displays that
                  make Hot Springs’ gambling era feel more tangible than a
                  paragraph in a history book.
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
                src="/images/articles/hot-springs-gambling-marker.jpg"
                alt="Hot Springs gambling history marker on Central Avenue"
                width={900}
                height={900}
                className="h-[500px] w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  Central Avenue carried both sides of the city.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  The same downtown that drew health seekers, bathhouse guests,
                  and hotel crowds also became part of Hot Springs’ gambling and
                  nightlife story.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Why gambling took root here
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                Hot Springs was a resort town, and resort towns attract money,
                crowds, and entertainment.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The gambling story did not happen off to the side of Hot
                  Springs. It grew alongside the city’s visitor economy. People
                  came for the thermal water, hotels, horse racing, entertainment,
                  and mountain air. Once a steady stream of visitors was coming
                  in, gambling found its place.
                </p>

                <p>
                  Central Avenue was not only a street of bathhouses and
                  storefronts. It was also tied to clubs and gaming rooms where
                  visitors and locals crossed into a different kind of Hot
                  Springs night.
                </p>

                <p>
                  That is why the museum fits the city so well. It helps explain
                  a side of Hot Springs that is easy to sensationalize, but
                  harder to understand unless you connect it to the whole resort
                  economy around it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--color-text)]">
  <div className="container">
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white">
        Names tied to the era
      </p>

      <h2 className="mb-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
        The museum points back to the clubs, tracks, and rooms people
        still associate with old Hot Springs.
      </h2>

      <p className="text-lg leading-8 text-white">
        The gambling era was not one building or one story. It was a web
        of places, some remembered clearly and some mostly carried through
        photographs, equipment, and local memory.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {places.map((place) => (
        <div
          key={place.name}
          className="rounded-[1.5rem] border border-white/15 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-3 text-2xl font-semibold text-[color:var(--color-text)]">
            {place.name}
          </h3>

          <p className="text-sm leading-7 text-[color:var(--color-muted)]">
            {place.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                The end of an era
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                In 1967, the old system finally came down.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  Hot Springs’ illegal gambling world lasted for decades, but it
                  did not last forever. In 1967, after Winthrop Rockefeller
                  became governor, Arkansas State Police moved against the
                  city’s gambling operations and the era that had seemed almost
                  permanent began to close.
                </p>

                <p>
                  The raids are a major part of why the museum feels important.
                  Gambling equipment was seized, destroyed, hidden, sold,
                  restored, or scattered into private hands. The machines that
                  survived carry more than decoration. They are pieces of a
                  citywide shutdown.
                </p>

                <p>
                  One of the strongest human threads is Tony Frazier, who worked
                  around slot machines in Hot Springs during the era and later
                  connected with the museum through restored machines and
                  personal history. That kind of connection keeps the story from
                  becoming just a clean timeline of clubs and raids.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm">
              <Image
                src="/images/articles/gambling-museum-display.jpg"
                alt="Restored gambling display inside the History of Hot Springs Gambling Museum"
                width={900}
                height={700}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  The machines survived the story.
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  The museum’s restored equipment gives visitors a closer look
                  at what the city’s gambling rooms actually used, not just the
                  stories people told afterward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Visitor notes
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                How to work the museum into a Hot Springs history day.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
                <p>
                  The History of Hot Springs Gambling Museum is a good stop for
                  visitors who already know Bathhouse Row and want to understand
                  the city from another angle. It is especially worth considering
                  if you like local history, old machines, casino memorabilia,
                  racing history, or the less-polished side of tourist towns.
                </p>

                <p>
                  Because hours can be limited, check the museum’s current page
                  or call before driving across town just for this stop. Treat it
                  more like a local-history find than a big commercial museum
                  with long daily hours.
                </p>

                <p>
                  If you have time, pair it with Bathhouse Row, the Fordyce
                  Bathhouse visitor center, The Gangster Museum of America,
                  Oaklawn, or a walk through downtown Central Avenue. Together,
                  those stops show how complicated Hot Springs history really is.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {visitPairings.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group rounded-[1.5rem] border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                    {item.text}
                  </p>
                  <span className="mt-4 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                    {item.external ? "Visit site →" : "View guide →"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--bg-card)]">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Why it still matters
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
              The museum helps keep Hot Springs history from getting flattened
              into one easy story.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[color:var(--color-muted)]">
              <p>
                Hot Springs is easy to simplify. It was a bath town. It was a
                gangster town. It was a racing town. It was a resort town. It was
                a national park town.
              </p>

              <p>
                The truth is that it was all of those things at once, and the
                History of Hot Springs Gambling Museum helps preserve one of the
                pieces that could easily be reduced to a joke, a rumor, or a
                tourist slogan.
              </p>

              <p>
                The machines, tables, records, and collected objects do not tell
                the whole story by themselves. But they give the story weight.
                They remind visitors that Hot Springs’ past was built by real
                places, real money, real workers, real risk, and real people who
                watched the old era disappear.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}