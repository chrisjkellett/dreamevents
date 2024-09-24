<script setup>
import Logo from "~/components/Nav/Logo.vue";
import XButton from "~/components/X/Button.vue";
</script>

<template>
  <div
    class="bg-zinc-900 sticky h-20 md:rounded-2xl flex items-center justify-between p-4"
  >
    <Logo />
    <XButton color="white" disabled>Create new trip</XButton>
  </div>
</template>
