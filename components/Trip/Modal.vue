<script setup>
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";
import ModalCloseButton from "~/components/X/ModalCloseButton.vue";
import Itinerary from "~/components/Trip/Itinerary.vue";

const { showDetails, filteredTrips } = useData();

const trip = computed(() => {
  return filteredTrips.value.find((t) => t.id === showDetails.value);
});

function onClose() {
  showDetails.value = undefined;
}
</script>

<template>
  <div v-if="!!showDetails" class="trip-modal">
    <XModal :show="!!showDetails" @update:show="onClose">
      <ModalCloseButton @click="onClose" />
      <img
        :src="trip.photo_url"
        alt="trip img"
        class="w-full h-[250px] object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div class="flex flex-col justify-between p-6 gap-4">
        <h3 class="text-2xl font-semibold">{{ trip.title }}</h3>
        <p>{{ trip.description }}</p>
        <UDivider />
        <Itinerary :itinerary="trip.itinerary" />
      </div>
    </XModal>
  </div>
</template>
