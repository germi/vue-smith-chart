<template lang="html">
<g class="react-circle">
  <circle
    :cx="cx"
    :cy="cy"
    :r="r"
  />
  <circle
    :cx="cx"
    :cy="cy * -1 + 2 * radius"
    :r="r"
  />
  <mask :id="'react-circle-'+res">
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
    v-if="res==0.5"
    :id="'react-circle-inverse-'+res">
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
    res: [Number, String],
    crop: [Number, String]
  },
  computed: {
    cx: function(){
      return this.radius + this.radius
    },
    cy: function(){
      return this.radius/this.res + this.radius
    },
    r: function(){
      return this.radius/this.res
    },
  }
}
</script>
