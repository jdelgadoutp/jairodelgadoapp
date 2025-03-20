import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/Projects.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/Services.vue'),
    }
  ],
})

export default router
