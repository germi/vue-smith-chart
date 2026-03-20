<template>
  <g class="res-circle" :mask="crop !== '' ? `url(#react-circle-${crop})` : undefined">
    <circle :cx="cx" :cy="cy" :r="r" />

    <mask :id="`res-circle-${res}`">
      <rect :width="2 * radius" :height="2 * radius" fill="white" />
      <circle :cx="cx" :cy="cy" :r="r" fill="black" />
    </mask>

    <mask v-if="Number(res) === 0.5" :id="`res-circle-inverse-${res}`">
      <rect :width="2 * radius" :height="2 * radius" fill="black" />
      <circle :cx="cx" :cy="cy" :r="r" fill="white" />
    </mask>
  </g>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  res: { type: [Number, String], required: true },
  crop: { default: '' },
})

const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())

const cx = computed(() => Number(props.res) * radius.value / (Number(props.res) + 1) + radius.value)
const cy = computed(() => radius.value)
const r = computed(() => radius.value / (Number(props.res) + 1))
</script>
