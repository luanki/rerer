import Full from '@/views/full.vue';

const routes = [
  {
    path: 'home',
    name: 'Homesssss',
    component: Full,
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
    path: 'about',
    name: 'About',
    icon: 'md-appstore',
    component: Full,
    children: [
      {
        path: 'child3',
        name: 'Child3',
        icon: 'ios-alarm',
        component: () => import('@/views/child3.vue')
      },
      {
        path: 'child4',
        name: 'Child4',
        icon: 'ios-alarm',
        component: () => import('@/views/child4.vue')
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
    path: '404',
    name: '404',
    icon: 'ios-at',
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '401',
    name: '401',
    icon: 'ios-at',
    component: () => import('@/views/error-page/401.vue')
  }
];

export default routes;
