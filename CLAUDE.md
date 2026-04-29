# CLAUDE.md — Lucas & Liam Legacy Studios

## Project Identity

Lucas & Liam Legacy Studios is a cinematic storytelling studio based in St. Peter's, Cape Breton, Nova Scotia. Founded in 2024. The studio produces brand films, documentary work, and campaign media for clients across Atlantic Canada and beyond.

The studio is a founder-led operation with direct client communication and no agency bloat. Lucas Cotton works directly with every client from first call to final delivery.

> **Internal note:** This description is positioning guidance for Claude, not copy to be published automatically. Do not surface internal framing like "founder-led" or "no agency bloat" in public-facing text unless the user explicitly instructs it.

## Core Buyer Types

When writing copy or structuring content, these are the primary audiences:

- Tourism operators (lodges, outfitters, whale-watching, agritourism)
- Hospitality businesses (inns, restaurants, event venues)
- Heritage and cultural organizations (museums, historical societies, community archives)
- Conservation groups and environmental advocates
- Marinas and coastal/marine businesses
- Destination marketing organizations (DMOs, chambers of commerce)
- Independent artists, musicians, and community storytellers

Buyers in this market are value-conscious, mission-driven, and trust-first. They need to trust the person behind the camera before they trust the price. Copy should reflect that dynamic — never write in ways that sound defensive about cost, or that position the studio as the affordable option. The studio earns trust through specificity, craft, and regional credibility.

## Public Copy Rule

Internal strategy notes in this file exist to guide Claude's decisions — they are not website copy.

**Do not publish the following in public-facing HTML without explicit instruction:**
- Internal framing such as "one-person operation," "founder-led," or "no agency bloat"
- Phrases that sound apologetic, self-deprecating, or defensive about price
- Unfinished or unexplained ACU lore, character names, or project references
- Any placeholder language, internal labels, or draft copy

**Public copy should make the studio feel:**
- Direct and personal (not corporate or anonymous)
- Credible and regionally grounded (not generic Atlantic or vague "storytelling" language)
- Premium but approachable (not luxury-distant, not budget-signaling)
- Easy to buy from (clear packages, single CTA, no friction)

## Voice & Tone

**Premium, clear, grounded, Atlantic.** Not hypey.

- Write like someone who knows the region and earns trust through specificity, not superlatives
- Favor concrete details over vague claims ("One shoot day, 60–90 second film" not "world-class cinematic experiences")
- Short sentences. Plain language. No buzzwords.
- Atlantic Canadian cultural identity should feel present but not performative
- The studio's credibility comes from real broadcast work, press coverage, and community response — lean on that
- Never write: "game-changing," "disruptive," "passionate," "leverage," "synergy," "cutting-edge," or generic agency copy

## Business Goal

**Convert visitors into qualified leads for paid film and storytelling packages.**

The site exists to get the right person to book a discovery call or send an email. Every section should serve that goal:

- Hero: establish credibility and relevance fast
- Packages: make the offer clear and the next step obvious
- Proof: social validation from real people and press, not manufactured authority
- Contact/CTA: low friction, single action

Secondary goal: filter out poor-fit clients before the call. Copy that is specific about who this is for does that work automatically.

## Packages (Current Pricing — Do Not Alter Without Instruction)

| Package | Price | Core Deliverable |
|---|---|---|
| The Signature Short | From $1,800 | 60–90 sec film, 1 shoot day, 2 social cuts |
| The Film Package | From $3,500 | 2–3 min brand film, 4 social clips (most popular) |
| The Digital Legacy Kit | From $6,500 | Brand film + 5-page website + Google Business + SEO |
| Heritage Documentary | From $10,000 | Research, scripting, full documentary production |

Do not change prices, package names, or deliverable lists without explicit instruction.

**Do not invent or imply extra inclusions.** Unless explicitly provided by the user, do not add references to:
- Drone footage or aerial work
- Licensed music or original score
- Additional revision rounds beyond what is stated
- Ad spend, paid media, or campaign management
- Photography, headshots, or stills
- SEO guarantees or specific ranking claims
- Platform management or social media scheduling

If a client scenario seems to call for these, flag it to the user rather than inventing deliverables.

## Editing Rules

1. **Inspect before changing.** Read the full file or section before making any edit.
2. **Make small, reversible edits.** One section at a time. Do not rewrite the full page unless explicitly asked.
3. **Preserve the existing design system.** Colors, type scale, spacing, and layout patterns are intentional. Do not introduce new CSS classes or visual patterns without instruction.
4. **Do not invent testimonials, metrics, or press coverage.** Only use proof signals that already exist in the codebase or are explicitly provided by the user.
5. **Do not invent client names, project names, or outcomes.** If a case study is needed, ask the user to supply the raw details.
6. **Update both files if packages or proof change.** `index.html` and `story-packages.html` share overlapping content — keep them consistent.
7. **Test anchor links after editing.** The nav uses `#section-id` anchors; verify IDs are not broken after any structural change.
8. **Respect the CSP.** The `_headers` file has a strict Content Security Policy. Adding any third-party script, font, or embed requires a corresponding update to `_headers` or it will be silently blocked.

## Mobile Rule

Any edit to the homepage, packages section, or any CTA must preserve:

- Mobile navigation behavior (hamburger toggle, anchor scroll offsets)
- Readable font sizes and line lengths at 375px–430px viewport widths
- Touch-friendly tap targets on all buttons and links
- Vertical stack layout where horizontal layouts would break on small screens
- CTA button visibility without requiring horizontal scroll

Do not introduce layout changes tested only at desktop widths. If a change cannot be verified on mobile, flag it explicitly rather than marking the task complete.

## Code Quality & Cleanup Rules

This repo is static HTML, CSS, and vanilla JavaScript served directly by Netlify. There is no build step, no bundler, no linter, and no test suite. Cleanup must be done carefully by hand. These rules govern how to approach that work safely.

### 1. Deduplication — Apply Judgment, Not Dogma

Do not chase DRY for its own sake. Duplication in static HTML across two files (`index.html` and `story-packages.html`) is often intentional — each page is a standalone document.

- Remove duplication only when the duplicated content is **identical in meaning, not just structure**, and when keeping it in sync manually is a real maintenance burden
- If two sections look similar but serve different page contexts, leave them independent
- Do not introduce JavaScript-based templating, `fetch()`-loaded partials, or `<template>` tags to eliminate duplication unless the user explicitly requests it — these add complexity and can break Netlify's static serving
- If you notice content drift between the two files (e.g. package prices differ), flag it and ask which version is correct before syncing

### 2. Keeping index.html and story-packages.html Consistent

These two files share overlapping content: package names, prices, deliverables, proof quotes, and CTAs. They must stay in sync when that content changes.

- Any edit to package details, pricing, or deliverables must be applied to **both files**
- Any new proof signal or testimonial added to one file should be evaluated for inclusion in the other — ask the user if unsure
- Do not assume one file is the "source of truth" — check both before editing either
- After any shared-content edit, read the corresponding section in the other file to confirm consistency before summarizing the task as complete

### 3. Dead Code Removal — Full Reference Check First

This repo has no automated dead code detection. Before removing any HTML element, CSS rule, or JavaScript function:

- **Search both HTML files** for every class name, ID, and function reference involved
- **Search the inline `<style>` blocks** in both files for the selector before removing it
- **Search the inline `<script>` blocks** in both files for the function or variable name before removing it
- A CSS class that appears unused in `index.html` may still be used in `story-packages.html` or `404.html`
- If a reference exists but the element it targets appears to have been removed, flag it rather than silently deleting both
- Do not remove `_redirects` entries — they exist to handle inbound links to deleted pages and must stay

### 4. CSS Cleanup — Preserve Mobile Behavior

All CSS lives in `<style>` blocks inside each HTML file. There is no external stylesheet.

- Before removing or modifying any CSS rule, check whether it is referenced inside a `@media` query — mobile and desktop rules are often written separately
- Do not consolidate `@media` queries without verifying the merged result is equivalent at both breakpoints
- Do not remove a rule just because it appears redundant at desktop widths — it may be load-bearing at mobile widths
- Preserve all rules that govern: mobile nav toggle visibility, hamburger menu open/close state, CTA button stacking, package card layout, and scroll behavior
- If shortening or combining selectors, verify the specificity result is identical — inline static HTML is sensitive to specificity changes with no build-time warning
- Do not introduce CSS variables (`--custom-properties`) or refactor toward a design token system unless explicitly requested

### 5. JavaScript Cleanup — Selectors, Listeners, Silent Failures, CTA Behavior

All JavaScript lives in `<script>` blocks inside each HTML file. There is no external JS file, no module system, and no console in production.

- Before removing any `querySelector` or `querySelectorAll` call, confirm the target element still exists in the HTML of that file
- Before removing any `addEventListener`, confirm no other part of the script depends on the same element's state after that event fires
- Do not silently swallow errors — if you remove a null-check that was guarding a missing element, verify the element is actually present or the guard is still needed
- The mobile nav toggle, smooth-scroll anchor offsets, and CTA click behavior are critical paths — do not modify these without explicitly testing that anchor links still scroll to the correct position with the correct offset for the fixed navigation bar
- Do not add `console.log` statements to production code
- Do not introduce `async/await`, ES modules, or dynamic `import()` without confirming browser compatibility requirements with the user — the current JS is intentionally compatible with a broad baseline

### 6. Removing AI Slop, Placeholder Comments, and Obsolete TODOs

- Remove any HTML comment that describes what the code does rather than why it does it (e.g. `<!-- hero section -->`, `<!-- end wrapper -->`)
- Remove any comment that was clearly generated as a structural label and adds no information
- Remove any `TODO`, `FIXME`, or `PLACEHOLDER` comment that refers to work already done or no longer relevant — but flag it to the user before removing if the intent is unclear
- Do not add new explanatory comments when editing — the HTML structure should be self-evident from element naming and layout
- Do not add comments attributing changes to Claude, referencing this session, or describing what was edited ("Updated by Claude on [date]" etc.)

### 7. Manual Verification After Cleanup

There is no test suite and no build validation. After any cleanup edit:

- Re-read the full edited section in context, not just the changed lines
- Verify that anchor link IDs in the navigation match the section IDs in the page — a renamed `id` attribute breaks all nav links silently
- Verify that any removed CSS class is not referenced anywhere else in the file (and the other HTML file if shared)
- Verify that CTA buttons still point to the correct `cal.com` URL
- Verify that the mobile nav toggle still functions by reviewing the JS event listener and the CSS classes it adds/removes
- Flag any change that cannot be verified by reading the file — do not assume it works

### 8. Rank Cleanup Changes by Confidence and Risk Before Editing

Before making any cleanup pass, categorize the intended changes:

**High confidence, low risk** — safe to proceed:
- Removing clearly dead HTML comments that add no information
- Fixing copy typos that do not affect element IDs or class names
- Correcting broken or outdated external URLs (after confirming with user)

**Medium confidence, verify first** — read both files, confirm no cross-references:
- Removing a CSS rule that appears unused
- Removing a JS function that appears uncalled
- Syncing a content discrepancy between `index.html` and `story-packages.html`

**Low confidence, ask before touching** — flag and discuss:
- Any change to the mobile nav toggle logic
- Any change to scroll offset or anchor behavior
- Any restructuring of the packages section HTML
- Any removal of a `_redirects` entry
- Any edit to `_headers` (CSP changes can silently break embeds or fonts)
- Any change that affects more than one section of the page at once

Do not batch high-risk and low-risk changes into a single commit. Make them separately so they can be reverted independently.

## Architecture Notes

- **Stack:** Pure HTML, CSS, vanilla JavaScript. No build tool, no framework, no package manager.
- **Deployment:** Netlify, static site. No build command required. Publish directory is root `/`.
- **Content:** All content is hardcoded in `index.html` (homepage, ~2,370 lines) and `story-packages.html` (~1,045 lines). There is no CMS, no data layer.
- **Booking:** All CTAs point to `cal.com/lucasliamlegacy/discovery-call`. Do not change this URL without instruction.
- **Contact email:** `lucasliamlegacystudios@gmail.com`. Exposed in HTML (accepted tradeoff — no form backend).
- **Images:** JPG files in root. The studio portrait references an absolute URL (`https://lucasliamlegacy.com/lucas_liam_photo.jpg`) with a CSS gradient fallback.
- **Old pages:** `proposal.html`, `lucas_liam_funnel.html`, `voices-preview.html` are permanently removed. Do not recreate them. `_redirects` handles 404s for inbound links.

## Atlantic Cinematic Universe (ACU) — Canon Continuity

The ACU is a connected storytelling universe set in Atlantic Canada. It is not fantasy or cartoon content. It is grounded, documentary-real, place-based storytelling — the kind of work that can be positioned as a premium creative layer for tourism, heritage, conservation, and hospitality clients.

The ACU is **an optional offering**, not a requirement for every project. Reference it only when contextually relevant and when the client type would find it meaningful.

### Confirmed Canon

- **Cod B'y & Puffy** — flagship ACU characters; the primary narrative anchor for the universe
- **Rogue Tide** — the studio-adjacent music project and proof of original Atlantic creative work; current release is "The Clapping Stopped," written and released in solidarity with 2,200 CUPE Nova Scotia long-term care workers on strike
- **Gilbert** — conservation documentary; proof of story-driven advocacy work; Brian Glebe quote on file ("Gilbert was a strong and engaging piece that helped bring an important salmon issue to life through creative storytelling.")
- **The Land Yacht** — active or place-based storytelling anchor; referenced in portfolio imagery (`landyacht.jpg`)
- **FlowEdge** — active or place-based storytelling anchor; referenced in portfolio imagery (`flowedge.jpg`)

### ACU Editing Rules

- Do not introduce new ACU characters, storylines, project names, or lore without explicit instruction from the user
- Do not describe ACU work as generic cartoon content, fantasy content, kids entertainment, mascot marketing, or generic IP marketing. Animation may be referenced only when it is an actual deliverable, and it must be framed as grounded cinematic character storytelling tied to real Atlantic places, history, tourism, conservation, or culture.
- Do not over-explain the ACU to site visitors — if referenced publicly, keep it brief, grounded, and tied to a real deliverable or story
- Maintain internal consistency: character names, project titles, and described outcomes must not contradict existing copy across `index.html` and `story-packages.html`
- If a client scenario could benefit from ACU framing, flag it as an option rather than automatically applying it

## Output Rule

After every editing session, summarize:

1. **What changed** — describe each edit in plain language
2. **Which files were modified** — list exact filenames
3. **What was not changed** — note anything adjacent that was intentionally left alone
4. **Any follow-up risks** — flag anything the next edit might need to account for

Do not mark a task complete without this summary.
