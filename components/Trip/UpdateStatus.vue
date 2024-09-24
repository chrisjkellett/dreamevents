<script setup lang="ts">
import useData from "~/composables/useData";

const { currentlyViewedTrip, updateStatusFromViewed } = useData();
</script>

<template>
  <div
    @click="updateStatusFromViewed"
    class="cursor-pointer hover:bg-green-200 w-fit"
  >
    update status
  </div>
  <div>{{ currentlyViewedTrip.status }}</div>
</template>
