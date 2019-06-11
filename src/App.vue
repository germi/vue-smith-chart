<template>
  <div id="app">

    <!-- <h1>Smith Chart <small class="text-muted">by <a href="http://www.germinalcamps.com" target="_blank">Germinal Camps</a></small></h1> -->

    <smith-chart>

      <!-- <sm-point :res="0" :react="0" fill="red"></sm-point>
      <sm-point :res="1" :react="0" fill="blue"></sm-point>
      <sm-point :res="2" :react="0" fill="green"></sm-point>
      <sm-point :res="3" :react="1" fill="purple"></sm-point>
      <sm-point :res="0.6" :react="0.6" fill="rgba(123,345,2,0.5)" r="10"></sm-point>
      <sm-point :res="0.6" :react="-0.6" fill="rgba(0,345,2,1)" r="10"></sm-point> -->

      <!-- <sm-res-circle
        :res="0.5"
        :crop="1"
        fill="rgba(255,0,255,0.5)"
        stroke-width="2"
        stroke="black"
      ></sm-res-circle>

      <sm-res-circle
        :res="2"
        fill="rgba(0,0,255,0.5)"
      ></sm-res-circle>

      <sm-res-circle
        :res="0.2"
        :crop="0.4"
        fill="none"
        stroke-width="5"
        stroke="#FF4136"
      ></sm-res-circle> -->

      <!-- <sm-react-arc
        :react="-0.2"
        :crop="2"
        fill="none"
        stroke-width="5"
        stroke="#FF4136"
      ></sm-react-arc>

      <sm-react-arc
        :react="-0.8"
        fill="rgba(0,255,255,0.5)"
      ></sm-react-arc>

      <sm-react-arc
        :react="0.5"
        :crop="0.6"
        :double="true"
        fill="rgba(255,0,255,0.5)"
        stroke-width="5"
        stroke="rgb(255,0,255)"
      ></sm-react-arc> -->

      <!-- <sm-vswr-circle
        :res="1"
        :react="1"
      ></sm-vswr-circle>

      <sm-vswr-circle
        :res="0.3"
        :react="-0.5"
        stroke-width="5"
        stroke="blue"
      ></sm-vswr-circle>

      <sm-vswr-circle
        :res="0.2"
        :react="1"
        :show-point="false"
        stroke="red"
      ></sm-vswr-circle> -->

      <sm-res-circle
        v-for="circle in res"
        :res="circle.res"
        :crop="circle.crop"
        fill="rgba(255,0,255,0.5)"
        stroke-width="2"
        stroke="black"
      ></sm-res-circle>

      <sm-react-arc
        v-for="circle in react"
        :react="circle.react"
        :crop="circle.crop"
        fill="rgba(255,0,255,0.5)"
        stroke-width="2"
        stroke="black"
      ></sm-react-arc>

      <sm-vswr-circle
        v-for="circle in vswr"
        :res="circle.res"
        :react="circle.crop"
        stroke-width="2"
        stroke="black"
      ></sm-vswr-circle>

      <sm-point
        v-for="point in points"
        :res="point.res"
        :react="point.react"
        fill="blue"
      ></sm-point>

    </smith-chart>

    <div class="">

      <h2>Add points</h2>

      <div class="form-row mb-2">
        <button
          @click="addPoint"
          type="button"
          class="btn btn-primary"
        >Add point</button>
      </div>

      <div
        v-for="point in points"
        class="form-row align-items-center mb-2"
      >
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">Resistance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Resistance</div>
            </div>
            <input v-model.number="point.res" type="number" class="form-control" id="inlineFormInput" placeholder="Resistance">
          </div>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">Reactance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Reactance</div>
            </div>
            <input v-model.number="point.react" type="number" class="form-control" id="inlineFormInputGroup" placeholder="Reactance">
          </div>
        </div>
      </div>

    </div>

    <div class="">

      <h2>Add resistance circles</h2>

      <div class="form-row mb-2">
        <button
          @click="addResCircle"
          type="button"
          class="btn btn-primary"
        >Add circle</button>
      </div>

      <div
        v-for="circle in res"
        class="form-row align-items-center mb-2"
      >
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">Resistance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Resistance</div>
            </div>
            <input v-model.number="circle.res" type="number" class="form-control" id="inlineFormInput" placeholder="Resistance">
          </div>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">Crop</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Crop</div>
            </div>
            <input
              v-model.number="circle.crop"
              type="number"
              class="form-control"
              id="inlineFormInput"
              placeholder="No"
            >
          </div>
        </div>
      </div>

    </div>

    <div class="">

      <h2>Add constant reactance circles</h2>

      <div class="form-row mb-2">
        <button
          @click="addReactCircle"
          type="button"
          class="btn btn-primary"
        >Add circle</button>
      </div>

      <div
        v-for="circle in react"
        class="form-row align-items-center mb-2"
      >
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">Reactance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Reactance</div>
            </div>
            <input v-model.number="circle.react" type="number" class="form-control" id="inlineFormInput" placeholder="Reactance">
          </div>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">Crop</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Crop</div>
            </div>
            <input
              v-model.number="circle.crop"
              type="number"
              class="form-control"
              id="inlineFormInput"
              placeholder="No"
            >
          </div>
        </div>
      </div>

    </div>

    <div class="">

      <h2>Add VSWR circles</h2>

      <div class="form-row mb-2">
        <button
          @click="addVswrCircle"
          type="button"
          class="btn btn-primary"
        >Add circle</button>
      </div>

      <div
        v-for="circle in vswr"
        class="form-row align-items-center mb-2"
      >
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">Resistance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Resistance</div>
            </div>
            <input
              v-model.number="circle.res"
              type="number"
              class="form-control"
              id="inlineFormInput"
              placeholder="Resistance"
            >
          </div>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">Reactance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Reactance</div>
            </div>
            <input
              v-model.number="circle.react"
              type="number"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="Reactance"
            >
          </div>
        </div>
      </div>

    </div>

    <pre class="bg-light p-3"><code>{{ html }}</code></pre>

  </div>
</template>

<script>
import SmithChart from './components/smith-chart.vue'
import SmPoint from './components/sm-point.vue'
import SmResCircle from './components/sm-res-circle.vue'
import SmReactArc from './components/sm-react-arc.vue'
import SmVswrCircle from './components/sm-vswr-circle.vue'

export default {
  name: 'app',
  components: {
    SmithChart,
    SmPoint,
    SmResCircle,
    SmReactArc,
    SmVswrCircle,
  },
  computed:{
    html(){
      let html = "<smith-chart>\n"
      for (var i = 0; i < this.res.length; i++) {
        html += '  <sm-res-circle :res="' + this.res[i].res + '"></sm-res-circle>\n'
      }
      for (var i = 0; i < this.react.length; i++) {
        html += '  <sm-react-circle :react="' + this.react[i].react + '"></sm-react-circle>\n'
      }
      for (var i = 0; i < this.points.length; i++) {
        html += '  <sm-point :res="' + this.points[i].res + '" :react="' + this.points[i].react + '"></sm-point>\n'
      }
      return html + "</smith-chart>"
    }
  },
  data: function () {
    return {
      points: [
        {res: 1, react: 1}
      ],
      res: [
        {res: 1, crop: 0}
      ],
      react: [
        {react: 1, crop: ''}
      ],
      vswr: [
        {res: 1, react: 1}
      ]
    }
  },
  methods: {
    addPoint(){
      this.points.push(
        {res: 1, react: 1}
      )
    },
    addResCircle(){
      this.res.push(
        {res: 1, crop: 0}
      )
    },
    addReactCircle(){
      this.react.push(
        {react: 1, crop: ''}
      )
    },
    addVswrCircle(){
      this.vswr.push(
        {res: 1, react: ''}
      )
    }
  }
}
</script>
