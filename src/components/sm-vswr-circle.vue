<template lang="html">
<g
  fill="none"
  stroke-width="3"
  :stroke="stroke"
>
  <circle
    :cx="radius"
    :cy="radius"
    :r="r"
  />
  <sm-point
    v-if="showPoint"
    :res="res"
    :react="react"
    :fill="stroke"
  ></sm-point>
</g>
</template>

<script>
import SmPoint from './sm-point'

export default {
  components: {
    SmPoint
  },
  data: function () {
    return {
      radius: this.$parent.radius
    }
  },
  props: {
    res: {
      type: [Number, String],
      default: 1
    },
    react: {
      type: [Number, String],
      default: 1
    },
    showPoint: {
      type: Boolean,
      default: true
    },
    stroke: {
      default: 'black'
    }
  },
  computed: {
    // a and b calculations taken from:
    // https://www.allaboutcircuits.com/technical-articles/mathematical-construction-and-properties-of-the-smith-chart/
    cx: function(){

      let r = this.res
      let x = this.react

      let a = (Math.pow(r, 2) - 1 + Math.pow(x, 2)) / (Math.pow(r+1, 2) + Math.pow(x, 2))

      return a * this.radius

    },
    cy: function(){

      let r = this.res
      let x = this.react

      let b = (2*x) / (Math.pow(r+1, 2) + Math.pow(x, 2))

      return - b * this.radius

    },
    r: function(){
      let r = Math.sqrt(Math.pow(this.cx, 2) + Math.pow(this.cy, 2))
      return r;
    }
  }
}
</script>
