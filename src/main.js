// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
// import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/layout.css';
// import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})