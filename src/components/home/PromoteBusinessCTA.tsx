import Link from "next/link";

export default function PromoteBusinessCTA() {
  return (
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

          <div
            className="absolute bottom-[-160px] left-[-120px] h-[320px] w-[320px] rounded-full"
            style={{ background: "rgba(155,95,45,0.35)" }}
          />

          <div className="relative z-10 max-w-4xl">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              For Local Businesses
            </p>

            <h2
              className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
              style={{ color: "#ffffff" }}
            >
              Get seen by people planning a Hot Springs trip.
            </h2>

            <p
              className="mt-5 max-w-3xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.86)" }}
            >
              Have a restaurant, cabin, hotel, shop, attraction, spa, guide
              service, or local business in the Hot Springs area? Get listed
              where visitors are already looking for places to eat, stay,
              explore, and spend money locally.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full px-6 py-3 text-sm font-bold shadow-md transition hover:opacity-90"
                style={{
                  background: "#ffffff",
                  color: "var(--green)",
                }}
              >
                Get Listed
              </Link>

              <Link
                href="/contact"
                className="inline-flex rounded-full border px-6 py-3 text-sm font-bold transition hover:opacity-90"
                style={{
                  borderColor: "rgba(255,255,255,0.65)",
                  color: "#ffffff",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Ask About Featured Placement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}