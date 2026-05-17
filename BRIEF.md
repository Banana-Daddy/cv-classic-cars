# Coachella Valley Classic Cars — Design Brief

**Mode:** PRO-MAX · **Source:** cvclassiccars.com · **Directions:** 2 + selector · **Date:** 2026-05-16

## Brand Synopsis

Coachella Valley Classic Cars is a small, hands-on classic-car rental house in the Palm Springs desert, run by Joe Rojas (with Bobbi — see ACCURACY.md). It is **not** a dealership: a hand-restored fleet of six vintage icons is delivered *with a driver* to weddings, engagements, photoshoots, editorial, film and corporate events across Palm Springs, the Coachella Valley, Joshua Tree, Twentynine Palms and Yucca Valley. No self-drive — the driver stays with the car, repositioning it as the shot demands.

The real audience for this site isn't casual browsers — it's **producers, creative directors, photographers and planners** scouting a car for a shoot. They judge craft. So both directions are built as portfolio-grade objects: the site itself has to look like something a creative would trust. The original cvclassiccars.com is competent but template-flat, with strong customer love (53 Google reviews, recurring praise for Joe) that the current site barely surfaces. Both mockups put the cars, the real reviews, and the desert front and center.

## Design Decisions

### Direction A — "Golden Hour" (`golden-hour.html`)
- **Mood**: a sun-drenched Palm Springs love letter — warm, nostalgic, the feel of golden-hour film and chrome.
- **Fonts**: **Cormorant** (display serif) + **Manrope** (body) + **Space Grotesk** (mono labels/specs). No Inter/Roboto/Arial.
- **Colors**: Bone `#F4ECE0` (canvas) · Espresso `#211712` (ink/dark sections) · Burnt Terracotta `#C4602A` (CTA/accent) · Desert Teal `#1F6F6B` (secondary accent) · Aged Gold `#C9A14A` (hairlines).
- **Layout**: editorial asymmetric bento — hero car spans a 4-col plate, the rest tile asymmetrically; drop-cap About; magazine rhythm.
- **Signature move**: a 35mm **contact-sheet** strip (sprocket holes, frame numbers, drag-to-scroll) for the shoot gallery, over a crafted SVG golden-hour desert (sun, layered San Jacinto ridgelines, palms — **no cars, no real business depicted**), film-grain overlay, slow Ken Burns, "Shot on location" stamp.
- **Skill backbone (ui-ux-pro-max)**: Editorial Grid/Magazine + Motion-Driven scroll reveals; "Luxury Serif" pairing logic; warm Luxury/Premium palette warmed to the desert.
- **What we killed**: the template hero, the flat identical card grid, the buried reviews, the generic stock feel.

### Direction B — "Studio Noir" (`studio-noir.html`)
- **Mood**: the cars as art objects in a blacked-out sound stage — quiet, confident, a rental-house spec book for serious productions.
- **Fonts**: **Archivo** (heavy display grotesque) + **Space Grotesk** (body/labels). Deliberately a different typographic world from A.
- **Colors**: Void `#0B0B0C` (canvas) · Panel `#161617` · Warm white `#ECEAE6` (text) · Ash `#8A8A86` (muted) · Tungsten Amber `#E0A23C` (the single key-light accent + CTA).
- **Layout**: strict gallery → each car a numbered (01–06) **spec plate** with a camera-style sidebar (year / finish / from-rate); generous negative space.
- **Signature move**: a cursor-tracked radial **key light** that follows the pointer across the page like a roving light catching chrome (auto-drifts on touch; disabled under reduced-motion).
- **Skill backbone (ui-ux-pro-max)**: Portfolio Grid ("neutral, let the work shine") + premium restraint; the skill's primary Archivo + Space Grotesk pairing.
- **What we killed**: the cyberpunk/neon cliché the "dark" search surfaced (explicitly avoided), flat black with no warmth, cramped grids.

### Shared
Mobile-first (375px), Tailwind CDN + vanilla JS, IntersectionObserver reveals gated behind `html.js` (no-JS/iOS = all content visible), `prefers-reduced-motion` honored, crafted CSS/SVG placeholders with `onerror` fallbacks, oversized `bg-clip-text` wordmark footer, Banana Bytes credit footer, full OG/Twitter/favicon share preview.

- **Logos used (Logo Search)**: none — no third-party brand/social logos in the layout (Instagram is a text link). Logo Search not required for these directions.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Sticky nav (both) | Navbar (Dalim) + Mini Navbar | `sticky minimal navbar` | 21st-sources/nav-sticky-transparent.tsx | transparent→solid-on-scroll (shrinks max-w, blur, border); vertical text-swap hover |
| Fleet grid (Golden Hour) | Features 11 (tailark) | `product showcase card grid` | 21st-sources/fleet-bento-grid.tsx | asymmetric bento spans, corner-only radius, radial fade-mask over images, inset chrome |
| Testimonials (both) | Testimonials (Tailark) + pull-quote | `pull quote testimonial` | 21st-sources/testimonial-pullquote.tsx | A: oversized left-rule pull-quote; B: asymmetric bento quote grid |
| Footer (both) | Modem Animated Footer | `oversized typographic footer` | 21st-sources/footer-oversized-wordmark.tsx | giant `bg-clip-text` gradient wordmark bleeding off the base, thin gradient hairline |

## Content Inventory
- **Images**: hotlinked from cvclassiccars.com WordPress CDN as placeholders (Thunderbird, DeVille, MGA, VW Bus, XLR, BMW featured thumbs + DSC_* shoot frames). Low-res/cropped — **pending Zack's high-res Instagram drops** per the agreed plan. All have `onerror` → branded placeholder.
- **OG/favicon source**: real brand photo `IMG_20210422_010149_223-scaled.jpg` (wedding couple + white MG MGA + Palm Springs windmills + San Jacinto, golden hour) downloaded locally and cropped 1200×630 with `sips`. Favicon from the site logo PNG.
- **Key copy**: tagline "Classic Cars for Your Special Moments"; pricing card; 6 verbatim car descriptions; How-It-Works steps — all from the source site.
- **Reviews**: 6–7 verbatim Google reviews w/ real names (Lio Botello, Sara Giammanco, Evelyn Flores, Kinsey Whidby, Sarah Hayden, James Rodriguez, Priscilla Bell) from /stories/.
- **Links preserved**: tel/sms 760-282-4251, contact@cvclassiccars.com, wa.link/a95jyf, instagram.com/cvclassiccars, ashleylaprade.com feature.

## Share Preview
- **OG image source**: real brand photography — wedding couple beside the white 1959 MG MGA, Palm Springs wind farm + San Jacinto behind, golden hour. Hotlinked from the site's CDN, downloaded, cropped 1200×630 @ q86 (~237 KB). Used for `og.jpg` (Golden Hour + selector) and `og-noir.jpg` (Studio Noir — same strong real photo).
- **OG title**: "Coachella Valley Classic Cars — Classic cars for your special moments" (Golden Hour / selector); "— A rental house of restored icons" (Studio Noir).
- **OG description**: "A restored fleet of vintage icons for weddings, photoshoots & film across Palm Springs and the Coachella Valley. Delivered with a driver."
- **Favicon source**: cvclassiccars.com logo PNG (favicon.png as-is; favicon-512.png padded square white).
- **Theme color**: `#F4ECE0` (Golden Hour), `#0B0B0C` (Studio Noir), `#161310` (selector).
- **Sub-pages with their own OG**: golden-hour.html and studio-noir.html each have full OG/Twitter/canonical blocks.

## Image Generation Prompts (optional upgrade — atmospheric only, never the cars/business)

`XAI_API_KEY` / `GEMINI_API_KEY` were unset, and atmospheric backgrounds were hand-built as crisp SVG/CSS (sharper than raster for this design-literate audience, zero cost, no build block). If Zack wants richer raster textures later, set a key and use these Grok-Imagine prompts (per accuracy rules: **no cars, no real business, atmospheric filler only**):

### Image 1 — Golden-hour desert wash (Golden Hour hero, optional raster swap)
- **Slot**: hero background behind the headline
- **Aspect ratio**: 16:9
- **Prompt**: "Wide cinematic photograph of the empty Coachella Valley desert at golden hour, hazy San Jacinto mountains layered in atmospheric perspective, a few distant wind turbines, dry brush and sand in soft focus, warm amber and dusty terracotta light, low sun flare, 35mm film grain, no people, no vehicles."
- **Why**: optional richer alternative to the crafted SVG sky.
- **Verified facts**: Palm Springs sits below San Jacinto with the iconic San Gorgonio Pass wind farm — confirmed from the brand's own MGA photo.
- **Status**: SVG shipped; raster optional.

### Image 2 — Sound-stage texture (Studio Noir section dividers, optional)
- **Slot**: subtle texture behind dark sections
- **Aspect ratio**: 21:9
- **Prompt**: "Abstract near-black studio sweep, a single warm tungsten key light grazing seamless paper, deep falloff to pure black, faint dust in the beam, cinematic, no objects, no text."
- **Why**: deepens the sound-stage metaphor under content.
- **Status**: CSS gradient shipped; raster optional.

## Suggested Next Mockups
- Per-car detail pages (one cinematic page each: gallery, spec, availability, "best for", inquiry).
- A real availability/inquiry flow (date + car + use-case + location → email/WhatsApp prefilled).
- A "For Productions" page — call sheets, insurance/COI note, driver logistics, day-rate blocks (speaks directly to the producer audience).
- An editable testimonials feed pulling live from the Google Business profile.
- A location-scout map of where the fleet shoots (Palm Springs landmarks, windmills, Joshua Tree).

## Production Notes
Build this in **Astro or Next.js** (static, image-optimized) — the fleet maps cleanly to a content collection; the 21st-sources/ React components drop straight into a Next build (HANDOFF). Replace hotlinked CDN thumbnails with Joe's high-res Instagram/originals, add real OG per car, wire the inquiry form to email + WhatsApp. Hosting: GitHub Pages for the mockup; if it goes production for the client, a private repo + the standard Banana-Bytes deploy path. Effort: ~1 focused day for a polished static build once real images + the inquiry endpoint are in hand.

## Build Timing
| Phase | Duration (approx) |
|---|---|
| READ (site + 12 page/research fetches) | ~5 min |
| Deep research (background agent) | ~4 min (parallel) |
| DIRECTION (ui-ux-pro-max + 21st.dev ×5) | ~6 min |
| BUILD (2 directions + selector + OG) | ~12 min |
| VERIFY (preview, contrast + iOS + scroll fixes) | ~8 min |
| BRIEF / ACCURACY / PUBLISH / DELIVER | ~6 min |
| **Total: prompt → live link** | **~40 min** |
