import Link from "next/link";
import LocalSpotHero from "@/components/local-spots/LocalSpotHero";
import LocalSpotSection from "@/components/local-spots/LocalSpotSection";
import LocalSpotCTA from "@/components/local-spots/LocalSpotCTA";
import { bathhouseRowLocalFinds } from "@/data/local-spots/hiddenGems";

export const metadata = {
  title:
    "Bathhouse Row Local Finds in Hot Springs Arkansas | Arlington Shops, Books, Ice Cream & Local Tips",
  description:
    "Explore local finds around Bathhouse Row in Hot Springs, Arkansas, including The Arlington mall level, Black Ribbon Books, Mamoo’s Creamery, Buckstaff Bathhouse, downtown breakfast, shops, and local tips.",
  keywords: [
    "Bathhouse Row Hot Springs local finds",
    "Arlington Hotel shops Hot Springs",
    "Black Ribbon Books Hot Springs",
    "Mamoo's Creamery Hot Springs",
    "Buckstaff Bathhouse Hot Springs",
    "Hot Springs Arkansas hidden gems",
    "downtown Hot Springs local shops",
  ],

  alternates: {
    canonical: "/hot-springs-bathhouse-row-local-finds",
  },
};

export default function HotSpringsBathhouseRowLocalFindsPage() {
  return (
    <main>
      <LocalSpotHero
        eyebrow="Bathhouse Row Local Finds"
        title="Easy-to-miss local stops around Bathhouse Row and The Arlington."
        description="Bathhouse Row is already one of the biggest visitor areas in Hot Springs, but locals pointed out a few smaller stops nearby that people can easily walk past — books, ice cream, shops, breakfast, classic bathhouse experiences, and the mall level inside The Arlington."
       image="/images/local-spots/bathhouse-hero.jpg"
      />

      <section>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="hero-eyebrow">Downtown Local Tips</p>

              <h2>
                Bathhouse Row has more going on than the obvious postcard view.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                A lot of visitors come downtown for the bathhouses, Central
                Avenue, and the historic buildings. That part is worth it, but
                there are also smaller local stops tucked around the same area
                that make the visit feel less generic.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide focuses on local suggestions around Bathhouse Row,
                The Arlington, downtown breakfast spots, books, sweets, and
                classic Hot Springs experiences that fit naturally into a
                downtown walk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/bathhouse-row" className="btn-secondary">
            Bathhouse Row
          </Link>

          <Link href="/hot-springs-ar-hotels" className="btn-secondary">
            Hotels
          </Link>

          <Link href="/hot-springs-ar-restaurants" className="btn-secondary">
            Restaurants
          </Link>

          <Link href="/hot-springs-local-spots" className="btn-secondary">
            All Local Spots
          </Link>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div
            className="rounded-3xl border p-6 shadow-sm md:p-8"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p className="hero-eyebrow">Community Tip</p>

            <h2 className="mb-4">
              Don’t skip the mall level inside The Arlington.
            </h2>

            <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
              One local suggestion that stood out was the mall level inside The
              Arlington Resort Hotel & Spa. Visitors know the building from the
              outside, but not everyone realizes there are small shops tucked
              inside, including books, sweets, gifts, and music-related stops.
            </p>
          </div>
        </div>
      </section>

      <LocalSpotSection
        groupSlug="bathhouse-row-local-finds"
        spots={bathhouseRowLocalFinds}
      />

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
                Simple Downtown Plan
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Turn Bathhouse Row into a slower local walk.
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                Walk Bathhouse Row, stop into a bathhouse, grab breakfast or
                ice cream, check the Arlington mall level, then branch out
                toward nearby restaurants, shops, and local events if you want
                more than the standard tourist loop.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/bathhouse-row"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "var(--green)",
                  }}
                >
                  Explore Bathhouse Row
                </Link>

                <Link
                  href="/events"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  See Local Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocalSpotCTA
        title="Know another Bathhouse Row or downtown local find?"
        text="If there’s a shop, breakfast stop, bathhouse tip, hidden corner, small business, or local experience around Bathhouse Row that visitors usually miss, send it in so we can keep this guide useful."
      />
    </main>
  );
}