import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika'
import Index from './pages/index'
import Blog from './pages/blog'

Vue.use(VueRouter)
Vue.use(VueYandexMetrika, {
  id: 71367445,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
  scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
  env: 'develop'
})

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Index },
  { path: '/blog', component: Blog }
]

const router = new VueRouter({
  routes
})

export default () => new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
