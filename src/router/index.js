import { createRouter, createWebHistory } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
// import Portfolio from '../components/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PortfolioView
  },
  {
    path: '/',
    component: PortfolioView
  },
  { path: '/project',
   component: () => import('@/views/PortfolioView.vue')
   },
  { path: '/about',
   component: () => import('@/views/PortfolioView.vue')
   },
  { path: '/contact',
   component: () => import('@/views/PortfolioView.vue')
   },
  // {
  //   path: '/aboutme',
  //   name: 'aboutme',
  //   component: Portfolio
  // },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
