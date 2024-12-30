import { defineStore } from 'pinia'
import { config } from '@/config'
import storage from '@/utils/storage'
// import apis from '@/apis'

import useAppStore from './app'
import useMultiTab from './multiTab'
import useRouter from './router'

import { Modal, notification } from 'ant-design-vue'
import router from '@/router/index.js'
import { timeFix } from '@/utils'
import { useRouterStore } from '@/store'

const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: storage.local.getItem(config('storage.userInfo'), null),
    token: storage.local.getItem(config('storage.token'), '')
  }),
  getters: {
    isLogin: (state) => !!state.token
  },
  actions: {
    /**
     * 登录
     * @param {object} params
     * @returns {Promise<unknown>}
     */
    login(params) {
      console.log('登录参数', params)
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          // 真实调试请放开
          // const result = await apis.user.login(params).catch(() => {
          //   throw new Error()
          // })
          // 假数据
          const result = { code: 200, msg: 'success', data: { token: '440000201704158168' } }
          const { code, data } = result || {}
          if (config('http.code.success') === code) {
            const { token } = data
            this.token = data.token
            storage.local.setItem(config('storage.token'), token)
            await this.getUserInfo()
          }
          resolve(result)
        } catch (error) {
          reject()
        }
      })
    },
    /**
     * 退出登录
     */
    logout() {
      return new Promise((resolve) => {
        const appStore = useAppStore()
        const multiTab = useMultiTab()
        const router = useRouter()
        storage.local.removeItem(config('storage.token'))
        storage.local.removeItem(config('storage.userInfo'))
        this.$reset()
        appStore.$reset()
        multiTab.$reset()
        router.$reset()
        resolve()
      })
    },
    /**
     * 获取用户详情
     */
    getUserInfo() {
      //  eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          // const result = await apis.user.getUserDetail().catch(() => {
          //   throw new Error()
          // })
          const result = {
            code: 200,
            msg: 'success',
            data: {
              user_name: 'f.txjjfyimko@lkgswrz.gu',
              name: '赵秀兰',
              id: '510000201208249536',
              avatar:
                'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2260%22%20height%3D%22100%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23aff279%22%2F%3E%3Ctext%20x%3D%2230%22%20y%3D%2250%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E%E6%9D%A8%3C%2Ftext%3E%3C%2Fsvg%3E'
            }
          }

          console.log('用户信息', result)
          const { code, data } = result || {}
          if (config('http.code.success') === code) {
            this.userInfo = data
            storage.local.setItem(config('storage.userInfo'), this.userInfo)
            resolve(result)
          } else {
            throw new Error()
          }
        } catch (error) {
          reject()
        }
      })
    },
    /**
     * 去首页
     * @param {{redirect: string}} params
     */
    async goIndex(params) {
      return new Promise((resolve, reject) => {
        ;(async () => {
          const appStore = useAppStore()
          const routerStore = useRouterStore()
          const { redirect, welcomeMsg = true } = params || {}
          // 加载完成
          if (!appStore.complete) {
            await appStore.init()
          }
          // 没有任何权限
          if (!routerStore.indexRoute) {
            Modal.warning({
              title: '系统提示',
              content: '没有任何权限，请联系系统管理员',
              onOk: () => {
                this.logout()
                window.location.reload()
              }
            })
            reject()
            return
          }
          if (redirect) {
            location.href = redirect
          } else {
            router.replace(routerStore.indexRoute)
          }
          if (welcomeMsg) {
            notification.success({
              message: '欢迎',
              description: `${timeFix()}，欢迎回来`
            })
          }
        })()
      })
    }
  }
})

export default useUserStore
