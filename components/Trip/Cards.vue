<script setup lang="ts">
import useData from "~/composables/useData";
import Card from "~/components/Trip/Card.vue";

const { filteredTrips, currentlyViewedId, deleteTrip, editingId } = useData();
</script>

<template>
  <div v-if="filteredTrips.length" class="flex flex-col gap-4">
    <Card
      v-for="trip in filteredTrips"
      :key="trip.id"
      :trip="trip"
      @click="currentlyViewedId = trip.id"
      @delete="() => deleteTrip(trip.id)"
      @edit="editingId = trip.id"
    />
  </div>

  <div v-else class="flex justify-center">
    <p>No trips found. Try a less specific search.</p>
  </div>
</template>
