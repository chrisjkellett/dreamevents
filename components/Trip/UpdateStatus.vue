<script setup lang="ts">
import useData from "~/composables/useData";

const { currentlyViewedTrip, updateStatusFromViewed } = useData();

const isTodo = computed(() => currentlyViewedTrip.value.status === "todo");
</script>

<template>
  <div @click="updateStatusFromViewed" class="cursor-pointer">
    <div v-if="isTodo" class="text-gray-500 flex items-center gap-1">
      <UIcon name="i-heroicons:check-circle" class="w-5 h-5" />
      <span>Mark as completed</span>
    </div>
    <div v-else class="text-green-500 flex items-center gap-1">
      <UIcon name="i-heroicons:check-circle-solid" class="w-5 h-5" />
      <span>Complete</span>
    </div>
  </div>
</template>
