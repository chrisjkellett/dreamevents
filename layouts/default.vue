<script setup lang="ts">
useHead({
  title: "Dream travels",
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- <NavBar /> -->
    <div class="grow pb-16">
      <slot />
    </div>
    <!-- <Footer /> -->
  </div>
</template>
