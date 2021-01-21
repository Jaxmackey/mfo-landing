import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(VueYandexMetrika, {
  id: 71367445,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
