# vue-smith-chart

Draw a Smith Chart in SVG with Vue 3.

> The Smith Chart is a graphical aid designed for RF/electronics engineers to
> assist in solving transmission line and impedance matching problems.

![Smith Chart in SVG for HTML with Vue.js](readme/chart.png?raw=true "Smith Chart")

## Installation

```bash
npm install vue-smith-chart
```

## Quick Start

Register all components as a Vue plugin:

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import VueSmithChart from 'vue-smith-chart'
import 'vue-smith-chart/style.css'

createApp(App).use(VueSmithChart).mount('#app')
```

Or import individual components (tree-shakeable):

```html
<script setup>
import { SmithChart, SmPoint } from 'vue-smith-chart'
import 'vue-smith-chart/style.css'
</script>
```

## Components

### `<SmithChart>`

The root chart component. Renders an SVG canvas with the full Smith Chart grid.

```html
<SmithChart :radius="400" />
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `radius` | `Number` | `400` | Radius of the inner chart in pixels |
| `labelRings` | `Boolean` | `true` | Show/hide the outer wavelength/angle rings |
| `resistanceLabels` | `Boolean` | `true` | Show/hide resistance labels |
| `reactanceLabels` | `Boolean` | `true` | Show/hide reactance labels |
| `translateX` | `Number` | `100` | Internal SVG offset (leave at default) |
| `rotate` | `Number` | `0` | Rotate the entire chart (degrees) |

---

### `<SmPoint>`

Plot a point at a given impedance (resistance + reactance).

```html
<SmithChart>
  <SmPoint :res="0" :react="0" fill="red" />
  <SmPoint :res="1" :react="0" fill="blue" />
  <SmPoint :res="0.6" :react="0.6" fill="green" r="10" />
</SmithChart>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `res` | `Number\|String` | — | Normalised resistance |
| `react` | `Number\|String` | — | Normalised reactance |
| `r` | `Number\|String` | `5` | Circle radius in pixels |

All SVG `<circle>` attributes (`fill`, `stroke`, etc.) pass through.

---

### `<SmResCircle>`

Draw a constant-resistance circle.

```html
<SmithChart>
  <SmResCircle :res="2" fill="rgba(0,0,255,0.4)" />
  <SmResCircle :res="0.5" :crop="1" fill="rgba(255,0,255,0.4)" stroke="black" stroke-width="2" />
</SmithChart>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `res` | `Number\|String` | — | Normalised resistance value |
| `crop` | `Number\|String` | `''` | Crop to only show the portion outside the given reactance arc |

---

### `<SmReactArc>`

Draw a constant-reactance arc.

```html
<SmithChart>
  <SmReactArc :react="1" :crop="2" fill="none" stroke="red" stroke-width="3" />
  <SmReactArc :react="0.5" :double="true" fill="rgba(255,0,255,0.4)" />
</SmithChart>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `react` | `Number\|String` | — | Normalised reactance value |
| `crop` | `Number\|String` | `''` | Crop to only show the portion outside the given resistance circle |
| `double` | `Boolean` | `false` | Also draw the mirrored arc (e.g. draw both +1 and -1) |

---

### `<SmVswrCircle>`

Draw a constant-VSWR circle centred on the chart centre, passing through the given impedance point.

```html
<SmithChart>
  <SmVswrCircle :res="1" :react="1" stroke="blue" />
  <SmVswrCircle :res="0.3" :react="-0.5" :show-point="false" stroke="red" stroke-width="4" />
</SmithChart>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `res` | `Number\|String` | `1` | Normalised resistance of the impedance point |
| `react` | `Number\|String` | `1` | Normalised reactance of the impedance point |
| `showPoint` | `Boolean` | `true` | Also draw the impedance point itself |
| `stroke` | `String` | `'black'` | Stroke colour |
| `strokeWidth` | `Number\|String` | `3` | Stroke width |

---

## Full Example

```html
<script setup>
import { SmithChart, SmPoint, SmResCircle, SmReactArc, SmVswrCircle } from 'vue-smith-chart'
import 'vue-smith-chart/style.css'
</script>

<template>
  <SmithChart :radius="350">
    <!-- Impedance points -->
    <SmPoint :res="1" :react="0" fill="blue" />
    <SmPoint :res="0.5" :react="0.5" fill="red" r="8" />

    <!-- Constant resistance circle -->
    <SmResCircle :res="0.5" fill="rgba(0,0,255,0.15)" />

    <!-- Constant reactance arc, both polarities -->
    <SmReactArc :react="1" :double="true" fill="rgba(255,0,0,0.15)" />

    <!-- VSWR circle -->
    <SmVswrCircle :res="1" :react="1" stroke="green" />
  </SmithChart>
</template>
```

## Upgrading from v0.x (Vue 2)

See [UPGRADE.md](./UPGRADE.md) for a full explanation of every change and a
step-by-step guide to publishing this package to npm.

## License

MIT — [Germinal Camps](http://www.germinalcamps.com)
