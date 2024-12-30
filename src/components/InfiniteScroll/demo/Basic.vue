<template>
  <x-infinite-scroll
    v-model:error="error"
    v-model:loading="loading"
    :finished="finished"
    class="infinite"
    @load="loadData"
  >
    <div v-for="item in count" :key="item" class="infinite-item">
      {{ item }}
    </div>
  </x-infinite-scroll>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const loading = ref(false)
const finished = ref(false)
const error = ref(false)

function loadData() {
  loading.value = true
  setTimeout(() => {
    count.value += 10
    loading.value = false

    if (count.value >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<style lang="less" scoped>
.infinite {
  height: 400px;
}

.infinite-item {
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
