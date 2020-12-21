import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/option-based', name:'OptionBased', component: () => import(/* webpackChunkName: "option-based" */ '../views/OptionBased.vue')},
  {path: '/composition', name:'Composition', component: () => import(/* webpackChunkName: "composition" */ '../views/Composition.vue')},
  {path: '/reusable-composition', name:'ReusableComposition', component: () => import(/* webpackChunkName: "reusablecomposition" */ '../views/ReusableComposition.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
