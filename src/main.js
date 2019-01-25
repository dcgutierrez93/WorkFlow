import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VModal from 'vue-js-modal'

Vue.use(VModal)
import './registerServiceWorker'
// Setup Router
import VueRouter from 'vue-router'

import router from './router'


import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.config.productionTip = false

Vue.use(VueSidebarMenu)
Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
