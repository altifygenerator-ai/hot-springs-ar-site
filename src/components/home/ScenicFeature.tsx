import Link from "next/link";

export default function ScenicFeature() {
  return (
    <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
      <img
        src="/images/hero/lake-hamilton.jpg"
        alt="Hot Springs Arkansas scenery"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      <div className="relative z-10 container pb-16">
      <div className="max-w-3xl rounded-2xl bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
  <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] !text-white/80">
    Bathhouses, Mountains & Lake Days
  </p>

  <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
    Hot Springs is more than one stop.
  </h2>

  <p className="mt-4 max-w-2xl text-lg leading-relaxed !text-white/90">
    Spend the morning walking Bathhouse Row, hike above town in the
    afternoon, grab dinner downtown, or head toward Lake Hamilton for a
    slower evening by the water.
  </p>

  <Link
    href="/explore"
    className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:bg-white/90 hover:!text-black"
  >
    Explore Hot Springs
  </Link>
</div>
      </div>
    </section>
  );
}