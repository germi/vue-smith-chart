import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  title: 'vue-smith-chart',
  description: 'Smith Chart SVG components for Vue 3',
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'vue-smith-chart',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/smith-chart' },
      {
        text: 'Changelog',
        link: 'https://github.com/germi/vue-smith-chart/blob/main/CHANGELOG.md',
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'SmithChart', link: '/components/smith-chart' },
          { text: 'SmPoint', link: '/components/sm-point' },
          { text: 'SmResCircle', link: '/components/sm-res-circle' },
          { text: 'SmReactArc', link: '/components/sm-react-arc' },
          { text: 'SmVswrCircle', link: '/components/sm-vswr-circle' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/germi/vue-smith-chart' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019–present Germinal Camps',
    },

    search: { provider: 'local' },
  },

  vite: {
    resolve: {
      alias: {
        // Point the package name at the library source so demos work
        // without needing to publish to npm first.
        'vue-smith-chart': resolve(__dirname, '../../src/index.js'),
      },
    },
  },
})
