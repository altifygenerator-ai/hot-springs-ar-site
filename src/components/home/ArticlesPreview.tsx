import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    label: "Featured article",
    title: "Bathhouse Row in Hot Springs: Why This Old Downtown Strip Still Matters",
    text: "A deeper look at the thermal water, historic bathhouses, preservation story, and why Bathhouse Row is still the heart of Hot Springs.",
    href: "/articles/bathhouse-row",
    image: "/images/businesses/bathhouse-row.webp",
  },
  {
    label: "History article",
    title: "History of Hot Springs Gambling Museum",
    text: "Coming soon: a look at Hot Springs’ gambling history, downtown stories, and the museum preserving one of the city’s wilder chapters.",
    href: "/articles",
    image: "/images/hero/hot-springs-history.jpg",
  },
  {
    label: "Day trip idea",
    title: "DeGray Lake Resort State Park",
    text: "Coming soon: a nearby lake and state park guide for visitors wanting an easy outdoor day trip from Hot Springs.",
    href: "/articles",
    image: "/images/businesses/lake-hamilton2.jpg",
  },
];

export default function ArticlesPreview() {
  return (
    <section className="section bg-white/35">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Hot Springs articles
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Local stories, history, and deeper Hot Springs guides.
            </h2>

            <p className="mt-4 text-lg leading-8 text-[color:var(--color-muted)]">
              Go beyond quick lists with articles about the places, history,
              lakes, downtown stories, and local details that make Hot Springs
              worth slowing down for.
            </p>
          </div>

          <Link href="/articles" className="btn-primary">
            View All Articles
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="group overflow-hidden rounded-[1.6rem] border border-black/10 bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {article.label}
                </p>

                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {article.title}
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {article.text}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}