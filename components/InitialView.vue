<script setup>
import useData from "~/composables/useData";

const { data } = useData();
</script>

<template>
  <div class="initial-view">{{ data[0] }}</div>
</template>
