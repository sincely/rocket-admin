<template>
  <x-upload-input v-model="file"></x-upload-input>
</template>

<script setup>
import { ref } from 'vue'

const file = ref('')
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
