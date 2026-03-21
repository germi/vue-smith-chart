<template>
  <div class="playground-wrap">
    <div class="playground">
      <!-- Smith Chart -->
      <div class="chart-panel">
        <div class="chart-card">
          <SmithChart
            :resistance-labels="false"
            :reactance-labels="false"
            :label-rings="false"
            :radius="300"
          >
            <SmResCircle
              v-for="(circle, i) in resCircles"
              :key="`res-${i}`"
              :res="circle.res"
              :crop="circle.crop"
              fill="rgba(99,102,241,0.15)"
              stroke-width="2"
              stroke="#6366f1"
            />
            <SmReactArc
              v-for="(arc, i) in reactArcs"
              :key="`rea-${i}`"
              :react="arc.react"
              :crop="arc.crop"
              fill="rgba(99,102,241,0.15)"
              stroke-width="2"
              stroke="#6366f1"
            />
            <SmVswrCircle
              v-for="(circle, i) in vswrCircles"
              :key="`vswr-${i}`"
              :res="circle.res"
              :react="circle.react"
              stroke-width="2"
              stroke="#f59e0b"
            />
            <SmPoint
              v-for="(point, i) in points"
              :key="`pt-${i}`"
              :res="point.res"
              :react="point.react"
              fill="#ef4444"
            />
          </SmithChart>
        </div>
      </div>

      <!-- Controls sidebar -->
      <div class="controls">
        <!-- Impedance Points -->
        <section class="control-section">
          <div class="section-header">
            <div class="section-title">
              <span class="dot dot-red"></span>
              <h2>Impedance Points</h2>
            </div>
            <button class="btn-add" @click="points.push({ res: 1, react: 1 })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="points.length === 0" class="empty">No points added.</li>
            <li v-for="(point, i) in points" :key="i" class="item-row">
              <label class="field">R <input v-model.number="point.res" type="number" class="num-input" /></label>
              <label class="field">X <input v-model.number="point.react" type="number" class="num-input" /></label>
              <button class="btn-remove" @click="points.splice(i, 1)">Remove</button>
            </li>
          </ul>
        </section>

        <!-- Resistance Circles -->
        <section class="control-section">
          <div class="section-header">
            <div class="section-title">
              <span class="dot dot-indigo"></span>
              <h2>Resistance Circles</h2>
            </div>
            <button class="btn-add" @click="resCircles.push({ res: 1, crop: 0 })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="resCircles.length === 0" class="empty">No circles added.</li>
            <li v-for="(circle, i) in resCircles" :key="i" class="item-row">
              <label class="field">Res <input v-model.number="circle.res" type="number" class="num-input" /></label>
              <label class="field">Crop <input v-model.number="circle.crop" type="number" class="num-input" /></label>
              <button class="btn-remove" @click="resCircles.splice(i, 1)">Remove</button>
            </li>
          </ul>
        </section>

        <!-- Reactance Arcs -->
        <section class="control-section">
          <div class="section-header">
            <div class="section-title">
              <span class="dot dot-indigo"></span>
              <h2>Reactance Arcs</h2>
            </div>
            <button class="btn-add" @click="reactArcs.push({ react: 1, crop: '' })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="reactArcs.length === 0" class="empty">No arcs added.</li>
            <li v-for="(arc, i) in reactArcs" :key="i" class="item-row">
              <label class="field">React <input v-model.number="arc.react" type="number" class="num-input" /></label>
              <label class="field">Crop <input v-model.number="arc.crop" type="number" class="num-input" /></label>
              <button class="btn-remove" @click="reactArcs.splice(i, 1)">Remove</button>
            </li>
          </ul>
        </section>

        <!-- VSWR Circles -->
        <section class="control-section">
          <div class="section-header">
            <div class="section-title">
              <span class="dot dot-amber"></span>
              <h2>VSWR Circles</h2>
            </div>
            <button class="btn-add" @click="vswrCircles.push({ res: 1, react: 1 })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="vswrCircles.length === 0" class="empty">No circles added.</li>
            <li v-for="(circle, i) in vswrCircles" :key="i" class="item-row">
              <label class="field">R <input v-model.number="circle.res" type="number" class="num-input" /></label>
              <label class="field">X <input v-model.number="circle.react" type="number" class="num-input" /></label>
              <button class="btn-remove" @click="vswrCircles.splice(i, 1)">Remove</button>
            </li>
          </ul>
        </section>

        <!-- Generated Code -->
        <section class="control-section">
          <div class="section-header">
            <h2>Generated Code</h2>
          </div>
          <pre class="code-output"><code>{{ generatedCode }}</code></pre>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SmithChart, SmPoint, SmResCircle, SmReactArc, SmVswrCircle } from 'vue-smith-chart'

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

<style scoped>
.playground-wrap {
  padding: 2rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.playground {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.chart-panel {
  flex: 1;
  min-width: 0;
}

.chart-card {
  border-radius: 1rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.controls {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.control-section {
  border-radius: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0.625rem 1rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-header h2 {
  font-size: 0.8125rem;
  font-weight: 600;
  margin: 0;
  border: none;
  padding: 0;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot-red    { background: #ef4444; }
.dot-indigo { background: #6366f1; }
.dot-amber  { background: #f59e0b; }

.btn-add {
  border-radius: 0.375rem;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.btn-add:hover { background: var(--vp-c-bg-alt); }

.item-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.empty {
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--vp-c-divider);
}
.item-row:first-child { border-top: none; }

.field {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.num-input {
  width: 3.5rem;
  border-radius: 0.375rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-1);
  outline: none;
}
.num-input:focus { border-color: #6366f1; }

.btn-remove {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.btn-remove:hover { color: #ef4444; }

.code-output {
  margin: 0;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--vp-c-green-1, #22c55e);
  background: var(--vp-c-bg-alt);
  overflow-x: auto;
  font-family: var(--vp-font-family-mono);
}

@media (max-width: 768px) {
  .playground {
    flex-direction: column;
  }
  .controls {
    width: 100%;
  }
}
</style>
