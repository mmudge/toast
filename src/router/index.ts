import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Menu from '@/views/Menu.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Order from '@/views/Order.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
