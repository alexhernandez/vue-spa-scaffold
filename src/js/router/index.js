// ROUTER
//

import Vue from 'vue';
import VueRouter from 'vue-router';

// COMPONENTS
import home from './../views/HomeView.vue';
import about from './../views/AboutView.vue';
import contact from './../views/ContactView.vue';

// INIT VUE-ROUTER
Vue.use(VueRouter);

// ROUTER MAP
export default new VueRouter({
  routes: [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
  ],
  linkActiveClass: "nav__link--active",
  // scrollBehavior: () => ({ y: 0 }), FORCE SCROLL TOP ON ALL ROUTE NAVIGATIONS
});
