---
title: Deployment Runbook
---

# Deployment Runbook

This repo should follow a `staging` first, `main` second promotion model.

## Default Rule

- `staging` is the first landing zone for user-facing changes.
- `main` should only receive changes that have already been verified on `staging`.
- If a change is not yet stable in staging or cloud validation is still pending, do not promote it to `main`.

## Standard Workflow

1. Commit the change onto `staging` or cherry-pick it there first.
2. Push `staging`.
3. Verify the staging state:
   - run `npm run build`
   - preview locally when the change affects routing, localization, or UI state
   - confirm any cloud or environment-specific checks are green
4. After staging is stable, promote the same commit to `main`
5. Update release notes during the `main` promotion step unless the note is explicitly meant for staging-only visibility
6. Push `main`

## Promotion Rules

- Prefer promoting the exact verified commit from `staging` into `main`
- Avoid making a new ad hoc fix directly on `main` if the original change has not been proven on `staging`
- If `main` accidentally gets a local-only commit first, reset local `main` back to `origin/main` and promote from `staging` instead

## Release Notes

- User-visible release notes belong with the `main` promotion by default
- If staging needs its own internal breadcrumb, keep it brief and do not present it like a production launch
- When a change affects both English and Japanese experiences, update both locales together before promotion

## Quick Checklist

- Change is on `staging`
- `staging` build passed
- Staging behavior was spot-checked where needed
- Release notes are ready
- Promotion target is `main`
- Only after that should production deploy be triggered
