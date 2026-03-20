<template>
  <g class="react-circle arc" :mask="crop !== '' ? `url(#res-circle-${crop})` : undefined">

    <circle :cx="cx" :cy="-cy + 2 * radius" :r="r" />
    <circle v-if="double" :cx="cx" :cy="cy" :r="r" />

    <mask :id="`react-circle-${magnitude}`">
      <rect :width="2 * radius" :height="2 * radius" fill="white" />
      <circle :cx="cx" :cy="cy" :r="r" fill="black" />
      <circle :cx="cx" :cy="-cy + 2 * radius" :r="r" fill="black" />
    </mask>

    <mask v-if="magnitude === 0.5" :id="`react-circle-inverse-${magnitude}`">
      <rect :width="2 * radius" :height="2 * radius" fill="black" />
      <circle :cx="cx" :cy="cy" :r="r" fill="white" />
      <circle :cx="cx" :cy="-cy + 2 * radius" :r="r" fill="white" />
    </mask>
  </g>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  react: { type: [Number, String], required: true },
  crop: { default: '' },
  double: { type: Boolean, default: false },
})

const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())

const magnitude = computed(() => Math.abs(Number(props.react)))
const cx = computed(() => radius.value + radius.value)
const cy = computed(() => radius.value / Number(props.react) + radius.value)
const r = computed(() => radius.value / magnitude.value)
</script>
