import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Trombi',
    name: 'Trombi',
    component: () => import('../views/Trombi.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
