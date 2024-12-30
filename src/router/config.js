import { UserLayout } from '@/layouts'

/**
 * @description 白名单页面，无需控制权限的路由或需要在未登录情况访问的路由，
 * 例如登录页、注册页、404、500等页面
 * @type {string[]}
 */
export const whiteList = ['login', 'logout', '404']

/**
 * 未找到页面路由
 * @type {{redirect: string, path: string, hidden: boolean}}
 */
export const notFoundRoute = {
  path: '/:pathMatch(.*)*',
  redirect: '/exception/404',
  meta: {
    isLogin: false, // 是否需要登录
    isMenu: false // 是否需要显示在菜单栏
  }
}

/**
 * 基础路由
 * 关键字：index,login,exception,404,redirect
 * @type {*[]}
 */
export const constantRoutes = [
  {
    path: '/base',
    component: UserLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
          title: '登录'
        }
      }
    ]
  }
]
