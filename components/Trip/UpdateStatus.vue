<script setup lang="ts">
import useData from "~/composables/useData";

const { currentlyViewedTrip, updateStatusFromViewed } = useData();

const styles = computed(() => {
  const todo = currentlyViewedTrip.value.status === "todo";
  return {
    iconName: todo
      ? "i-heroicons:check-circle"
      : "i-heroicons:check-circle-solid",
    color: todo ? "text-gray-500" : "text-green-500",
    text: todo ? "Mark as completed" : "Complete",
  };
});
</script>

<template>
  <div
    @click="updateStatusFromViewed"
    class="cursor-pointer flex items-center gap-1"
    :class="styles.color"
  >
    <UIcon :name="styles.iconName" class="w-5 h-5" />
    <span>
      {{ styles.text }}
    </span>
  </div>
</template>
