import Vue from 'vue'
import VueRouter from 'vue-router'
import SummaryView from '../views/SummaryView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: SummaryView
  },
  {
    path: '/:id',
    name: 'home',
    component: SummaryView
  },
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
