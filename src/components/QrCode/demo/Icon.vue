<template>
  <x-qrcode :icon="assets('logo.svg')" :value="text" icon-background-color="#fff"></x-qrcode>
</template>

<script setup>
import { ref } from 'vue'
import { assets } from '@/utils'

const text = ref('https://github.com/sincely/rocket-admin.git')
</script>
