# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
npm run start
```

This command builds the site and serves the generated output on `http://localhost:3001/`.

It is the recommended local workflow when you want one-port testing with both English and Japanese available in the same site instance.

If you want the locale-specific development servers for editing work, use:

```bash
npm run start:dev-en
npm run start:dev-ja
```

Those start locale-specific Docusaurus development servers on:
- English on `http://localhost:3001/`
- Japanese on `http://localhost:3002/ja-JP/`

If you want the same built-site preview on a separate port instead of `npm start`, use:

```bash
npm run preview
```

This serves both locales together on `http://localhost:3005/`.

If you need to verify that both locales are generated correctly, use:

```bash
npm run build
```

and inspect the output in `build/` and `build/ja-JP/`.

To preview the full built site locally, including cross-locale navigation between English and Japanese, use:

```bash
npm run start
```

This serves the generated `build/` output from one port, which is the recommended way to test EN/JP switching because it includes both `/` and `/ja-JP/` in the same site instance.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This site is deployed to GitHub Pages via GitHub Actions.

Production deploys run automatically when changes are pushed to the `main` branch.

The workflow is defined in `.github/workflows/deploy-gh-pages.yml` and will:

```bash
npm ci
npm run build
```

Then publish the generated `build` output to GitHub Pages.

## Release Flow

Default promotion order:

1. Land the change on `staging` first.
2. Run verification there:
   `npm run build`, local preview if needed, and any cloud-stability checks.
3. Once `staging` looks good, promote the same change to `main`.
4. Update release notes as part of the `main` promotion unless the change needs a staging-only note.
5. Push `main`.
6. GitHub Actions deploys the site to GitHub Pages automatically.

See [docs/deployment-runbook.md](docs/deployment-runbook.md) for the detailed staging-first workflow.
