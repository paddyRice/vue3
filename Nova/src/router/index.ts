import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/articles/ArticleList.vue')
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: () => import('@/views/articles/ArticleDetail.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/gallery/GalleryList.vue')
  },
  {
    path: '/gallery/:id',
    name: 'GalleryDetail',
    component: () => import('@/views/gallery/GalleryDetail.vue')
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('@/views/TechView.vue')
  },
  {
    path: '/dome',
    name: 'Dome',
    component: () => import('@/views/dome/DomeList.vue')
  },
  {
    path: '/dome/:slug',
    name: 'DomeDetail',
    component: () => import('@/views/dome/demos/DomeDemoHost.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
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