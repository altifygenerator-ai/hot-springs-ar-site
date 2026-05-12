import Link from "next/link";

const things = [
  "Walk Bathhouse Row",
  "Visit Hot Springs National Park",
  "Spend time on Lake Hamilton",
  "Explore Garvan Woodland Gardens",
  "Catch racing or events at Oaklawn",
  "Hike scenic mountain trails",
];

export default function ThingsToDoPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-3 text-[color:var(--color-accent)]">
              Things To Do
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">
              Build a Hot Springs trip around more than one attraction.
            </h2>

            <p className="text-[color:var(--color-muted)] leading-relaxed">
              The best Hot Springs trips usually mix a few different things:
              downtown history, bathhouses, local food, lake time, hiking,
              museums, gardens, and a place to stay that fits the kind of trip
              you’re taking.
            </p>

            <Link
              href="/things-to-do-in-hot-springs-ar"
              className="btn mt-6 inline-flex"
            >
              View Things To Do
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {things.map((item) => (
              <div key={item} className="card p-5">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}