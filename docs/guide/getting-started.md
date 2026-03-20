# Getting Started

## Prerequisites

- Node.js 18 or later
- Vue 3

## Installation

::: code-group

```bash [npm]
npm install vue-smith-chart
```

```bash [pnpm]
pnpm add vue-smith-chart
```

```bash [yarn]
yarn add vue-smith-chart
```

:::

## Usage

### Plugin (global registration)

Register all components at once in `main.js`. They will be available globally in every template.

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueSmithChart from 'vue-smith-chart'

createApp(App).use(VueSmithChart).mount('#app')
```

```html
<!-- Any .vue file -->
<SmithChart>
  <SmPoint :res="1" :react="0.5" fill="red" />
</SmithChart>
```

### Per-component import (tree-shakeable)

Import only what you need. Bundlers will drop the rest.

```html
<script setup>
import { SmithChart, SmPoint, SmVswrCircle } from 'vue-smith-chart'
</script>

<template>
  <SmithChart :radius="350">
    <SmPoint :res="0.5" :react="0.8" fill="#42b883" />
    <SmVswrCircle :res="0.5" :react="0.8" stroke="#42b883" />
  </SmithChart>
</template>
```

### CDN (no bundler)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Smith Chart</title>
  </head>
  <body>
    <div id="app">
      <smith-chart>
        <sm-point :res="1" :react="0.5" fill="red"></sm-point>
      </smith-chart>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/vue-smith-chart/dist/vue-smith-chart.umd.cjs"></script>
    <script>
      const { createApp } = Vue
      createApp({}).use(VueSmithChart).mount('#app')
    </script>
  </body>
</html>
```

## Reading a Smith Chart

The Smith Chart normalises impedance to the system characteristic impedance
(typically 50 Ω). A normalised impedance `z = r + jx` maps to:

| Normalised value | Meaning |
| --- | --- |
| `r = 0` | Short circuit (left edge) |
| `r = 1, x = 0` | Perfect match (chart centre) |
| `r → ∞` | Open circuit (right edge) |
| `x > 0` | Inductive (upper half) |
| `x < 0` | Capacitive (lower half) |

All `res` and `react` props in this library use these normalised values.

## Next steps

- Explore the [component reference](/components/smith-chart) for all props and options.
- Use [`<SmVswrCircle>`](/components/sm-vswr-circle) to visualise the VSWR of a load.
- Use [`<SmResCircle>`](/components/sm-res-circle) and [`<SmReactArc>`](/components/sm-react-arc) to highlight matching paths.
