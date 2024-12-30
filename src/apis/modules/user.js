import request from '@/utils/http'

// 登录
export function login(params) {
  return request({
    url: '/user/login',
    method: 'post',
    params
  })
}

// 获取用户详情
export function getUserDetail() {
  return request({
    url: '/user/detail',
    method: 'get'
  })
}

// 获取权限列表
export function getAuthList() {
  return request({
    url: '/user/auth',
    method: 'get'
  })
}
