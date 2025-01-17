import { createVersionPolling } from 'version-polling'
import { config } from '@/config'
import { notification, Button } from 'ant-design-vue'
import { h } from 'vue'

export default () => {
  createVersionPolling({
    appETagKey: config('app.platform'),
    pollingInterval: 5 * 1000, // 单位为毫秒
    silent: import.meta.env.VITE_ENV, // 开发环境下不检测
    onUpdate: (self) => {
      notification.open({
        key: 'CheckUpdate',
        message: `更新提示`,
        description: h('div', null, [
          h('div', null, '发现新版本，请刷新页面后使用'),
          h('div', { class: 'align-right mt-8-2' }, [
            h(
              Button,
              {
                type: 'primary',
                size: 'small',
                onClick: () => {
                  self.onRefresh()
                }
              },
              '刷新'
            )
          ])
        ]),
        placement: 'bottomRight'
      })
    }
  })
}
