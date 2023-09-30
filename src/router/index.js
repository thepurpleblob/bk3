import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/page/:slug',
    name: 'Page',
    component: () => import(/* webpackChunkName: "page" */ '@/views/PageOther.vue')
  },
  {
    path: '/fares',
    name: 'FaresTimes',
    component: () => import(/* webpackChunkName: "fares" */ '@/views/FaresTimes.vue')
  },
  {
    path: '/plan',
    name: 'PlanVisit',
    component: () => import(/* webpackChunkName: "plan" */ '@/views/PlanVisit.vue')
  },
  {
    path: '/news',
    name: 'NewsItems',
    component: () => import(/* webpackChunkName: "news" */ '@/views/NewsItems.vue')
  },
  {
    path: '/events',
    name: 'EventsList',
    component: () => import(/* webpackChunkName: "events" */ '@/views/EventsList.vue')
  },
  {
    path: '/special',
    name: 'SpecialList',
    component: () => import(/* webpackChunkName: "events" */ '@/views/SpecialList.vue')
  },
  {
    path: '/thomas',
    name: 'ThomasEvent',
    component: () => import(/* webpackChunkName: "thomas" */ '@/views/ThomasEvent.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
