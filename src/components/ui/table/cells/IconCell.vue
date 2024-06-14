<template>
  <div class="icon-cell" :style="`background-color: ${getRandomHexColor()}`"></div>
</template>

<script lang="ts" setup>
import { getRandomHexColor } from '@/utils'
</script>

<style scoped>
.icon-cell {
  width: 25px;
  height: 25px;
  margin: 10px;
  border-radius: 50%;
}
</style>
