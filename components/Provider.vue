<script setup>
const { data: trips } = useFetch(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

const filter = useState("filter", () => "all");

provide("data", {
  trips,
  filter,
});
</script>

<template>
  <slot />
</template>
