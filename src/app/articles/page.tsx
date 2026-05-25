import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot Springs Articles & Local Guides",
  description:
    "Read Hot Springs, Arkansas articles, history features, local travel guides, outdoor day trip ideas, and visitor-friendly stories from the Hot Springs Arkansas guide.",
  alternates: {
    canonical: "/articles",
  },
};

const featuredArticle = {
  title: "Bathhouse Row in Hot Springs: Why This Old Downtown Strip Still Matters",
  label: "Featured history article",
  description:
    "A deeper look at the thermal water, historic bathhouses, preservation story, and why Bathhouse Row is still the heart of Hot Springs.",
  href: "/articles/bathhouse-row",
  image: "/images/businesses/bathhouse-row.webp",
};

const articles = [
  {
    title: "Bathhouse Row in Hot Springs: Why This Old Downtown Strip Still Matters",
    label: "History & culture",
    description:
      "The story of the water, the bathhouses, downtown Hot Springs, and why this historic strip still carries the city’s identity.",
    href: "/articles/bathhouse-row",
    image: "/images/businesses/bathhouse-row.webp",
  },
  {
    title: "History of Hot Springs Gambling Museum",
    label: "Coming soon",
    description:
      "A future article on Hot Springs’ gambling, mob-era stories, downtown history, and the museum that helps preserve that wilder side of town.",
    href: "/articles",
    image: "/images/hero/hot-springs-history.jpg",
  },
  {
    title: "DeGray Lake Resort State Park Day Trip",
    label: "Coming soon",
    description:
      "A future nearby trip guide for visitors wanting lake views, state park scenery, resort-style stops, and an easy drive from Hot Springs.",
    href: "/articles",
    image: "/images/businesses/lake-hamilton2.jpg",
  },
];

export default function ArticlesPage() {
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src="/images/hero/hot-springs-history.jpg"
          alt="Historic Hot Springs Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

        <div className="container relative z-10 flex min-h-[72vh] items-end pb-14 pt-28">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/65">
              Hot Springs stories & guides
            </p>

            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              Articles About Hot Springs, Arkansas
            </h1>

            <p className="max-w-2xl text-lg leading-8 !text-white/80">
              Local history, practical visitor guides, outdoor day trips, and
              deeper stories about the places that make Hot Springs more than
              just another weekend stop.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-black/10 shadow-lg">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                {featuredArticle.label}
              </p>

              <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-5xl">
                {featuredArticle.title}
              </h2>

              <p className="mb-7 text-lg leading-8 text-[color:var(--color-muted)]">
                {featuredArticle.description}
              </p>

              <Link href={featuredArticle.href} className="btn-primary">
                Read the Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Recent and upcoming articles
            </p>

            <h2 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
              More Hot Springs stories are being added.
            </h2>

            <p className="text-lg leading-8 text-[color:var(--color-muted)]">
              This section will grow into a home for Hot Springs history pieces,
              lake guides, downtown features, family-friendly ideas, and local
              stories worth keeping in front of visitors.
            </p>
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
                    {article.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                    View article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}