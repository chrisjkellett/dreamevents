<script setup lang="ts">
interface BaseTrip {
  title: string;
  description: string;
  photo_url: string;
}

defineProps<{ trip: BaseTrip }>();
</script>

<template>
  <div class="border flex h-52">
    <div class="w-1/2">
      <img
        :src="trip.photo_url"
        alt="trip img"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="w-1/2">
      <h3>{{ trip.title }}</h3>
      <p>{{ trip.description }}</p>
    </div>
  </div>
</template>
