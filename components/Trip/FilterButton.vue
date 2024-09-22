<script setup lang="ts">
import useData from "~/composables/useData";

const { filter } = useData();
const props = defineProps<{
  label: "all" | "completed" | "upcoming";
}>();
</script>

<template>
  <UButton
    :label="label"
    color="white"
    class="capitalize"
    :class="{ 'bg-slate-200': filter === label }"
    @click="filter = label"
  />
</template>
