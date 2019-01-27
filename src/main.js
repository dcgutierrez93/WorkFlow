import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VModal from 'vue-js-modal'

Vue.use(VModal)
import './registerServiceWorker'
// Setup Router
import VueRouter from 'vue-router'

import router from './router'


Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
