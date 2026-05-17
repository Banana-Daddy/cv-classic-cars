# Accuracy Review — Coachella Valley Classic Cars

Source of truth: **cvclassiccars.com** (+ sub-pages). Secondary: DriveShare host profile (Joe Rojas, collection #114538), the site's own Stories page (Trustindex Google-review embed), Ashley LaPrade photographer blog. Review date: 2026-05-16.

---

## ✅ Verified (confirmed against the source site / a named third-party source)

- **Business name**: Coachella Valley Classic Cars — ✓ cvclassiccars.com
- **Tagline**: "Classic Cars for Your Special Moments" — ✓ (used verbatim)
- **Owner**: Joe Rojas — ✓ DriveShare host collection #114538 (ties Joe → the business)
- **Model**: cars delivered **with a driver**; driver stays with the vehicle; can be repositioned multiple times; limited short-distance driving for photo/video; **no self-drive** — ✓ /about/ + How It Works
- **Pricing**: $300 first hour · $250 second hour · $1,500 full day (up to 8 hrs) · discounts on 3+ hrs · "pricing may vary for areas outside the Coachella Valley" — ✓ every car page
- **BMW 640i**: 20% discount December & January — ✓ /bmw-640i/
- **Service area**: Palm Springs, Coachella Valley, Joshua Tree, Twentynine Palms, Yucca Valley — ✓
- **Contact**: 760-282-4251 (call/text) · contact@cvclassiccars.com · WhatsApp wa.link/a95jyf · Instagram @cvclassiccars — ✓
- **Fleet (6)** — names/finishes verbatim from each car page:
  - Ford Thunderbird — "Corinthian White Paint and Blood Red interior… Less than 10 thousand of these cars were made" ✓ (year **1962** per DriveShare — see Flagged)
  - 1968 Cadillac DeVille Convertible — "striking red exterior, and beautiful deep red interior" ✓
  - 1959 MG MGA — "brilliant white exterior with a red interior… no seatbelts" ✓
  - 1967 Volkswagen Bus — "German-built and top of the line… picture-perfect" ✓ (no colour stated — none asserted in build)
  - 2007 Cadillac XLR — "newest addition… ready to make her first debut" ✓
  - BMW 640i — "a beautiful gray with stunning black interior" ✓ (no year stated — none asserted)
- **Testimonials**: all six quotes used are **verbatim** from the reviews republished on cvclassiccars.com/stories/ (Trustindex Google embed). Reviewer names as published: Lio Botello, Sara Giammanco, Evelyn Flores, Kinsey Whidby, Sarah Hayden, James Rodriguez (+ Priscilla Bell on Golden Hour). Attributed generically as "Google review."
- **Review count "53 Google reviews"**: ✓ that is the count the Trustindex widget displays on /stories/.
- **Featured credit**: "Thunderbird in Ashley LaPrade's Mid-Century Modern Palm Springs engagement series" — ✓ ashleylaprade.com/palm-springs-engagement-photos/ (states: "Coachella Valley Classic Cars also provided the stunning classic Thunderbird for the session!").

---

## ⚠️ Flagged for Zack / Joe — confirm before this goes to the client

1. **Joe & Bobbi as a married couple / "the couple."** The husband-and-wife framing is **inferred**, not stated by the business. It rests on two verbatim customer reviews: Evelyn Flores ("Thank you Joe **and Bobbi**…") and Tina Sannicolas ("Always a **wonderful couple** to work with"). The About copy says "Joe and Bobbi run it" and quotes the customer word "couple" — it does **not** assert they are married. **Confirm with Joe**: is Bobbi his wife, is she named publicly, is her surname Rojas? Copy can be tightened either way.
2. **No founding year is stated anywhere on the build.** "Established 2014" surfaced *only* inside AI search summaries — never retrievable verbatim from any live/archived page. It is **omitted by design.** If Joe confirms a real founding year + origin story, it can be added (great About-page material).
3. **The origin / "the spark" story is intentionally absent.** Nothing about how/why Joe & Bobbi started exists publicly. The About sections are written from verifiable facts only (they restore the cars, deliver with a driver, Palm Springs). Real backstory from Joe would strengthen this considerably.
4. **Thunderbird year = 1962.** The cvclassiccars.com car page does **not** state a year; DriveShare lists Joe's as a "1962 Ford Thunderbird." Build shows "1962" on that basis. Confirm the exact year (the page's "2-seater or 4-seater option" copy is unusual for a '62 — Joe should verify).
5. **Named music-video / film / commercial credits: none used.** The site markets "music videos, movies" but no specific production could be verified anywhere. The build keeps these **generic** (marquee labels + a styled gallery), and uses only the one verifiable credit (Ashley LaPrade). If Joe supplies real named credits, a "Featured in" section is ready for them.
6. **DeVille colour.** Site says **red**; one customer (Evelyn Flores) calls it a "pink DeVille." Build follows the site ("red"). Worth a one-line confirm — some DeVilles read pink in golden light.
7. **Star ratings.** The Trustindex embed presents these as 5-star Google reviews and shows "53 Google reviews," but individual per-review star values/dates are not exposed. Build shows "5.0 · 53 Google reviews" with ★★★★★ — accurate to how the source presents it, but not an independently audited average. Yelp also exists but was inaccessible to automated tools.

---

## 🔧 Fixed during review (build/QA)

- **Hero contrast (Golden Hour)**: cream headline was washing out over the bright SVG sun. Raised + dimmed the sun, strengthened the bottom scrim, added a text-shadow. Headline now passes legibility at desktop + 375px.
- **iOS-safe reveal**: scroll-reveal hidden state was JS-independent (content could stay invisible if IO/JS failed). Re-gated behind `html.js`; hero copy moved to a guaranteed CSS load animation. No-JS / reduced-motion now renders all content by default (per CLAUDE.md iOS rule).
- **Scroll-container bug**: `overflow-x:hidden` on `<body>` made body the scroll container, so the sticky-nav `window.scrollY` listener never fired. Switched to `overflow-x:clip` (no scroll container) on both directions — nav now solidifies on scroll.
- **Hero kicker copy**: replaced the throwaway "Est. desert" line with "Palm Springs · Coachella Valley · Delivered with a driver" (factual).
- **Car images**: car detail pages lazy-load images that WebFetch can't see, so hero/fleet photos are hotlinked from the WordPress CDN (some are low-res/cropped thumbnails). Every `<img>` has an `onerror` → branded CSS placeholder so nothing breaks. **These are placeholders pending Zack's high-res Instagram drops** (per the agreed plan) — not a defect, an upgrade path.

---

## Not used (deliberately excluded)

- TripAdvisor "Palm Springs Classic cars" listing — **misattributed** (its only review is about Thrifty airport rental). Excluded.
- "Established 2014" / "founded on the principals that these classic cars should be seen and enjoyed" — AI-summary-only, never sourced. Excluded.
- Any specific film/music-video production names — none verifiable. Excluded.
