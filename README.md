# BNTP: Bookmarks in New Tab Page

> Fork of [int128/bntp](https://github.com/int128/bntp) with UI improvements.

This is an extension for Chrome, providing the New Tab Page with bookmarks and recently visited sites.

## Changes from upstream

- Full-width folder headings (no longer grid items)
- Responsive bookmark grid layout (adapts columns to viewport width)
- Page content positioned at 1/4 from top instead of default flow
- Centered layout with 1200px max-width
- Rounded bookmark buttons, removed hover shadow
- Responsive folder indentation and header on narrow viewports

## Architecture

- Chrome extension
- React
- TypeScript
- Biome
- Storybook

## Development

### Load the extension in Chrome

To watch and build the extension:

```sh
pnpm run dev
```

To add the extension to Chrome:

1. Open chrome://extensions/
1. Click "Load unpacked" button
1. Select `dist` directory of this project
1. Open a new tab

### Test

```sh
pnpm run test
pnpm run test-storybook
```

### Release

To build the extension for production:

```sh
pnpm run build
```

Create a new release tag.
GitHub Actions will build a package for production as `dist.zip` archive.
