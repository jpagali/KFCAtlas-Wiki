# Home Page Requirements

## Title
Reduce Home Page Render Overhead and Remove the Animated Store Counter

## Status
Draft

## Context
The current home page includes:

- a timer-driven animated store counter
- a large number of inline style objects created during render
- a mostly static marketing layout that rerenders more often than necessary

The page is visually strong, but its implementation currently spends render budget on decorative behavior that does not add meaningful product value.

## Problem Statement
The home page should behave like a mostly static landing page, but it currently rerenders every 4 seconds because of the animated counter. The page also creates many inline style objects on each render, which adds unnecessary work and makes the component harder to maintain.

## Goal
Simplify the home page implementation so it:

- removes the animated counter behavior
- avoids unnecessary recurring rerenders
- reduces render-time object churn
- preserves the current page structure and content intent

## Non-Goals
- Redesigning the page
- Changing the page information architecture
- Changing copy unless needed for the removed animation
- Replacing the search experience
- Changing navigation targets

## Users
- Readers landing on the Knowledge Center home page
- Maintainers editing the page structure and styling

## Success Criteria
- The home page no longer updates itself on an interval.
- The animated store-count behavior is removed.
- The page becomes effectively static unless user interaction or locale changes require rerendering.
- Styling becomes easier to maintain and less coupled to render-time object creation.

## Functional Requirements

### FR1. Remove Counter Animation
The animated or incrementing store counter must be removed.

### FR2. Preserve Static Messaging
The stats section may continue to show a store count, but it should be rendered as static content rather than simulated live growth.

### FR3. Preserve Current Page Sections
The page should retain its current major sections:

- hero
- search
- stats bar
- markets banner
- section cards

### FR4. Preserve Current Navigation
Existing CTA links and search entry points must remain intact.

### FR5. Preserve Locale Support
English and Japanese versions of the page must continue to work correctly.

## Performance Requirements

### PR1. No Timer-Driven Rerenders
The home page must not use an interval or similar recurring timer to update decorative UI.

### PR2. Static-First Rendering
The page should render as a mostly static component unless:

- locale changes
- search state changes in child components
- user navigation triggers a new render

### PR3. Reduced Render-Time Object Churn
The implementation should reduce render-time recreation of large inline style objects where practical.

### PR4. Maintain Fast Initial Load
The simplification must not introduce heavier client-side logic than the current implementation.

## Maintainability Requirements

### MR1. Styling Separation
Presentational styling should move toward CSS modules, shared class names, or other static style definitions instead of being heavily embedded inline in JSX.

### MR2. Easier Content Editing
The page should remain easy to update for copy and content changes without requiring style edits across many JSX nodes.

### MR3. Clear Static Content Model
Page data such as stats, sections, and markets should remain easy to reason about and should not depend on fake live behavior.

## Acceptance Criteria

1. The animated store counter is removed.
2. The page no longer uses `setInterval` or equivalent recurring animation logic.
3. The stats bar still renders correctly with static content.
4. The page keeps its current sections and CTA destinations.
5. The implementation reduces unnecessary render work compared with the current version.
6. Locale-specific content continues to work.

## Risks
- If styling is moved too aggressively in the same change, the page could regress visually.
- If the static replacement for the counter is unclear, stakeholders may feel a perceived loss of energy in the hero/stats area.

## Open Questions
- Should the store count remain visible as a fixed value, or should that stat be replaced with a different static metric?
- Should this change only remove the interval first, or also include a broader styling cleanup in the same pass?

## Recommendation
Remove the animated counter entirely and treat the page as static-first. If desired, keep the store metric as a fixed number. Then progressively reduce inline styling in favor of CSS-backed presentation so the component is cheaper to render and easier to maintain.
