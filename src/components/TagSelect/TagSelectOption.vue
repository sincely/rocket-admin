<template>
  <div class="x-tag-select-option" :class="cpClass" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup>
import { useTagSelectInject } from './context'
import { computed } from 'vue'

defineOptions({
  name: 'XTagSelectOption'
})

const props = defineProps({
  record: {
    type: Object,
    default: () => ({})
  },
  value: {
    type: [String, Number]
  }
})

const { onSelect, modelValue, multiple } = useTagSelectInject()

const cpClass = computed(() => {
  return {
    'x-tag-select-option--active': multiple.value
      ? modelValue.value?.includes(props.value) ||
        (typeof props.value === 'undefined' && !modelValue.value?.length && props.record?.unlimited)
      : modelValue.value === props.value
  }
})

function handleClick() {
  onSelect(props.value)
}
</script>

<style lang="less" scoped>
.x-tag-select-option {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  margin-right: 8px;
  line-height: @control-height-sm;
  cursor: pointer;
  border-radius: @border-radius-sm;
  transition: all 0.2s;

  &:hover:not(.x-tag-select-option--active) {
    background: @control-item-bg-hover;
  }

  &--active {
    color: @color-primary;
    background: @control-item-bg-active;
  }
}
</style>
