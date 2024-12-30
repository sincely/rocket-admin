<template>
  <x-upload-image v-model="images" :width="240">
    <div class="custom">自定义插槽</div>
  </x-upload-image>
</template>

<script setup>
import { ref } from 'vue'

const images = ref('')
</script>

<style lang="less" scoped>
.custom {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 120px;
  cursor: pointer;
  border: @color-border dashed 1px;
  transition: all 0.15s;

  &:hover {
    color: @color-primary;
    border-color: @color-primary;
  }
}
</style>
