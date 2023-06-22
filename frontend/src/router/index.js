import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
      // beforeEnter: (to, from, next) => {
      //   const { uri } = to.query;
      //   if (uri != null && uri != '/') {
      //     next(false);
      //     router.push(uri);
      //   } else {
      //     next();
      //   }
      // }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/ShopFrontView.vue'),
    },
    {
      path: '/shop/:id',
      name: 'shopItem',
      component: () => import('@/views/ShopItemView.vue'),
    },
  ]
})

export default router
