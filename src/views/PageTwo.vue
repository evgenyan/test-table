<script setup lang="ts">
import TableComponent from '@/components/ui/table/TableComponent.vue'
import { getDaysInCurrentMonth } from '@/utils'
const daysInCurrentMonth = getDaysInCurrentMonth()
</script>

<template>
  <TableComponent :headers="daysInCurrentMonth" :rows="10" cell-component="icon" />
</template>
