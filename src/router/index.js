import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutComponent from '../pages/AboutComponent.vue'
import LoginComponent from '../pages/auth/LoginComponent.vue'
import SignUpComponent from '../pages/auth/SignUpComponent.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: SignUpComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
