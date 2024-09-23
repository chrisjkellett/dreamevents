<script setup lang="ts">
import NavBar from "~/components/Nav/Bar.vue";

useHead({
  title: "Dream travels",
});
</script>

<template>
  <div class="min-h-screen flex flex-col max-w-5xl mx-auto rounded mt-10">
    <NavBar />
    <div class="grow pb-16 flex flex-col gap-6 mt-16">
      <slot />
    </div>
  </div>
</template>
