import VueDevTools from 'vite-plugin-vue-devtools'

export default function vueDevToolsPlugin(viteEnv) {
  const enabled = viteEnv.VITE_VUE_DEVTOOL === 'true'
  if (enabled) {
    return VueDevTools()
  }
}
