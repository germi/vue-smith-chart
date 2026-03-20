<template>
  <svg
    :width="2 * radius + 200"
    :height="2 * radius + 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="svgPath">
        <circle :cx="radius" :cy="radius" :r="radius" />
      </clipPath>
    </defs>

    <g :transform="`translate(${translateX} ${translateX}) rotate(${rotate})`">

      <!-- THIN LINES -->
      <g stroke="black" stroke-width=".5" fill="none">

        <!-- CONSTANT RESISTANCE CIRCLES -->
        <g :mask="`url(#react-circle-50)`">
          <SmResCircle v-for="n in 2" :key="`res-50-${n}`" :res="10 * n + 20" :crop="50" />
        </g>

        <g :mask="`url(#react-circle-20)`">
          <SmResCircle v-for="n in 5" :key="`res-20a-${n}`" :res="2 * n + 10" :crop="20" />
          <SmResCircle v-for="n in 3" :key="`res-20b-${n}`" :res="2 * n" :crop="20" />
        </g>

        <g :mask="`url(#react-circle-10)`">
          <SmResCircle :res="1" :crop="10" />
          <SmResCircle :res="3" :crop="10" />
          <SmResCircle :res="7" :crop="10" />
        </g>

        <g :mask="`url(#react-circle-5)`">
          <SmResCircle v-for="n in 25" :key="`res-5-${n}`" :res="0.2 * n" :crop="5" />
        </g>

        <g :mask="`url(#react-circle-2)`">
          <SmResCircle v-for="n in 10" :key="`res-2-${n}`" :res="0.2 * n - 0.1" :crop="2" />
        </g>

        <g :mask="`url(#react-circle-1)`">
          <SmResCircle v-for="n in 5" :key="`res-1-${n}`" :res="0.1 * n + 0.45" :crop="1" />
        </g>

        <g :mask="`url(#react-circle-0.5)`">
          <SmResCircle v-for="n in 25" :key="`res-05-${n}`" :res="0.02 * n" :crop="0.5" />
        </g>

        <g :mask="`url(#react-circle-0.2)`">
          <SmResCircle v-for="n in 10" :key="`res-02-${n}`" :res="0.02 * n - 0.01" :crop="0.2" />
        </g>

        <SmResCircle :res="8" />
        <SmResCircle :res="9" />

        <g :mask="`url(#react-circle-1)`">
          <g :mask="`url(#react-circle-inverse-0.5)`">
            <SmResCircle v-for="n in 5" :key="`res-1inv-${n}`" :res="0.1 * n - 0.05" :crop="1" />
          </g>
        </g>

        <!-- CONSTANT REACTANCE CIRCLES -->
        <g :mask="`url(#res-circle-50)`">
          <SmReactArc v-for="n in 3" :key="`rea-50-${n}`" :double="true" :react="n * 10 + 10" :crop="50" />
        </g>

        <g :mask="`url(#res-circle-20)`">
          <SmReactArc v-for="n in 10" :key="`rea-20-${n}`" :double="true" :react="n * 2" :crop="20" />
        </g>

        <g :mask="`url(#res-circle-10)`">
          <SmReactArc v-for="n in 5" :key="`rea-10-${n}`" :double="true" :react="n * 2 - 1" :crop="10" />
        </g>

        <g :mask="`url(#res-circle-5)`">
          <SmReactArc v-for="n in 25" :key="`rea-5-${n}`" :double="true" :react="n * 0.2" :crop="5" />
        </g>

        <g :mask="`url(#res-circle-2)`">
          <SmReactArc v-for="n in 10" :key="`rea-2-${n}`" :double="true" :react="n * 0.2 - 0.1" :crop="2" />
        </g>

        <g :mask="`url(#res-circle-1)`">
          <SmReactArc v-for="n in 5" :key="`rea-1-${n}`" :double="true" :react="n * 0.1 + 0.45" :crop="1" />
        </g>

        <g :mask="`url(#res-circle-0.5)`">
          <SmReactArc v-for="n in 25" :key="`rea-05-${n}`" :double="true" :react="n * 0.02" :crop="0.5" />
        </g>

        <g :mask="`url(#res-circle-0.2)`">
          <SmReactArc v-for="n in 10" :key="`rea-02-${n}`" :double="true" :react="0.02 * n - 0.01" :crop="0.2" />
        </g>

        <SmReactArc :double="true" :react="10" />

        <g :mask="`url(#res-circle-1)`">
          <g :mask="`url(#res-circle-inverse-0.5)`">
            <SmReactArc v-for="n in 5" :key="`rea-1inv-${n}`" :double="true" :react="0.1 * n - 0.05" :crop="1" />
          </g>
        </g>
      </g>

      <!-- THICK LINES -->
      <g class="arc" stroke="black" stroke-width="1" fill="none">
        <line x1="0" :y1="radius" :x2="2 * radius" :y2="radius" />

        <SmResCircle :res="0" />

        <g :mask="`url(#react-circle-0.2)`">
          <SmResCircle :res="0.05" />
          <SmResCircle :res="0.15" />
        </g>

        <g :mask="`url(#react-circle-1)`">
          <SmResCircle :res="0.1" />
          <SmResCircle :res="0.2" />
          <SmResCircle :res="0.3" />
          <SmResCircle :res="0.5" />
          <SmResCircle :res="0.7" />
          <SmResCircle :res="0.9" />
        </g>

        <g :mask="`url(#react-circle-5)`">
          <SmResCircle :res="0.4" />
          <SmResCircle :res="1" />
          <SmResCircle :res="2" />
          <SmResCircle :res="3" />
        </g>

        <g :mask="`url(#react-circle-2)`">
          <SmResCircle :res="0.6" />
          <SmResCircle :res="0.8" />
          <SmResCircle :res="1.2" />
          <SmResCircle :res="1.4" />
          <SmResCircle :res="1.6" />
          <SmResCircle :res="1.8" />
        </g>

        <g :mask="`url(#react-circle-10)`">
          <SmResCircle :res="4" />
          <SmResCircle :res="5" />
        </g>

        <g :mask="`url(#react-circle-50)`">
          <SmResCircle :res="20" />
        </g>

        <SmResCircle :res="10" />
        <SmResCircle :res="50" />

        <g :mask="`url(#res-circle-0.2)`">
          <SmReactArc :double="true" :react="0.05" />
          <SmReactArc :double="true" :react="0.15" />
        </g>

        <g :mask="`url(#res-circle-1)`">
          <SmReactArc :double="true" :react="0.1" />
          <SmReactArc :double="true" :react="0.3" />
          <SmReactArc :double="true" :react="0.5" />
          <SmReactArc :double="true" :react="0.7" />
          <SmReactArc :double="true" :react="0.9" />
        </g>

        <g :mask="`url(#res-circle-2)`">
          <SmReactArc :double="true" :react="0.2" />
          <SmReactArc :double="true" :react="0.4" />
          <SmReactArc :double="true" :react="0.6" />
          <SmReactArc :double="true" :react="0.8" />
          <SmReactArc :double="true" :react="1.2" />
          <SmReactArc :double="true" :react="1.4" />
          <SmReactArc :double="true" :react="1.6" />
          <SmReactArc :double="true" :react="1.8" />
        </g>

        <g :mask="`url(#res-circle-5)`">
          <SmReactArc :double="true" :react="1" />
          <SmReactArc :double="true" :react="2" />
          <SmReactArc :double="true" :react="3" />
          <SmReactArc :double="true" :react="4" />
        </g>

        <g :mask="`url(#res-circle-10)`">
          <SmReactArc :double="true" :react="5" />
        </g>

        <g :mask="`url(#res-circle-20)`">
          <SmReactArc :double="true" :react="10" />
          <SmReactArc :double="true" :react="20" />
        </g>

        <SmReactArc :double="true" :react="50" />
      </g>

      <g :transform="`translate(${radius} ${radius})`">

        <g v-if="labelRings" stroke="black" stroke-width="0.5" fill="none">
          <circle :r="radius" stroke-width="1" />
          <circle v-for="n in 2" :key="`ext-ring-1-${n}`" :r="radius + 40 * n - 20" />
          <circle v-for="n in 2" :key="`ext-ring-2-${n}`" :r="radius + 40 * n" stroke-width="1" />
        </g>

        <!-- TEXT LABELS -->
        <g class="text-labels" text-anchor="middle" dominant-baseline="central">
          <g v-if="labelRings">
            <text
              v-for="n in 36"
              :key="`label-deg-${n}`"
              :transform="`rotate(${(n - 1) * 10 - 90})`"
              :y="-radius - 32"
            >{{ 180 - (n - 1) * 10 }}</text>

            <g
              v-for="n in 50"
              :key="`label-wl-${n}`"
              :transform="`rotate(${(n - 1) * (36 / 5) - 90})`"
            >
              <text :y="-radius - 72">{{ ((n - 1) * 0.01).toFixed(2) }}</text>
              <text :y="-radius - 48">{{ n !== 1 ? (0.5 - (n - 1) * 0.01).toFixed(2) : (0).toFixed(2) }}</text>
            </g>
          </g>

          <g v-if="reactanceLabels">
            <SmReactLabel :angle="0">1</SmReactLabel>
            <SmReactLabel :angle="6">0.9</SmReactLabel>
            <SmReactLabel :angle="12.5">0.8</SmReactLabel>
            <SmReactLabel :angle="20">0.7</SmReactLabel>
            <SmReactLabel :angle="28">0.6</SmReactLabel>
            <SmReactLabel :angle="37">0.5</SmReactLabel>
            <SmReactLabel :angle="46">0.4</SmReactLabel>
            <SmReactLabel :angle="56.5">0.3</SmReactLabel>
            <SmReactLabel :angle="67">0.2</SmReactLabel>
            <SmReactLabel :angle="78.5">0.1</SmReactLabel>
            <SmReactLabel :angle="90">0</SmReactLabel>
            <SmReactLabel :angle="-37">2</SmReactLabel>
            <SmReactLabel :angle="-53">3</SmReactLabel>
            <SmReactLabel :angle="-62">4</SmReactLabel>
            <SmReactLabel :angle="-67.5">5</SmReactLabel>
            <SmReactLabel :angle="-78.5">10</SmReactLabel>
            <SmReactLabel :angle="-84.5">20</SmReactLabel>
            <SmReactLabel :angle="-88">50</SmReactLabel>
            <SmReactLabel :angle="-10.5">1.2</SmReactLabel>
            <SmReactLabel :angle="-19">1.4</SmReactLabel>
            <SmReactLabel :angle="-26">1.6</SmReactLabel>
            <SmReactLabel :angle="-32">1.8</SmReactLabel>
            <SmReactLabel :angle="84">0.05</SmReactLabel>
            <SmReactLabel :angle="72.5">0.015</SmReactLabel>
          </g>

          <g
            v-if="resistanceLabels"
            :transform="`rotate(${-90})`"
            text-anchor="start"
            dominant-baseline="central"
            class="small-text-labels"
          >
            <SmResLabel v-for="n in 10" :key="`res-lbl-01-${n}`" :res="0.1 * n" />
            <SmResLabel v-for="n in 5" :key="`res-lbl-02-${n}`" :res="0.2 * n + 1" />
            <SmResLabel v-for="n in 3" :key="`res-lbl-1-${n}`" :res="n + 2" />
            <SmResLabel v-for="n in 2" :key="`res-lbl-10-${n}`" :res="10 * n" />
            <SmResLabel :res="50" />
          </g>
        </g>

        <!-- TICK MARKS FOR LABEL RINGS -->
        <g v-if="labelRings" stroke-width="0.5" stroke="black">
          <line
            v-for="n in 180"
            :key="`tick-1-${n}`"
            :transform="`rotate(${n * 2})`"
            x1="0" :y1="-radius - 20"
            x2="0" :y2="-radius - 24"
          />
          <line
            v-for="n in 250"
            :key="`tick-2-${n}`"
            :transform="`rotate(${(36 / 25) * n + 18 / 25})`"
            x1="0" :y1="-radius - 56"
            x2="0" :y2="-radius - 64"
          />
        </g>
      </g>

      <!-- SLOTTED COMPONENTS (user-provided points, circles, etc.) -->
      <slot />

    </g>
  </svg>
</template>

<script setup>
import { provide } from 'vue'
import SmResCircle from './SmResCircle.vue'
import SmReactArc from './SmReactArc.vue'
import SmResLabel from './SmResLabel.vue'
import SmReactLabel from './SmReactLabel.vue'

const props = defineProps({
  radius: {
    type: Number,
    default: 400,
  },
  resistanceLabels: {
    type: Boolean,
    default: true,
  },
  reactanceLabels: {
    type: Boolean,
    default: true,
  },
  labelRings: {
    type: Boolean,
    default: true,
  },
  translateX: {
    type: Number,
    default: 100,
  },
  rotate: {
    type: Number,
    default: 0,
  },
})

// Provide radius to all descendant components so they don't need $parent
provide('smithChartRadius', () => props.radius)
</script>

<style>
.arc {
  clip-path: url(#svgPath);
}
.react-circle {
  clip-rule: evenodd;
}
.arc mask {
  pointer-events: none;
}
.text-labels {
  font-size: 12px;
}
.small-text-labels {
  font-size: 10px;
}
</style>
