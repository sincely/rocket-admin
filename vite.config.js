import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import pkg from './package.json'
import createVitePlugins from './build/plugins'
import { proxyServer } from './build/config/proxy'
export default ({ mode, command }) => {
  const viteEnv = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    base: viteEnv.VITE_PUBLIC_PATH,
    build: {
      outDir: viteEnv.VITE_OUT_DIR,
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            echarts: ['echarts'],
            'lodash-es': ['lodash-es'],
            'ant-design-vue': ['ant-design-vue'],
            jschardet: ['jschardet'],
            qrcode: ['qrcode'],
            cropper: ['cropperjs']
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `
                            true;
                            @import '${path.resolve(__dirname, 'src/styles/variables.less')}';
                            @import '${path.resolve(__dirname, 'src/styles/mixins/index.less')}';
                         `
          },
          javascriptEnabled: true
        }
      },
      devSourcemap: true
    },
    define: {
      __APP_INFO__: JSON.stringify({
        version: pkg.version
      })
    },
    plugins: createVitePlugins(viteEnv, command === 'build'),
    server: {
      https: false, // 是否开启https
      strictPort: false, // 设为false时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      port: 3200, // 指定服务器端口
      proxy: proxyServer // 设置代理
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
}
