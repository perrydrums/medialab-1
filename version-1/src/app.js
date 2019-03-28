import Vue from 'vue'
import App from './App.vue';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzrtJBe_cWnehIlHDo9N7F5UJ9aCN2FnM',
  },
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
