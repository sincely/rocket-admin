<template>
  <a-button class="action-btn" type="text" @click="handleClick">
    <template v-if="cpShowIconSlot" #icon>
      <slot name="icon"></slot>
    </template>
    <slot></slot>
  </a-button>
</template>

<script setup>
import { computed, useSlots } from 'vue'

defineOptions({
  name: 'ActionButton'
})

const emit = defineEmits(['click'])
const slots = useSlots()

const cpShowIconSlot = computed(() => !!slots.icon)

function handleClick() {
  emit('click')
}
</script>

<style lang="less" scoped>
.action-btn {
  position: relative;
  min-width: 36px;
  height: 36px;
  padding-right: 11px;
  padding-left: 11px;
  font-size: 14px;
  color: currentColor;
  border: none;

  &:hover {
    color: currentColor;
  }

  :deep(.ant-badge) {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    transform: translate(50%, 0);
  }
}
</style>
