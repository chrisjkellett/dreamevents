<script setup lang="ts">
import useData from "~/composables/useData";
import Card from "~/components/Trip/Card.vue";

const { filteredTrips, showDetails, deleteTrip } = useData();
</script>

<template>
  <div v-if="filteredTrips.length">
    <Card
      v-for="trip in filteredTrips"
      :key="trip.id"
      :trip="trip"
      @click="showDetails = trip.id"
      @delete="() => deleteTrip(trip.id)"
    />
  </div>

  <div v-else class="flex justify-center">
    <p>No trips found. Try a less specific search.</p>
  </div>
</template>
