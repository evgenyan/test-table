<script setup lang="ts">
import TableCells from '@/components/ui/table/cells'
import { ref } from 'vue'
const props = defineProps<{
  headers: string[] | number[]
  rows: number
  cellComponent: keyof typeof TableCells
  canAddMore?: boolean
}>()
const rowsAmount = ref<number>(props.rows)
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr class="static static-header">
          <th class="static static-column">#</th>
          <th v-for="(header, index) in props.headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rowsAmount" :key="rowIndex">
          <td class="static static-column">{{ rowIndex + 1 }}</td>
          <td v-for="(cell, cellIndex) in props.headers" :key="cellIndex">
            <component :is="TableCells[props.cellComponent]" :cellData="0" />
          </td>
        </tr>
        <tr class="table-footer" v-if="canAddMore">
          <td :colspan="props.headers.length + 1">
            <button @click="rowsAmount += 10">Добавить еще</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table-container {
  width: 1000px;
  height: 500px;
  overflow: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

  .table {
    border-collapse: collapse;
    width: 100%;
    th,
    td {
      border: 1px solid #ccc;
      padding: 10px;
    }
    &-footer {
      background-color: #f5f5f5;
    }
  }
}

.static {
  border: 1px solid #ccc;
  position: sticky;
  background: #f9f9f9;
  top: 0;
  left: 0;
  &-header {
    z-index: 5;
  }
  &-column {
    z-index: 4;
  }
}
</style>
