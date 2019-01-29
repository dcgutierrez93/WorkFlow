import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
// import VModal from 'vue-js-modal'
import axios from 'axios'

// Vue.use(VModal)
import './registerServiceWorker'
// Setup Router
//import VueRouter from 'vue-router'

Vue.config.productionTip = false
// Setup axios globaly
axios.defaults.baseURL = 'https://workflow-7c092.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fasdaf'
axios.defaults.headers.get['Accepts'] = 'application/json'

// Setup Axios interceptors
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptors', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptors', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)
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
