import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
