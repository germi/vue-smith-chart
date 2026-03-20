<template>
  <div id="app">
    <SmithChart
      :resistance-labels="false"
      :reactance-labels="false"
      :label-rings="false"
    >
      <SmResCircle
        v-for="(circle, i) in resCircles"
        :key="`res-${i}`"
        :res="circle.res"
        :crop="circle.crop"
        fill="rgba(255,0,255,0.5)"
        stroke-width="2"
        stroke="black"
      />

      <SmReactArc
        v-for="(arc, i) in reactArcs"
        :key="`rea-${i}`"
        :react="arc.react"
        :crop="arc.crop"
        fill="rgba(255,0,255,0.5)"
        stroke-width="2"
        stroke="black"
      />

      <SmVswrCircle
        v-for="(circle, i) in vswrCircles"
        :key="`vswr-${i}`"
        :res="circle.res"
        :react="circle.react"
        stroke-width="2"
        stroke="black"
      />

      <SmPoint
        v-for="(point, i) in points"
        :key="`pt-${i}`"
        :res="point.res"
        :react="point.react"
        fill="blue"
      />
    </SmithChart>

    <!-- Controls -->
    <div class="card">
      <div class="card-header">
        <h4>Impedance Points</h4>
        <button @click="points.push({ res: 1, react: 1 })">Add point</button>
      </div>
      <ul>
        <li v-for="(point, i) in points" :key="i">
          <label>R <input v-model.number="point.res" type="number" /></label>
          <label>X <input v-model.number="point.react" type="number" /></label>
          <button @click="points.splice(i, 1)">Remove</button>
        </li>
      </ul>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>Constant Resistance Circles</h4>
        <button @click="resCircles.push({ res: 1, crop: 0 })">Add circle</button>
      </div>
      <ul>
        <li v-for="(circle, i) in resCircles" :key="i">
          <label>Res <input v-model.number="circle.res" type="number" /></label>
          <label>Crop <input v-model.number="circle.crop" type="number" /></label>
          <button @click="resCircles.splice(i, 1)">Remove</button>
        </li>
      </ul>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>Constant Reactance Arcs</h4>
        <button @click="reactArcs.push({ react: 1, crop: '' })">Add arc</button>
      </div>
      <ul>
        <li v-for="(arc, i) in reactArcs" :key="i">
          <label>React <input v-model.number="arc.react" type="number" /></label>
          <label>Crop <input v-model.number="arc.crop" type="number" /></label>
          <button @click="reactArcs.splice(i, 1)">Remove</button>
        </li>
      </ul>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>Constant VSWR Circles</h4>
        <button @click="vswrCircles.push({ res: 1, react: 1 })">Add circle</button>
      </div>
      <ul>
        <li v-for="(circle, i) in vswrCircles" :key="i">
          <label>R <input v-model.number="circle.res" type="number" /></label>
          <label>X <input v-model.number="circle.react" type="number" /></label>
          <button @click="vswrCircles.splice(i, 1)">Remove</button>
        </li>
      </ul>
    </div>

    <pre><code>{{ generatedCode }}</code></pre>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SmithChart from './components/SmithChart.vue'
import SmPoint from './components/SmPoint.vue'
import SmResCircle from './components/SmResCircle.vue'
import SmReactArc from './components/SmReactArc.vue'
import SmVswrCircle from './components/SmVswrCircle.vue'

const points = ref([{ res: 1, react: 1 }])
const resCircles = ref([{ res: 1, crop: 0 }])
const reactArcs = ref([{ react: 1, crop: '' }])
const vswrCircles = ref([{ res: 1, react: 1 }])

const generatedCode = computed(() => {
  let html = '<SmithChart>\n'
  for (const c of resCircles.value)
    html += `  <SmResCircle :res="${c.res}" :crop="${c.crop}" />\n`
  for (const a of reactArcs.value)
    html += `  <SmReactArc :react="${a.react}" :crop="${a.crop}" />\n`
  for (const c of vswrCircles.value)
    html += `  <SmVswrCircle :res="${c.res}" :react="${c.react}" />\n`
  for (const p of points.value)
    html += `  <SmPoint :res="${p.res}" :react="${p.react}" />\n`
  return html + '</SmithChart>'
})
</script>
