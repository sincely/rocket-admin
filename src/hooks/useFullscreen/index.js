import { ref } from 'vue'

export function useFullscreen() {
  // 定义一个响应式的 ref 对象,用于跟踪当前是否处于全屏模式
  const isFullscreen = ref(false)

  // 进入全屏模式
  const requestFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  }

  // 退出全屏模式
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  // 切换全屏模式
  const toggleFullscreen = (element) => {
    if (isFullscreen.value) {
      exitFullscreen()
      isFullscreen.value = false
    } else {
      requestFullscreen(element)
      isFullscreen.value = true
    }
  }

  // 全屏模式变化时的处理函数
  const handleFullscreenChange = () => {
    isFullscreen.value = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    )
  }

  // 监听全屏事件
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
  document.addEventListener('msfullscreenchange', handleFullscreenChange)

  // 返回全屏相关的功能和状态
  return {
    isFullscreen,
    requestFullscreen,
    exitFullscreen,
    toggleFullscreen
  }
}
