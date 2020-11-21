import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/dashboard'
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
  },
  {
    path: '/home/',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
