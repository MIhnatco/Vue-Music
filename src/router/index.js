import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/AboutView.vue'
import Manage from '@/views/Manage.vue'

let routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'manage',
    path: '/manage-music',
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log('Manage Route Guard')
      next();
    }
  },
  {
    //redirect
    path: '/manage',
    redirect: { name: 'manage' }
  },
  {
    //catch-all
    path: '/catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

//glogal guard
router.beforeEach((to, from, next) => {
  console.log('Global Guard')

  next()
})

export default router
