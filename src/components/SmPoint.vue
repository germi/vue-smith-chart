<template>
  <circle :cx="cx" :cy="cy" :r="r" />
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  res: { type: [Number, String], required: true },
  react: { type: [Number, String], required: true },
  r: { type: [Number, String], default: 5 },
})

const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())

// Formulae from:
// https://www.allaboutcircuits.com/technical-articles/mathematical-construction-and-properties-of-the-smith-chart/
const cx = computed(() => {
  const r = Number(props.res)
  const x = Number(props.react)
  const a = (r ** 2 - 1 + x ** 2) / ((r + 1) ** 2 + x ** 2)
  return a * radius.value + radius.value
})

const cy = computed(() => {
  const r = Number(props.res)
  const x = Number(props.react)
  const b = (2 * x) / ((r + 1) ** 2 + x ** 2)
  return -b * radius.value + radius.value
})
</script>
