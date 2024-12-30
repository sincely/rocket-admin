import axios from 'axios'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/store'
const services = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 8000
})

// 错误处理函数
const errorHandler = (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `未知错误${error.response.status}`
    }
  } else {
    error.message = '连接到服务器失败'
    message.error(error.message)
  }
  return Promise.reject(error)
}

// 请求拦截
services.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const { isLogin } = userStore
    const { token } = userStore
    // 根据条件加入token-安全携带
    if (isLogin) {
      // 需自定义
      // 让每个请求携带token
      config.headers['AUTH-TOKEN'] = token // 实际情况自行修改
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
services.interceptors.response.use((response) => {
  // 统一处理状态
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response)
}, errorHandler)

export default services
