import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Workspaces from '../views/Workspaces.vue'
import Contact from '../views/Contact.vue'
import ResearchConsult from '../views/ResearchConsult.vue'
import Coffee from '../views/Coffee.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workspaces',
    name: 'Workspaces',
    component: Workspaces
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/research-consult',
    name: 'ResearchConsult',
    component: ResearchConsult
  },
  {
    path: '/coffee',
    name: 'Coffee',
    component: Coffee
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

