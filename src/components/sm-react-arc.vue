<template lang="html">
<g
  class="react-circle arc"
  :mask="'url(#res-circle-'+crop+')'"
>

  <circle
    :cx="cx"
    :cy="cy * -1 + 2 * radius"
    :r="r"
  />
  <circle
    v-if="double"
    :cx="cx"
    :cy="cy"
    :r="r"
  />

  <mask :id="'react-circle-'+magnitude">
    <rect
      :width="2*radius"
      :height="2*radius"
      fill="white"
    />
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
      fill="black"
    />
    <circle
      :cx="cx"
      :cy="cy * -1 + 2 * radius"
      :r="r"
      fill="black"
    />
  </mask>
  <mask
    v-if="magnitude==0.5"
    :id="'react-circle-inverse-'+magnitude">
    <rect
      :width="2*radius"
      :height="2*radius"
      fill="black"
    />
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
      fill="white"
    />
    <circle
      :cx="cx"
      :cy="cy * -1 + 2 * radius"
      :r="r"
      fill="white"
    />
  </mask>
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
    react: [Number, String],
    crop: {
      default: ''
    },
    double: {
      default: false
    }
  },
  computed: {
    magnitude: function(){
      return Math.abs(this.react)
    },
    cx: function(){
      return this.radius + this.radius
    },
    cy: function(){
      return this.radius/this.react + this.radius
    },
    r: function(){
      return this.radius/this.magnitude
    },
  }
}
</script>
