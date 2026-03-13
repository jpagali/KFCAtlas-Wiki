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

This command starts the English Docusaurus development server on `http://localhost:3001/`.

If you want to inspect the Japanese locale directly, use:

```bash
npm run start:ja
```

That starts the Japanese Docusaurus development server on `http://localhost:3002/ja-JP/`.

If you need to verify that both locales are generated correctly, use:

```bash
npm run build
```

and inspect the output in `build/` and `build/ja-JP/`.

To preview the full built site locally, including cross-locale navigation between English and Japanese, use:

```bash
npm run preview
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

1. Push changes to `staging` for review/testing.
2. Merge `staging` into `main`.
3. Push `main`.
4. GitHub Actions deploys the site to GitHub Pages automatically.
