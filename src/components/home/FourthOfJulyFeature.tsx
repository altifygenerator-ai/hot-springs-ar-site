import Image from "next/image";
import Link from "next/link";

export default function FourthOfJulyFeature() {
  return (
    <section className="section bg-white/35">
      <div className="container">
        <div
          className="overflow-hidden rounded-[2rem] border bg-[color:var(--surface)] shadow-[var(--shadow)]"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-[color:var(--surface-strong)] lg:min-h-[520px]">
              <Image
                src="/images/holiday/4th-of-july-hero.jpg"
                alt="Fourth of July in Hot Springs Arkansas"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-black/72 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                Seasonal Guide
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <p className="hero-eyebrow">Fourth of July in Hot Springs</p>

              <h2>
                Fireworks, lake views, patriotic events, and July 4 plans around
                Hot Springs.
              </h2>

              <p className="mt-5 text-lg leading-8">
                Planning July 4 in Hot Springs? Start with the Lake Hamilton
                fireworks, downtown events, Bathhouse Row, Magic Springs, local
                restaurants, and a few simple tips for making the holiday easier.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div
                  className="rounded-2xl border bg-white/55 p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <strong
                    className="block text-2xl leading-none"
                    style={{ color: "var(--green)" }}
                  >
                    July 4
                  </strong>
                  <span
                    className="mt-2 block text-sm font-bold"
                    style={{ color: "var(--muted)" }}
                  >
                    Holiday events
                  </span>
                </div>

                <div
                  className="rounded-2xl border bg-white/55 p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <strong
                    className="block text-2xl leading-none"
                    style={{ color: "var(--green)" }}
                  >
                    Lake
                  </strong>
                  <span
                    className="mt-2 block text-sm font-bold"
                    style={{ color: "var(--muted)" }}
                  >
                    Hamilton fireworks
                  </span>
                </div>

                <div
                  className="rounded-2xl border bg-white/55 p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <strong
                    className="block text-2xl leading-none"
                    style={{ color: "var(--green)" }}
                  >
                    Local
                  </strong>
                  <span
                    className="mt-2 block text-sm font-bold"
                    style={{ color: "var(--muted)" }}
                  >
                    Things to do
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hot-springs-fourth-of-july"
                  className="btn-primary"
                >
                  View July 4 Guide
                </Link>

                <Link href="/events" className="btn-secondary">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}