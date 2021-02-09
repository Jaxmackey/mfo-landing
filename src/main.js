import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(VueRouter)
Vue.use(VueYandexMetrika, {
  id: 71367445,
  scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    env: 'dev'
  }
})

Vue.config.productionTip = false

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('./pages/index.vue') },
      { path: '/catalog', component: () => import('./pages/catalog.vue') },
      { path: '/blog', component: () => import('./pages/blog.vue') }
    ]
  })
}
const router = createRouter()

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
