import Vue from 'vue';
import Router from 'vue-router';

// Page content
import Home from './components/Home';
import Scoreboard from './components/Scoreboard';
import Rewards from './components/Rewards';

// Fallback page
import PageNotFound from './components/PageNotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/score',
      name: 'Scoreboard',
      component: Scoreboard
    },
    {
      path: '/rewards',
      name: 'Rewards',
      component: Rewards
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
