import { createWebHistory, createRouter } from 'vue-router';
import UsersPage from '@/pages/users/UsersPage.vue';

const routes = [
  {
    path: '/users',
    component: UsersPage
  },
  {
    // Ruta predeterminada (por defecto)
    path: '/',
    redirect: '/users'  // Redirige a /users si la ruta principal es accesada
  },
  {
    // Ruta para redirigir si el usuario accede a una ruta no válida
    path: '/:catchAll(.*)',
    redirect: '/users'  // Redirige a /users si la ruta no existe
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
