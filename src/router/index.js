import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.js';
import SysLayout from '@/components/basic/layout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'Content',
      component: SysLayout,
      redirect: '/home/child1',
      children: routes
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  next();
});

export default router;
