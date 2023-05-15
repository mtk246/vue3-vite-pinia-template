import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../pages/HomeComponent.vue'
import AboutComponent from '../pages/AboutComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
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
