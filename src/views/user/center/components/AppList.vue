<template>
  <a-list :data-source="listData"></a-list>
</template>

<script setup>
defineOptions({
  name: 'AppList'
})

const listData = []
</script>
