<template>
  <x-upload-image v-model="images" draggable multiple></x-upload-image>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([])
</script>
