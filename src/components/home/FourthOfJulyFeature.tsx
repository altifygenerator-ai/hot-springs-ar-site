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
                2026 Holiday Archive
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <p className="hero-eyebrow">Fourth of July in Hot Springs</p>

              <h2>
                Look back at the 2026 holiday events and use the guide to plan a
                future July 4 trip.
              </h2>

              <p className="mt-5 text-lg leading-8">
                The 2026 Fourth of July weekend has passed. This page keeps the
                verified Lake Hamilton fireworks, Bathhouse Row celebration,
                farmers market, and Magic Springs listings as an archive while
                future holiday details are confirmed.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border bg-white/55 p-4" style={{ borderColor: "var(--border)" }}>
                  <strong className="block text-2xl leading-none" style={{ color: "var(--green)" }}>
                    2026
                  </strong>
                  <span className="mt-2 block text-sm font-bold" style={{ color: "var(--muted)" }}>
                    Event archive
                  </span>
                </div>

                <div className="rounded-2xl border bg-white/55 p-4" style={{ borderColor: "var(--border)" }}>
                  <strong className="block text-2xl leading-none" style={{ color: "var(--green)" }}>
                    Lake
                  </strong>
                  <span className="mt-2 block text-sm font-bold" style={{ color: "var(--muted)" }}>
                    Hamilton history
                  </span>
                </div>

                <div className="rounded-2xl border bg-white/55 p-4" style={{ borderColor: "var(--border)" }}>
                  <strong className="block text-2xl leading-none" style={{ color: "var(--green)" }}>
                    Current
                  </strong>
                  <span className="mt-2 block text-sm font-bold" style={{ color: "var(--muted)" }}>
                    Events page
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/hot-springs-fourth-of-july" className="btn-primary">
                  View 2026 Archive
                </Link>

                <Link href="/events" className="btn-secondary">
                  View Current Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
