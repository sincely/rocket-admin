module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  plugins: ['vue', 'import'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json', '.vue']
      }
    }
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/no-unresolved': ['error', { caseSensitive: true }],
    'no-var': 'error', // 要求使用let或const,而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'import/no-extraneous-dependencies': 0, // 禁止使用多余的包
    'import/extensions': 0, // 确保在导入路径内一致使用文件扩展名
    // 'import/no-unresolved': 0, // 确保导入指向可以解析的文件/模块
    'vue/no-unused-components': 'error', // 禁止出现未使用的组件
    'no-self-compare': 'error', // 禁止自身比较
    'no-unused-vars': 'error', // 禁止出现未使用过的变量
    'no-empty': 'error', // 块语句中的内容不能为空
    'no-lone-blocks': 'error', // 禁止不必要的嵌套块
    'no-irregular-whitespace': 'error', // 禁止在字符串和注释之外不规则的空白
    'no-return-assign': 'error', // 禁止在return语句中使用赋值语句
    'no-inner-declarations': 'error', // 禁止在嵌套的块中出现变量声明或 function 声明
    'vue/multi-word-component-names': 0, // 要求组件名称总是多个单词
    'no-debugger': 'error', // 禁用 debugger
    'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'no-extra-parens': 'off', // 禁止不必要的括号
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    curly: 'error', // 强制所有控制语句使用一致的括号风格
    eqeqeq: 'error', // 要求使用 === 和 !==
    'no-else-return': 'error', // 禁止 if 语句中 return 语句之后有 else 块
    'no-multi-spaces': 'error', // 禁止使用多个空格
    'no-redeclare': 'error', // 禁止多次声明同一变量
    'no-return-await': 'off', // 禁用不必要的 return await
    'no-self-assign': 'error', // 禁止自我赋值
    'no-useless-catch': 'error', // 禁止不必要的 catch 子句
    'no-useless-return': 'error', // 禁止多余的 return 语句
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'no-delete-var': 'off', // 允许 delete 变量
    'array-bracket-spacing': 'error', // 强制数组方括号中使用一致的空格
    'brace-style': 'error', // 强制在代码块中使用一致的大括号风格
    indent: 'off', // 强制使用一致的缩进
    'max-nested-callbacks': ['error', 3], // 强制回调函数最大嵌套深度
    'max-params': ['error', 5], // 强制函数定义中最多允许的参数数量
    'max-statements-per-line': ['error', { max: 1 }], // 强制每一行中所允许的最大语句数量
    'no-mixed-spaces-and-tabs': 'error', // 禁止空格和 tab 的混合缩进
    semi: ['error', 'never'], // 禁止出现;
    'space-before-blocks': 'error', // 强制在块之前使用一致的空格
    'space-in-parens': 'error', // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'space-unary-ops': 'error', // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 'error', // 强制在注释中 // 或 /\* 使用一致的空格
    'switch-colon-spacing': 'error', // 强制在 switch 的冒号左右有空格
    'arrow-spacing': 'error', // 强制箭头函数的箭头前后使用一致的空格
    'prefer-rest-params': 'error', // 要求使用剩余参数而不是 arguments
    'no-useless-escape': 'error', // 禁用不必要的转义字符
    'no-prototype-builtins': 'error', // 禁止直接使用 Object.prototypes 的内置属性
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔转换
    'no-case-declarations': 'error', // 不允许在 case 子句中使用词法声明
    'no-async-promise-executor': 'error', // 禁止使用异步函数作为 Promise executor
    'no-unsafe-optional-chaining': 'error', //  禁止链式写法 a?.b?.c
    // vue
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off'
  },
  globals: {
    __APP_INFO__: true
  }
}
