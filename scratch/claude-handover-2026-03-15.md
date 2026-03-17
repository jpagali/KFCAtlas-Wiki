# Handover for Claude

## Context

You effectively went on vacation on Thursday, March 12, 2026. This is the catch-up version of "what you missed" from a code-review perspective, written like a teammate handoff instead of a forensic changelog.

## TL;DR

- `main` moved the Knowledge Center from "docs site with release notes" toward "productized launch surface."
- The biggest shipped change is a new localized `What's New` hub, now reachable from top nav and desktop footer.
- There is one notable branch-state wrinkle: `staging` contains a mobile contribution polish commit that is **not** on `main`.
- There is also unpublished local work in the tree for Atlas Chat branding that has not been committed yet.
- After the original March 15 review, the team also revisited the mobile navbar/drawer behavior and the local one-port workflow.
- I ran a full production build and both locales compile successfully.

## What Landed After Thursday

### Thursday, March 12

The repo was still in heavy documentation-structure mode:

- Admin Portal Guide got the major expansion.
- Internal links and sidebar IDs were cleaned up so Docusaurus routing stopped fighting the content model.
- Image handling got safer, including the SSR fix for image zoom.

Net effect: Thursday was mostly foundation and content-coverage work.

### Friday, March 13

The site started behaving more like a real product:

- GitHub Pages deployment was wired up.
- Search routing and Atlas chat links were fixed for hosted environments.
- Customer Journey docs were broken into a more navigable structure.
- Customer Engagement Survey docs were added.
- Japanese customer-journey docs and nav translation coverage expanded.
- Changelog and footer update date were introduced.

Net effect: Friday was about publishability, navigation, and breadth.

### Saturday, March 14

The contribution workflow became a first-class surface:

- Password gate was added for the Knowledge Center.
- Locale switching was simplified and then restored to safer framework-native behavior.
- Contribution Studio landed, along with the `Contribute` navbar CTA and the footer entry point.

Relevant anchor commit on `main`: `16cd498` (`Add contribution studio and restore locale navigation`).

### Sunday, March 15

This is the main thing you missed on `main`.

Two commits landed:

1. `91f6722` on March 15, 2026 at 16:34 +08:00
2. `0944bfd` on March 15, 2026 at 16:37 +08:00

Together they introduced the `What's New` launch surface and its release-note coverage.

### Monday, March 16 follow-up

After the original handoff, a live mobile review exposed that the navbar/drawer layout had regressed on small screens.

What happened:

- the mobile header was trying to carry too much brand treatment
- the hamburger, logo/title treatment, and drawer header were stepping on each other
- the result was a visibly broken mobile menu layout

What changed afterward:

- the mobile navbar/drawer CSS was simplified so narrow screens no longer try to present the full desktop brand treatment
- the mobile toggle no longer floats above the open drawer state
- the local workflow was updated so `npm start` now follows the one-port, bilingual preview model instead of the old English-only dev server behavior

Net effect: phone-size navigation behavior was stabilized, and local locale-switch testing is now aligned with the preferred workflow.

## What Actually Shipped on `main`

### 1. A dedicated `What's New` page now exists

New route:

- `/whats-new`
- localized equivalent under `ja-JP`

Primary implementation:

- `src/pages/whats-new/index.js`
- `src/pages/whats-new/index.module.css`

What it does:

- presents launch communication as a designed hub instead of a plain changelog
- includes hero, roadmap, featured launch, new features, recent improvements, and coming-soon sections
- includes full English and Japanese copy in the page component itself

Reviewer note:

- The page is intentionally product-marketing styled and compiles cleanly.
- Some of the content is explicitly illustrative rather than tied to existing product-guide docs, so treat the surface as "real route, partly demo content."

### 2. Navigation changed

The top nav no longer uses `About` in that slot.

Instead:

- `What's New` now sits in the main navbar
- `About the Knowledge Center` remains reachable in the footer

Relevant file:

- `docusaurus.config.js`

### 3. Desktop footer now has twin entry cards

The existing contribution footer CTA was expanded into a two-card rail:

- `The 12th Secret` for contribution
- `What's New` for launch awareness

Relevant implementation:

- `src/components/FooterContributeCTA.js`
- `src/css/custom.css`

Behavioral nuance:

- desktop gets both cards
- mobile intentionally hides the footer CTA rail and relies on hamburger nav for discovery

### 4. Japanese release-note coverage got backfilled

Localized release-note pages were added for:

- March 12
- March 13
- March 14
- March 15
- plus a Japanese release-notes index

That means `What's New` launch messaging is now discoverable in both locales rather than being English-only.

### 5. Search index was regenerated

`static/search-index.json` now includes the new release-note and Japanese changelog content so the new materials are searchable.

## Important Branch-State Detail

`staging` is ahead of `main` in one way that matters:

- commit `fbe89fd` (`Polish mobile contribution experience`) exists on `staging`
- it is **not** present on `main`

Files affected on `staging`:

- `src/components/NavbarContributeButton.js`
- `src/pages/contribute/styles.module.css`
- `src/css/custom.css`
- `docs/release-notes/2026-03-14.md`

What that means in practice:

- if you assume mobile contribution polish is already shipped to `main`, that assumption is wrong
- the `What's New` work is on both `main` and `staging`
- the mobile contribution refinement is currently a branch divergence, not a completed rollout

## Uncommitted Local Work Sitting in the Tree

There is local, unpublished Atlas Chat branding work:

- modified: `src/components/AtlasChat.js`
- untracked asset: `static/img/atlas-chat-logo.svg`

What changed:

- the floating chat button swapped from an inline SVG bubble icon to a branded image asset
- the chat header avatar uses the same asset
- button styling shifted from bright red to a darker branded shell with glow treatment

What did **not** happen:

- this work was not committed
- this work was not part of the `What's New` launch commits

Recommendation:

- treat this as in-progress cosmetic work until someone decides whether it should ship independently

## Review Notes

### Findings

No build-breaking or obvious routing regressions surfaced in the catch-up review.

### Caveats worth knowing

1. The new `What's New` page is wired into production navigation, but some of its content is still intentionally illustrative.
   That is not a code defect, but it is a product-content caveat if anyone assumes every card maps to a real downstream guide.

2. `staging` and `main` are not equivalent right now.
   If future work touches contribution UX, double-check which branch you are basing from before assuming the mobile polish already exists.

3. The Atlas Chat logo refresh is local-only.
   Do not mentally bundle it into the March 15 launch unless it gets committed separately.

4. The mobile navbar/drawer needed a post-review cleanup.
   The regression was not in the locale data itself; it was caused by custom mobile navbar layout rules that looked fine in desktop review but broke down under narrow-width interaction.

5. Local locale testing was a workflow problem as much as a code problem.
   `npm start` used to launch a single-locale Docusaurus dev server, which made EN/JP switching appear broken even when the built site was fine. The preferred direction is now one-port preview first.

## March 16 Addendum

This is the fastest "what changed after the first handoff" section.

### Mobile navigation cleanup

Relevant file:

- `src/css/custom.css`

What was adjusted:

- mobile brand treatment was simplified
- narrow-screen navbar behavior was made less clever and more stable
- open-drawer state no longer lets the toggle visually fight the menu

Why it matters:

- the bug looked like localization or navigation had broken again
- the actual issue was layout collision in the mobile shell, not missing locale content

### One-port local workflow is now the default direction

Relevant files:

- `package.json`
- `README.md`

Updated expectation:

- `npm start` should be treated as the one-port path for testing both English and Japanese together
- locale-specific dev servers now belong behind explicit commands rather than being the default mental model

Why it matters:

- future debugging should not assume a broken locale switcher just because a single-locale dev server is running
- built preview behavior is now the source of truth for EN/JP verification

## Verification

I ran:

```bash
npm run build
```

Result:

- `en-US` build passed
- `ja-JP` build passed
- static output generated successfully for both locales
- `npm start` was also verified on the updated one-port flow and served the built site on `http://localhost:3001/`

## If You Only Read Three Files

Start here:

1. `src/pages/whats-new/index.js`
2. `src/components/FooterContributeCTA.js`
3. `src/css/custom.css`

Then check branch state before touching contribution UX or Atlas Chat.
