import Vue from 'vue';
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
// Vue.http.options.root = 'http://www.clashapi.xyz/';

Vue.use(HighchartsVue)
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
