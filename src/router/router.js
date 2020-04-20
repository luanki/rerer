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
    icon: 'ios-alarm',
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
    icon: 'ios-alarm',
    component: () => import('@/views/test.vue')
  }
];

export default routes;
