import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
export default function svgIconPlugin() {
  return [
    createSvgIconsPlugin({
      // 配置路径在你的src里的svg存放文件
      iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    /** 将 SVG 静态图转化为 Vue 组件 */
    svgLoader({ defaultImport: 'url' })
  ]
}
