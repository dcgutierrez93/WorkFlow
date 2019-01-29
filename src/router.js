import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Home from './components/Home.vue'

import store from './store'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base:  process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // TODO: Uncomment for Dashboard Security
      beforeEnter(to, from, next) {
        if(store.state.idToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
