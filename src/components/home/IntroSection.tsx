import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Hot Springs, Arkansas Travel Guide
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Plan a Hot Springs trip that actually feels worth the drive.
            </h2>
          </div>

          <div className="space-y-5">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              Hot Springs is one of Arkansas’ most well-known getaway towns,
              with <Link href="/bathhouse-row" className="font-semibold underline underline-offset-4" style={{ color: "var(--accent-dark)" }}>
  historic bathhouses
</Link>, mountain views, lake days, local
              restaurants, spas, shops, trails, and plenty of places to stay.
              Whether you’re planning a weekend trip, family vacation, romantic
              getaway, or just looking for a few good stops while you’re in town,
              this guide helps you find what’s actually worth knowing about.
            </p>

            <p
              className="leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Start with{" "}
              <Link
                href="/things-to-do-in-hot-springs-ar"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                things to do
              </Link>
              , compare{" "}
              <Link
                href="/hot-springs-ar-restaurants"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                restaurants
              </Link>
              , find{" "}
              <Link
                href="/hot-springs-ar-hotels"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                hotels
              </Link>{" "}
              or{" "}
              <Link
                href="/hot-springs-ar-cabins"
                className="font-semibold underline underline-offset-4"
                style={{ color: "var(--accent-dark)" }}
              >
                cabins
              </Link>
              , then build the kind of Hot Springs trip that fits how you
              travel.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div
            className="rounded-2xl border bg-[color:var(--surface)] p-5 shadow-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: "var(--accent-dark)" }}
            >
              Historic
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Bathhouse Row</h3>
            <p className="mt-2 text-sm">
              Walk the classic downtown area that made Hot Springs famous.
            </p>
          </div>

          <div
            className="rounded-2xl border bg-[color:var(--surface)] p-5 shadow-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: "var(--accent-dark)" }}
            >
              Outdoors
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Lakes & Trails</h3>
            <p className="mt-2 text-sm">
              Mix Lake Hamilton, mountain views, hiking, and scenic drives.
            </p>
          </div>

          <div
            className="rounded-2xl border bg-[color:var(--surface)] p-5 shadow-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: "var(--accent-dark)" }}
            >
              Trip Planning
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Eat, Stay, Explore</h3>
            <p className="mt-2 text-sm">
              Find restaurants, hotels, cabins, attractions, and local stops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}