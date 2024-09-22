<script setup>
import useData from "~/composables/useData";
import Card from "./Card.vue";

const { data: trips } = await useData();
</script>

<template>
  <div class="initial-view">
    <Card
      v-for="{ id, title, description, photo_url } in trips"
      :key="id"
      :trip="{ id, title, description, photo_url }"
    />
  </div>
</template>
