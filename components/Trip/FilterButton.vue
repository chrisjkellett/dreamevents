<script setup lang="ts">
import useData from "~/composables/useData";

const { filter } = useData();

defineProps<{
  label: "all" | "completed" | "upcoming";
}>();
</script>

<template>
  <UButton
    :label="label"
    color="white"
    class="capitalize hover:bg-slate-100/50"
    :class="{ 'bg-slate-200': filter === label }"
    @click="filter = label"
  />
</template>
