# Technical Spec

## Title
Technical Requirements for a Shared Editor Model on the Contribute Page

## Status
Draft

## Objective
Define the technical shape of a refactor where `editorHtml` is parsed once and all derived outputs are generated from that shared parsed representation.

## Current State Summary
The contribute page currently derives three major outputs from `editorHtml` through separate parsing flows:

- Markdown export path
- Preview rendering path
- Linked image extraction path

This creates duplicate parsing, duplicate traversal logic, and coupling between UI rendering and transformation logic.

## Desired Architecture
The page should move to a pipeline shaped like this:

1. Raw editor state: `editorHtml`
2. Single parse step
3. Shared editor model
4. Derived selectors/builders:
   - markdown output
   - preview output
   - linked image metadata

## Architectural Requirements

### AR1. Single Parse Boundary
There must be exactly one authoritative parse boundary for `editorHtml` in the contribute page flow.

### AR2. Shared Intermediate Representation
The parse step must output a shared representation suitable for multiple downstream consumers.

### AR3. Pure Derivations
Markdown generation, preview building, and image extraction should be implemented as pure derivations from the shared representation whenever possible.

### AR4. UI Independence
The shared model should not depend on React component state beyond the raw editor input and image-status state.

### AR5. Incremental Readability
The refactor should reduce component complexity in the page file rather than concentrating more opaque logic there.

## Candidate Model Options

### Option A. Shared DOM Document
Parse `editorHtml` into a single browser `Document` or root element and pass that through dedicated derivation helpers.

Pros:
- Lowest migration cost
- Closest to current implementation
- Easy to adopt incrementally

Cons:
- DOM traversal logic can remain loosely structured
- Still somewhat tied to browser parsing behavior

### Option B. Normalized Editor AST
Parse HTML once, then normalize it into a lightweight block/inline structure used by all derivations.

Pros:
- Strongest separation of concerns
- Best long-term maintainability
- Simplest to test deeply

Cons:
- Higher upfront refactor cost
- More implementation decisions required

### Option C. Hybrid Model
Parse once into DOM, then produce a lightweight normalized model containing only the needed semantics:

- blocks
- text runs
- links
- images
- tables
- lists

Pros:
- Balanced complexity
- Better maintainability than direct DOM reuse
- Lower cost than a full editor AST

Cons:
- Still requires careful mapping rules

## Recommended Option
Option C: a hybrid model.

Reasoning:
- It solves the repeated parsing problem.
- It keeps scope appropriate for the current codebase.
- It creates a cleaner foundation without forcing a full editor rewrite.

## Data Requirements
The shared editor model should be able to represent:

- headings
- paragraphs
- strong/emphasis
- blockquotes
- links
- images with `src` and `alt`
- ordered and unordered lists
- list items
- code spans and code blocks
- horizontal rules
- tables, rows, and cells
- plain text nodes

## Derivation Requirements

### DR1. Markdown Builder
Markdown output must consume the shared model and preserve existing export behavior as closely as possible.

### DR2. Preview Builder
Preview output must consume the shared model and preserve current rendered structure and image callbacks.

### DR3. Image Extractor
Image metadata must consume the shared model and return the image references needed for readiness tracking.

### DR4. Shared Semantics
If a content rule changes, such as how tables or code blocks are interpreted, the change should happen in one place and affect all derived outputs consistently.

## State Management Requirements

### SR1. Editor Content State
`editorHtml` remains the canonical editable content state.

### SR2. Derived State
The parsed model and its derived outputs should be memoized or otherwise computed from `editorHtml` in a way that prevents duplicate parse work.

### SR3. Non-Content State Isolation
Changes to metadata, modal visibility, preview visibility, and download state should not force redundant reparsing of editor content.

### SR4. Image Status Merge
The linked image list must remain compatible with separately tracked image load/error state.

## Implementation Constraints
- Do not change the visible contribute-page workflow as part of this refactor.
- Do not swap out `contentEditable` in the first pass.
- Do not add backend dependencies.
- Do not require server-side parsing to make the page work.

## Acceptance Criteria

1. The contribute page has one parsing entry point for `editorHtml`.
2. The component no longer instantiates separate `DOMParser` flows for markdown, preview, and linked images.
3. All three derived outputs are traceable back to the same shared representation.
4. The refactor decreases logic duplication in the page component.
5. The result is easier to unit test than the current implementation.

## Suggested Validation Plan

### Functional Validation
- Confirm toolbar actions still produce correct preview and markdown output.
- Confirm template switching still resets content correctly.
- Confirm markdown download content matches the current behavior.
- Confirm linked image readiness still updates correctly.

### Performance Validation
- Compare typing responsiveness before and after on:
  - a short article
  - a medium article with lists and tables
  - a long article with multiple images and code blocks

### Regression Validation
- Verify empty content does not break export or preview.
- Verify malformed or partial HTML does not crash the page.
- Verify duplicate image URLs behave as expected.

## Out of Scope
- Rich text editor replacement
- Collaborative editing
- Autosave
- Schema validation for article structure
- Visual redesign of the contribute page

## Decision Needed Before Implementation
Choose the representation:

- Shared DOM model for the fastest refactor
- Hybrid normalized model for the best tradeoff
- Full AST only if we expect the editor to grow significantly beyond current scope
