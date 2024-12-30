<template>
  <svg :class="svgClass" aria-hidden="true" :style="{ width, height }">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  // icon-class是svg图标名称
  iconClass: {
    type: String,
    required: true
  },
  // class-name是样式类名
  className: {
    type: String,
    default: ''
  },
  // color是颜色,如果遇到设置了颜色不生效，或者部分生效的问题，可以使用编辑器打开svg文件：查找fill，将其删除
  color: {
    type: String,
    default: ''
  },
  // svg的图标的宽度
  width: {
    type: String,
    default: '24px'
  },
  // svg的图标的高度
  height: {
    type: String,
    default: '24px'
  }
})

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})

const svgClass = computed(() => {
  if (props.className) {
    // 如果有class-name，就将其添加到svg-icon的class中
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<style scoped lang="less">
.svg-icon {
  vertical-align: middle;
  fill: currentcolor;
}
</style>
