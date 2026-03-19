# Contribute Page Requirements

## Title
Single-Parse Editor Pipeline for the Contribute Page

## Status
Draft

## Context
The current contribute page computes multiple derived outputs from `editorHtml` independently:

- Markdown export
- Preview rendering
- Linked image extraction and health tracking

Each of these paths reparses the editor HTML separately. That creates unnecessary repeated work, increases render cost as content grows, and makes the page harder to maintain because multiple pieces of logic must stay in sync.

## Problem Statement
The contribute page should parse `editorHtml` once per meaningful content change and derive all secondary outputs from that single parsed representation.

Today the page performs redundant DOM parsing and traversal work, which creates three risks:

1. Typing performance will degrade as article size grows.
2. Different outputs may drift because they are derived by separate parsing paths.
3. The code is harder to reason about, test, and extend.

## Goal
Introduce a single editor-derived model that is generated once from `editorHtml` and used to power:

- Markdown generation
- Preview rendering
- Linked image collection and status display

## Non-Goals
- Replacing the editor UX
- Replacing `contentEditable`
- Changing toolbar behavior
- Changing article templates
- Changing submission flow
- Changing copy, styling, or visual layout
- Migrating to a full rich text editor framework

## Users
- Internal contributors writing Knowledge Center content
- Reviewers validating export quality and image readiness

## Success Criteria
- `editorHtml` is parsed only once for each meaningful change to the editor content.
- Markdown, preview, and linked image data all derive from the same parsed source.
- The contribute page preserves current behavior from a user perspective.
- Large articles feel no worse while typing, and ideally feel more responsive.
- Future output formats can be added without reintroducing repeated parsing logic.

## Functional Requirements

### FR1. Single Parsed Source
The page must create one parsed representation from `editorHtml` whenever the editor content changes.

### FR2. Shared Derived Outputs
The parsed representation must be the single source used to derive:

- Exported markdown
- Preview node structure
- Linked image list
- Any other editor-content-derived metadata added later

### FR3. Consistent Output
Preview, markdown export, and linked image reporting must stay logically consistent because they are generated from the same parsed source.

### FR4. Behavior Preservation
The page must preserve current end-user behavior for:

- Editing content
- Toolbar actions
- Template application
- Preview toggling
- Markdown download
- Email draft flow
- Image readiness messaging

### FR5. Image Tracking Compatibility
The linked image list produced by the shared parsed representation must continue to support per-image readiness state such as `pending`, `loaded`, and `error`.

### FR6. Safe Empty-State Handling
The derived model must safely handle:

- Empty editor content
- Invalid or partial HTML generated during editing
- Content without images
- Content without headings
- Content containing tables, lists, links, code blocks, and blockquotes

## Performance Requirements

### PR1. Single Parse per Change
The system must avoid reparsing the same `editorHtml` multiple times within the same render/update cycle.

### PR2. Efficient Derivation
Derived outputs should reuse the parsed model rather than rebuilding DOM documents independently.

### PR3. Predictable Scaling
Performance should scale with content size in a linear and understandable way, without avoidable duplicate traversals.

### PR4. No New Per-Render Heavy Work
The refactor must not introduce new expensive work on unrelated state changes such as:

- Modal open/close
- Downloaded state updates
- Preview visibility toggles
- Image status updates
- Metadata field edits

## Technical Requirements

### TR1. Editor Model
Introduce a small internal editor-derived model or document abstraction that captures the parsed structure needed for all outputs.

### TR2. Separation of Concerns
Parsing should be distinct from derivation. The implementation should make it clear where:

- HTML is parsed
- parsed content is normalized
- markdown is derived
- preview output is derived
- image data is derived

### TR3. Extensibility
The model should support future derived outputs without requiring another full parse pass.

### TR4. Testability
The parsing and derivation logic should be structured so it can be tested independently of the page component.

### TR5. Client Safety
The implementation must continue to behave safely in the browser-only context already used by the contribute page.

## Acceptance Criteria

1. A single editor-content parsing step exists for `editorHtml`.
2. Markdown export no longer creates its own independent parse pass.
3. Preview rendering no longer creates its own independent parse pass.
4. Linked image extraction no longer creates its own independent parse pass.
5. The user-facing output is materially unchanged.
6. The page remains functional when preview is open or closed.
7. Download and email actions still operate on the same article content.
8. Existing image readiness behavior still works.

## Risks
- Refactoring without a clear intermediate model could just move complexity around.
- Preview rendering and markdown export may currently rely on subtle differences in traversal behavior.
- `contentEditable` can produce inconsistent markup, so the shared parser must be tolerant.

## Open Questions
- Should the shared model be a parsed DOM tree, a normalized intermediate AST, or a lightweight custom document object?
- Should markdown derivation and preview derivation each traverse the shared model separately, or should some normalized blocks be precomputed?
- Do we want image extraction to include duplicate image URLs once or preserve every occurrence?

## Recommendation
Use a lightweight intermediate editor model rather than letting three features operate directly on raw parsed DOM independently. That keeps the refactor small, improves performance, and gives the page a cleaner foundation for future enhancements.
