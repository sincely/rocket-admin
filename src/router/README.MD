{
  "path": "", // 必填，路径，允许填写 http|https
  "name": "", // 必填，路由名称，唯一
  "component": "", // 必填，页面
  "redirect": "", // 选填，跳转地址
  "meta": {
    "type": "", // 菜单类型【link=外部链接，iframe=iframe】
    "icon": "", // 选填，菜单icon 路由自定义 Icon 请引入自定义 svg Icon 文件，然后传递给路由的 meta.icon 参数即可
    "title": "", // 必填，菜单名称
    "isMenu": "", // 必填，是否在菜单上显示【true=显示；false=不显示】
    "keepAlive": "", // 必填，是否缓存页面【true=缓存；false=不缓存】
    "target": "", // 选填，页面打开方式【_blank=新标签页打开；_self=当前标签页打开】
    "layout": "", // 选填，默认 DefaultLayout， 不使用模板填写 false，模板存在在 src/layouts/ 目录下
    "active": "", // 选填，打开页面要高亮的菜单，一般用于被隐藏的页面，要高亮菜单的 name
    "permission": [], // 选填，用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示 *（默认情况下）
    "action": [], // 选填，根据业务需要
    "url": "", // iframe url，type="iframe" 时有效
    "query": {}, // 菜单携带的固定参数
  },
  "children": [], // 子路由
}
