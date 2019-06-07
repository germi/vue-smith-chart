<template>
  <div id="app">

    <h1>Smith Chart <small class="text-muted">by <a href="http://www.germinalcamps.com" target="_blank">Germinal Camps</a></small></h1>

    <smith-chart>
      <sm-point res="2" react="0"></sm-point>
      <sm-point res="1" react="0"></sm-point>
    </smith-chart>

  </div>
</template>

<script>
import SmithChart from './components/smith-chart.vue'
import SmPoint from './components/sm-point.vue'

export default {
  name: 'app',
  components: {
    SmithChart,
    SmPoint
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
