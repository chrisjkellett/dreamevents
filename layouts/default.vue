<script setup lang="ts">
useHead({
  title: "Dream travels",
});
</script>

<template>
  <div class="min-h-screen flex flex-col max-w-5xl mx-auto rounded mt-10">
    <NavBar />
    <div class="grow pb-16 border">
      <slot />
    </div>
  </div>
</template>
