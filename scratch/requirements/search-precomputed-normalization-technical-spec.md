# Technical Spec

## Title
Technical Requirements for Precomputed Search Normalization

## Status
Draft

## Objective
Define a technical approach for moving normalization work out of query-time search scoring and into a precomputation step.

## Current State Summary
The search component currently:

1. reads raw search records
2. normalizes record fields during scoring
3. repeats that normalization for each query and each record

This creates avoidable CPU work in the most latency-sensitive path: typing into search.

## Desired Architecture
The search pipeline should look like this:

1. source markdown files
2. generated search index with precomputed normalized fields
3. client fetch
4. query normalization
5. scoring against pre-normalized record fields

## Architectural Requirements

### AR1. Pre-Normalized Record Shape
Each searchable record should include normalized fields suitable for direct query matching.

Suggested fields:

- normalized title
- normalized headings text
- normalized body text

### AR2. Single Normalization Rule
The same normalization rules must be used consistently across:

- build-time record preparation
- query normalization in the client

### AR3. Query-Time Lean Path
At query time, the component should only need to:

- normalize the user query
- split query tokens
- compare against pre-normalized fields
- compute scores

### AR4. Backward-Safe Migration
The migration should be compatible with existing search result rendering and URLs.

## Recommended Implementation Strategy

### Strategy
Update [generate-search-index.mjs](/Users/justinpagalilauan/Desktop/kfc-atlas-portal/scripts/generate-search-index.mjs) to add normalized fields to each record at build time.

### Why
- Static site build is the right place for deterministic preprocessing.
- Search responsiveness benefits most when the browser avoids repeated large-string normalization.
- The change is localized and does not require a search system rewrite.

## Data Model Requirements
Each record should continue to contain current user-facing fields, and may add internal fields such as:

- `normalizedTitle`
- `normalizedHeadings`
- `normalizedBody`

These fields are intended for scoring only and should not be displayed directly in the UI.

## Logic Requirements

### LR1. Build-Time Normalization
Normalization of record text must happen once during search-index generation.

### LR2. Query Normalization
The search component should still normalize the user-entered query at runtime.

### LR3. Locale Filtering
Locale filtering should happen before or during scoring, without changing current behavior.

### LR4. Stable Ranking
The scoring model should continue to prioritize:

- strong title matches
- heading matches
- body matches
- token presence

### LR5. Resilience
If a normalized field is unexpectedly missing, search should fail soft rather than crash.

## Performance Requirements

### PR1. No Per-Record Raw Normalization in Scoring
The scoring function must not normalize raw title, heading, or body strings inside the hot path.

### PR2. Bounded Query-Time Work
Per-query work should mainly consist of string inclusion checks and sorting on already prepared fields.

### PR3. Acceptable Payload Tradeoff
The increase in `search-index.json` size should be considered acceptable relative to the reduction in interactive CPU cost.

## Validation Plan

### Functional Validation
- Search the same representative queries before and after the refactor.
- Confirm top results are unchanged or intentionally improved.
- Confirm English and Japanese locale results still isolate correctly.

### Performance Validation
- Measure typing responsiveness on a cold page load.
- Measure responsiveness after the full index is loaded.
- Test with short and long multi-token queries.

### Regression Validation
- Confirm empty query behavior is unchanged.
- Confirm missing body/headings do not break scoring.
- Confirm first-result Enter navigation still works.

## Implementation Constraints
- Do not redesign the search UI in this change.
- Do not introduce a third-party indexing engine in this change.
- Do not require a backend or hosted search service.

## Acceptance Criteria

1. `generate-search-index.mjs` outputs records with normalized search fields, or an explicitly approved equivalent one-time-precompute path exists after fetch.
2. The search component scores using precomputed normalized record fields.
3. Query normalization is still applied to the input text.
4. Search output remains materially consistent for current docs content.
5. Search interaction is lighter on repeated input updates.

## Tradeoff Note
This change intentionally trades a modestly larger static index for lower runtime CPU cost. For a static documentation portal, that is the correct tradeoff unless index size becomes a demonstrated problem.

## Future Extensions
- Precompute token arrays if ranking complexity increases.
- Add lightweight query debouncing or deferred rendering.
- Split the index by locale if payload size becomes significant.
