<!-- #region snippet -->
<template>
  <a-space :size="24">
    <x-qrcode :value="text" status="loading"></x-qrcode>
    <x-qrcode :value="text" status="expired" @refresh="handleRefresh"></x-qrcode>
    <x-qrcode :value="text" status="scanned"></x-qrcode>
  </a-space>
</template>

<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'

const text = ref('https://github.com/sincely/rocket-admin.git')

function handleRefresh() {
  message.success('已刷新')
}
</script>
