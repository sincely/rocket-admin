<template>
  <x-upload-image v-model="images" :aspect-ratio="1" cropper text="开启裁剪"></x-upload-image>
</template>

<script setup>
import { ref } from 'vue'

const images = ref('')
</script>
