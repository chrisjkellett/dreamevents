<script setup>
const { data: trips } = useFetch(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

provide("trips", trips);
</script>

<template>
  <slot />
</template>
