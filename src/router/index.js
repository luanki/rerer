import Vue from 'vue';
import VueRouter from 'vue-router';
import { constantRoutes } from './router.js';
import SysLayout from '@/components/basic/layout.vue';

import cookie from '@/common/cookie.js';
import store from '@/store/index.js';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
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
      let roles = store.state.user.roles;
      if (roles.length) {
        next();
      } else {
        try {
          let info = await store.dispatch('user/getUserInfo');
          let accessRoutes = await store.dispatch('permission/generateRoutes', info.roles);
          console.log('accessRoutes', JSON.parse(JSON.stringify(accessRoutes[0])));
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch('user/resetToken');
          console.log(22222222222222, error || 'Has Error');
          next(`/login?redirect=${to.path}`);
        }
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
