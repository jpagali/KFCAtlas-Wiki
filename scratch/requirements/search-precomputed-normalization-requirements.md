# Search Optimization Requirements

## Title
Precompute Normalized Search Fields for Faster Query-Time Scoring

## Status
Draft

## Context
The current search flow normalizes record content at query time. For every user input change, the search component repeatedly normalizes:

- title
- headings
- body

This means the cost of search grows with both the number of records and the amount of text in each record.

## Problem Statement
Search should not repeatedly normalize large text fields on every input event. Normalized search fields should be precomputed once and reused during query-time scoring.

## Goal
Shift normalization work away from the hot user-input path so that query-time search primarily performs matching and ranking against already normalized values.

## Non-Goals
- Replacing the current search UX
- Replacing the scoring model entirely
- Introducing third-party search infrastructure
- Changing result layout or copy
- Adding server-side search

## Users
- Portal readers using global search
- Internal maintainers extending search behavior

## Success Criteria
- Search records have precomputed normalized fields available before the user starts typing.
- Query-time scoring no longer normalizes large title, heading, or body fields per record.
- Search remains behaviorally consistent from the user perspective.
- Search responsiveness improves or remains stable as the documentation corpus grows.

## Functional Requirements

### FR1. Precomputed Search Data
Normalized forms of searchable text must be computed ahead of query-time scoring.

### FR2. Query-Time Reuse
The search component must score records using the precomputed normalized fields rather than recalculating them for each query.

### FR3. Current Search Semantics Preserved
The refactor must preserve current behavior for:

- locale filtering
- title matching
- heading matching
- body matching
- result ordering
- result count limits

### FR4. Compatible Data Source
Precomputed normalized fields must be available either:

- in the generated search index file, or
- as a one-time normalization step immediately after index fetch

### FR5. Safe Fallbacks
The implementation must handle missing or malformed fields without breaking search.

## Performance Requirements

### PR1. Remove Redundant Normalization
Large text fields must not be repeatedly normalized inside the per-record query scoring path.

### PR2. Fast Input Response
Typing in the search input should remain responsive as the index grows.

### PR3. Scalable Growth
Search cost should scale more predictably with corpus size by moving expensive normalization out of the tight interaction loop.

### PR4. No Duplicate Query-Time Work
The search flow should avoid repeated normalization of the same record data across successive keystrokes.

## Implementation Options

### Option A. Precompute in `generate-search-index.mjs`
Add normalized fields to each record during static index generation.

Pros:
- Best runtime performance
- Keeps hot path lean
- Makes search data self-contained

Cons:
- Slightly larger search index payload

### Option B. Normalize Once After Fetch
Fetch the current search index, then enrich it once in the client before storing it in state.

Pros:
- Smaller build-time change
- Easier incremental rollout

Cons:
- Still pays normalization cost in the browser
- Slight delay before search becomes ready

## Recommended Option
Option A: precompute normalized fields during `generate-search-index.mjs`.

Reasoning:
- It moves work fully out of the interactive path.
- It keeps search behavior deterministic.
- It is the best fit for a static docs portal.

## Acceptance Criteria

1. Search records expose precomputed normalized search fields.
2. Query scoring no longer calls normalization on record title, headings, and body for every search.
3. Result quality remains materially the same.
4. Locale filtering still works.
5. The maximum result behavior remains unchanged.
6. Search remains resilient when the index is missing optional fields.

## Risks
- Larger index payload if normalized fields duplicate existing content.
- If normalization rules differ between build-time and query-time expectations, ranking can shift unexpectedly.
- Search relevance may change slightly if normalization is not made fully equivalent.

## Open Questions
- Should normalized data be stored as separate fields or replace raw searchable fields for runtime matching?
- Do we want to keep raw body text in the index if it is only used for search and not display?
- Should we also pre-split token-friendly variants to reduce query-time work further?

## Recommendation
Precompute normalized fields in the generated index and treat them as search-only internals. That keeps the runtime path simple, reduces repeated string work, and gives the search component room to scale with the docs corpus.
