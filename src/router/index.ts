import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/advisory'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'advisory'
      },
      {
        path: 'advisory',
        component: () => import('@/views/Advisory.vue')
      },
      {
        path: 'directory',
        component: () => import('@/views/Directory.vue')
      },
      {
        path: 'payments',
        component: () => import('@/views/Payments.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
