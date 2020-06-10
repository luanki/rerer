import Vue from 'vue';
import VueRouter from 'vue-router';
import { constantRoutes } from './router.js';
import SysLayout from '@/components/basic/layout.vue';

import cookie from '@/common/cookie.js';
import store from '@/store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...constantRoutes.filter(v => v.hidden),
    {
      path: '/',
      name: 'main',
      component: SysLayout,
      redirect: '/home/child1',
      children: constantRoutes.filter(v => !v.hidden)
    }
  ]
});

let noTokenList = ['/login', '/401', '/404'];
router.beforeEach(async (to, from, next) => {
  let token = cookie.getCookie('token');
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      try {
        console.log(store, [...store.state.user.roles])
        let roles = store.state.user.roles;
        if (roles.length) {
          next();
        } else {
          debugger
          let info = await store.dispatch('user/getUserInfo');
          console.log(info)
          let addRoutes = await store.dispatch('permission/generateRoutes', info.roles);
          router.addRoutes(addRoutes);
          next({ ...to, replace: true });
        }
      } catch (error) {
        // await store.dispatch('user/resetToken');
        // console.log(22222222222222,error || 'Has Error');
        // next(`/login?redirect=${to.path}`);
      }
    }
  } else {
    if (noTokenList.includes(to.path)) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
});

export default router;
