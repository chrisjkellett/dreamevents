<script setup lang="ts">
defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div class="w-7 h-7 absolute top-4 right-4 rounded-full bg-slate-800"></div>
  <UIcon
    name="i-heroicons:x-circle"
    class="w-7 h-7 absolute top-4 right-4 text-white cursor-pointer"
    @click="$emit('click')"
  />
</template>
