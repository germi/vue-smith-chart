<template>
  <div id="app">

    <!-- <h1>Smith Chart <small class="text-muted">by <a href="http://www.germinalcamps.com" target="_blank">Germinal Camps</a></small></h1> -->
    <div class="mx-auto">

    <smith-chart
      :resistance-labels="false"
      :reactance-labels="false"
      :label-rings="false"
    >

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

    </div>

    <div class="card mb-4">

      <div class="card-header d-flex justify-content-between">
        <h4>Impedance points</h4>
        <button
          @click="addPoint"
          type="button"
          class="btn btn-primary"
        >Add point</button>
      </div>

      <ul class="list-group list-group-flush">
        <li
          v-for="(point, i) in points"
          class="list-group-item"
        >
          <div class="form-inline">
            <label class="sr-only" for="inlineFormInput">Resistance</label>
            <div class="input-group mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Resistance</div>
              </div>
              <input v-model.number="point.res" type="number" class="form-control" id="inlineFormInput" placeholder="Resistance">
            </div>

            <label class="sr-only" for="inlineFormInputGroup">Reactance</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">Reactance</div>
              </div>
              <input v-model.number="point.react" type="number" class="form-control" id="inlineFormInputGroup" placeholder="Reactance">
            </div>

            <button
              type="button"
              class="btn btn-outline-danger ml-auto"
              @click="points.splice(i,1)"
            >X</button>
          </div>
        </li>
      </ul>


    </div>

    <div class="card mb-4">

      <div class="card-header d-flex justify-content-between">
        <h4>Constant Resistance Circles</h4>
        <button
          @click="addResCircle"
          type="button"
          class="btn btn-primary"
        >Add circle</button>
      </div>

      <ul class="list-group list-group-flush">
        <li
          v-for="(circle, i) in res"
          class="list-group-item"
        >
        <div class="form-inline">
          <label class="sr-only" for="inlineFormInput">Resistance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Resistance</div>
            </div>
            <input v-model.number="circle.res" type="number" class="form-control" id="inlineFormInput" placeholder="Resistance">
          </div>

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

          <button
            type="button"
            class="btn btn-outline-danger ml-auto"
            @click="res.splice(i,1)"
          >X</button>
        </div>
      </li>
    </ul>

    </div>

    <div class="card mb-4">

      <div class="card-header d-flex justify-content-between">
        <h4>Constant Reactance Arcs</h4>
        <button
          @click="addReactCircle"
          type="button"
          class="btn btn-primary"
        >Add arc</button>
      </div>

      <ul class="list-group list-group-flush">
        <li
          v-for="(circle, i) in react"
          class="list-group-item"
        >
        <div class="form-inline">
          <label class="sr-only" for="inlineFormInput">Reactance</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Reactance</div>
            </div>
            <input v-model.number="circle.react" type="number" class="form-control" id="inlineFormInput" placeholder="Reactance">
          </div>

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

          <button
            type="button"
            class="btn btn-outline-danger ml-auto"
            @click="react.splice(i,1)"
          >X</button>
        </div>
      </li>
    </ul>

    </div>

    <div class="card mb-4">

      <div class="card-header d-flex justify-content-between">
        <h4>Constant VSWR circles</h4>
        <button
          @click="addVswrCircle"
          type="button"
          class="btn btn-primary"
        >Add circle</button>
      </div>

      <ul class="list-group list-group-flush">
        <li
          v-for="(circle, i) in vswr"
          class="list-group-item"
        >
        <div class="form-inline">
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

          <button
            type="button"
            class="btn btn-outline-danger ml-auto"
            @click="vswr.splice(i,1)"
          >X</button>
        </div>
      </li>
    </ul>

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
        html += '  <sm-react-arc :react="' + this.react[i].react + '"></sm-react-arc>\n'
      }
      for (var i = 0; i < this.vswr.length; i++) {
        html += '  <sm-vswr-circle :res="' + this.vswr[i].res + '" :react="' + this.vswr[i].react + '"></sm-vswr-circle>\n'
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
