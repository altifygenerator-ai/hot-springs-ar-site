"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { getSearchResults } from "@/data/searchIndex";

export default function HeaderSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const trimmedQuery = query.trim();
  const results = useMemo(
    () => (trimmedQuery.length >= 2 ? getSearchResults(trimmedQuery, 7) : []),
    [trimmedQuery],
  );

  const showResults = isFocused && trimmedQuery.length >= 2;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!trimmedQuery) {
      return;
    }

    setIsFocused(false);
    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  }

  return (
    <div className="header-search-row">
      <div className="container header-search-container">
        <form className="header-search-form" onSubmit={handleSubmit} role="search">
          <label className="sr-only" htmlFor="site-search-input">
            Search Hot Springs Arkansas Guide
          </label>
          <input
            id="site-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => window.setTimeout(() => setIsFocused(false), 150)}
            placeholder="Search Hot Springs guides, restaurants, cabins..."
            aria-label="Search Hot Springs Arkansas Guide"
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>

        {showResults && (
          <div className="header-search-results" role="listbox">
            {results.length > 0 ? (
              <>
                {results.map((result) => (
                  <Link
                    key={`${result.title}-${result.href}`}
                    href={result.href}
                    className="header-search-result"
                    onClick={() => setIsFocused(false)}
                  >
                    <span>{result.category}</span>
                    <strong>{result.title}</strong>
                    <small>{result.description}</small>
                  </Link>
                ))}

                <Link
                  href={`/search?q=${encodeURIComponent(trimmedQuery)}`}
                  className="header-search-all"
                  onClick={() => setIsFocused(false)}
                >
                  View all results for “{trimmedQuery}” →
                </Link>
              </>
            ) : (
              <div className="header-search-empty">
                <strong>No quick matches yet.</strong>
                <span>Press Search to see the full guide results.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
