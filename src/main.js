import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika'
import index from './pages/index'
import catalog from '@/pages/catalog'
import blog from './pages/blog'

Vue.use(VueRouter)
Vue.use(VueYandexMetrika, {
  id: 71367445,
  scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
  // env: 'production',
  options: {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  }
})

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: index },
    { path: '/catalog', component: catalog },
    { path: '/blog', component: blog }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
