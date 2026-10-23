const loneCedarStays = [
  {
    name: "Lone Cedar Cabin",
    slug: "lone-cedar-cabin-at-lone-cedar-cabins",
    type: "Cabin · Sleeps 4",
    description: "A hand-built rustic cabin with a loft bedroom, jetted tub, full kitchen, covered porch and outdoor shower.",
  },
  {
    name: "Oak Ridge Cabin",
    slug: "lone-cedar-cabins-oak-ridge-cabin",
    type: "Cabin · Bismarck",
    description: "A quiet mountain-view cabin on Lone Cedar's wooded property, close to DeGray Lake and an easy trip from Hot Springs.",
  },
  {
    name: "Pine Cone Vintage RV",
    slug: "pine-cone-vintage-rv-at-lone-cedar-cabins",
    type: "Vintage RV · Glamping",
    description: "A vintage RV retreat for guests looking for a smaller, distinctive outdoor stay near DeGray Lake.",
  },
];

export default function FindAPlaceLoneCedarStays() {
  return (
    <section className="section bg-[color:var(--surface)]" aria-labelledby="fap-lone-cedar-heading">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--accent-dark)" }}>Available to book on Find A Place</p>
          <h2 id="fap-lone-cedar-heading" className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Lone Cedar Cabins near DeGray Lake
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            Lone Cedar has three published stays in Bismarck, between DeGray Lake and the Hot Springs area.
            See each property's photos, rules, and current dates on Find A Place Booking.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loneCedarStays.map((stay) => {
            const url = "https://www.findaplacebooking.com/stays/" + encodeURIComponent(stay.slug);
            const image = "https://www.findaplacebooking.com/api/public/stay-cover/" + encodeURIComponent(stay.slug);
            return (
              <article key={stay.slug} className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-[color:var(--surface-strong)]" style={{ borderColor: "var(--border)" }}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="block h-52 overflow-hidden bg-stone-200" aria-label={"View " + stay.name + " on Find A Place"}>
                  <img src={image} alt={stay.name + " at Lone Cedar Cabins"} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent-dark)" }}>{stay.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{stay.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6" style={{ color: "var(--muted)" }}>{stay.description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ background: "var(--green)" }}
                  >
                    View stay &amp; check dates ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-xs" style={{ color: "var(--muted)" }}>
          Bookings, availability, and final prices are handled by Find A Place Booking. Local guide listings are independent editorial recommendations.
        </p>
      </div>
    </section>
  );
}
