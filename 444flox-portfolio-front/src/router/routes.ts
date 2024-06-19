import { createRouter, createWebHistory } from 'vue-router'
import SpawnView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AppLayout from "@/views/AppLayout.vue";
import Excalibur from "@/views/projects/Excalibur.vue";
import Cavalry from "@/views/projects/Cavalry.vue";
import Posters from "@/views/projects/Posters.vue";
import Gen from "@/views/projects/Gen.vue";
import Sage from "@/views/projects/Sage.vue";
import Dispositifs from "@/views/projects/Dispositifs.vue";
import FallenHero from "@/views/projects/FallenHero.vue";
import ProjectLayout from "@/views/projects/ProjectLayout.vue";
import ContactView from "@/views/ContactView.vue";
import CurriculumView from "@/views/CurriculumView.vue";
import ShopView from "@/views/ShopView.vue";
import DeskView from '@/views/projects/DeskView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SpawnView
    },
    {
      path: '/desk',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'Desk',
          component: DeskView
        },
        {
          path: '/projects',
          name: 'Projects',
          component: ProjectsView
        },
        {
          path: '/shop',
          name: 'Shop',
          component: ShopView
        },
        {
          path: '/contact',
          name: 'Contact',
          component: ContactView
        },
        {
          path: '/curriculum',
          name: 'CV',
          component: CurriculumView
        },
        {
          path: '/:name',
          name: 'Project View',
          component: ProjectLayout,
          children: [
            {
              path: '/excalibur',
              name: 'Excalibur',
              component: Excalibur
            },
            {
              path: '/cavalry',
              name: 'Cavalry',
              component: Cavalry
            },
            {
              path: '/posters',
              name: 'Posters',
              component: Posters
            },
            {
              path: '/gen',
              name: 'Gen',
              component: Gen
            },
            {
              path: '/sage',
              name: 'Sage',
              component: Sage
            },
            {
              path: '/fallen_hero',
              name: 'Fallen Hero',
              component: FallenHero
            },
            {
              path: '/dispositifs',
              name: 'Dispositifs',
              component: Dispositifs
            },
          ]
        }
      ]
    },
  ]
})

export default router
