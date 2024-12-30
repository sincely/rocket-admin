<template>
  <x-filter :label-col="{ style: { width: '80px' } }">
    <x-filter-item label="品牌">
      <x-tag-select v-model="formData.brand" :options="brandOptions"></x-tag-select>
    </x-filter-item>
    <x-filter-item label="价格区间">
      <a-space>
        <template #split>-</template>
        <a-input :style="{ width: '100px' }"></a-input>
        <a-input :style="{ width: '100px' }"></a-input>
      </a-space>
    </x-filter-item>
    <x-filter-item label="时间区间">
      <a-range-picker></a-range-picker>
    </x-filter-item>
  </x-filter>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '@/hooks'

const { formData } = useForm()

const brandOptions = ref([
  { label: '小米', value: 1 },
  { label: '荣耀', value: 2 },
  { label: 'vivo', value: 3 },
  { label: '华为', value: 4 },
  { label: '苹果', value: 5 },
  { label: 'oppo', value: 6 },
  { label: '魅族', value: 7 }
])

formData.value = {
  brand: 1,
  classification: 1
}
</script>
