import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PageOne from '@/views/PageOne.vue'

type AppRouteRecord = Omit<RouteRecordRaw, 'path' | 'children'> & {
  path: string
  children?: readonly AppRouteRecord[]
}
type GetRouteName<T extends AppRouteRecord> = T extends { children: readonly AppRouteRecord[] }
  ? T['path'] | GetRoutesNames<T['children']>
  : T['path']
type GetRoutesNames<T extends readonly AppRouteRecord[]> = GetRouteName<T[number]>

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageOne
  },
  {
    path: '/page2',
    name: 'about',
    component: () => import('../views/PageTwo.vue')
  }
] as const satisfies readonly AppRouteRecord[]

type TRoutes = typeof routes
export type TRoutesNames = GetRoutesNames<TRoutes>

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as unknown as RouteRecordRaw[]
})

export default router
