<template>
  <a-popover :overlay-inner-style="{ padding: 0 }">
    <template #content>
      <x-qrcode :bordered="false" :value="text" />
    </template>
    <img :src="assets('logo.svg')" height="100" width="100" />
  </a-popover>
</template>

<script setup>
import { ref } from 'vue'
import { assets } from '@/utils'

const text = ref('https://github.com/sincely/rocket-admin.git')
</script>
