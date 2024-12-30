import legacy from '@vitejs/plugin-legacy'

export default function legacyPlugin() {
  return legacy({
    targets: ['chrome 52', 'Android > 39', 'iOS >= 10.3', 'iOS >= 10.3'], // 需要兼容的目标列表，可以设置多个
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
  })
}
