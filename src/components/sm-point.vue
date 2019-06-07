<template lang="html">
<circle
  :cx="cx"
  :cy="cy"
  fill="blue"
  r="3" 
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
    react: [Number, String]
  },
  computed: {
    cx: function(){
      return ((this.res)/(this.res + 1) + 1) * (this.radius)
    },
    cy: function(){
      return this.react + this.radius
    },
  }
}
</script>
