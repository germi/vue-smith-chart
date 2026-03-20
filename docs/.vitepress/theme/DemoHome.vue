<template>
  <div class="demo-wrap">
    <div class="demo-row">
      <div class="demo-chart">
        <SmithChart
          :radius="220"
          :label-rings="showRings"
          :resistance-labels="showResLabels"
          :reactance-labels="showReactLabels"
        >
          <SmVswrCircle
            :res="res"
            :react="react"
            stroke="#42b883"
            stroke-width="1.5"
            :show-point="false"
          />
          <SmResCircle
            :res="res"
            fill="rgba(66,184,131,0.12)"
            stroke="#42b883"
            stroke-width="1"
          />
          <SmPoint
            :res="res"
            :react="react"
            fill="#42b883"
            stroke="white"
            stroke-width="2"
            r="7"
          />
        </SmithChart>
      </div>

      <div class="demo-controls">
        <label>
          Resistance (R)
          <span>{{ res.toFixed(2) }}</span>
          <input type="range" min="0.01" max="5" step="0.01" v-model.number="res" />
        </label>

        <label>
          Reactance (X)
          <span>{{ react.toFixed(2) }}</span>
          <input type="range" min="-5" max="5" step="0.01" v-model.number="react" />
        </label>

        <div class="demo-value">
          Impedance: <strong>{{ res.toFixed(2) }} {{ react >= 0 ? '+' : '' }}{{ react.toFixed(2) }}j</strong>
        </div>

        <div class="toggles">
          <label class="toggle-row">
            <input type="checkbox" v-model="showRings" />
            Label rings
          </label>
          <label class="toggle-row">
            <input type="checkbox" v-model="showResLabels" />
            Resistance labels
          </label>
          <label class="toggle-row">
            <input type="checkbox" v-model="showReactLabels" />
            Reactance labels
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmithChart, SmPoint, SmResCircle, SmVswrCircle } from 'vue-smith-chart'

const res = ref(1.2)
const react = ref(0.8)
const showRings = ref(true)
const showResLabels = ref(true)
const showReactLabels = ref(true)
</script>
