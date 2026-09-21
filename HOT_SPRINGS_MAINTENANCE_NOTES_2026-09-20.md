# Hot Springs maintenance pass — 2026-09-20

Drop-in overlay for `altifygenerator-ai/hot-springs-ar-site` (`master`).

## Changes
- Force the homepage dynamic so event previews cannot freeze stale event data.
- Add `noStore()` to event reads.
- Remove `/search` from the sitemap and add `noindex, follow` metadata to the search page.
- Block `/admin/`, `/login`, and `/api/` in robots.
- Replace dynamic `new Date()` sitemap timestamps with a stable content review date.
- Exclude expired events from the event sitemap while retaining their public URLs.
- Reframe the 2026 Fourth of July page as an archive and change event schema to `EventCompleted`.
- Reduce the July archive sitemap frequency/priority.
- Fix the Hometown Web Services footer URL from `.cc` to `.com`.
- Standardize sister-site URLs on `www`.
