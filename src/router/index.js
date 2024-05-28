import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/12OnlineManage/login', component: () => import('../views/auth/login.vue') },
    {
        path: '/12OnlineManage',
        children: [
          {
            path: 'home',
            component: () => import('../views/Template.vue'),
          },
        ],
      },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router