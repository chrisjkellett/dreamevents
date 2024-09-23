<script setup>
import TripCards from "~/components/Trip/Cards.vue";
import TripButtonGroup from "~/components/Trip/ButtonGroup.vue";
import TripSearch from "~/components/Trip/Search.vue";
import TripTitle from "~/components/Trip/Title.vue";
import TripModal from "~/components/Trip/Modal.vue";
import TripForm from "~/components/Trip/Form.vue";
</script>

<template>
  <div class="initial-view flex flex-col gap-6">
    <TripTitle />
    <TripSearch />
    <TripButtonGroup />
    <TripCards />
    <TripModal />
    <TripForm />
  </div>
</template>
