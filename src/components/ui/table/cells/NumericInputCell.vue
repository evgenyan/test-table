<template>
  <input type="text" v-model="inputValue" @keydown="handleKeyDown" placeholder="Максимум 6 цифр" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('')

const handleKeyDown = (event: KeyboardEvent) => {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab']

  if (allowedKeys.includes(event.key)) {
    return
  }

  if (event.key < '0' || event.key > '9' || inputValue.value.length >= 6) {
    event.preventDefault()
  }
}
</script>
