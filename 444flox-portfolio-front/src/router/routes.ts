import { createRouter, createWebHistory } from 'vue-router'
import SpawnView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AppLayout from "@/views/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SpawnView
    },
    {
      path: '/projects',
      component: AppLayout,
      children: [
        {
          path: '/',
          component: ProjectsView
        }
      ]
    },
  ]
})

export default router
