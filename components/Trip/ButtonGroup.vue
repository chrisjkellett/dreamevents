<script setup>
import TripFilterButton from "./FilterButton.vue";
</script>

<template>
  <div class="flex justify-center">
    <UButtonGroup
      size="lg"
      orientation="horizontal"
      :ui="{ rounded: 'rounded-2xl' }"
    >
      <TripFilterButton
        v-for="label in ['all', 'completed', 'upcoming']"
        :key="label"
        :label="label"
      />
    </UButtonGroup>
  </div>
</template>
