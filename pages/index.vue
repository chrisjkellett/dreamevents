<script setup>
import useData from "~/composables/useData";
import Card from "~/components/Card.vue";
import TripButtonGroup from "~/components/Trip/ButtonGroup.vue";

const { filteredTrips } = useData();
</script>

<template>
  <div class="initial-view flex flex-col gap-6" v-if="filteredTrips">
    <TripButtonGroup />

    <Card
      v-for="{ id, title, description, photo_url } in filteredTrips"
      :key="id"
      :trip="{ title, description, photo_url }"
    />
  </div>
</template>
