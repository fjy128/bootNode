// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import $ from 'jquery';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$url='http://5b076a5892b3b4001425a067.mockapi.io/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
