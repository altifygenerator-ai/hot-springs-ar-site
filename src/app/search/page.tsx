import type { Metadata } from "next";
import Link from "next/link";
import { getSearchResults, searchIndex } from "@/data/searchIndex";

export const metadata: Metadata = {
  title: "Search the Hot Springs Arkansas Guide",
  description:
    "Search Hot Springs Arkansas Guide pages for things to do, restaurants, hotels, cabins, Bathhouse Row, Lake Hamilton, events, local businesses, shopping, spas, and visitor planning.",
  alternates: {
    canonical: "/search",
  },
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q || "").trim();
  const results = getSearchResults(query, 30);

  return (
    <main>
      <section className="search-hero section-soft-divider">
        <div className="container">
          <p className="hero-eyebrow">Search The Guide</p>
          <h1>Find Hot Springs guides, places, and trip ideas.</h1>
          <p className="search-hero-copy">
            Search for Bathhouse Row, restaurants, Lake Hamilton, cabins,
            hotels, events, spas, shopping, family-friendly stops, local
            businesses, and other Hot Springs planning pages.
          </p>

          <form action="/search" className="search-page-form">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search Hot Springs Arkansas Guide"
              aria-label="Search Hot Springs Arkansas Guide"
            />
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="search-results-heading">
            <div>
              <p className="hero-eyebrow">Results</p>
              <h2>{query ? `Results for “${query}”` : "Popular guide pages"}</h2>
            </div>

            <Link href="/things-to-do-in-hot-springs-ar" className="btn-secondary">
              Browse Things To Do
            </Link>
          </div>

          {results.length > 0 ? (
            <div className="search-results-grid">
              {results.map((result) => (
                <Link
                  key={`${result.title}-${result.href}`}
                  href={result.href}
                  className="search-result-card"
                >
                  <p className="hero-eyebrow">{result.category}</p>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                  <span>Open result →</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-no-results">
              <h3>No results found.</h3>
              <p>
                Try searching for something broader like restaurants,
                Bathhouse Row, Lake Hamilton, cabins, hotels, spas, shopping,
                or events.
              </p>
              <Link href="/explore" className="btn-primary">
                Explore Hot Springs
              </Link>
            </div>
          )}

          <p className="search-index-note">
            Searching {searchIndex.length} guide pages, local business entries,
            local spots, and visitor planning notes.
          </p>
        </div>
      </section>
    </main>
  );
}
