import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

//Vue.use(Router)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
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

export default router;
