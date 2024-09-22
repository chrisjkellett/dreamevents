<script setup lang="ts">
import useData from "~/composables/useData";

const { searchText } = useData();
</script>

<template>
  <div class="flex justify-center">
    <div class="grow max-w-[360px]">
      <UInput
        id="search-trips"
        v-model="searchText"
        color="white"
        size="lg"
        variant="outline"
        placeholder="Search trips"
        :ui="{
          rounded: 'rounded-full',
        }"
      />
    </div>
  </div>
</template>
