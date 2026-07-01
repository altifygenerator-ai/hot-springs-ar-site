import Link from "next/link";
import LocalSpotHero from "@/components/local-spots/LocalSpotHero";
import LocalSpotSection from "@/components/local-spots/LocalSpotSection";
import LocalSpotCTA from "@/components/local-spots/LocalSpotCTA";
import { ouachitaAvenueSpots } from "@/data/local-spots/hiddenGems";

export const metadata = {
  title:
    "Ouachita Avenue Hot Springs Arkansas | Local Restaurants, Shops & Hidden Gems",
  description:
    "Explore Ouachita Avenue in Hot Springs, Arkansas, including local restaurants, creative shops, coffee, wine, pizza, downtown stops, and local favorites visitors often miss.",
  keywords: [
    "Ouachita Avenue Hot Springs",
    "Hot Springs Arkansas hidden gems",
    "Ouachita Avenue restaurants",
    "SQZBX Hot Springs",
    "Splash Wine Bar Hot Springs",
    "Colorado Grill Hot Springs",
    "Static on Ouachita",
    "Hot Springs local spots",
  ],

  alternates: {
    canonical: "/hot-springs-ouachita-avenue",
  },
};

export default function HotSpringsOuachitaAvenuePage() {
  return (
    <main>
      <LocalSpotHero
        eyebrow="Ouachita Avenue"
        title="The downtown Hot Springs strip locals say visitors overlook."
        description="Ouachita Avenue sits close to the main downtown area, but it has its own feel — local food, drinks, creative shops, coffee stops, historic buildings, and a less obvious side of Hot Springs."
       image="/images/local-spots/ouachita-hero.jpg"
      />

      <section>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="hero-eyebrow">Local Downtown Guide</p>

              <h2>Not everything worth finding is right on Central Avenue.</h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text)" }}>
                When locals started sending in suggestions, Ouachita Avenue came
                up fast. It is one of those areas visitors can easily miss if
                they only walk Bathhouse Row and Central Avenue.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                This guide pulls together some of the food, drinks, coffee,
                shopping, and creative stops tied to that area so visitors have
                a better reason to wander a little farther.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-3">
          <Link href="/hot-springs-ar-restaurants" className="btn-secondary">
            Restaurants
          </Link>

          <Link href="/things-to-do-in-hot-springs-ar" className="btn-secondary">
            Things To Do
          </Link>

          <Link href="/hot-springs-local-spots" className="btn-secondary">
            All Local Spots
          </Link>

          <Link href="/events" className="btn-secondary">
            Events
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
            <p className="hero-eyebrow">Why Locals Mention It</p>

            <h2 className="mb-4">
              Ouachita Avenue has a different kind of downtown feel.
            </h2>

            <p className="max-w-3xl" style={{ color: "var(--muted)" }}>
              This is where the guide starts feeling less like a tourist list
              and more like local discovery. Pizza and beer, wine, coffee,
              vintage finds, historic buildings, and creative stops all sit
              close together, but the area still feels a little tucked away
              compared to the busiest tourist stretch.
            </p>
          </div>
        </div>
      </section>

      <LocalSpotSection
        groupSlug="ouachita-avenue"
        spots={ouachitaAvenueSpots}
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
                Downtown Trip Idea
              </p>

              <h2
                className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: "#ffffff" }}
              >
                Make Ouachita Avenue part of a downtown afternoon.
              </h2>

              <p
                className="mt-5 max-w-3xl text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.86)" }}
              >
                Start with Bathhouse Row, then walk or drive over toward
                Ouachita Avenue for food, drinks, coffee, shopping, or a more
                local-feeling downtown stop before heading back toward Central.
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
                  Visit Bathhouse Row
                </Link>

                <Link
                  href="/hot-springs-ar-restaurants"
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                  style={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Find Restaurants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocalSpotCTA
        title="Know another Ouachita Avenue spot visitors should notice?"
        text="If there’s a shop, restaurant, coffee stop, event, or small local place around Ouachita Avenue that belongs on this guide, send it in so we can keep building it from real local suggestions."
      />
    </main>
  );
}