<script setup>
import useData from "~/composables/useData";

const { showDetails, filteredTrips } = useData();

const trip = computed(() => {
  return filteredTrips.value.find((t) => t.id === showDetails.value);
});
</script>

<template>
  <UModal
    :model-value="!!showDetails"
    @update:model-value="showDetails = undefined"
    :ui="{
      width: 'w-full md:max-w-xl',
      margin: 'm-0 mt-0',
    }"
  >
    <div class="flex flex-col min-h-screen">
      <img
        :src="trip.photo_url"
        alt="trip img"
        class="w-full h-[250px] object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div class="flex flex-col justify-between p-6 gap-4">
        <h3 class="text-2xl font-semibold">{{ trip.title }}</h3>
        <p>{{ trip.description }}</p>
        <UDivider />
        <div>
          <h3 class="text-xl">Itinerary</h3>
        </div>
      </div>
    </div>
  </UModal>
</template>
