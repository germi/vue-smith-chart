<template>
  <div class="playground-wrap">
    <div class="playground">
      <!-- Smith Chart -->
      <div class="chart-panel">
        <div class="chart-outer">
          <div ref="chartWrap" class="chart-card">
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
                :fill="hexToRgba(circle.color, 0.15)"
                stroke-width="2"
                :stroke="circle.color"
              />
              <SmReactArc
                v-for="(arc, i) in reactArcs"
                :key="`rea-${i}`"
                :react="arc.react"
                :crop="arc.crop"
                :fill="hexToRgba(arc.color, 0.15)"
                stroke-width="2"
                :stroke="arc.color"
              />
              <SmVswrCircle
                v-for="(circle, i) in vswrCircles"
                :key="`vswr-${i}`"
                :res="circle.res"
                :react="circle.react"
                stroke-width="2"
                :stroke="circle.color"
              />
              <SmPoint
                v-for="(point, i) in points"
                :key="`pt-${i}`"
                :res="point.res"
                :react="point.react"
                :fill="point.color"
              />
            </SmithChart>
          </div>

          <!-- Download SVG button -->
          <button class="btn-download" @click="downloadSvg" title="Download SVG">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            SVG
          </button>
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
            <button class="btn-add" @click="points.push({ res: 1, react: 1, color: '#ef4444' })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="points.length === 0" class="empty">No points added.</li>
            <li v-for="(point, i) in points" :key="i" class="item-row">
              <input type="color" v-model="point.color" class="color-swatch" />
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
            <button class="btn-add" @click="resCircles.push({ res: 1, crop: 0, color: '#6366f1' })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="resCircles.length === 0" class="empty">No circles added.</li>
            <li v-for="(circle, i) in resCircles" :key="i" class="item-row">
              <input type="color" v-model="circle.color" class="color-swatch" />
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
            <button class="btn-add" @click="reactArcs.push({ react: 1, crop: '', color: '#6366f1' })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="reactArcs.length === 0" class="empty">No arcs added.</li>
            <li v-for="(arc, i) in reactArcs" :key="i" class="item-row">
              <input type="color" v-model="arc.color" class="color-swatch" />
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
            <button class="btn-add" @click="vswrCircles.push({ res: 1, react: 1, color: '#f59e0b' })">+ Add</button>
          </div>
          <ul class="item-list">
            <li v-if="vswrCircles.length === 0" class="empty">No circles added.</li>
            <li v-for="(circle, i) in vswrCircles" :key="i" class="item-row">
              <input type="color" v-model="circle.color" class="color-swatch" />
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
            <button class="btn-copy" @click="copyCode">
              <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="icon icon-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {{ copied ? 'Copied!' : 'Copy' }}
            </button>
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

const chartWrap = ref(null)
const points = ref([{ res: 1, react: 1, color: '#ef4444' }])
const resCircles = ref([{ res: 1, crop: 0, color: '#6366f1' }])
const reactArcs = ref([{ react: 1, crop: '', color: '#6366f1' }])
const vswrCircles = ref([{ res: 1, react: 1, color: '#f59e0b' }])

const copied = ref(false)

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

async function copyCode() {
  await navigator.clipboard.writeText(generatedCode.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

function downloadSvg() {
  const svgEl = chartWrap.value?.querySelector('svg')
  if (!svgEl) return
  const serialized = new XMLSerializer().serializeToString(svgEl)
  const blob = new Blob([serialized], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'smith-chart.svg'
  a.click()
  URL.revokeObjectURL(url)
}

const generatedCode = computed(() => {
  let html = '<SmithChart>\n'
  for (const c of resCircles.value)
    html += `  <SmResCircle :res="${c.res}" :crop="${c.crop}" fill="${hexToRgba(c.color, 0.15)}" stroke="${c.color}" stroke-width="2" />\n`
  for (const a of reactArcs.value)
    html += `  <SmReactArc :react="${a.react}" :crop="${a.crop}" fill="${hexToRgba(a.color, 0.15)}" stroke="${a.color}" stroke-width="2" />\n`
  for (const c of vswrCircles.value)
    html += `  <SmVswrCircle :res="${c.res}" :react="${c.react}" stroke="${c.color}" stroke-width="2" />\n`
  for (const p of points.value)
    html += `  <SmPoint :res="${p.res}" :react="${p.react}" fill="${p.color}" />\n`
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

.chart-outer {
  position: relative;
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

.btn-download {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.btn-download:hover { background: var(--vp-c-bg-soft); }

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

.color-swatch {
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 0.25rem;
  border: 1px solid var(--vp-c-divider);
  padding: 0;
  cursor: pointer;
  background: none;
  flex-shrink: 0;
}
.color-swatch::-webkit-color-swatch-wrapper { padding: 0; }
.color-swatch::-webkit-color-swatch { border: none; border-radius: 0.2rem; }

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

.btn-copy {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.375rem;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.btn-copy:hover { background: var(--vp-c-bg-alt); }

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
  gap: 0.5rem;
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

.icon {
  width: 0.75rem;
  height: 0.75rem;
}
.icon-green { color: #22c55e; }

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
