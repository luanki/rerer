import Full from '@/views/full.vue';
import SysLayout from '@/components/basic/layout.vue';

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: 'home',
    name: 'Homesssss',
    component: Full,
    redirect: '/home/child1',
    icon: 'ios-alarm',
    children: [
      {
        path: 'child1',
        name: 'Child1',
        icon: 'ios-alarm',
        component: () => import('@/views/child1.vue')
      },
      {
        path: 'child2',
        name: 'Child2',
        icon: 'ios-alarm',
        component: () => import('@/views/child2.vue')
      }
    ]
  },
  {
    path: 'test',
    name: 'Test',
    icon: 'ios-at',
    component: () => import('@/views/test.vue')
  },
  {
    path: '/404',
    name: '404',
    icon: 'ios-at',
    hidden: true,
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '/401',
    name: '401',
    icon: 'ios-at',
    hidden: true,
    component: () => import('@/views/error-page/401.vue')
  }
];

export const asyncRoutes = [
  {
    path: '/about',
    name: 'About',
    icon: 'md-appstore',
    component: SysLayout,
    redirect: '/about/child3',
    children: [
      {
        path: 'child3',
        name: 'Child3',
        icon: 'ios-alarm',
        meta: { roles: ['admin', 'visitor'] },
        component: () => import('@/views/child3.vue')
      },
      {
        path: 'child4',
        name: 'Child4',
        icon: 'ios-alarm',
        meta: { roles: ['admin'] },
        component: () => import('@/views/child4.vue')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];
