<script setup>
import TripCards from "~/components/Trip/Cards.vue";
import TripButtonGroup from "~/components/Trip/ButtonGroup.vue";
import TripSearch from "~/components/Trip/Search.vue";
import TripTitle from "~/components/Trip/Title.vue";
import TripModal from "~/components/Trip/Modal.vue";
import TripEditing from "~/components/Trip/Editing.vue";
import useData from "~/composables/useData";

const { filter } = useData();
</script>

<template>
  <div class="initial-view flex flex-col gap-6">
    <TripTitle />
    <TripSearch />
    <TripButtonGroup />
    <TripCards :key="filter" />
    <TripModal />
    <TripEditing />
  </div>
</template>
