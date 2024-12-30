import antd from 'ant-design-vue'
import components from '@/components' // 注册全局组件模块

import { setupActionDirective } from '@/directives/action' // 引入指令模块
import { setupRouter } from '@/router' // 引入路由模块
import { setupStore } from '@/store' // 引入pina模块
import { setupException } from './exception' // 引入异常处理模块

import { useCheckUpdate } from '@/hooks' // 引入更新模块
import './permission' // 引入权限模块
import 'ant-design-vue/dist/reset.css' // 引入样式重置
import '@/styles/index.less' // 引入全局样式

import { usePlugins } from '@/plugins' // 引入插件模块
useCheckUpdate()

export const useCore = (app) => {
  app.use(antd)
  app.use(components)
  usePlugins(app)
  setupException(app)
  setupStore(app)
  setupRouter(app)
  setupActionDirective(app)
}
