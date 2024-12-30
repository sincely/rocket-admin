module.exports = {
  root: true,
  defaultSeverity: 'error',
  plugins: ['stylelint-order', 'stylelint-less'], // CSS 属性顺序规则插件
  extends: [
    'stylelint-config-standard', // stylelint标准配置，普通css，默认
    'stylelint-config-html/html', // 配置vue中template样式格式化
    'stylelint-config-html/vue', //  vue相关配置
    'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件,
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    // 'max-nesting-depth': 3, // 样式最大嵌套层数，总共最多3层
    // 在css中使用v-bind，不报错
    'value-keyword-case': null,
    // 禁止在覆盖高特异性选择器之后出现低特异性选择器
    'no-descending-specificity': null,
    // 禁止空源码
    'no-empty-source': null,
    // 禁止字体族中缺少泛型族关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 禁止未知的@规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin'
        ]
      }
    ],
    // 不允许未知函数
    'function-no-unknown': null,
    // 不允许未知单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 标记 CSS 规范中未知属性值
    'declaration-property-value-no-unknown': null,
    // 不允许选择器使用供应商前缀
    'selector-no-vendor-prefix': null,
    // 指定关键帧名称的模式
    'keyframes-name-pattern': null,
    // 指定类选择器的模式
    'selector-class-pattern': null,
    // 不允许值使用供应商前缀
    'value-no-vendor-prefix': null,
    // 关闭属性前缀 -webkit-mask
    'property-no-vendor-prefix': null,
    // 要求或禁止在规则之前的空行
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'] // 忽略属性，修改element默认样式的时候能使用到
      }
    ]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        // 禁止未知的伪类选择器
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
        // 禁止未知的伪元素选择器
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] }]
      }
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-standard-less'],
      rules: {
        'less/color-no-invalid-hex': true,
        'less/no-duplicate-variables': null
      }
    }
  ]
}
