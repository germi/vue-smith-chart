<template lang="html">
<g>
  <text :y="-r*2 + radius - 7" x="3" >
    {{ res.toFixed(1) }}
  </text>
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
    res: [Number]
  },
  computed: {
    r: function(){
      return this.radius/(this.res + 1)
    },
  }
}
</script>
