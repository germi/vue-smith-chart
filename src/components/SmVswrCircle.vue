<template>
  <g fill="none" :stroke-width="strokeWidth" :stroke="stroke">
    <circle :cx="radius" :cy="radius" :r="vswrRadius" />
    <SmPoint v-if="showPoint" :res="res" :react="react" :fill="stroke" />
  </g>
</template>

<script setup>
import { inject, computed } from 'vue'
import SmPoint from './SmPoint.vue'

const props = defineProps({
  res: { type: [Number, String], default: 1 },
  react: { type: [Number, String], default: 1 },
  showPoint: { type: Boolean, default: true },
  stroke: { type: String, default: 'black' },
  strokeWidth: { type: [Number, String], default: 3 },
})

const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())

// Distance from chart centre to the impedance point = VSWR circle radius
const vswrRadius = computed(() => {
  const r = Number(props.res)
  const x = Number(props.react)
  const a = (r ** 2 - 1 + x ** 2) / ((r + 1) ** 2 + x ** 2)
  const b = (2 * x) / ((r + 1) ** 2 + x ** 2)
  return Math.sqrt(a ** 2 + b ** 2) * radius.value
})
</script>
