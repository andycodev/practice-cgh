import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/users',
    component: () => import('@/pages/users/UsersPage.vue'),
  },
  {
    path: '/',
    redirect: '/users',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/users',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
