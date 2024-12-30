<template>
  <a-button type="primary" @click="handleOpen()">打开</a-button>

  <a-modal :open="modal.open" :title="modal.title" wrap-class-name="modal-drag" @cancel="closeModal()">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script setup>
import { useModal } from '@/hooks'

const { modal, openModal, closeModal } = useModal({
  selector: '.modal-drag',
  draggable: true
})

function handleOpen() {
  openModal({
    title: '可拖拽对话框'
  })
}
</script>
