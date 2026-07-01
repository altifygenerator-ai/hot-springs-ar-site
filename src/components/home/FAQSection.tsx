import Link from "next/link";

const faqs = [
  {
    question: "What is Hot Springs, Arkansas known for?",
    answer:
      "Hot Springs is known for Bathhouse Row, Hot Springs National Park, natural thermal water, Oaklawn, Lake Hamilton, historic downtown, spas, hiking trails, and classic Arkansas getaway trips.",
    links: [
      { href: "/bathhouse-row", label: "Bathhouse Row" },
      { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
    ],
  },
  {
    question: "Is Hot Springs worth visiting?",
    answer:
      "Yes. Hot Springs is one of Arkansas’ easiest trips to recommend because it puts history, outdoor recreation, restaurants, lake access, spas, hotels, cabins, and family-friendly attractions close together.",
    links: [
      { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
      { href: "/hot-springs-family-friendly", label: "Family Finds" },
    ],
  },
  {
    question: "What are the best things to do in Hot Springs?",
    answer:
      "Popular things to do include walking Bathhouse Row, visiting Hot Springs National Park, exploring Garvan Woodland Gardens, spending time on Lake Hamilton, visiting Oaklawn, hiking trails, eating downtown, and checking local shops.",
    links: [
      { href: "/lake-hamilton", label: "Lake Hamilton" },
      { href: "/hot-springs-local-spots", label: "Local Spots" },
    ],
  },
  {
    question: "Where should I stay in Hot Springs?",
    answer:
      "Visitors often stay downtown near Bathhouse Row, near Oaklawn, around Lake Hamilton, or in cabins and vacation rentals outside the busiest parts of town. The best area depends on whether you want walkability, lake views, racing, or quiet.",
    links: [
      { href: "/hot-springs-ar-hotels", label: "Hotels" },
      { href: "/hot-springs-ar-cabins", label: "Cabins" },
    ],
  },
];

const planningLinks = [
  { href: "/events", label: "Events" },
  { href: "/this-weekend", label: "This Weekend" },
  { href: "/free-things-to-do-hot-springs", label: "Free Things To Do" },
  { href: "/hot-springs-antique-thrift-flea-markets", label: "Shopping Guide" },
];

export default function FAQSection() {
  return (
    <section className="section section-warm-wash">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div
            className="rounded-[2rem] border bg-[color:var(--surface)] p-7 shadow-sm lg:sticky lg:top-28"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-dark)" }}
            >
              Quick Planning Help
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Hot Springs travel questions, answered plainly.
            </h2>

            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              If you are trying to figure out whether Hot Springs is a good fit
              for your weekend, start here. These answers point you toward the
              main parts of town, the lake, the national park, restaurants,
              places to stay, and a few guides that make planning easier.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {planningLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition hover:-translate-y-1 hover:shadow-md"
                  style={{
                    borderColor: "rgba(155, 95, 45, 0.18)",
                    background: "rgba(155, 95, 45, 0.08)",
                    color: "var(--accent-dark)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border bg-[color:var(--surface)] p-6 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black"
                    style={{
                      background: "rgba(35, 56, 47, 0.08)",
                      color: "var(--green)",
                    }}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-semibold leading-tight"
                      style={{ color: "var(--green)" }}
                    >
                      {item.question}
                    </h3>

                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {item.answer}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="rounded-full px-3 py-1 text-xs font-bold transition hover:opacity-80"
                          style={{
                            background: "rgba(155, 95, 45, 0.1)",
                            color: "var(--accent-dark)",
                          }}
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="rounded-[1.5rem] border p-6"
              style={{
                borderColor: "rgba(35, 56, 47, 0.16)",
                background:
                  "linear-gradient(135deg, rgba(35,56,47,0.08), rgba(155,95,45,0.08))",
              }}
            >
              <h3
                className="text-2xl font-semibold"
                style={{ color: "var(--green)" }}
              >
                Still deciding what kind of trip this is?
              </h3>

              <p
                className="mt-3 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                For a first visit, start with Bathhouse Row and downtown, then
                add either Lake Hamilton, Oaklawn, a cabin stay, hiking, or a
                local food/shopping stop depending on the season and who you are
                traveling with.
              </p>

              <Link
                href="/things-to-do-in-hot-springs-ar"
                className="mt-5 inline-flex rounded-full px-4 py-2 text-sm font-bold"
                style={{
                  background: "var(--green)",
                  color: "#fff",
                }}
              >
                Start with Things To Do →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}