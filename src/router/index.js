import { createRouter, createWebHistory } from 'vue-router'
import BodyView from '../views/BodyView.vue'

const routes = [
  {
    path: '/',
    name: 'body',
    component: BodyView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
