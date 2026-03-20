# Upgrade & Publish Guide

This document explains every change made to modernise the project from the old
Vue 2 / Vue CLI setup to a modern **Vue 3 + Vite** npm library, and walks you
through publishing it to npm.

---

## What Changed and Why

### 1. Vue 2 → Vue 3

| Before | After |
|---|---|
| `vue@^2.6` | `vue@^3.4` |
| `new Vue({ … }).$mount('#app')` | `createApp(App).mount('#app')` |
| Options API with `data()`, `computed`, `methods` | Composition API with `<script setup>` |
| `vue-template-compiler` (must match Vue version) | Built into `@vitejs/plugin-vue` |

**Why:** Vue 2 reached end-of-life in December 2023. Vue 3 ships the Composition
API, better TypeScript support, and tree-shaking improvements that matter for a
library.

### 2. Vue CLI → Vite

| Before | After |
|---|---|
| `@vue/cli-service@^3` | `vite@^5` + `@vitejs/plugin-vue@^5` |
| `vue-cli-service serve` | `vite` |
| `vue-cli-service build --target lib` | `vite build` (library mode in `vite.config.js`) |

**Why:** Vue CLI is in maintenance mode. Vite is dramatically faster (native ESM
dev server, no bundling on the fly) and has first-class library build support.

### 3. `$parent` access removed — replaced with `provide` / `inject`

This is the most significant internal change.

**Old pattern (every child component):**
```js
data() {
  return { radius: this.$parent.radius }
}
```

This is fragile: it breaks if a component is nested inside another wrapper, and
it is explicitly discouraged in Vue 3.

**New pattern:**

`SmithChart.vue` (parent) calls:
```js
provide('smithChartRadius', () => props.radius)
```

Every child component (`SmPoint`, `SmResCircle`, `SmReactArc`, `SmVswrCircle`,
etc.) calls:
```js
const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())
```

`radius` is now a reactive computed value — if the `radius` prop on
`<SmithChart>` changes, all children update automatically.

### 4. Component filenames

Old: `smith-chart.vue`, `sm-point.vue` (kebab-case)
New: `SmithChart.vue`, `SmPoint.vue` (PascalCase)

This matches Vue 3 conventions and makes auto-imports easier with tools like
`unplugin-vue-components`.

### 5. `lang="html"` removed from `<template>` tags

`lang="html"` was a no-op even in Vue 2. Removed to avoid warnings.

### 6. Library entry point (`src/index.js`)

A dedicated entry exports every component both as named exports (tree-shakeable)
and as a Vue plugin:

```js
// Named — tree-shakeable
import { SmithChart, SmPoint } from 'vue-smith-chart'

// Plugin — registers everything globally
import VueSmithChart from 'vue-smith-chart'
app.use(VueSmithChart)
```

### 7. `package.json` restructured

Key additions:
- `"private": true` removed so the package can be published
- `"type": "module"` — the package is pure ESM
- `"main"` → UMD build (CommonJS/browser `<script>` compatible)
- `"module"` → ES module build (for bundlers)
- `"exports"` → conditional exports for modern Node/bundler resolution
- `"files"` → only `dist/` and `src/` are shipped; `node_modules`, dev files stay out
- `"peerDependencies"` → Vue 3 is listed as a peer, not a dependency, so
  consumers don't end up with two copies of Vue
- All old CLI devDependencies replaced with Vite equivalents

---

## Running Locally

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # build the library to dist/
npm run preview  # preview the built output
```

---

## Publishing to npm — Step by Step

### Step 1: Create an npm account

Go to https://www.npmjs.com and sign up (free).

### Step 2: Log in from the terminal

```bash
npm login
# Enter your username, password, and email when prompted
# If you have 2FA enabled, you'll be prompted for your OTP as well
```

### Step 3: Choose a package name

Check that your desired name is available:

```bash
npm search vue-smith-chart
# or check https://www.npmjs.com/package/vue-smith-chart
```

If the name is taken, prefix with your npm username:
```bash
# In package.json change "name" to:
"name": "@your-username/vue-smith-chart"
```

For scoped packages, publish with:
```bash
npm publish --access public
```

### Step 4: Set the version

Semantic versioning (`MAJOR.MINOR.PATCH`):
- `1.0.0` — first stable release
- `1.0.1` — bug fix
- `1.1.0` — new feature, backwards compatible
- `2.0.0` — breaking changes

```bash
# Manually edit package.json, or use npm version:
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
```

`npm version` automatically creates a git tag.

### Step 5: Build

Always build before publishing to make sure `dist/` is up to date:

```bash
npm run build
```

Vite produces:
```
dist/
  vue-smith-chart.js        ← ES module build
  vue-smith-chart.umd.cjs   ← UMD / CommonJS build
  style.css                 ← extracted component styles
```

### Step 6: Verify what will be published

```bash
npm pack --dry-run
```

This lists every file that would be included. Check that:
- `dist/` files are present
- No `node_modules`, `.env`, or secret files appear

### Step 7: Publish

```bash
npm publish
# For scoped packages:
npm publish --access public
```

### Step 8: Verify

```bash
npm info vue-smith-chart
```

Or visit `https://www.npmjs.com/package/vue-smith-chart`.

---

## How Consumers Use the Package

### Install

```bash
npm install vue-smith-chart
```

### Plugin registration (global components)

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import VueSmithChart from 'vue-smith-chart'
import 'vue-smith-chart/style.css'

createApp(App).use(VueSmithChart).mount('#app')
```

```html
<!-- Any component in your app -->
<SmithChart>
  <SmPoint :res="1" :react="0.5" fill="red" />
  <SmVswrCircle :res="1" :react="0.5" stroke="blue" />
</SmithChart>
```

### Per-component import (tree-shakeable)

```html
<script setup>
import { SmithChart, SmPoint, SmResCircle } from 'vue-smith-chart'
import 'vue-smith-chart/style.css'
</script>

<template>
  <SmithChart :radius="300">
    <SmPoint :res="0.5" :react="0.5" fill="purple" />
    <SmResCircle :res="0.5" :crop="1" fill="rgba(255,0,255,0.3)" />
  </SmithChart>
</template>
```

### CDN (no bundler)

```html
<link rel="stylesheet" href="https://unpkg.com/vue-smith-chart/dist/style.css">
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/vue-smith-chart/dist/vue-smith-chart.umd.cjs"></script>

<div id="app">
  <smith-chart>
    <sm-point :res="1" :react="0" fill="red"></sm-point>
  </smith-chart>
</div>

<script>
  const { createApp } = Vue
  createApp({}).use(VueSmithChart).mount('#app')
</script>
```

---

## Updating the Package Later

1. Make your changes in `src/`
2. Bump the version: `npm version patch|minor|major`
3. Build: `npm run build`
4. Publish: `npm publish`
5. Push tags: `git push --follow-tags`

---

## Automating with GitHub Actions (optional)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Set `NPM_TOKEN` in your GitHub repository → Settings → Secrets.
