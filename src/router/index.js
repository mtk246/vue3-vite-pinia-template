import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutComponent from '../pages/AboutComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
