<template>
  <div id="app">

    <h1>Smith Chart <small class="text-muted">by <a href="http://www.germinalcamps.com" target="_blank">Germinal Camps</a></small></h1>

    <smith-chart>
      <sm-point :res="0" :react="0" fill="red"></sm-point>
      <sm-point :res="1" :react="0" fill="blue"></sm-point>
      <sm-point :res="2" :react="0" fill="green"></sm-point>
      <sm-point :res="3" :react="1" fill="purple"></sm-point>
      <sm-point :res="0.6" :react="0.6" fill="rgba(123,345,2,0.5)" r="10"></sm-point>
      <sm-point :res="0.6" :react="-0.6" fill="rgba(0,345,2,1)" r="10"></sm-point>
      <sm-res-circle :res="1" fill="rgba(0,0,255,0.5)" key="TESTTEST"></sm-res-circle>
      <sm-res-circle :res="0.2" fill="rgba(0,255,255,0.5)" key="TESTTEST"></sm-res-circle>
    </smith-chart>

  </div>
</template>

<script>
import SmithChart from './components/smith-chart.vue'
import SmPoint from './components/sm-point.vue'
import SmResCircle from './components/sm-res-circle.vue'

export default {
  name: 'app',
  components: {
    SmithChart,
    SmPoint,
    SmResCircle
  }
}
</script>

<style>
/* .arc{
    clip-path: url(#svgPath);
  }
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
  } */
</style>
