<script setup lang="ts">
import type { TRoutesNames } from '@/router'

const props = defineProps<{
  to: TRoutesNames
  title: string
}>()
</script>

<template>
  <router-link :to="props.to">{{ props.title }}</router-link>
</template>

<style scoped></style>
