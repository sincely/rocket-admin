import request from '@/utils/http'
// 获取角色列表
export function getUserRoleList(params) {
  return request({
    url: '/system/getUserRoleList',
    method: 'get',
    params
  })
}
// 获取用户分页列表
export function getUserPageList(params) {
  return request({
    url: '/system/getUserPageList',
    method: 'get',
    params
  })
}
// 获取菜单列表
export function getMenuList(params) {
  return request({
    url: '/system/getMenuList',
    method: 'get',
    params
  })
}
// 获取新版菜单列表
export function getNewMenuList(params) {
  return request({
    url: '/system/getNewMenuList',
    method: 'get',
    params
  })
}
// 获取字典分类列表
export function getDictTypeList(params) {
  return request({
    url: '/system/getDictTypeList',
    method: 'get',
    params
  })
}
