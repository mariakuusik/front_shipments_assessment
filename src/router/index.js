import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ShipmentsTable.vue'
import ShipmentsTable from "@/views/ShipmentsTable.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShipmentsTable
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
