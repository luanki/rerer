import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.js';
import Full from '@/views/full.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: Full,
      redirect: '/home/child1',
      children: routes
    }
  ]
});

export default router;
