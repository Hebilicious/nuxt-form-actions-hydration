<script setup lang="ts">
const { result } = await useLoader("books")
console.log("🚀 Super book !", result?.value)
</script>

<template>
  <div>
    <h1>Super Book</h1>
    {{ result }}
  </div>
</template>
l
