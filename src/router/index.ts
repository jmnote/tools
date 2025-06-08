import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue'),
    },
    {
      path: '/random',
      name: 'random-tool',
      component: () => import('../views/RandomTool.vue'),
    },
    {
      path: '/svg',
      name: 'svg-tool',
      component: () => import('../views/SvgTool.vue'),
    },
  ],
})

export default router
