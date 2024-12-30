<template>
  <a-button type="primary" @click="handleShow">显示</a-button>
</template>

<script setup>
import { Loading } from '@/components'

defineOptions({
  name: 'GlobalBasic'
})

function handleShow() {
  Loading.show()

  setTimeout(() => {
    Loading.hide()
  }, 2000)
}
</script>
