import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika'

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

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./pages/index.vue'),
        meta: {
          title: 'EZCASH - Главная'
        }
      },
      {
        path: '/catalog',
        component: () => import('./pages/catalog.vue'),
        meta: {
          title: 'EZCASH - Микрозаймы'
        }
      },
      {
        path: '/blog',
        component: () => import('./pages/blog.vue'),
        meta: {
          title: 'EZCASH - Блог'
        }
      }
      // {
      //   path: '/about',
      //   component: () => import('./pages/about.vue'),
      //   meta: {
      //     title: 'EZCASH - О нас'
      //   }
      // }
    ]
  })
}
const router = createRouter()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
