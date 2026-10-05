# Hot Springs visitor optimization — 2026-10-05

Source: dac3fd0. Ten existing pages receive shorter intent-led titles/descriptions: homepage, lake dining, shopping hub, thrift, antiques, flea markets, boutiques, restaurants, shopping near Bathhouse Row. Bathhouse Row is also included. Shopping page H1s now identify the subject directly. URLs, canonicals and source data remain unchanged.

Native secondary buttons provide dining-area and shopping-guide choices plus contextual next steps. Homepage quick links replace an undefined button treatment. An isolated header style bounds the Articles dropdown and makes existing dropdowns usable with keyboard focus. The weekend events jump target now exists even when the event list is empty. Boutique next links remain inside the directory main via a narrow optional content slot; card and tracking behavior is untouched.

Verification:
- `npm run build` and `tsc --noEmit`: pass.
- Full lint: 70 existing findings (2 errors / 68 warnings), matching an untouched dac3fd0 checkout. Errors are existing Date.now calls in spam-protected forms; warnings primarily existing image elements. No new rule findings.
- Production browser QA: 14 routes × 1440, 1280, 768, 360 and 390px = 70 checks. All HTTP 200, no horizontal overflow, missing jump targets or uncaught runtime errors.
- All 45 discovered internal destinations return successfully. Desktop/mobile hero, shopping/dining chooser, next links, listings, footer and mobile menu inspected.
- Existing external River View/CDN assets and local analytics requests can fail in the execution environment. Direct River View website placement and tracking are preserved; no River View Spotlight page/link is added.
- Ignored preview-only environment values and empty event fixtures were used. No live email, submissions or database writes. Confirm populated events, delivery and remote images in an environment-backed preview before release.

Compare subsequent matched 28-day Search Console page/query CTR alongside position and device; the shopping hub remains distinct from its specialist lists. No traffic uplift is claimed before post-release data exists.
