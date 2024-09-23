<script setup>
import useData from "~/composables/useData";

const { showDetails, filteredTrips } = useData();

const trip = computed(() => {
  return filteredTrips.value.find((t) => t.id === showDetails.value);
});

function onClose() {
  showDetails.value = undefined;
}
</script>

<template>
  <UModal
    :model-value="!!showDetails"
    @update:model-value="onClose"
    :ui="{
      width: 'w-full md:max-w-xl',
    }"
  >
    <div class="flex flex-col min-h-screen relative">
      <UIcon
        name="i-heroicons:x-circle"
        class="w-7 h-7 absolute top-4 right-4 text-white cursor-pointer"
        @click="onClose"
      />
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
        <ol class="pl-4 relative border-s border-slate-600 ml-4">
          <li v-for="item in trip.itinerary" class="mb-10 ms-4 py-2">
            <div
              class="absolute w-3 h-3 bg-slate-600 rounded-full mt-1.5 -start-1.5 border border-white"
            ></div>
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
  </UModal>
</template>
