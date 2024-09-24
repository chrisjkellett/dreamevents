<script setup lang="ts">
import useData from "~/composables/useData";
import TripForm from "~/components/Trip/Form.vue";

const { editingId } = useData();
</script>

<template>
  <div v-if="!!editingId">
    <TripForm />
  </div>
</template>
