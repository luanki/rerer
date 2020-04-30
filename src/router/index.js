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
      name: 'Content',
      component: Full,
      redirect: '/home/child1',
      children: routes
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    }
  ]
});

export default router;
