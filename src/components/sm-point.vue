<template lang="html">
<g>
  <circle
    :cx="cx - r"
    :cy="cy"
    :r="4"
  />
</g>
</template>

<script>
export default {
  data: function () {
    return {
      radius: this.$parent.radius
    }
  },
  props: {
    res: [Number, String],
    react: [Number, String]
  },
  computed: {
    // a and b calculations taken from:
    // https://www.allaboutcircuits.com/technical-articles/mathematical-construction-and-properties-of-the-smith-chart/
    cx: function(){

      let r = this.res
      let x = this.react

      let a = (Math.pow(r, 2) - 1 + Math.pow(x, 2)) / (Math.pow(r+1, 2) + Math.pow(x, 2))

      return a * this.radius + this.r

    },
    cy: function(){

      let r = this.res
      let x = this.react

      let b = (2*x) / (Math.pow(r+1, 2) + Math.pow(x, 2))

      return b * this.radius

    },
    r: function(){
      return this.radius/(this.res + 1)
    },
  }
}
</script>
