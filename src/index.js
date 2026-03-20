import SmithChart from './components/SmithChart.vue'
import SmPoint from './components/SmPoint.vue'
import SmResCircle from './components/SmResCircle.vue'
import SmReactArc from './components/SmReactArc.vue'
import SmVswrCircle from './components/SmVswrCircle.vue'

// Named exports for tree-shakeable imports
export { SmithChart, SmPoint, SmResCircle, SmReactArc, SmVswrCircle }

// Vue plugin — registers all components globally
export default {
  install(app) {
    app.component('SmithChart', SmithChart)
    app.component('SmPoint', SmPoint)
    app.component('SmResCircle', SmResCircle)
    app.component('SmReactArc', SmReactArc)
    app.component('SmVswrCircle', SmVswrCircle)
  },
}
