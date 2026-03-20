# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-03-20

This release is a full rewrite targeting Vue 3. It is **not** backwards
compatible with the Vue 2 `0.x` series. See [UPGRADE.md](./UPGRADE.md) for a
detailed migration guide.

### Added

- **Library entry point** (`src/index.js`) — exports every component as a named
  export for tree-shakeable usage and as a default Vue plugin (`app.use(…)`)
  that registers all components globally.
- **Vite library mode** (`vite.config.js`) — produces an ES module build
  (`dist/vue-smith-chart.js`) and a UMD/CommonJS build
  (`dist/vue-smith-chart.umd.cjs`) from a single `npm run build` command.
- **`package.json` `exports` field** — enables correct ESM/CJS resolution in
  modern Node.js and bundlers without any configuration on the consumer side.
- **`package.json` `files` field** — limits the published package to `dist/`
  and `src/`; no build tools, lock files, or dev assets are shipped to npm.
- **`peerDependencies`** — declares `vue@^3.0.0` as a peer so consumers are
  never bundled with two copies of Vue.
- **`index.html`** — Vite dev server entry point replacing the old
  `public/index.html`.
- `UPGRADE.md` — comprehensive guide covering every breaking change and a
  step-by-step npm publish walkthrough.

### Changed

- **Vue 2 → Vue 3.** All components are rewritten using the Composition API
  with `<script setup>`. The Options API (`data()`, `methods`, `computed`) is
  no longer used anywhere in the library.
- **`$parent.radius` → `provide` / `inject`.** `SmithChart` now calls
  `provide('smithChartRadius', () => props.radius)`. All child components
  inject this getter and wrap it in a `computed`, making `radius` fully reactive
  and independent of component tree depth.
- **Build tooling: Vue CLI → Vite.** `@vue/cli-service`, `babel-eslint`, and
  `vue-template-compiler` are removed. `vite` and `@vitejs/plugin-vue` replace
  them entirely.
- **`new Vue(…).$mount` → `createApp(App).mount`.** `src/main.js` updated to
  the Vue 3 application factory API.
- **Component filenames renamed to PascalCase** (`smith-chart.vue` →
  `SmithChart.vue`, etc.) to match Vue 3 conventions and enable automatic
  component resolution with tools like `unplugin-vue-components`.
- **`lang="html"` removed** from all `<template>` tags (it was a no-op).
- **`SmVswrCircle`** — VSWR radius is now computed from the correct distance
  formula rather than delegating to an internal `SmPoint` for the calculation.
- **`package.json` `version`** bumped from `0.1.0` to `1.0.0`.
- **`package.json` `private`** removed so the package can be published to npm.
- `devDependencies` updated to current stable versions across the board.

### Removed

- `core-js` — no longer needed; Vite targets evergreen browsers by default and
  does not require manual polyfill configuration for a library build.
- `@vue/cli-service`, `@vue/cli-plugin-babel`, `@vue/cli-plugin-eslint` — all
  replaced by Vite.
- `babel-eslint` — replaced by the ESLint parser bundled with `eslint-plugin-vue`.
- `vue-template-compiler` — this Vue 2 package has no equivalent in Vue 3; the
  compiler is now embedded in `@vitejs/plugin-vue`.
- `vue-cli-service serve` / `build` / `build-bundle` / `lint` npm scripts —
  replaced by `vite` / `vite build` / `vite preview`.
- `postcss` / `autoprefixer` configuration — not needed for an SVG-only library.
- `browserslist` field — moved to Vite's `build.target` defaults.
- Old kebab-case component files (`smith-chart.vue`, `sm-point.vue`, etc.) —
  superseded by their PascalCase equivalents.

---

## [0.1.0] - 2019-07-04

Initial public release.

### Added

- `<smith-chart>` — root SVG component rendering the full Smith Chart grid with
  thin and thick constant-resistance circles and constant-reactance arcs.
- `:radius` prop (default `400`) to control inner chart size in pixels.
- `:label-rings` prop (default `true`) to toggle the outer wavelength and
  angle-of-reflection rings.
- `:resistance-labels` prop (default `true`) to toggle normalised resistance
  labels along the horizontal axis.
- `:reactance-labels` prop (default `true`) to toggle normalised reactance
  labels along the chart perimeter.
- `<sm-point>` — plots a point at a given normalised impedance (`res`, `react`)
  using SVG `<circle>`. Accepts `r` prop and all native SVG circle attributes
  (`fill`, `stroke`, etc.).
- `<sm-res-circle>` — draws a constant-resistance circle. Optional `:crop` prop
  masks the portion inside a given reactance arc.
- `<sm-react-arc>` — draws a constant-reactance arc. Optional `:crop` prop masks
  the portion inside a given resistance circle. `:double` prop mirrors the arc
  about the horizontal axis.
- `<sm-vswr-circle>` — draws a constant-VSWR circle centred on the chart,
  passing through the given impedance point. `:show-point` prop (default `true`)
  toggles the accompanying impedance marker.
- UMD bundle (`dist/smithChart.umd.js`) and accompanying CSS
  (`dist/smithChart.css`) for direct `<script>` tag usage without a bundler.
- Interactive development tool (`tool.html`) for visually building chart
  overlays and generating the corresponding component markup.

### Fixed

- Negative reactance points rendered at the wrong vertical position.

[Unreleased]: https://github.com/germi/vue-smith-chart/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/germi/vue-smith-chart/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/germi/vue-smith-chart/releases/tag/v0.1.0
