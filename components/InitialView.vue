<script setup>
import useData from "~/composables/useData";
import Card from "./Card.vue";

const { trips } = useData();
</script>

<template>
  <div class="initial-view flex flex-col gap-4" v-if="trips">
    <Card v-for="trip in trips" :key="trip.id" :trip="trip" />
  </div>
</template>
