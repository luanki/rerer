import router from './router';

import cookie from '@/common/cookie.js';
import store from '@/store/index.js';

let noTokenList = ['/login', '/401', '/404'];
router.beforeEach(async (to, from, next) => {
  let token = cookie.getCookie('token');
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      try {
        let roles = store.state.user.roles;
        if (roles.length) {
          next();
        } else {
          let info = await store.dispatch('user/getUserInfo');
          let accessRoutes = await store.dispatch('permission/generateRoutes', info.roles);
          console.log('accessRoutes', JSON.parse(JSON.stringify(accessRoutes[0])));
          console.log(accessRoutes[0].path === '/about');
          // router.addRoutes([
          //   {
          //     path: '/test',
          //     name: 'Test',
          //     component: () => import('@/views/test.vue')
          //   }
          // ]);
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true });
        }
      } catch (error) {
        console.log(33);
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
