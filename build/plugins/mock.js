import { viteMockServe } from 'vite-plugin-mock'
export default function mockPlugin(viteEnv) {
  const localEnabled = viteEnv.VITE_USE_MOCK === 'true'
  const prodEnabled = viteEnv.VITE_USE_MOCK === 'true'
  return viteMockServe({
    supportTs: false, // 打开后，可以读取ts文件模块,打开后将无法监视.js文件
    mockPath: 'mock', // 设置mockPath为根目录下的mock目录,为根目录
    localEnabled: localEnabled, // 开发打包开关,true时打开mock,false关闭mock
    prodEnabled: prodEnabled, // 生产打包开关
    watchFiles: true, // 监视mockPath对应的文件夹内文件中的更改
    // 生产环境时注入相关的mock请求api,注：createProductionServer 相对于main.js
    injectCode: `
      import { setupProdMockServer } from '../mock/createProdMockServer';
      setupProdMockServer();
    `,
    logger: true // 是否在控制台显示请求日志
  })
}
