<template>
  <x-cascader v-model="selectedKeys" :level="3" :load-data="getOptions"></x-cascader>
</template>

<script setup>
import { ref } from 'vue'
import apis from '@/apis'

const selectedKeys = ref([])

async function getOptions() {
  return await apis.common.getOptions()
}
</script>
