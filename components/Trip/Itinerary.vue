<script setup lang="ts">
import type { ItineraryItem } from "~/types/trips";

defineProps<{ itinerary: ItineraryItem[] }>();
</script>

<template>
  <div v-if="itinerary.length" class="flex flex-col gap-4">
    <h3 class="text-xl">Itinerary</h3>
    <ol class="pl-4 relative border-s border-gray-300 ml-4">
      <li
        v-for="{ day, location, description } in itinerary"
        class="mb-10 ms-4 py-2"
      >
        <div
          class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white"
        ></div>
        <div class="flex flex-col gap-2">
          <h5 class="font-semibold text-lg">Day {{ day }}: {{ location }}</h5>
          <p>{{ description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>
