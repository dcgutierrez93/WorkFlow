import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import VModal from 'vue-js-modal'
import axios from 'axios'

Vue.use(VModal)
import './registerServiceWorker'
// Setup Router
import VueRouter from 'vue-router'

axios.defaults.baseURL = 'https://workflow-7c092.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasdaf'
// Vue.prototype.$http  =  axios
// const  accessToken  =  localStorage.getItem('access_token')
//
// if (accessToken) {
//     Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
// }
//
// Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
