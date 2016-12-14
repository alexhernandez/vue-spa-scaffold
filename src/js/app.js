// VUE-SPA-SCAFFOLD
// ALEX HERNANDEZ, 2016
//

import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync';
import * as filters from './filters';

// API CONFIG - AXIOS
axios.defaults.baseURL = document.querySelector('html').getAttribute('data-url');
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('html').getAttribute('data-token');

// SYNC ROUTER MODULE W/ STORE
sync(store, router);

// REGISTER GLOBAL FILTERS
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// INIT VUE W/ ROUTES & DATA STORE
const app = new Vue({
  el: '#app',
  store, router,
  render: h => h(App),
  ready() {}
});

// EXPOSE THE APP, THE ROUTER & THE STORE
export { app, router, store };
