<template>
  <x-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </x-scrollbar>
</template>

<script setup></script>

<style lang="less" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  background: @control-item-bg-hover;
  border-radius: 4px;
}
</style>
