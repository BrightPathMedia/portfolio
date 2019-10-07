// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

const i18nConfig = require('~/i18n/i18n.json')


import DefaultLayout from '~/layouts/Default.vue'
import VueI18n from 'vue-i18n'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueI18n)

  appOptions.i18n = new VueI18n({
    locale: 'ja',
    messages: i18nConfig
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/qxv3yvd.css'
  });
}
