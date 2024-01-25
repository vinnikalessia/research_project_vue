import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Boek from './views/Boek.vue'
import Auteur from './views/Auteur.vue'
import Wonka from './views/special/Wonka.vue'
import Winkelmand from './views/Winkelmand.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/book/de-reis-van-de-wijze-kat',
      component: Boek,
    },
    {
      path: '/special/wonka',
      component: Wonka,
    },
    {
      path: '/author/james-norbury',
      component: Auteur,
    },
    {
      path: '/Winkelmand',
      component: Winkelmand,
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('./views/404.vue'),
    // },
  ],
})


export default router