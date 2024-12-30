import { createHtmlPlugin } from 'vite-plugin-html'
import dayjs from 'dayjs'
export default function htmlPlugin() {
  return createHtmlPlugin({
    // 需要注入index.html ejs 模版的数据
    inject: {
      data: {
        buildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
    }
  })
}
