<template>
  <div :class="name">
    <div :class="[bem('bg'), 'h100']"></div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@/utils/bem'

const [name, bem] = createNamespace('MainLayout', 'aside')
</script>

<style scoped></style>
