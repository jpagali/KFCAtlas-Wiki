# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
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
