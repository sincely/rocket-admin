<template>
  <a-space :size="24" direction="vertical">
    <x-qrcode ref="qrcodeCanvasRef" :value="text"></x-qrcode>
    <a-button type="primary" @click="handleDownload">Downlaod</a-button>
  </a-space>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('https://github.com/sincely/rocket-admin.git')

const qrcodeCanvasRef = ref()

async function handleDownload() {
  const url = await qrcodeCanvasRef.value.toDataURL()
  const a = document.createElement('a')
  a.download = 'QRCode.png'
  a.href = url
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>
