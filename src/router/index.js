import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { constantRoutes } from './config' // 静态路由配置

const router = createRouter({
  history:
    'history' === import.meta.env.VITE_ROUTER_HISTORY
      ? createWebHistory(import.meta.env.VITE_ROUTER_BASE)
      : createWebHashHistory(import.meta.env.VITE_ROUTER_BASE),
  routes: [...constantRoutes]
})

/**
 * 打开新标签页
 * @param to
 */
router.open = function (to) {
  const { href } = router.resolve(to)
  if (!href) {
    return
  }
  window.open(href)
}

/**
 * 重新启动
 * @param to
 */
router.reLaunch = function (to) {
  const { href } = router.resolve(to)
  if (!href) {
    return
  }
  window.location.href = href
}
export const setupRouter = (app) => {
  app.use(router)
  return app
}

export default router
