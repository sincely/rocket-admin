module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    // 0：禁用规则，不会对提交类型进行验证。
    // 1：警告级别，对提交类型进行验证，但不会阻止提交。
    // 2：错误级别，对提交类型进行验证，如果不符合规则将阻止提交。
    // 'always'：规则始终适用于提交消息中的提交类型。无论提交消息的内容如何，都会应用该规则进行验证。
    // 'never'：规则永远不适用于提交消息中的提交类型。无论提交消息的内容如何，都不会应用该规则进行验证。
    'body-leading-blank': [2, 'always'], // body 前面是否需要空一行
    'footer-leading-blank': [1, 'always'], // footer 前面是否需要空一行
    'subject-empty': [2, 'never'], // 提交信息不能为空
    'type-empty': [2, 'never'], // 提交类型不能为空
    'subject-case': [0, 'never'], // 提交信息不限制大小写
    // 类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'update', // 更新功能
        'ui', // 样式改动
        'fix', // 修复功能bug
        'merge', // 合并分支
        'refactor', // 重构功能
        'perf', // 性能优化
        'revert', // 回退提交
        'style', // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等)
        'build', // 修改项目构建工具(例如 glup，webpack，rollup 的配置等)的提交
        'docs', // 文档新增、改动
        'test', // 增加测试、修改测试
        'chore' // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
      ]
    ]
  }
}
