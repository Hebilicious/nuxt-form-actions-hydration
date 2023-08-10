<script setup lang="ts">
const { result } = await useLoader("books")
console.log("🚀 ~ file: Books.vue:3 ~ result.value:", result?.value)
</script>

<template>
  <div>
    <h1>Books!</h1>
    {{ result }}
  </div>
</template>
l
