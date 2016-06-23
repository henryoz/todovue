import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter();

// Specify new routes
router.map({
  '/': {
    component: App
  }
});

// Handle default routing
router.redirect({
  '*': '/'
});

export default router;
