const destinations = [
  {
    name: "Glenwood",
    label: "Visit Glenwood",
    href: "https://glenwoodarkansas.org",
    description:
      "A nearby small-town stop with river access, cabin trips, local food, and a quieter Arkansas pace west of Hot Springs.",
    bestFor: "River days, cabins, small-town exploring",
  },
  {
    name: "Mount Ida",
    label: "Explore Mount Ida",
    href: "https://mountidaarkansas.org",
    description:
      "A good next stop for Lake Ouachita, quartz crystal country, scenic drives, outdoor exploring, and a slower mountain-town feel.",
    bestFor: "Lake Ouachita, quartz, scenic drives",
  },
  {
    name: "Amity",
    label: "Explore Amity",
    href: "https://amityarkansas.org",
    description:
      "A quieter nearby community for people who like small-town Arkansas, backroads, local history, and places that feel a little more tucked away.",
    bestFor: "Small-town Arkansas, backroads, local history",
  },
];

export default function NearbyDestinations() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div
          className="overflow-hidden rounded-[2rem] border shadow-sm"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(135deg, var(--green) 0%, #1d332a 55%, var(--accent-dark) 100%)",
          }}
        >
          <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Nearby Arkansas Guides
              </p>

              <h2
                className="text-4xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Hot Springs also makes a good base for nearby towns.
              </h2>

              <p
                className="mt-5 text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                A Hot Springs trip does not have to stop at the city limits.
                Nearby communities connect visitors to Lake Ouachita, river
                trips, cabin weekends, crystal country, scenic drives, and the
                smaller Arkansas towns that give the region more character.
              </p>
            </div>

            <div className="grid gap-4">
              {destinations.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.5rem] border bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/14"
                  style={{ borderColor: "rgba(255,255,255,0.16)" }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p
                        className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                        style={{ color: "rgba(255,255,255,0.62)" }}
                      >
                        {item.bestFor}
                      </p>

                      <h3
                        className="text-2xl font-semibold"
                        style={{ color: "#ffffff" }}
                      >
                        {item.name}
                      </h3>

                      <p
                        className="mt-2 leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.76)" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold text-[color:var(--green)] transition group-hover:translate-x-1">
                      {item.label} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className="border-t px-7 py-5 md:px-9 lg:px-10"
            style={{ borderColor: "rgba(255,255,255,0.14)" }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              These nearby guides are part of the same local tourism network,
              built to help visitors find real places to eat, stay, explore,
              and spend time in smaller Arkansas communities around Hot Springs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}