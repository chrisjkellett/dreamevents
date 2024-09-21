<script setup>
const data = await $fetch(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

provide("data", data);
</script>

<template>
  <slot />
</template>
