import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika'
import Blog from './components/blog'

Vue.use(VueRouter)
Vue.use(VueYandexMetrika, {
  id: 71367445,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
  scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
  env: 'production'
})

Vue.config.productionTip = false

const routes = [
  { path: '', component: App },
  { path: '/blog', component: Blog }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
