<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageLink from '@/components/ui/PageLink.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <PageLink to="/" title="Таблица 1" /> / <PageLink to="/page2" title="Таблица 2" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 20px;
}
</style>
