import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue'

// Vue.use(Router)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
  ]
});

export default router;
