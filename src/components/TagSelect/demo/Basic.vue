<template>
  <a-space :size="24" direction="vertical">
    <x-tag-select v-model="selectedKeys" :options="options"></x-tag-select>
    <x-tag-select v-model="selectedKeys" :options="options2">
      <template #option="{ label, icon }">
        <span class="mr-4-1">{{ icon }}</span>
        <span>{{ label }}</span>
      </template>
    </x-tag-select>
  </a-space>
</template>

<script setup>
import { ref } from 'vue'

const options = ref([
  { label: '类目1', value: 1 },
  { label: '类目2', value: 2 },
  { label: '类目3', value: 3 },
  { label: '类目4', value: 4 },
  { label: '类目5', value: 5 },
  { label: '类目6', value: 6 }
])
const options2 = ref([
  {
    value: 'china',
    label: 'China (中国)',
    icon: '🇨🇳'
  },
  {
    value: 'usa',
    label: 'USA (美国)',
    icon: '🇺🇸'
  },
  {
    value: 'japan',
    label: 'Japan (日本)',
    icon: '🇯🇵'
  },
  {
    value: 'korea',
    label: 'Korea (韩国)',
    icon: '🇨🇰'
  }
])
const selectedKeys = ref([])
</script>
