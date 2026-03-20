<template>
  <g>
    <text :y="-r * 2 + radius - 7" x="3">{{ res.toFixed(1) }}</text>
  </g>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  res: { type: Number, required: true },
})

const getRadius = inject('smithChartRadius')
const radius = computed(() => getRadius())
const r = computed(() => radius.value / (props.res + 1))
</script>
