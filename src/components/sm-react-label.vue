<template lang="html">
<g>
  <text
    :transform="'rotate('+(-angle)+')'"
    :y="-radius - 10" >
    <slot></slot>
  </text>
  <text
    v-if="angle != 90"
    :transform="'rotate('+(angle - 180)+')'"
    :y="-radius - 10" >
    -<slot></slot>
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
    angle: [Number]
  },
  computed: {
    cx: function(){
      return this.radius + this.radius
    },
  },
}
</script>
