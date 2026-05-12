const destinations = [
  {
    label: "Visit Glenwood",
    href: "https://glenwoodarkansas.org",
  },
  {
    label: "Explore Mount Ida",
    href: "https://mountidaarkansas.org",
  },
  {
    label: "Explore Amity",
    href: "https://amityarkansas.org",
  },
];

export default function NearbyDestinations() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="section-heading">
          <h2>Explore Nearby Arkansas Towns</h2>
          <p>
            Hot Springs is a strong base for visiting nearby lake towns, small
            communities, river areas, and quieter Arkansas stops.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {destinations.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-5 py-3 rounded-md font-medium shadow hover:opacity-90 transition"
            >
              {item.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}