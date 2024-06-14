<script setup lang="ts">
import TableComponent from '@/components/ui/table/TableComponent.vue'
const hoursArray = Array.from({ length: 24 }, (_, i) => i)
</script>

<template>
  <TableComponent :headers="hoursArray" :rows="20" cell-component="numeric" can-add-more />
</template>
