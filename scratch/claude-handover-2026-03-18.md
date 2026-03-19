# Claude Handover

## Scope

This handover covers changes from Sunday, March 15, 2026 through Tuesday, March 17, 2026, and the current local workspace state as of Thursday, March 18, 2026.

It is meant to let Claude step in immediately without having to reconstruct the last few days from git history.

## Current Repo State

- Repo: `kfc-atlas-portal`
- Current branch: `staging`
- Current `HEAD`: `095da20` on March 17, 2026
- Current branch tip message: `Document staging-first deployment flow`
- Working tree:
  - no tracked modified files
  - untracked prototype files in `scratch/previews/`
  - untracked KFC font files in `static/fonts/kfc/`

Untracked files currently present:

- `scratch/previews/kfc-app-shell-revision.html`
- `scratch/previews/kfc-prototype-pwa-toggle-brainstorm.html`
- `static/fonts/kfc/KentuckyFriedSans-Regular.ttf`
- `static/fonts/kfc/KentuckyFriedSans-Semibold.ttf`
- `static/fonts/kfc/KentuckyFriedSerif-BlackItalic.ttf`
- `static/fonts/kfc/KentuckyFriedSerif-ExtraboldItalic.ttf`

## Executive Summary

Since Sunday, the site moved from a docs portal with a new release-awareness layer into a more opinionated Atlas Wiki / Atlas Peek product surface.

Three big themes landed:

1. `What's New`, localized search, and contribution UX matured into a clearer release and discovery workflow.
2. The homepage, navbar, theming, and brand language were upgraded to feel more like a product shell than a plain docs site.
3. An RNA / Atlas Peek prototype track accelerated quickly, including a production-route sneak peek page, a large static prototype, and new local brainstorm artifacts that are not committed yet.

The repo is not in a broken state. The main handoff risk is context loss, not code instability.

## What Changed By Day

### Sunday, March 15, 2026

Primary areas:

- mobile contribution UX polish
- launch of localized `What's New`
- release-note expansion
- search quality and article search optimization
- Atlas Chat launcher branding
- mobile navbar overlap fixes
- Japanese Atlas Chat doc-link corrections

Important commits:

- `fbe89fd` `Polish mobile contribution experience`
- `91f6722` `Add localized What's New page and entry points`
- `0944bfd` `Add release note for What's New launch`
- `706942a` `remove store counter animation and optimize article searching`
- `0023d9e` `Brand Atlas Chat launcher with custom logo`
- `24b32f7` `Fix collapsed navbar breakpoint overlap`
- `e2a652f` `Fix JP Atlas Chat doc links`

Net effect:

- `What's New` became a first-class route and navigation surface.
- Search got more intentional and more locale-aware.
- Contribution and mobile shell polish continued rather than stopping at the initial launch.
- Atlas Chat got branded presentation instead of feeling like a default widget.

### Monday, March 16, 2026

Primary areas:

- localized search + contribution editor + release hub shipping
- cinematic homepage hero
- release notes for the March 16 deployment
- market flag and card-size fixes
- first RNA sneak peek prototype drop

Important commits:

- `d5e6b49` `Ship localized search, contribution editor, and release hub updates`
- `cf265c0` `Add cinematic homepage hero and sidebar updates`
- `a70615c` `Prepare release notes for 2026-03-16 deployment`
- `17dd252` `Fix homepage market flags and card sizing`
- `f80e43c` `Add RNA sneak peek prototype`

Net effect:

- The docs site leaned harder into product-marketing presentation on the homepage.
- Search indexing split into locale-specific outputs instead of one monolithic file.
- The RNA sneak peek work became a visible product direction rather than a private scratch exercise.

### Tuesday, March 17, 2026

Primary areas:

- light/dark theme support
- rename from "Atlas Knowledge Center" to "Atlas Wiki"
- extensive RNA / Atlas Peek prototype refinement
- GitHub Pages base-path correction after repo rename
- mobile sneak peek fixes
- responsive navbar cleanup
- app/web prototype convergence
- deployment/runbook documentation

Important commits:

- `3678682` `Add light dark theme toggle and release notes`
- `c5508aa` `Refine RNA sneak peek prototype`
- `c3c0a0e` `Rename Atlas Knowledge Center to Atlas Wiki`
- `fbd2a8d` `Polish Atlas Wiki theming and RNA sneak peek`
- `2abffda` `Fix GitHub Pages base path after repo rename`
- `fe8c542` `Fix mobile sneak peek chat and fullscreen sizing`
- `7f9c954` `Hide AtlasChat on sneak peek locale routes`
- `53f318c` `Update homepage hero and prototype branding`
- `5e91b94` `Add loyalty tiers to RNA prototype`
- `8191bb2` `Improve responsive navbar behavior`
- `9b778fc` `Update Atlas prototype app and web views`
- `bf47ce8` `Rename Atlas Peek surfaces and release notes`
- `002470b` `Fix sneak peek navbar dropdown layering`
- `e21b17f` `Fix prototype locale toggles`
- `095da20` `Document staging-first deployment flow`

Net effect:

- Branding shifted materially:
  - `Knowledge Center` became `Atlas Wiki`
  - prototype language shifted toward `Atlas Peek`
- Theme support and responsive shell behavior improved across the site.
- The RNA sneak peek evolved from a single prototype into a clearer product concept spanning:
  - route-level experience in the site
  - static HTML preview
  - release notes
  - local brainstorm files
- Deployment guidance is now explicitly staged-first in the README and runbook.

## Major Workstreams

### 1. Release Awareness and Content Discovery

This workstream is now well established.

What landed:

- dedicated `What's New` page
- expanded release notes across dates
- localized release-note coverage
- locale-specific search indexes:
  - `static/search-index.en-US.json`
  - `static/search-index.ja-JP.json`
- search normalization and article-search improvements

Key files:

- `src/pages/whats-new/index.js`
- `src/pages/whats-new/index.module.css`
- `src/components/SearchBox.js`
- `src/utils/searchNormalization.mjs`
- `scripts/generate-search-index.mjs`
- `docs/release-notes/`

Why it matters:

- The portal is no longer only a docs browser.
- It now has a release-communication layer that can orient users around launches and recent changes.

### 2. Contribution Studio and Contribution UX

This workstream continued from earlier groundwork and got more mobile-aware.

What changed:

- contribution page/editor shipping improvements
- contribution CTA surface refinement
- mobile contribution layout polish

Key files:

- `src/pages/contribute/index.js`
- `src/pages/contribute/styles.module.css`
- `src/components/NavbarContributeButton.js`
- `src/components/FooterContributeCTA.js`
- `src/css/custom.css`

Why it matters:

- Contribution is being treated as a first-class user journey, not a buried admin page.

### 3. Homepage / Navigation / Brand Shell

This was one of the most visible shifts in the repo.

What changed:

- cinematic homepage hero
- market cards and flag assets
- responsive navbar cleanup
- mobile drawer/header stabilization
- light/dark theme toggle
- updated homepage and prototype branding

Key files:

- `src/pages/index.js`
- `src/pages/index.module.css`
- `src/css/custom.css`
- `src/components/ThemeToggle.js`
- `src/components/NavbarSearch.js`
- `src/theme/Navbar/Content/index.js`
- `src/theme/Navbar/MobileSidebar/Header/index.js`
- `docusaurus.config.js`
- `static/img/flags/*.svg`

Why it matters:

- The site shell is being used to express product identity, not just content hierarchy.

### 4. Atlas Chat Branding and Behavior

Chat was touched in both branding and route behavior.

What changed:

- custom launcher logo branding
- JP doc-link fixes
- sneak peek route chat hiding
- mobile/fullscreen polish around the prototype experience

Key files:

- `src/components/AtlasChat.js`
- `static/img/atlas-chat-logo.svg`

Why it matters:

- Chat is now part of the branded product experience, but its visibility is being managed carefully in prototype contexts.

### 5. Atlas Wiki / Atlas Peek / RNA Prototype Track

This is the fastest-moving and most conceptually important workstream.

What changed:

- first RNA sneak peek route landed
- large static prototype shipped into `static/`
- multiple rounds of refinement to the prototype shell
- loyalty tiers added
- app and web prototype surfaces aligned more closely
- naming shifted from `RNA sneak peek` / `Knowledge Center` language toward `Atlas Peek` / `Atlas Wiki`
- locale toggle and navbar-layering bugs in the prototype were fixed

Key files:

- `src/pages/rna-sneak-peek/index.js`
- `src/pages/rna-sneak-peek/styles.module.css`
- `static/rna-sneak-peek-prototype.html`
- `scratch/previews/kfc-prototype-v2.html`

Why it matters:

- This is no longer just design exploration.
- The repo is being used to stage a future-facing ordering/product-shell concept alongside the docs experience.

## Important Naming / Positioning Changes

These changes are easy to miss if someone resumes work from older context.

- `Atlas Knowledge Center` was renamed to `Atlas Wiki`.
- prototype and sneak peek surfaces were renamed toward `Atlas Peek`.
- the repo README now describes a `staging`-first promotion flow rather than implying direct-to-main is the default.

Claude should assume older naming in prior notes may now be stale.

## Current Local-Only Work

There are uncommitted local artifacts that matter for continuity.

### `scratch/previews/kfc-app-shell-revision.html`

This is a large new standalone prototype file with KFC-branded typography and a richer app-shell treatment.

What it appears to contain:

- custom `@font-face` usage pointing at `static/fonts/kfc/*`
- dark/light theme handling
- mobile app-shell presentation
- multi-screen ordering flow behavior
- locale support
- loyalty / cart / checkout interactions
- embedded/fullscreen handling

Interpretation:

- this looks like the next prototype step after the committed RNA / Atlas Peek work
- it is not committed yet
- it likely represents the strongest candidate for near-term continuation if Claude is asked to keep pushing the prototype direction

### `scratch/previews/kfc-prototype-pwa-toggle-brainstorm.html`

This is another untracked brainstorm preview.

Interpretation:

- likely a narrower exploration around app-shell or PWA behavior
- also not committed yet

### `static/fonts/kfc/*`

Untracked font assets:

- `KentuckyFriedSans-Regular.ttf`
- `KentuckyFriedSans-Semibold.ttf`
- `KentuckyFriedSerif-BlackItalic.ttf`
- `KentuckyFriedSerif-ExtraboldItalic.ttf`

Interpretation:

- these are supporting assets for the new KFC-branded prototype direction
- if Claude continues prototype work, these fonts are probably intentional and should be treated as part of the in-flight exploration

## Files Most Likely To Matter Next

If Claude needs the shortest path to useful context, start here:

- `README.md`
- `docs/deployment-runbook.md`
- `src/pages/index.js`
- `src/css/custom.css`
- `src/components/ThemeToggle.js`
- `src/components/AtlasChat.js`
- `src/pages/whats-new/index.js`
- `src/pages/rna-sneak-peek/index.js`
- `src/pages/rna-sneak-peek/styles.module.css`
- `static/rna-sneak-peek-prototype.html`
- `scratch/previews/kfc-app-shell-revision.html`
- `scratch/claude-handover-2026-03-15.md`

## Suggested Reading Order For Claude

1. Read this file first.
2. Read `README.md` and `docs/deployment-runbook.md` to align on the current release flow.
3. Review `src/pages/rna-sneak-peek/` and `static/rna-sneak-peek-prototype.html` to understand the committed prototype state.
4. Review `scratch/previews/kfc-app-shell-revision.html` to understand the latest uncommitted prototype direction.
5. Check `src/pages/index.js`, `src/css/custom.css`, and `docusaurus.config.js` for the latest shell, nav, and branding decisions.
6. Review release notes from March 15 to March 17 for product-language changes that may need to stay consistent.

## What Is Already Settled vs Still Fluid

### Settled enough to build on

- `What's New` as a permanent product surface
- localized search indexes
- `Atlas Wiki` naming
- staged release process documented in repo docs
- theme toggle and responsive shell improvements
- prototype work as a legitimate repo track, not just throwaway exploration

### Still fluid

- exact product framing between `RNA`, `Atlas Peek`, and broader KFC ordering language
- how much of the prototype should remain a scratch artifact vs become a first-class route
- whether the new KFC font-backed app shell should replace the current committed prototype presentation
- how far Atlas Chat should stay visible inside prototype flows
- whether current illustrative launch/release content should be tightened to real linked product capabilities

## Risks / Watchouts

1. There are duplicate-looking commits in the history because some work was merged/cherry-picked across branches.
   Do not assume duplicated subjects mean duplicated live behavior without checking the final file state.

2. The prototype track is moving faster than the docs track.
   Product language can drift if release notes, route labels, and scratch previews are edited independently.

3. The local workspace contains meaningful uncommitted artifacts.
   If Claude starts editing prototype files, it should be careful not to overwrite or discard the new preview direction.

4. The repo now mixes:
   - production Docusaurus surfaces
   - static prototype exports
   - scratch brainstorming assets
   This is workable, but context switching is easy to get wrong.

## Recommended Next Moves

If the goal is to keep momentum rather than just preserve context, these are the best next actions.

### Option A: Consolidate the prototype direction

Best if the next step is product-forward.

- compare `src/pages/rna-sneak-peek/`, `static/rna-sneak-peek-prototype.html`, and `scratch/previews/kfc-app-shell-revision.html`
- decide which one is the source of truth
- normalize naming across `RNA`, `Atlas Peek`, and KFC ordering shell language
- either:
  - promote the new app-shell revision into a committed preview, or
  - harvest its strongest ideas into the route-level sneak peek

### Option B: Cleanly separate shipped surface from exploration

Best if the next step is repo hygiene and safer iteration.

- leave committed site routes stable
- keep brainstorming in `scratch/previews/`
- add a short prototype index or README in `scratch/` explaining which preview is latest and why
- decide whether the new fonts should be committed or kept local until direction is approved

### Option C: Productize the release-awareness layer

Best if the next step is user-facing polish rather than prototype expansion.

- tighten `What's New` content so each section maps to real pages or real roadmap placeholders
- make release notes and `What's New` feel less illustrative and more operational
- confirm search indexing remains correct for both locales after any content cleanup

## Best Immediate Pickup For Claude

If Claude needs one concrete starting point, it should inspect:

- `scratch/previews/kfc-app-shell-revision.html`

Reason:

- it is the clearest signal of active, not-yet-committed forward motion
- it already references the new KFC font assets
- it likely captures the freshest design/product thinking beyond the last committed sneak peek work

## Closing Note

The repo has moved decisively forward since Sunday.

This is not a "we paused in uncertainty" handoff. It is a "multiple tracks advanced quickly, the prototype direction is heating up, and the next person mainly needs clean orientation and careful continuation" handoff.
