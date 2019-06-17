<template lang="html">
  <svg
    :width="2*radius + 200"
    :height="2*radius + 200"
    xmlns="http://www.w3.org/2000/svg"
  >

    <defs>

      <clipPath id="svgPath">
        <circle
          :cx="radius"
          :cy="radius"
          :r="radius"
        />
      </clipPath>

    </defs>

  <g :transform="'translate('+translateX+' '+translateX+') rotate('+rotate+') '">

    <!-- THIN LINES -->
    <g
      stroke="black"
      stroke-width=".5"
      fill="none"
    >

      <!-- CONSTANT RESISTANCE CIRCLES -->

      <g mask="url(#react-circle-50)">
        <sm-res-circle
          :res="10*n + 20"
          v-for="n in 2"
          :crop="50"
          :key="'res-circle-mask-50-'+n"
         />
      </g>

      <g mask="url(#react-circle-20)">
        <sm-res-circle
          :res="2*n + 10"
          v-for="n in 5"
          :crop="20"
          :key="'res-circle-mask-20-'+n"
         />

        <sm-res-circle
          :res="2*n"
          v-for="n in 3"
          :crop="20"
          :key="'res-circle-50-'+n"
         />
      </g>

      <g mask="url(#react-circle-10)">
        <sm-res-circle :res="1" :crop="10" />
        <sm-res-circle :res="3" :crop="10" />
        <sm-res-circle :res="7" :crop="10" />
      </g>

      <g mask="url(#react-circle-5)">
        <sm-res-circle
          :res="0.2 * n"
          v-for="n in 25"
          :crop="5"
          :key="'res-circle-mask-5-'+n"
         />
      </g>

      <g mask="url(#react-circle-2)">
        <sm-res-circle
          :res="0.2 * n - 0.1"
          v-for="n in 10"
          :crop="2"
          :key="'res-circle-mask-2-'+n"
         />
      </g>

      <g mask="url(#react-circle-1)">
        <sm-res-circle
          :res="0.1 * n + 0.45"
          v-for="n in 5"
          :crop="1"
          :key="'res-circle-mask-1-'+n"
         />
      </g>

      <g mask="url(#react-circle-0.5)">
        <sm-res-circle
          :res="0.02 * n"
          v-for="n in 25"
          :crop="0.5"
          :key="'res-circle-mask-05-'+n"
         />
      </g>

      <g mask="url(#react-circle-0.2)">
        <sm-res-circle
          :res="0.02 * n - 0.01"
          v-for="n in 10"
          :crop="0.2"
          :key="'res-circle-mask-02-'+n"
         />
      </g>

      <sm-res-circle :res="8" />
      <sm-res-circle :res="9" />

      <g mask="url(#react-circle-1)">
        <g mask="url(#react-circle-inverse-0.5)">
          <sm-res-circle
            :res="0.1 * n - 0.05"
            v-for="n in 5"
            :crop="1"
            :key="'res-circle-mask-1-inverse-'+n"
           />
        </g>
      </g>

      <!-- CONSTANT REACTANCE CIRCLES -->

      <g mask="url(#res-circle-50)">

        <sm-react-arc
          :double="true"
          :react="n*10 + 10"
          v-for="n in 3"
          :crop="50"
          :key="'react-arc-mask-50-'+n"
         />

      </g>

      <g mask="url(#res-circle-20)">

        <sm-react-arc
          :double="true"
          :react="n*2"
          v-for="n in 10"
          :crop="20"
          :key="'react-arc-mask-20-'+n"
         />

      </g>

      <g mask="url(#res-circle-10)">

        <sm-react-arc
          :double="true"
          :react="n*2 - 1"
          v-for="n in 5"
          :crop="10"
          :key="'react-arc-mask-10-'+n"
         />

      </g>

      <g mask="url(#res-circle-5)">

        <sm-react-arc
          :double="true"
          :react="n*0.2"
          v-for="n in 25"
          :crop="5"
          :key="'react-arc-mask-5-'+n"
         />

      </g>

      <g mask="url(#res-circle-2)">

        <sm-react-arc
          :double="true"
          :react="n*0.2 - 0.1"
          v-for="n in 10"
          :crop="2"
          :key="'react-arc-mask-2-'+n"
         />

      </g>

      <g mask="url(#res-circle-1)">

        <sm-react-arc
          :double="true"
          :react="n*0.1 + 0.45"
          v-for="n in 5"
          :crop="1"
          :key="'react-arc-mask-1-'+n"
         />

      </g>

      <g mask="url(#res-circle-0.5)">

        <sm-react-arc
          :double="true"
          :react="n*0.02"
          v-for="n in 25"
          :crop="0.5"
          :key="'react-arc-mask-05-'+n"
         />

      </g>

      <g mask="url(#res-circle-0.2)">

        <sm-react-arc
          :double="true"
          :react="0.02 * n - 0.01"
          v-for="n in 10"
          :crop="0.2"
          :key="'react-arc-mask-02-'+n"
         />

      </g>

      <sm-react-arc
        :double="true"
        :react="10"
      />

      <g mask="url(#res-circle-1)">
        <g mask="url(#res-circle-inverse-0.5)">
          <sm-react-arc
            :double="true"
            :react="0.1 * n - 0.05"
            v-for="n in 5"
            :crop="1"
            :key="'react-arc-mask-1-inverse-'+n"
           />
        </g>
      </g>

    </g>

    <!-- THICK LINES -->
    <g
      class="arc"
      stroke="black"
      stroke-width="1"
      fill="none"
    >

      <!--  HORIZONTAL LINE -->
      <line
        x1="0"
        :y1="radius"
        :x2="2*radius"
        :y2="radius"
      />

      <!-- CONSTANT RESISTANCE CIRCLES -->
      <sm-res-circle :res="0" />

      <g mask="url(#react-circle-0.2)">
        <sm-res-circle :res="0.05" />
        <sm-res-circle :res="0.15" />
      </g>

      <g mask="url(#react-circle-1)">
        <sm-res-circle :res="0.1" />
        <sm-res-circle :res="0.2" />
        <sm-res-circle :res="0.3" />
        <sm-res-circle :res="0.5" />
        <sm-res-circle :res="0.7" />
        <sm-res-circle :res="0.9" />
      </g>

      <g mask="url(#react-circle-5)">
        <sm-res-circle :res="0.4" />
        <sm-res-circle :res="1" />
        <sm-res-circle :res="2" />
        <sm-res-circle :res="3" />
      </g>

      <g mask="url(#react-circle-2)">
        <sm-res-circle :res="0.6" />
        <sm-res-circle :res="0.8" />
        <sm-res-circle :res="1.2" />
        <sm-res-circle :res="1.4" />
        <sm-res-circle :res="1.6" />
        <sm-res-circle :res="1.8" />
      </g>

      <g mask="url(#react-circle-10)">
        <sm-res-circle :res="4" />
        <sm-res-circle :res="5" />
      </g>

      <g mask="url(#react-circle-50)">
        <sm-res-circle :res="20" />
      </g>

      <sm-res-circle :res="10" />

      <sm-res-circle :res="50" />

      <!-- CONSTANT REACTANCE CIRCLES -->
      <g mask="url(#res-circle-0.2)">

        <sm-react-arc
          :double="true"
          :react="0.05"
        />
        <sm-react-arc
          :double="true"
          :react="0.15"
        />

      </g>

      <g mask="url(#res-circle-1)">

        <sm-react-arc
          :double="true"
          :react="0.1"
        />
        <sm-react-arc
          :double="true"
          :react="0.3"
        />
        <sm-react-arc
          :double="true"
          :react="0.5"
        />
        <sm-react-arc
          :double="true"
          :react="0.7"
        />
        <sm-react-arc
          :double="true"
          :react="0.9"
        />

      </g>

      <g mask="url(#res-circle-2)">
        <sm-react-arc
          :double="true"
          :react="0.2"
        />
        <sm-react-arc
          :double="true"
          :react="0.4"
        />
        <sm-react-arc
          :double="true"
          :react="0.6"
        />
        <sm-react-arc
          :double="true"
          :react="0.8"
        />
        <sm-react-arc
          :double="true"
          :react="1.2"
        />
        <sm-react-arc
          :double="true"
          :react="1.4"
        />
        <sm-react-arc
          :double="true"
          :react="1.6"
        />
        <sm-react-arc
          :double="true"
          :react="1.8"
        />
      </g>

      <g mask="url(#res-circle-5)">
        <sm-react-arc
          :double="true"
          :react="1"
        />
        <sm-react-arc
          :double="true"
          :react="2"
        />
        <sm-react-arc
          :double="true"
          :react="3"
        />
        <sm-react-arc
          :double="true"
          :react="4"
        />
      </g>

      <g mask="url(#res-circle-10)">

        <sm-react-arc
          :double="true"
          :react="5"
        />

      </g>

      <g mask="url(#res-circle-20)">

        <sm-react-arc
          :double="true"
          :react="10"
        />
        <sm-react-arc
          :double="true"
          :react="20"
        />

      </g>

      <sm-react-arc
        :double="true"
        :react="50"
      />

    </g>

    <g :transform="'translate('+radius+' '+radius+')'">

      <g
        v-if="labelRings"
        stroke="black"
        stroke-width="0.5"
        fill="none"
      >
        <circle
          :r="radius"
          stroke-width="1"
        ></circle>

        <!-- EXTERNAL LABEL CIRCLES -->
        <circle
          :r="radius + 40*n - 20"
          v-for="n in 2"
          :key="'external-label-circle-1-'+n"
        ></circle>

        <circle
          :r="radius + 40*n"
          v-for="n in 2"
          stroke-width="1"
          :key="'external-label-circle-2-'+n"
        ></circle>

      </g>

      <!-- TEXT LABELS -->
      <g
        class="text-labels"
        text-anchor="middle"
        dominant-baseline="central"
      >
        <g v-if="labelRings">
          <text
            v-for="n in 36"
            :transform="'rotate('+((n-1)*10-90)+')'"
            :y="-radius - 32"
            :key="'text-label-'+n"
          >
            {{ 180-(n-1)*10 }}
          </text>

          <g
            v-for="n in 50"
            :key="'g-text-label-'+n"
            :transform="'rotate('+((n-1)*(36/5)-90)+')'"
          >
            <text :y="-radius - 72">{{ ((n-1)*0.01).toFixed(2) }}</text>
            <text :y="-radius - 48" v-if="n!=1">{{ (0.5-(n-1)*0.01).toFixed(2) }}</text>
            <text :y="-radius - 48" v-else>{{ (0).toFixed(2) }}</text>
          </g>
        </g>

        <g v-if="reactanceLabels">
          <sm-react-label :angle="0">1</sm-react-label>
          <sm-react-label :angle="6">0.9</sm-react-label>
          <sm-react-label :angle="12.5">0.8</sm-react-label>
          <sm-react-label :angle="20">0.7</sm-react-label>
          <sm-react-label :angle="28">0.6</sm-react-label>
          <sm-react-label :angle="37">0.5</sm-react-label>
          <sm-react-label :angle="46">0.4</sm-react-label>
          <sm-react-label :angle="56.5">0.3</sm-react-label>
          <sm-react-label :angle="67">0.2</sm-react-label>
          <sm-react-label :angle="78.5">0.1</sm-react-label>
          <sm-react-label :angle="90">0</sm-react-label>

          <sm-react-label :angle="-37">2</sm-react-label>
          <sm-react-label :angle="-53">3</sm-react-label>
          <sm-react-label :angle="-62">4</sm-react-label>
          <sm-react-label :angle="-67.5">5</sm-react-label>
          <sm-react-label :angle="-78.5">10</sm-react-label>
          <sm-react-label :angle="-84.5">20</sm-react-label>
          <sm-react-label :angle="-88">50</sm-react-label>

          <sm-react-label :angle="-10.5">1.2</sm-react-label>
          <sm-react-label :angle="-19">1.4</sm-react-label>
          <sm-react-label :angle="-26">1.6</sm-react-label>
          <sm-react-label :angle="-32">1.8</sm-react-label>
          <sm-react-label :angle="84">0.05</sm-react-label>
          <sm-react-label :angle="72.5">0.015</sm-react-label>
        </g>

        <g
          v-if="resistanceLabels"
          :transform="'rotate('+(-90)+') '"
          text-anchor="start"
          dominant-baseline="central"
          class="small-text-labels"
        >
          <sm-res-label
            v-for="n in 10"
            :res="0.1 * n"
            :key="'01'+n"
           />

          <sm-res-label
            v-for="n in 5"
            :res="0.2 * n + 1"
            :key="'02'+n"
           />

          <sm-res-label
            v-for="n in 3"
            :res="n + 2"
            :key="'1'+n"
           />

          <sm-res-label
            v-for="n in 2"
            :res="10*n"
            :key="'10'+n"
           />

          <sm-res-label :res="50" />

        </g>

      </g>

      <!-- LINES FOR TEXT LABELS -->
      <g
        v-if="labelRings"
        stroke-width="0.5"
        stroke="black"
      >

        <line
          v-for="n in 180"
          :transform="'rotate('+(n*2)+')'"
          x1="0"
          :y1="-radius - 20"
          x2="0"
          :y2="-radius - 24"
          :key="'text-label-line-1-'+n"
        />

        <line
          v-for="n in 250"
          :transform="'rotate('+((36/25)*n + 18/25)+')'"
          x1="0"
          :y1="-radius - 56"
          x2="0"
          :y2="-radius - 64"
          :key="'text-label-line-2-'+n"
        />

      </g>

    </g>

    <!-- CENTRAL RED DOT -->
    <!-- <sm-point
      :res="1"
      :react="0"
      fill="red"
      r="3"
    /> -->

    <!-- SLOTTED COMPONENTS -->
    <slot></slot>

  </g>

</svg>
</template>

<script>
import SmResCircle from './sm-res-circle'
import SmReactArc from './sm-react-arc'
import SmResLabel from './sm-res-label'
import SmReactLabel from './sm-react-label'
import SmPoint from './sm-point'

export default {
  components: {
    SmResCircle,
    SmReactArc,
    SmResLabel,
    SmReactLabel,
    SmPoint
  },
  props: {
    radius: {
      type: Number,
      default: 400
    },
    resistanceLabels: {
      type: Boolean,
      default: true
    },
    reactanceLabels: {
      type: Boolean,
      default: true
    },
    labelRings: {
      type: Boolean,
      default: true
    },
    translateX: {
      type: Number,
      default: 100
    },
    rotate: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style>
  .arc{
    clip-path: url(#svgPath);
  }

  /* .arc circle:hover{
    stroke-width: 2px;
  } */

  .react-circle{
    clip-rule: evenodd;
  }
  .arc mask{
    pointer-events: none;
  }
  .text-labels{
    font-size: 12px;
  }
  .small-text-labels{
    font-size: 10px;
  }
</style>
