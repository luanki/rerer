const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'ios-alarm',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'child1',
        name: 'Child1',
        icon: 'ios-alarm',
        component: () => import('@/components/HelloWorld.vue')
      },
      {
        path: 'child2',
        name: 'Child2',
        icon: 'ios-alarm',
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    icon: 'ios-alarm',
    component: () => import('@/views/About.vue'),
    children: [
      {
        path: '/child3',
        name: 'Child3',
        icon: 'ios-alarm',
        component: () => import('@/components/HelloWorld.vue')
      },
      {
        path: '/child4',
        name: 'Child4',
        icon: 'ios-alarm',
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  }
];

export default routes;
