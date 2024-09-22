<script setup>
import useData from "~/composables/useData";
import Card from "./Card.vue";
import TripButtonGroup from "./Trip/ButtonGroup.vue";

const { trips } = useData();
</script>

<template>
  <div class="initial-view flex flex-col gap-6" v-if="trips">
    <TripButtonGroup />

    <Card
      v-for="{ id, title, description, photo_url } in trips"
      :key="id"
      :trip="{ title, description, photo_url }"
    />
  </div>
</template>
