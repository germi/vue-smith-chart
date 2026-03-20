<template>
  <g>
    <text :transform="`rotate(${-angle})`" :y="-radius - 10">
      <slot />
    </text>
    <text v-if="angle !== 90" :transform="`rotate(${angle - 180})`" :y="-radius - 10">
      -<slot />
    </text>
  </g>
</template>

<script setup>
import { inject, computed } from 'vue'

defineProps({
  angle: { type: Number, required: true },
})

const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())
</script>
