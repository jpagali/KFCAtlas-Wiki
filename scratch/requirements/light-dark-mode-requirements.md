# Light/Dark Mode Requirements

## Title
Implement a Production Light/Dark Theme for the KFC Atlas Knowledge Center

## Status
Draft

## Executive Summary
The Knowledge Center currently uses a largely fixed visual theme, and Docusaurus color-mode switching is explicitly disabled. We want to introduce a production-ready light/dark mode without changing the current information architecture, homepage composition, or overall branded feel. The main product goal is to make the site more comfortable for long reading sessions, especially for millennial and older audiences, while preserving recognizable KFC brand cues in a lighter palette. The implementation should be lightweight, token-driven, and compatible with the existing custom navbar and mobile sidebar patterns.

## Problem and Why Now
The current experience is visually strong, but it is effectively single-theme and currently overrides dark mode back to light-oriented tokens. This creates three problems:

- readers do not have control over theme preference across long-form documentation pages
- the current visual system is tuned more heavily toward darker branded surfaces than a warm, comfortable light reading mode
- the site already has the right structural components for theme switching, but the configuration currently disables it, so every future page refresh will make adoption harder if the theme layer remains unresolved

Now is the right time because:

- the homepage and `What's New` page have already been elevated into branded product surfaces
- the repo already has clear custom navbar integration points where a theme toggle can be added cleanly
- mobile navigation behavior is already centralized in the hamburger/sidebar pattern, making theme placement on mobile straightforward

## Goals
- Add a production light/dark mode that applies consistently across the homepage, `What's New`, docs pages, navbar, sidebar, footer, search UI, and contribution CTA surfaces.
- Preserve the current page layouts and information hierarchy. This is a visual-system change, not a structural redesign.
- Introduce a warm, editorial light mode that remains recognizably KFC through restrained red accents, warm neutrals, and selective dark anchors.
- Preserve a quieter dark mode that feels refined and branded, without neon-like glow or oversaturated red treatments.
- Place the theme toggle in the desktop navbar and in the mobile hamburger menu below the language toggle.
- Persist the user’s theme choice across page navigations and return visits.

## Non-Goals
- Redesigning the homepage layout
- Reworking homepage video/cinematic composition
- Changing copy, navigation targets, or search behavior
- Replacing Docusaurus’ underlying routing or localization model
- Introducing per-page theme overrides
- Creating a high-motion or heavily animated theme transition system

## Users
- Knowledge Center readers browsing long-form platform documentation
- Market operators, enablement users, and internal stakeholders reviewing the homepage and `What's New`
- Maintainers who need a theme system that is easy to extend without repeating page-specific overrides

## Success Criteria
- Users can switch between light and dark mode from the desktop navbar.
- Users can switch between light and dark mode from the mobile hamburger menu, with the control rendered below the language toggle.
- The selected mode persists across page navigations and browser reloads.
- The homepage, `What's New`, and documentation pages all remain legible and visually coherent in both modes.
- The light theme reads as warm and branded rather than sterile white or generic enterprise blue/gray.
- The implementation does not add heavy runtime logic, large theme-specific assets, or expensive visual effects.

## User Experience

### Theme Behavior
- The product must support two explicit themes: `light` and `dark`.
- The product should use `dark` as the default initial theme unless product direction changes later.
- If a stored user preference exists, the stored preference must override the default.
- Manual theme selection must persist until the user changes it again.

### Desktop Placement
- The desktop toggle must appear in the top navbar on the right side.
- The preferred placement is adjacent to existing right-side utility items, using the current custom navbar item pattern.
- The control should sit alongside search, contribute, and locale controls without displacing primary navigation.
- The control should be visually quiet: compact, branded, and clearly tappable/clickable.

### Mobile Placement
- The mobile toggle must not appear in the compact top header row.
- The mobile toggle must appear inside the hamburger menu / navbar sidebar.
- Within the mobile sidebar, the toggle must be placed below the language toggle.
- The mobile control should be labeled clearly enough that users understand it is a global site setting.

### Interaction Principles
- Theme switching should feel immediate and stable, without a page reload.
- Theme changes should update all major global surfaces consistently.
- The control should be keyboard accessible and screen-reader accessible.
- No source was provided; recommendation based on common product/design practice: use an icon + label or segmented light/dark control rather than an unlabeled icon-only button in the mobile sidebar.

### Visual Direction
- Light mode should use warm off-white / paper-like base colors instead of pure white.
- KFC red should remain an accent color, not the main reading background.
- Dark mode should use warm charcoal and deep brown-red surfaces instead of harsh black.
- Homepage cinematic treatment should remain in place structurally; light mode should primarily change overlays, surface colors, text colors, and CTA treatments.
- `What's New` should keep its current section structure while adapting card, chip, roadmap, and featured-module styling to the new shared theme tokens.

## Functional Requirements

### FR1. Global Theme Support
The system must support global `light` and `dark` themes across the site shell and page-level branded surfaces.

### FR2. Desktop Toggle
The system must expose a theme toggle in the desktop navbar using the project’s custom navbar item mechanism.

### FR3. Mobile Toggle Placement
The system must expose a theme toggle inside the mobile hamburger/sidebar navigation, positioned below the language toggle.

### FR4. Preference Persistence
The system must persist the user’s selected theme in browser storage so the selected theme remains consistent across page loads and route changes.

### FR5. Initial Theme Application
The system must apply the correct theme before or as early as possible during page paint to avoid a visible flash of the wrong theme.

### FR6. Shared Theme Tokens
The implementation must centralize theme values in a shared token layer rather than scattering one-off page overrides.

### FR7. Existing Structure Preservation
The homepage, `What's New`, docs pages, and existing CTA/navigation structure must remain intact aside from theme-aware styling changes and toggle placement.

### FR8. Locale Compatibility
Theme switching must work correctly in both `en-US` and `ja-JP` locales.

### FR9. Accessibility
The toggle must be operable by keyboard and screen reader.

Specific expectations:

- focus states must remain visible in both themes
- text/background contrast must remain acceptable across primary reading surfaces, CTA buttons, labels, and chips
- toggle state must be announced accessibly

### FR10. Mobile Sidebar Integration
The mobile sidebar must render the theme control without breaking the existing sidebar brand/header area, locale control, nav links, or close behavior.

## Technical Approach

### Current State Summary
Current repo behavior relevant to implementation:

- `docusaurus.config.js` sets `colorMode.disableSwitch: true`
- `docusaurus.config.js` sets `defaultMode: 'light'`
- `src/theme/NavbarItem/ComponentTypes.js` already registers custom navbar item types
- `src/components/NavbarContributeButton.js` already distinguishes mobile vs non-mobile behavior
- `src/css/custom.css` currently contains a forced light-like override inside `[data-theme='dark']`
- mobile right-side navbar items are hidden and navigation shifts into the sidebar at smaller widths

### Recommended Architecture
- Re-enable Docusaurus color mode switching at the configuration level.
- Use Docusaurus color mode state or the supported theme hook as the single source of truth for current theme.
- Add a new reusable theme toggle component for desktop navbar usage.
- Add a companion mobile rendering path for the same preference inside the navbar sidebar.
- Refactor shared CSS variables in `src/css/custom.css` so theme values are expressed through `:root` and `[data-theme='dark']` token groups instead of hard-forcing dark mode back to light values.
- Update branded page styles such as homepage and `What's New` to consume theme-aware tokens where needed, especially for backgrounds, overlays, text, borders, chips, and CTA treatments.

### Integration Points
- `docusaurus.config.js`
  Enable switching and register the desktop navbar item if needed.
- `src/theme/NavbarItem/ComponentTypes.js`
  Register a custom theme-toggle navbar item type.
- `src/components/`
  Add a reusable theme toggle component and any mobile-sidebar wrapper needed.
- `src/theme/`
  Add a theme override for the mobile navbar/sidebar if the default Docusaurus sidebar rendering does not give enough control for placement below locale toggle.
- `src/css/custom.css`
  Move global shell, navbar, sidebar, footer, search, and docs tokens to theme-aware CSS variables.
- Page CSS modules:
  Update homepage and `What's New` styles only where hard-coded values block correct light/dark rendering.

### Token Guidance
Recommended palette direction for implementation:

- Brand red: `#E4002B`
- Supporting deep red: `#B51F2D`
- Light canvas: `#F6F1EA`
- Light surface: `#FFFDF9`
- Light text: `#2E2620`
- Light muted text: `#6B5B4E`
- Dark canvas: `#171310`
- Dark surface: `#231C18`
- Dark text: `#F6EEE7`
- Dark muted text: `#C7B8AA`

These exact values may be tuned during implementation, but the visual direction should stay within this family.

### Performance Requirements
- Theme switching must not require a page reload.
- Theme switching must not add video, canvas, or heavy animation work.
- Theme transitions should be limited to inexpensive CSS changes.
- The implementation should avoid duplicating large parallel style trees where shared tokens can solve the same problem.
- The page should not visibly flash the wrong theme after a user preference has been stored.

### Reliability and Failure States
- If local storage is unavailable, the product must still render with the configured default theme and allow theme switching for the current session where possible.
- If the theme toggle component fails to mount, the rest of the navbar and sidebar must remain usable.
- If a page contains residual hard-coded styling, the page must remain functional even if one or two areas require follow-up visual cleanup.

### Analytics
Analytics are optional for the first implementation.

If added, they should be limited to:

- theme selected: `light`
- theme selected: `dark`
- interaction source: `desktop_nav` or `mobile_sidebar`

No source was provided; recommendation based on common product/design practice: analytics can be deferred if they create delay, since the higher-priority outcome is a stable theme implementation.

## Risks and Tradeoffs
- Re-enabling color mode without refactoring current hard-coded styles will create inconsistent pages. The main cost is not the toggle itself, but normalizing token usage across shared surfaces.
- Mobile placement below the locale toggle may require theme-level sidebar customization rather than a pure config-only change.
- If the light palette uses too much saturated red, the site will feel louder and less readable for long sessions.
- If the light palette becomes too neutral, the site may lose KFC distinctiveness.
- Keeping the homepage cinematic treatment while making light mode readable requires careful overlay tuning; this is a styling risk, not an architecture risk.

## Delivery Plan

### Phase 1. Enable Theme Infrastructure
- Re-enable color mode switching in Docusaurus config.
- Add shared theme toggle component and desktop navbar integration.
- Remove the current forced-light dark override that prevents meaningful dark mode.
- Establish shared global tokens for shell, navbar, footer, docs, sidebar, and search.

### Phase 2. Mobile Sidebar Integration
- Add mobile sidebar theme control below the locale toggle.
- Ensure sidebar ordering and spacing remain clean in both locales.
- Validate keyboard, focus, and screen-reader behavior.

### Phase 3. Page-Level Brand Surface Cleanup
- Update homepage styles to use theme tokens for overlays, text, buttons, markets, and cards while preserving layout and cinematic composition.
- Update `What's New` styles to use theme tokens for hero, cards, roadmap, chips, and featured-launch module.
- Resolve any remaining hard-coded light/dark conflicts in docs-facing shared styles.

### Phase 4. Validation
- Verify both themes on homepage, `What's New`, docs pages, search surfaces, and mobile sidebar.
- Run visual QA in desktop and mobile breakpoints.
- Fix any regression where branded surfaces are unreadable or inconsistent between locales.

## Acceptance Criteria
1. The desktop navbar includes a working theme toggle.
2. The mobile hamburger menu includes a working theme toggle below the language toggle.
3. Theme choice persists across route changes and page reloads.
4. The site defaults to light mode when no stored preference exists.
5. The homepage retains its current composition and cinematic structure in both themes.
6. The `What's New` page retains its current structure in both themes.
7. Docs pages, sidebar, navbar, footer, and search surfaces render coherently in both themes.
8. The implementation removes the current configuration and CSS behavior that effectively disables meaningful dark mode.
9. Keyboard users can reach and operate the toggle in both desktop and mobile contexts.
10. No page reload is required to switch themes.
11. The implementation does not introduce heavy runtime dependencies or visually expensive effects.
12. English and Japanese locale flows continue to work without layout breakage.

## Open Questions
- Should first-visit behavior remain fixed to `light`, or should a later iteration honor OS `prefers-color-scheme` before a user has made an explicit choice?
- Should theme analytics be included in v1, or deferred to keep scope focused on UX and styling quality?
- Does the team want the desktop control to be icon-only, icon + label, or segmented `Light / Dark` text? Recommendation: compact icon + label on desktop, labeled control in mobile sidebar.
