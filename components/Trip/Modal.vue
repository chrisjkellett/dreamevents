<script setup>
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";

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
      <div
        class="w-7 h-7 absolute top-4 right-4 rounded-full bg-slate-800"
      ></div>
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
        <div v-if="trip.itinerary.length" class="flex flex-col gap-4">
          <h3 class="text-xl">Itinerary</h3>
          <ol class="pl-4 relative border-s border-gray-300 ml-4">
            <li
              v-for="{ day, location, description } in trip.itinerary"
              class="mb-10 ms-4 py-2"
            >
              <div
                class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white"
              ></div>
              <div class="flex flex-col gap-2">
                <h5 class="font-semibold text-lg">
                  Day {{ day }}: {{ location }}
                </h5>
                <p>{{ description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </XModal>
  </div>
</template>
