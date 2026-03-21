import DefaultTheme from 'vitepress/theme'
import DemoHome from './DemoHome.vue'
import DemoPoint from './DemoPoint.vue'
import DemoResCircle from './DemoResCircle.vue'
import DemoReactArc from './DemoReactArc.vue'
import DemoVswr from './DemoVswr.vue'
import Playground from './Playground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoHome', DemoHome)
    app.component('DemoPoint', DemoPoint)
    app.component('DemoResCircle', DemoResCircle)
    app.component('DemoReactArc', DemoReactArc)
    app.component('DemoVswr', DemoVswr)
    app.component('Playground', Playground)
  },
}
