<template>
  <div class="demo-wrap">
    <div class="demo-row">
      <div class="demo-chart">
        <SmithChart :radius="200" :label-rings="false">
          <SmPoint
            v-for="(pt, i) in points"
            :key="i"
            :res="pt.res"
            :react="pt.react"
            :fill="pt.color"
            r="7"
          />
        </SmithChart>
      </div>

      <div class="demo-controls">
        <div v-for="(pt, i) in points" :key="i" style="border-bottom: 1px solid var(--vp-c-divider); padding-bottom: 16px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
            <span
              :style="{ background: pt.color, width: '12px', height: '12px', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }"
            />
            <span style="font-size:13px; font-weight:600; color: var(--vp-c-text-1)">Point {{ i + 1 }}</span>
          </div>
          <label>
            res = <span>{{ pt.res.toFixed(2) }}</span>
            <input type="range" min="0.01" max="5" step="0.01" v-model.number="pt.res" />
          </label>
          <label style="margin-top:8px;">
            react = <span>{{ pt.react.toFixed(2) }}</span>
            <input type="range" min="-5" max="5" step="0.01" v-model.number="pt.react" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { SmithChart, SmPoint } from 'vue-smith-chart'

const points = reactive([
  { res: 0, react: 0, color: '#e53e3e' },
  { res: 1, react: 0, color: '#3182ce' },
  { res: 0.6, react: 0.8, color: '#42b883' },
])
</script>
