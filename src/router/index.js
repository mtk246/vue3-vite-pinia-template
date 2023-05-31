import { createRouter, createWebHistory } from 'vue-router'
import { userAuthStore } from '../stores/authUser'
import HomePage from '../pages/HomePage.vue'
import AboutComponent from '../pages/AboutComponent.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import LoginComponent from '../pages/auth/LoginComponent.vue'
import SignUpComponent from '../pages/auth/SignUpComponent.vue'
import NotFound from '../pages/NotFound.vue';
import HomeComponent from '../pages/superadmin/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {guest: true}
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
    meta: {guest: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    meta: {guest: true}
  },
  {
    path: '/register',
    name: 'Register',
    component: SignUpComponent,
    meta: {guest: true}
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/superadmin',
    name: 'Superadmin',
    component: HomeComponent,
    meta: {guest: true},
  },
  {
    path: '/404',
    component: NotFound,
    meta: {guest: true},
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const store = userAuthStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})

export default router
