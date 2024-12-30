<!-- #region snippet -->
<template>
  <a-space :size="24">
    <x-qrcode :value="text" color="#72c240"></x-qrcode>
    <x-qrcode :value="text" color="#3875f7"></x-qrcode>
  </a-space>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('https://github.com/sincely/rocket-admin.git')
</script>
