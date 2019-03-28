import Vue from 'vue';
import Router from 'vue-router';

// Page content
import Dashboard from './components/Dashboard';

// Fallback page
import PageNotFound from './components/PageNotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
