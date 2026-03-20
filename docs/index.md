---
layout: home

hero:
  name: vue-smith-chart
  text: Smith Chart components for Vue 3
  tagline: Plot impedance, VSWR, resistance circles, and reactance arcs as reactive SVG — no canvas, no dependencies.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/germi/vue-smith-chart

features:
  - icon: 🎯
    title: Pure SVG
    details: Every element is a native SVG shape. Scale to any size, style with CSS, and inspect with browser devtools.
  - icon: ⚡️
    title: Reactive by default
    details: All coordinates are computed properties. Change a prop and every dependent element updates instantly.
  - icon: 🧩
    title: Composable
    details: Drop SmPoint, SmResCircle, SmReactArc, and SmVswrCircle directly inside SmithChart as named slots.
  - icon: 📦
    title: Tree-shakeable
    details: Import only the components you need. Vue is a peer dependency — no duplicate runtime in your bundle.
---

## Live demo

Drag the sliders to move the impedance point. The VSWR circle and constant-resistance circle update in real time.

<DemoHome />

## Install

```bash
npm install vue-smith-chart
```

```js
// Register globally
import VueSmithChart from 'vue-smith-chart'
app.use(VueSmithChart)
```

```html
<!-- Use anywhere -->
<SmithChart>
  <SmPoint :res="1.2" :react="0.8" fill="#42b883" />
  <SmVswrCircle :res="1.2" :react="0.8" stroke="#42b883" />
</SmithChart>
```
