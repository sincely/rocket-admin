import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
// 问题描述
// 1. `import.meta.globEager` 已被弃用, 需要升级vite版本,有兼容问题
// 2. `vite-plugin-mock` 插件问题 https://github.com/vbenjs/vite-plugin-mock/issues/56
import test from './modules/test' //引入定义的mock模拟接口
const mockModules = [...test]

export function setupProdMockServer() {
  // 这个是用来注册mock的，当在生产中使用mock时，很重要
  createProdMockServer(mockModules)
}
