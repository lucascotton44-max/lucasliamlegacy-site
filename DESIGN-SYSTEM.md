# DESIGN-SYSTEM.md — lucasliamlegacy.com

Source of truth for all later-stage work on the Lucas & Liam Legacy Studios site.
Produced by Stage 0 recon (read-only audit). No site code was changed in this stage.

---

## 1. Repo Map

### Stack & deploy
- **Stack:** Pure static HTML + CSS + vanilla JavaScript. No framework, no build tool, no bundler, no package manager, no linter, no test suite.
- **Hosting:** Netlify, publish directory = repo root `/`. No build command.
- **Routing:** Flat files. `index.html` (homepage), `story-packages.html`, `shoreline-run.html`, `404.html`. Removed legacy pages (`proposal.html`, `lucas_liam_funnel.html`, `voices-preview.html`, `/proposal-qa-output/*`) 404 via `_redirects` — those entries must never be removed.
- **Headers:** `_headers` sets a strict CSP (see §2.8) plus HSTS, nosniff, frame-ancestors DENY, etc. Any new third-party script/font/embed requires a matching CSP change or it is silently blocked.
- **SEO plumbing:** `robots.txt` (disallows the removed pages, points at sitemap), `sitemap.xml` (lists `/` and `/story-packages.html` only — `shoreline-run.html` is absent), `googlefaeebe5a48d041ed.html` (Search Console verification).
- **Booking CTA:** every CTA points to `https://cal.com/lucasliamlegacy/discovery-call`. Contact is `mailto:lucasliamlegacystudios@gmail.com`. **There are no forms on the site** (no Netlify Forms markup anywhere), despite the working brief saying otherwise.
- **Git:** single branch `master`; no CI.

### File inventory
| File | Role |
|---|---|
| `index.html` (~2,385 lines) | Homepage — all CSS/JS inline |
| `story-packages.html` (~1,045 lines) | Package comparison / proof page — inline CSS/JS-free except none |
| `shoreline-run.html` (~638 lines) | ACU game promo page — inline CSS + small nav script |
| `404.html` | Not-found page (off-system palette, see §2.2 note) |
| `_headers`, `_redirects`, `robots.txt`, `sitemap.xml` | Netlify/SEO config |
| `codby-chronicles.jpg` (1400×933) | Work tile — Cod B'y Chronicles |
| `landyacht.jpg` (960×682) | Work tile — The Land Yacht |
| `flowedge.jpg` (1536×1024) | Work tile — FlowEdge |
| `lucas_liam_photo.jpg` (729×1024) | Studio portrait |
| `images/shoreline-run-homepage-tile.png` (1672×941) | Work tile — Shoreline Run |
| `favicon.png` (32×32) | Favicon (note: no `<link rel="icon">` tag in any page references it) |
| `CLAUDE.md` | Editing rules — binding on all later stages |

### Commands
- Build/lint/test: **none**. Verify by hand-reading and a local static server (e.g. `python3 -m http.server`).
- Deploy: push to `master` → Netlify.

---

## 2. Design Language

### 2.1 Font families & display-vs-body split
Loaded from Google Fonts (CSP-allowed):
- **Display: `Fraunces`** (variable: optical size 9..144; weights 300/400/500/600/700/900 + italics on home; 300/500/700 + italic 400 on subpages). Used for: headlines, pull quotes, prices, package names, editorial body paragraphs, italic accents. Optical size is set deliberately via `font-variation-settings: "opsz" N` — 144 for display headlines, 72 for mid-size, 36/48 for quotes/ledes, 24 for editorial body.
- **Body: `Inter`** (300–600 home; 300–700 subpages). Used for: UI copy, feature lists, buttons, small descriptive text.
- **Meta: `JetBrains Mono`** (400/500). Used for: eyebrows/section labels, nav links (subpages), meta rows, prices meta, footer bottom — always uppercase with wide tracking.

The signature split: **Fraunces carries emotion and hierarchy (including long-form paragraphs in the Studio section), Inter carries utility, JetBrains Mono carries labels.**

### 2.2 Colour tokens
Defined identically in `index.html`, `story-packages.html`, `shoreline-run.html` `:root`:

| Token | Hex/value | Role |
|---|---|---|
| `--ink` | `#0f1519` | Near-black warm navy — text, dark sections, buttons |
| `--ink-soft` | `#1c252b` | Softer body text on light |
| `--paper` | `#f4efe6` | Warm off-white page background |
| `--paper-warm` | `#ebe4d6` | Alternating warm section background |
| `--paper-dim` | `#e2dac9` | Muted text on dark backgrounds |
| `--ember` | `#b8502e` | **The accent** — rust coral; italics, labels, hovers, rules |
| `--ember-deep` | `#8a3a20` | Deep accent (gradients, dark-bg labels on subpages) |
| `--sea` | `#2d4a52` | Bras d'Or slate — gradient fallbacks |
| `--fog` | `#8a847b` | Warm middle grey — meta text |
| `--line` | `rgba(15,21,25,0.12)` home / `0.14` subpages | Hairline rules |
| `--line-soft` | `rgba(15,21,25,0.06)` (home only) | Softest rule |
| `--line-dark` | `rgba(244,239,230,0.16)` (subpages) | Rules on dark |
| — | `#d37a55` | Eyebrow colour on dark sections (subpages, untokenised) |

**Off-system exception:** `404.html` uses a different palette (`--atlantic #0E2A33`, `--ember #C25A2C`, `--parchment #F2EAD8`, Georgia serif). Pre-dates the current system; do not copy it into new work.

### 2.3 Type scale (as used, per page)

**Homepage (`index.html`):**
| Style | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Hero title | `clamp(3.5rem, 13vw, 12rem)` | 300 | −0.04em | 0.86 |
| Contact title | `clamp(3rem, 8vw, 7rem)` | 300 | −0.035em | 0.88 |
| Section title | `clamp(2.5rem, 6vw, 5rem)` | 300 | −0.025em | 0.95 |
| Music title | `clamp(2.5rem, 5vw, 4rem)` | 300 | −0.025em | 0.95 |
| Testimonial title | `clamp(2rem, 4.5vw, 3.5rem)` | 300 | −0.025em | 1.0 |
| Addons title | `clamp(1.75rem, 3.5vw, 2.75rem)` | 300 | −0.02em | 1.0 |
| Pkg price | 3rem | 300 | −0.03em | 1.0 |
| Footer brand / foot h3 | 2.5rem | 300 | −0.025em | 1.0 |
| Pkg name / addon price / work title max | 2rem | 400/300 | −0.02em | 1.0–1.05 |
| Process step title | 1.75rem | 400 | −0.02em | 1.05 |
| Hero lede / contact body | `clamp(1.125rem, 1.75vw, 1.5rem)` | 400 | — | 1.35–1.45 |
| Testimonial quote | `clamp(1.5rem, 2.75vw, 2.25rem)` italic | 400 | −0.015em | 1.25 |
| Music pullquote | `clamp(1.5rem, 2.5vw, 2rem)` italic | 400 | −0.015em | 1.25 |
| Studio h3 / press year / studio stat dd | 1.5rem | 400 (italic for h3) | — | 1.1 |
| Studio first paragraph | 1.375rem | 400 | — | 1.45 |
| Editorial body (Fraunces) | 1.125rem / 1.0625rem | 400 | — | 1.55–1.6 |
| Press headline / addon name / voice quote | 1.25rem (1.1875–1.25) | 500/400 | −0.015em | 1.2–1.5 |
| UI body (Inter) | 0.9375rem / 0.875rem | 400 | — | 1.45–1.55 |
| Buttons | 0.875rem (pkg CTA 0.8125rem) | 500 | 0.04–0.08em, uppercase | — |
| Nav links | 0.8125rem | 500 | 0.02em | — |
| Mono labels/meta | 0.6875rem | 400/500 | 0.1–0.18em, uppercase | — |
| Smallest mono (popular tag, press year small) | 0.625rem | — | 0.14–0.16em | — |

**Subpages (`story-packages.html`, `shoreline-run.html`):**
| Style | Size | Weight | Line-height |
|---|---|---|---|
| h1 | `clamp(3.2rem, 10vw, 8.4rem)` | 500 | 0.98 |
| h2 | `clamp(2.25rem, 5vw, 4.8rem)` | 500 | 0.98 |
| Package price | `clamp(2rem, 4vw, 3.2rem)` | — | 1.0 |
| h3 | `clamp(1.35rem, 2.4vw, 2rem)` | 500 | 0.98 |
| `.lede` | `clamp(1.08rem, 2vw, 1.35rem)` | — | 1.55 |
| Statement list items | `clamp(1.05rem, 1.6vw, 1.25rem)` | — | — |
| Body | 1rem base, line-height 1.55 | 400 | 1.55 |
| Buttons/nav (mono!) | 0.72–0.76rem | 500 | uppercase, 0.06–0.12em |

**Drift to be aware of (do not "fix" without instruction):** subpages use heavier display weights (500 vs 300), zero letter-spacing on headings, mono-font pill buttons (`border-radius: 999px`) vs the homepage's squared Inter buttons, `--max: 1180px` vs `1440px`, and `--edge` min `1.25rem` vs `1.5rem`. Homepage is the richer, older system; subpages are a simplified derivative.

### 2.4 Spacing scale & section rhythm
- **Edge gutter:** `--edge: clamp(1.5rem, 4vw, 4rem)` (home) / `clamp(1.25rem, 4vw, 4rem)` (subpages).
- **Content max-width:** `--max: 1440px` (home) / `1180px` (subpages) / `820px` (`.wrap--narrow`); text measures capped in `ch` (18ch titles, 36–54ch body).
- **Section padding:** home 8rem vertical (contact 10rem, testimonial 9rem, add-ons 6rem, mobile 6rem); subpages `clamp(4rem, 8vw, 7rem)`.
- **Rhythm:** alternating backgrounds — paper → paper-warm → ink — with hairline `--line` rules as section dividers. Numbered mono section labels (`.section__label`) with a 24px ember dash prefix.
- **Grid gaps:** 1.5rem work grid, 2–3rem stats/press, 5rem two-column feature grids, 0-gap bordered grids (add-ons, press) using shared 1px borders.

### 2.5 Motion patterns
- **Scroll reveal:** `.reveal` → `.is-in` via `IntersectionObserver` (threshold 0.15, rootMargin `0px 0px -80px`), 1s opacity + 24px translateY, delays `.reveal--delay-1/2/3` (0.1/0.2/0.3s). Home page only.
- **Hero entrance:** keyframed `rise` stagger (0.1s → 0.95s delays) on meta, title lines, bottom row.
- **Signature easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` everywhere (reveals, hovers, buttons, image zooms).
- **Marquee:** `.strip__track` infinite 40s linear translateX(−50%) credential strip.
- **Micro:** pulsing ember dot (2.4s), nav shrink on scroll (padding swap at 60px, both pages via inline JS), button `translateY(-2px)` hover + arrow `translateX(4px)`, work image `scale(1.06)` + brightness dim, nav underline width transition, press arrow rotate.
- **Texture:** fixed full-viewport SVG `feTurbulence` grain at 0.035 opacity (multiply on home), on all pages.

### 2.6 Reusable components (with locations)
| Component | Classes | Where |
|---|---|---|
| Buttons (home) | `.btn`, `.btn--primary`, `.btn--ghost`, `.btn__arrow` | `index.html` ~341–382 |
| Buttons (subpages, pill) | `.btn`, `.btn--primary`, `.btn--secondary`, `.nav__cta` | both subpages ~111–148 |
| Fixed nav + hamburger | `.nav`, `.nav__toggle`, `.nav--open`, JS toggle | `index.html` 104–212, 1688–1700, 2338–2365 |
| Sticky nav (no hamburger) | `.nav` | subpages ~71–110 |
| Section wrapper | `.section`, `.section__label`, `.section__title` | `index.html` 422–465 |
| Section wrapper (subpages) | `.section`, `.section--dark`, `.section--warm`, `.wrap`, `.eyebrow` | subpages ~150–186 |
| Work/portfolio tiles | `.work__grid`, `.work__item--lg/md/sm/wide/full/half`, `.work__meta`, `.work__tag` | `index.html` 572–672, markup 1878–1954 |
| Package rows | `.pkg`, `.pkg__num/name/tagline/price/features/cta`, `.pkg__popular` | `index.html` 674–852, markup 1977–2094 |
| Package cards (subpage) | `.package`, `.packages-grid`, `.comparison` table | `story-packages.html` 288–412, markup 738–865 |
| Add-on grid | `.addons__grid`, `.addon`, `.addon--featured` | `index.html` 854–955 |
| Process steps | `.process__steps`, `.process__step` | `index.html` 957–1032; `story-packages.html` `.process-grid`/`.step` |
| Press list | `.press__grid`, `.press__item`, `.press__item--no-link` | `index.html` 1034–1136, markup 2207–2257 |
| Testimonial | `.testimonial`, `.testimonial--warm`, `.testimonial__quote` | `index.html` 1401–1515 |
| Voices cards | `.voices__grid`, `.voice` | `index.html` 1517–1645 |
| Credential marquee | `.strip`, `.strip__track` | `index.html` 391–420 |
| Cards / samples / pills | `.card`, `.sample`, `.press-card`, `.pill`, `.signal`, `.note`, `.link-card` | `story-packages.html` 296–503 |
| Footer | `.foot` (home) / `.footer` (subpages) | `index.html` 1314–1398; subpages |
| YouTube tile pattern | `<a>` → `img.youtube.com/vi/<ID>/maxresdefault.jpg` thumbnail + outbound link, `onerror` gradient fallback | `index.html` 1885–1905 |

**Important:** the site has **no `<iframe>` YouTube embeds**. Video is presented as thumbnail tiles linking out to YouTube. The CSP (`default-src 'self'`, no `frame-src`) would block iframes; `img-src` explicitly allows `img.youtube.com`. Adding real embeds later requires a deliberate `_headers` CSP change (flagged Low-confidence in CLAUDE.md).

### 2.7 OG / metadata pattern
- **`index.html` only:** full set — canonical, description, Google verification, `og:type/site_name/url/title/description/image (+w/h/alt)/locale (en_CA)`, Twitter `summary_large_image` set. All URLs absolute on `https://lucasliamlegacy.com/`.
- **`story-packages.html` / `shoreline-run.html`:** title + description + canonical only. **No OG/Twitter tags.**
- **`404.html`:** `noindex,nofollow`.
- **Defect:** `og:image` / `twitter:image` point at `https://lucasliamlegacy.com/og-image.jpg` — **that file does not exist in the repo**, so social previews are broken site-wide (see §4).

### 2.8 CSP (from `_headers`) — constraints on later stages
`default-src 'self'`; `img-src 'self' https://lucasliamlegacy.com https://img.youtube.com data:`; `style-src 'self' 'unsafe-inline' fonts.googleapis.com`; `font-src 'self' fonts.gstatic.com`; `script-src 'self' 'unsafe-inline'`; `connect-src 'self'`; `form-action 'self'`; `frame-ancestors 'none'`. No `frame-src` / `media-src` → **iframes and externally-hosted video are blocked**; self-hosted `<video>` files would be allowed (`default-src 'self'`).

---

## 3. ASSET MANIFEST

### Land Yacht — status COMPLETE (delivered 2-film campaign; currently mislabelled on site, see §4)
| Item | Status in repo |
|---|---|
| Landscape film 1 — YouTube `8gsKhBnx9Uw` | **Not referenced anywhere in the repo.** Needs to be added in the case-study stage (thumbnail-tile pattern works under current CSP: `img.youtube.com/vi/8gsKhBnx9Uw/maxresdefault.jpg`). |
| Landscape film 2 — YouTube `0avYFzPUT_0` | **Not referenced anywhere in the repo.** Same as above. |
| Vertical edit 1 (IG `DYzQ6jbRCjr` / TikTok `ZSXNxxrkL`) | Not in repo. **[MISSING: self-hostable file or unlisted YouTube for vertical 1]** |
| Vertical edit 2 (IG `DaJPm19PNsy` / TikTok `ZSXNQY86W`) | Not in repo. **[MISSING: self-hostable file or unlisted YouTube for vertical 2]** |
| Hero/poster still | `landyacht.jpg` exists at root (960×682, currently the homepage work tile, `index.html:1921`). Usable as an interim tile but below case-study-hero resolution. **[MISSING: film-still-quality hero image for case study]** |
| Related existing references | Homepage work tile (`index.html:1920–1929`, labelled "In Production · Coming Soon" — wrong); `story-packages.html:893` credibility signal ("active/in-production" — wrong); `story-packages.html:905–910` TikTok sample link (`video/7617302337589136661`). |

### Harbour Wars
Searched the entire repo (HTML, images, config, git history) for "harbour", "harbor", "wars", and related asset names:
| Item | Status |
|---|---|
| Full replay | **Not found.** [MISSING: Harbour Wars full replay link/file] |
| Highlight film | **Not found.** [MISSING: Harbour Wars highlight film] |
| Event hero image | **Not found.** [MISSING: Harbour Wars event hero image] |
| Approved logos | **Not found.** [MISSING: Harbour Wars approved logos] |

Harbour Wars has **zero presence** in the repo — no page, no tile, no mention.

### Other confirmed assets (resolve + current use)
- `codby-chronicles.jpg` — homepage ACU tile (`index.html:1909`), links to YouTube playlist.
- `flowedge.jpg` — homepage tile (`index.html:1932`), labelled "Eco-Tourism · In Production".
- `lucas_liam_photo.jpg` — studio portrait (`index.html:1792`), referenced by **absolute** `https://lucasliamlegacy.com/...` URL.
- `images/shoreline-run-homepage-tile.png` — homepage game tile (`index.html:1944`), relative path.
- YouTube IDs in use: `vFJU9NN8CIw` (St. Peter's Canal doc), `qUq5QlpFP0w` (LeNoir Forge), `q4smVdOX77w` (Telile interview), `fHuVAigyaEc` (Shoreline Run trailer), playlist `PLv_b9VrY0Og-0u3wyq3-OXNooVnFfcZC1`.
- `og-image.jpg` — referenced in meta tags, **file absent**. [MISSING: og-image.jpg 1200×630 social share image]

---

## 4. AUDIT-FINDINGS (confirmed, to fix in later stages)

1. **Land Yacht mislabelled as in-production.** `index.html:1923` tag "In Production · Premium Stay"; `index.html:1926` "Ingramport, NS · Coming Soon"; `story-packages.html:893` signal "The Land Yacht and FlowEdge as active/in-production tourism work". The campaign is COMPLETE (2 delivered films). Both files must change together (CLAUDE.md consistency rule). Note the tile is also a non-link `<div>` — once films exist to show, it should link somewhere.
2. **Harbour Wars absent from portfolio.** Confirmed — no reference anywhere in the repo. All four required assets are [MISSING] (see §3).
3. **Live-event production missing from positioning.** Confirmed — no page, section, package, or copy anywhere mentions live-event/event video. Positioning is exclusively brand films / heritage docs / digital identity (hero, packages, story-packages page).
4. **Duplicate section numbering.** Homepage labels run 001–008, but **008 is used twice**: "Press & Media — 008" (`index.html:2209`) and "Let's Begin · 008" (`index.html:2262`). Also inconsistent: Add-ons and Music/Rogue Tide sections carry no number, breaking the 001→008 rhythm.
5. **Stale time-bound copy.** `index.html:2211`: "Coverage across broadcast, radio, and print — all in the studio's first four months." Studio est. 2024; this is now stale and undercuts the press list.
6. **Conflicting turnaround claims.** `index.html:1815` studio stat "Turnaround: 2–3 Weeks" and `index.html:2177` "2–3 weeks after filming" vs `story-packages.html:770/823` Film Package "approximately 3–5 weeks depending on scope" and `story-packages.html:779/787` Digital Legacy Kit / Heritage Documentary "quoted after discovery call". The blanket 2–3-week claim only matches the Signature Short.
7. **Broken links / metadata defects (repo-verifiable):**
   - `og-image.jpg` referenced (`index.html:21,32`) but the file does not exist → broken OG/Twitter share image.
   - Absolute self-references to `https://lucasliamlegacy.com/...` for three images (`index.html:1792,1921,1932`) — fragile during the .com transfer window; on any domain where .com doesn't resolve, these images silently degrade to gradient fallbacks. Relative paths would be domain-agnostic.
   - `sitemap.xml` omits `shoreline-run.html`.
   - No `<link rel="icon">` on any page even though `favicon.png` exists in the repo.
   - Footer link labelled "Press Kit" (`index.html:2292`) points to the plain `#press` list — label overstates the target.
   - OG/Twitter tags missing entirely on `story-packages.html` and `shoreline-run.html`.
   - **Not verifiable from this session:** live-site HTTP status and browser console errors — outbound requests to `lucasliamlegacy.com/.ca` are blocked by this environment's network policy. Re-check on the live site before/after Stage fixes.
8. **Brief-vs-repo divergences (so later stages don't chase ghosts):** there are **no Netlify Forms** (contact is cal.com + mailto only) and **no YouTube iframe embeds** (thumbnail-link tiles only; CSP forbids iframes). "Duplicate section numbering" manifests as the double-008 above.

---

## 5. Rules later stages must follow (inherited)

- `CLAUDE.md` in this repo is binding: preserve the design system, keep `index.html`/`story-packages.html` in sync, don't touch pricing/CTA URL/`_redirects` without instruction, treat `_headers` (CSP) edits as low-confidence/ask-first, verify mobile (375–430px) and anchor IDs after structural edits, no invented proof.
- No fabrication: stats, testimonials, deliverables, dates, results. Use `[MISSING: ___]` placeholders.
- Preserve existing URLs; any route change requires a `_redirects` entry.
- Canadian English; plain Maritime voice; avoid "world-class / industry-leading / broadcast-quality / viral / revolutionary"; "broadcast" only where the delivery spec supports it (Telile work qualifies); reduce repeated "cinematic / story / built".
- Real project imagery/video only — never AI/stock-style replacements.
- Do not touch DNS/domain/billing/form destinations/analytics; no fixed live-event pricing.
