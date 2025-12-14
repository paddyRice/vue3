import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

/**
 * 页面跳转封装方法（携带参数）
 * @param name 路由名称
 * @param params 路由参数（路径参数）
 * @param query 查询参数（URL参数）
 */
export const navigateTo = (
  name: string,
  params?: Record<string, any>,
  query?: Record<string, any>
) => {
  router.push({
    name,
    params,
    query
  })
}

/**
 * 页面跳转（使用路径）
 * @param path 路由路径
 * @param query 查询参数
 */
export const navigateToPath = (path: string, query?: Record<string, any>) => {
  router.push({
    path,
    query
  })
}

/**
 * 返回上一页
 */
export const goBack = () => {
  router.go(-1)
}

/**
 * 替换当前路由
 */
export const replaceTo = (
  name: string,
  params?: Record<string, any>,
  query?: Record<string, any>
) => {
  router.replace({
    name,
    params,
    query
  })
}