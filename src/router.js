import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Home from './components/Home.vue'

//import Auth from '@okta/okta-vue'

//Vue.use(Router)
// Vue.use(Auth, {
//   issuer: 'https://dev-779604.oktapreview.com/oauth2/default',
//   client_id: '0oaj3z1hfcBQfru9X0h7',
//   redirect_uri: 'http://localhost:8080/implicit/callback',
//   scope: 'openid profile email'
// })

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
      component: Dashboard
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
});
