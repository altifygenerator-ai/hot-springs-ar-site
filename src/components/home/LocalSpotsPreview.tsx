import Link from "next/link";
import { localSpots } from "@/data/local-spots/hiddenGems";

const featuredIds = [
  "ouachita-avenue",
  "bricks-and-minifigs",
  "black-ribbon-books",
];

const featuredSpots = featuredIds
  .map((id) => localSpots.find((spot) => spot.id === id))
  .filter((spot): spot is NonNullable<typeof spot> => Boolean(spot));

const supportingLinks = [
  {
    href: "/hot-springs-family-friendly",
    label: "Family-Friendly Finds",
  },
  {
    href: "/hot-springs-ouachita-avenue",
    label: "Ouachita Avenue",
  },
  {
    href: "/hot-springs-bathhouse-row-local-finds",
    label: "Bathhouse Row Local Finds",
  },
  {
    href: "/hot-springs-antique-thrift-flea-markets",
    label: "Antique, Thrift & Flea Markets",
  },
];

function getSpotTags(spotName: string) {
  if (spotName.toLowerCase().includes("ouachita")) {
    return ["Local corridor", "Shops & food", "Worth wandering"];
  }

  if (spotName.toLowerCase().includes("bricks")) {
    return ["Family stop", "Indoor activity", "Kid-friendly"];
  }

  if (spotName.toLowerCase().includes("books")) {
    return ["Local shop", "Book lovers", "Quiet stop"];
  }

  return ["Local pick", "Easy to miss", "Worth a stop"];
}

export default function LocalSpotsPreview() {
  return (
    <section className="section local-spots-home-preview">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Locals’ Picks
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              The places that make Hot Springs feel more local.
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Not every good stop in Hot Springs is a big attraction. Some are
              small shops, side streets, family-friendly places, bookstores,
              food stops, and downtown corners that visitors might miss if they
              only stay on the main route.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/hot-springs-local-spots" className="btn-primary">
                View Local Spots
              </Link>

              <Link
                href="/hot-springs-family-friendly"
                className="btn-secondary"
              >
                Family Finds
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {featuredSpots[0] && (
            <Link
              href="/hot-springs-local-spots"
              className="group overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)] transition hover:-translate-y-1 hover:shadow-2xl"
              style={{ borderColor: "var(--border)" }}
            >
              {featuredSpots[0].imageAvailable && featuredSpots[0].image && (
                <div className="relative h-[340px] overflow-hidden bg-[color:var(--surface-strong)]">
                  <img
                    src={featuredSpots[0].image}
                    alt={featuredSpots[0].imageAlt || featuredSpots[0].name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                    Featured Local Pick
                  </div>
                </div>
              )}

              <div className="p-7">
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent-dark)" }}
                >
                  Start here
                </p>

                <h3
                  className="text-3xl font-semibold leading-tight md:text-4xl"
                  style={{ color: "var(--green)" }}
                >
                  {featuredSpots[0].name}
                </h3>

                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {featuredSpots[0].localAngle}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {getSpotTags(featuredSpots[0].name).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-xs font-bold"
                      style={{
                        borderColor: "rgba(155, 95, 45, 0.18)",
                        background: "rgba(155, 95, 45, 0.08)",
                        color: "var(--accent-dark)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className="mt-6 inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold transition group-hover:translate-x-1"
                  style={{
                    background: "rgba(155, 95, 45, 0.1)",
                    color: "var(--accent-dark)",
                  }}
                >
                  See local picks →
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-6">
            {featuredSpots.slice(1).map((spot) => (
              <Link
                key={spot.id}
                href="/hot-springs-local-spots"
                className="group grid overflow-hidden rounded-[1.75rem] border bg-[color:var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.42fr_0.58fr]"
                style={{ borderColor: "var(--border)" }}
              >
                {spot.imageAvailable && spot.image && (
                  <div className="relative min-h-[220px] overflow-hidden bg-[color:var(--surface-strong)]">
                    <img
                      src={spot.image}
                      alt={spot.imageAlt || spot.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center p-5">
                  <p
                    className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Easy to miss
                  </p>

                  <h3
                    className="text-2xl font-semibold leading-tight"
                    style={{ color: "var(--green)" }}
                  >
                    {spot.name}
                  </h3>

                  <p
                    className="mt-3 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {spot.localAngle}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {getSpotTags(spot.name)
                      .slice(0, 2)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1 text-xs font-bold"
                          style={{
                            borderColor: "rgba(35, 56, 47, 0.14)",
                            background: "rgba(35, 56, 47, 0.06)",
                            color: "var(--green)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  <span
                    className="mt-5 inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold transition group-hover:translate-x-1"
                    style={{
                      background: "rgba(155, 95, 45, 0.1)",
                      color: "var(--accent-dark)",
                    }}
                  >
                    See local picks →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-8 rounded-[1.75rem] border bg-[color:var(--surface)] p-5 shadow-sm"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--accent-dark)" }}
              >
                More local guides
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Dig into family stops, Ouachita Avenue, Bathhouse Row finds, and
                the new antique, thrift, and flea market guide.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {supportingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition hover:-translate-y-1 hover:shadow-md"
                  style={{
                    borderColor: "rgba(155, 95, 45, 0.18)",
                    background: "rgba(155, 95, 45, 0.08)",
                    color: "var(--accent-dark)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}