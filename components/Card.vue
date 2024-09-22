<script setup lang="ts">
interface BaseTrip {
  id: number;
  title: string;
  photo_url: string;
  description: string;
}

defineProps<{
  trip: BaseTrip;
}>();
</script>

<template>card</template>
