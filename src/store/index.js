import { createPinia } from 'pinia'
export { default as useAppStore } from './modules/app' // app store
export { default as useMultiTabStore } from './modules/multiTab' // 多标签页 store
export { default as useRouterStore } from './modules/router' // 路由 store
export { default as useUserStore } from './modules/user' // 用户 store

const store = createPinia()

export const setupStore = (app) => {
  app.use(store)

  return app
}

export default store
