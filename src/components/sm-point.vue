<template lang="html">
<circle
  :cx="cx"
  :cy="cy"
  :r="r"
/>
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
    react: [Number, String],
    r: {
      type: [Number, String],
      default: 4
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

      return b * this.radius

    }
  }
}
</script>
