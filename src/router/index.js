import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import('../components/services/Services.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue'),
    },
    {
      path: '/servicesm',
      name: 'servicesm',
      component: () => import('../components/services/Menu.vue'),
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../components/Board.vue'),
    },
    { 
      path: '/google', 
      name: 'irAExterno' // Ruta ficticia para manejar la redirección 
    }
  ],
})


router.beforeEach((to, from, next) => {
  if (to.name === 'irAExterno') {
    window.location.href = 'https://checkout.wompi.co/l/test_1VvJu2';
  } else {
    next();
  }
});

export default router
