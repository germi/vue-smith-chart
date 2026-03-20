<template>
  <div class="demo-wrap">
    <div class="demo-row">
      <div class="demo-chart">
        <SmithChart :radius="200" :label-rings="false">
          <SmResCircle
            :res="res"
            :crop="useCrop ? crop : ''"
            fill="rgba(66,184,131,0.25)"
            stroke="#42b883"
            stroke-width="2"
          />
          <SmPoint :res="res" :react="0" fill="#42b883" r="5" />
        </SmithChart>
      </div>

      <div class="demo-controls">
        <label>
          :res
          <span>{{ res.toFixed(2) }}</span>
          <input type="range" min="0.01" max="5" step="0.01" v-model.number="res" />
        </label>

        <div class="toggles" style="border-top: none; padding-top: 0;">
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
            &lt;SmResCircle :res="{{ res.toFixed(2) }}"{{ useCrop ? ` :crop="${crop.toFixed(2)}"` : '' }} /&gt;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmithChart, SmPoint, SmResCircle } from 'vue-smith-chart'

const res = ref(0.5)
const crop = ref(2)
const useCrop = ref(false)
</script>
