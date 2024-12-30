import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { isWindow, isObject } from '@/utils/is'
export default function useScroll(refEl, options) {
  const refX = ref(0)
  const refY = ref(0)
  let handler = () => {
    if (isWindow(refEl.value)) {
      refX.value = refEl.value.scrollX
      refY.value = refEl.value.scrollY
    } else if (refEl.value) {
      refX.value = refEl.value.scrollLeft
      refY.value = refEl.value.scrollTop
    }
  }

  if (isObject(options)) {
    let wait = 0
    if (options.wait && options.wait > 0) {
      wait = options.wait
      Reflect.deleteProperty(options, 'wait')
    }

    handler = useThrottleFn(handler, wait)
  }

  let stopWatch
  onMounted(() => {
    stopWatch = watch(
      refEl,
      (el, prevEl, onCleanup) => {
        if (el) {
          el.addEventListener('scroll', handler)
        } else if (prevEl) {
          prevEl.removeEventListener('scroll', handler)
        }
        onCleanup(() => {
          refX.value = refY.value = 0
          el && el.removeEventListener('scroll', handler)
        })
      },
      { immediate: true }
    )
  })

  onUnmounted(() => {
    refEl.value && refEl.value.removeEventListener('scroll', handler)
  })

  function stop() {
    stopWatch && stopWatch()
  }

  return { refX, refY, stop }
}
