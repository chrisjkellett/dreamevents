<script setup>
import useData from "~/composables/useData";
import Card from "~/components/Card.vue";
import TripButtonGroup from "~/components/Trip/ButtonGroup.vue";
import TripSearch from "~/components/Trip/Search.vue";
import TripTitle from "~/components/Trip/Title.vue";
import TripModal from "@/components/Trip/Modal.vue";

const { filteredTrips, showDetails } = useData();
</script>

<template>
  <div class="initial-view flex flex-col gap-6">
    <TripTitle />
    <TripSearch />
    <TripButtonGroup />

    <template v-if="filteredTrips.length">
      <Card
        v-for="{ id, title, description, photo_url } in filteredTrips"
        :key="id"
        :trip="{ title, description, photo_url }"
        @click="showDetails = id"
      />
    </template>

    <div v-else class="flex justify-center">
      <p>No trips found. Try a less specific search.</p>
    </div>

    <TripModal v-if="!!showDetails" />
  </div>
</template>
