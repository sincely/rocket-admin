import { defineStore } from 'pinia'
import { notFoundRoute } from '@/router/config'
import { formatRoutes, generateMenuList, generateRoutes, getFirstValidRoute } from '@/router/util'
import { findTree } from '@/utils'
import { config } from '@/config'
import router from '@/router'
// import apis from '@/apis'
import routes from '@/router/routes'

const useRouterStore = defineStore('router', {
  state: () => ({
    routeList: [],
    menuList: [],
    indexRoute: null
  }),
  getters: {},
  actions: {
    /**
     * 获取路由列表
     * @returns {Promise}
     */
    getRouterList() {
      // 不需要权限控制的，找到 getRouterList 方法
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          let result = {
            code: 200,
            msg: 'success',
            data: [
              {
                name: 'welcome',
                meta: {
                  title: '欢迎页'
                }
              },
              {
                name: 'form',
                meta: {
                  title: '表单页'
                },
                children: [
                  {
                    name: 'formBasic',
                    meta: {
                      title: '基础表单'
                    }
                  },
                  {
                    name: 'formStep',
                    meta: {
                      title: '分步表单'
                    }
                  },
                  {
                    name: 'formAdvanced',
                    meta: {
                      title: '高级表单'
                    }
                  }
                ]
              },
              {
                name: 'list',
                meta: {
                  title: '列表页'
                },
                children: [
                  {
                    name: 'listSearch',
                    meta: {
                      title: '搜索列表'
                    },
                    children: [
                      {
                        name: 'listSearchArticles',
                        meta: {
                          title: '搜索列表（文章）'
                        }
                      },
                      {
                        name: 'listSearchProjects',
                        meta: {
                          title: '搜索列表（项目）'
                        }
                      },
                      {
                        name: 'listSearchApplications',
                        meta: {
                          title: '搜索列表（应用）'
                        }
                      }
                    ]
                  },
                  {
                    name: 'listTable',
                    meta: {
                      title: '查询表格'
                    }
                  },
                  {
                    name: 'listBasic',
                    meta: {
                      title: '标准列表'
                    }
                  },
                  {
                    name: 'listCard',
                    meta: {
                      title: '卡片列表'
                    }
                  }
                ]
              },
              {
                name: 'profile',
                meta: {
                  title: '详情页'
                },
                children: [
                  {
                    name: 'profileBasic',
                    meta: {
                      title: '基础详情页'
                    }
                  },
                  {
                    name: 'profileAdvanced',
                    meta: {
                      title: '高级详情页'
                    }
                  }
                ]
              },
              {
                name: 'result',
                meta: {
                  title: '结果页'
                },
                children: [
                  {
                    name: 'resultSuccess',
                    meta: {
                      title: '成功页'
                    }
                  },
                  {
                    name: 'resultFail',
                    meta: {
                      title: '失败页'
                    }
                  }
                ]
              },
              {
                name: 'exception',
                meta: {
                  title: '异常页'
                },
                children: [
                  {
                    name: '403',
                    meta: {
                      title: '403'
                    }
                  },
                  {
                    name: '404',
                    meta: {
                      title: '404'
                    }
                  },
                  {
                    name: '500',
                    meta: {
                      title: '500'
                    }
                  }
                ]
              },
              {
                name: 'user',
                meta: {
                  title: '个人页'
                },
                children: [
                  {
                    name: 'userCenter',
                    meta: {
                      title: '个人中心'
                    }
                  },
                  {
                    name: 'userSetting',
                    meta: {
                      title: '个人设置'
                    }
                  }
                ]
              },
              {
                name: 'system',
                meta: {
                  title: '系统管理'
                },
                children: [
                  {
                    name: 'systemUser',
                    meta: {
                      title: '成员与部门'
                    }
                  },
                  {
                    name: 'systemRole',
                    meta: {
                      title: '角色管理'
                    }
                  },
                  {
                    name: 'systemMenu',
                    meta: {
                      title: '菜单管理'
                    }
                  },
                  {
                    name: 'systemNewMenu',
                    meta: {
                      title: '新版菜单管理'
                    }
                  },
                  {
                    name: 'systemDict',
                    meta: {
                      title: '字典管理'
                    }
                  }
                ]
              },
              {
                name: 'components',
                meta: {
                  title: '组件'
                },
                children: [
                  {
                    name: 'actionBar',
                    meta: {
                      title: '操作条'
                    }
                  },
                  {
                    name: 'actionButton',
                    meta: {
                      title: '操作按钮'
                    }
                  },
                  {
                    name: 'breadcrumb',
                    meta: {
                      title: '面包屑'
                    }
                  },
                  {
                    name: 'cascader',
                    meta: {
                      title: '级联选择'
                    }
                  },
                  {
                    name: 'chart',
                    meta: {
                      title: '图表'
                    }
                  },
                  {
                    name: 'filterForm',
                    meta: {
                      title: '筛选表单'
                    }
                  },
                  {
                    name: 'formTable',
                    meta: {
                      title: '表单表格'
                    }
                  },
                  {
                    name: 'loading',
                    meta: {
                      title: '加载中'
                    }
                  }
                ]
              },
              {
                name: 'link',
                meta: {
                  title: '外部链接'
                },
                children: [
                  {
                    name: 'github',
                    meta: {
                      title: 'Github'
                    }
                  }
                ]
              },
              {
                name: 'iframePage',
                meta: {
                  title: 'Iframe'
                },
                children: [
                  {
                    name: 'iframeVue',
                    meta: {
                      title: 'Vue'
                    }
                  },
                  {
                    name: 'iframeAntd',
                    meta: {
                      title: 'Ant Design Vue'
                    }
                  }
                ]
              },
              {
                name: 'other',
                meta: {
                  title: '其他'
                },
                children: [
                  {
                    name: 'otherCustomLayout',
                    meta: {
                      title: '自定义框架'
                    }
                  },
                  {
                    name: 'otherMultiTab',
                    meta: {
                      title: '多标签操作'
                    }
                  },
                  {
                    name: 'otherBadge',
                    meta: {
                      title: '菜单徽标'
                    }
                  }
                ]
              }
            ]
          }
          // 真实调试放开
          // const { code, data } = await apis.user.getAuthList().catch(() => {
          //   throw new Error()
          // })
          const { code, data } = result
          if (config('http.code.success') === code) {
            const validRoutes = formatRoutes(routes, data)
            // 不需要权限控制的，用下面这行代码
            // const validRoutes = formatRoutes(routes, false)
            console.log(validRoutes)
            const menuList = generateMenuList(validRoutes)
            const routeList = [...generateRoutes(validRoutes), notFoundRoute]
            const indexRoute = getFirstValidRoute(menuList)
            routeList.forEach((route) => {
              router.addRoute(route)
            })
            this.routeList = routeList
            this.menuList = menuList
            this.indexRoute = indexRoute
            resolve()
          }
        } catch (error) {
          reject()
        }
      })
    },
    /**
     * 设置徽标
     * @param {string} name 名称
     * @param {number} count 数量
     */
    setBadge({ name, count } = {}) {
      findTree(
        this.menuList,
        name,
        (item) => {
          item.meta.badge = count
        },
        { key: 'name', children: 'children' }
      )
    }
  }
})

export default useRouterStore
