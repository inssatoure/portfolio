# Portfolio Site

This is a portfolio site built with Next.js frontend and Sanity CMS backend.

## Project Structure

The repository is organized as a monorepo with frontend and backend directories.

## Frontend - Next.js

The usual commands in the `frontend` dir:

```bash
# Build, useful for checking if you have deploy-blocking issues
yarn build
# Work on the site
yarn dev
```

## Backend - Sanity

In the `backend` dir:

```bash
# Start development server
yarn dev
# Deploy changes
yarn deploy
# Build production version
yarn build

# Generate types for cross-stack type-safety
# Run this after editing the schema to update frontend types
yarn build:types
```

# Dev

Its a "monorepo" (sorta?) with a frontend and backend dir. I like em together so I can easily facilitate typesafety and version changes that are tightly coupled.

## Frontend - Next.js

TODO: Probably Astro would be better for this site, since I only really SSG a single page in the MVP. (Technically, I opened up endpoints for each 3D scene, but those are really only meant for dev convenience. I dont think I want users drilling into a particular scene directly.) And I'm totally abusing `_app`. I'm entertaining a few future features, though, for which Next.js might come in handy... So iunno. It's fine for now.

The usual commands in the `frontend` dir:

```bash
# Build, useful for checking if you have deploy-blocking issues
yarn build
# Work on the site
yarn dev
```

## Backend - Sanity

IMPORTANT: Don't forget to generate types if you change the Sanity schema! See below.

In the `backend` dir:

```bash
# Basically I aliased the sanity CLI commands:
yarn dev
yarn deploy
yarn build

# Codegen for cross-stack type-safety,
# run this any time you edit the schema
# to generates types used in the frontend code.
yarn build:types
```
