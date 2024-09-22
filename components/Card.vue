<script setup>
defineProps(["trip"]);
</script>

<template>
  <div class="border flex h-52">
    <div class="w-1/2">
      <img
        :src="trip.photo_url"
        alt="trip img"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="w-1/2">details</div>
  </div>
</template>
