<template>
  <div class="demo-wrap">
    <div class="demo-row">
      <div class="demo-chart">
        <SmithChart :radius="200" :label-rings="false">
          <SmReactArc
            :react="react"
            :crop="useCrop ? crop : ''"
            :double="useDouble"
            fill="rgba(66,184,131,0.2)"
            stroke="#42b883"
            stroke-width="2"
          />
        </SmithChart>
      </div>

      <div class="demo-controls">
        <label>
          :react
          <span>{{ react.toFixed(2) }}</span>
          <input type="range" min="-5" max="5" step="0.01" v-model.number="react" />
        </label>

        <div class="toggles" style="border-top: none; padding-top: 0;">
          <label class="toggle-row">
            <input type="checkbox" v-model="useDouble" />
            :double (mirror arc)
          </label>
          <label class="toggle-row">
            <input type="checkbox" v-model="useCrop" />
            Enable :crop
          </label>
        </div>

        <label v-if="useCrop">
          :crop
          <span>{{ crop.toFixed(2) }}</span>
          <input type="range" min="0.01" max="10" step="0.01" v-model.number="crop" />
        </label>

        <div class="demo-value" style="margin-top: 0;">
          <code style="font-size:12px; word-break: break-all;">
            &lt;SmReactArc :react="{{ react.toFixed(2) }}"{{ useDouble ? ' :double="true"' : '' }}{{ useCrop ? ` :crop="${crop.toFixed(2)}"` : '' }} /&gt;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmithChart, SmReactArc } from 'vue-smith-chart'

const react = ref(1)
const crop = ref(2)
const useCrop = ref(false)
const useDouble = ref(false)
</script>
