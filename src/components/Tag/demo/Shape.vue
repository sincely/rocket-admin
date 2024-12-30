<template>
  <a-space>
    <x-tag closable round size="small" type="success" @close="handleClose">不该</x-tag>
    <x-tag closable round type="error" @close="handleClose">手写的从前</x-tag>
    <x-tag closable round size="large" type="error" @close="handleClose">手写的从前</x-tag>
  </a-space>
</template>

<script setup>
import { message } from 'ant-design-vue'

function handleClose() {
  message.info('tag close')
}
</script>
