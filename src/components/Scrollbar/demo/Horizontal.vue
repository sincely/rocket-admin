<template>
  <x-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </x-scrollbar>
</template>

<script setup></script>

<style lang="less" scoped>
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  background: @control-item-bg-hover;
  border-radius: 4px;
}
</style>
