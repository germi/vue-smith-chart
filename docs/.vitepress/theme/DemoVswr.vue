<template>
  <div class="demo-wrap">
    <div class="demo-row">
      <div class="demo-chart">
        <SmithChart :radius="200" :label-rings="false">
          <SmVswrCircle
            :res="res"
            :react="react"
            stroke="#42b883"
            :stroke-width="strokeWidth"
            :show-point="showPoint"
          />
        </SmithChart>
      </div>

      <div class="demo-controls">
        <label>
          :res
          <span>{{ res.toFixed(2) }}</span>
          <input type="range" min="0.01" max="5" step="0.01" v-model.number="res" />
        </label>

        <label>
          :react
          <span>{{ react.toFixed(2) }}</span>
          <input type="range" min="-5" max="5" step="0.01" v-model.number="react" />
        </label>

        <label>
          :stroke-width
          <span>{{ strokeWidth }}</span>
          <input type="range" min="1" max="6" step="0.5" v-model.number="strokeWidth" />
        </label>

        <div class="toggles" style="border-top: none; padding-top: 0;">
          <label class="toggle-row">
            <input type="checkbox" v-model="showPoint" />
            :show-point
          </label>
        </div>

        <div class="demo-value" style="margin-top: 0;">
          VSWR ≈ <strong>{{ vswr.toFixed(3) }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SmithChart, SmVswrCircle } from 'vue-smith-chart'

const res = ref(0.5)
const react = ref(1)
const strokeWidth = ref(2)
const showPoint = ref(true)

// |Γ| = distance from centre of Smith Chart to the impedance point
const gamma = computed(() => {
  const r = res.value
  const x = react.value
  const a = (r ** 2 - 1 + x ** 2) / ((r + 1) ** 2 + x ** 2)
  const b = (2 * x) / ((r + 1) ** 2 + x ** 2)
  return Math.sqrt(a ** 2 + b ** 2)
})

const vswr = computed(() => (1 + gamma.value) / (1 - gamma.value))
</script>
