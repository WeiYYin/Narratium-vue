import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
