import { createRouter, createWebHashHistory } from 'vue-router'
import SignupPage from '../views/SignupPage.vue'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: MainPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
