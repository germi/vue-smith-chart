<template lang="html">
<g
  class="res-circle"
  :mask="'url(#react-circle-'+crop+')'"
>
  <circle
    :cx="cx"
    :cy="cy"
    :r="r"
  />
  <mask :id="'res-circle-'+res">
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
  </mask>
  <mask
    v-if="res==0.5"
    :id="'res-circle-inverse-'+res"
  >
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
    res: [Number, String],
    crop: {
      default: ''
    }
  },
  computed: {
    cx: function(){
      return this.res*this.radius/(this.res + 1) + this.radius
    },
    cy: function(){
      return this.radius
    },
    r: function(){
      return this.radius/(this.res + 1)
    },
  }
}
</script>
