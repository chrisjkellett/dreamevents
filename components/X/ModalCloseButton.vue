<script setup lang="ts">
defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <UIcon
    name="i-heroicons:x-circle-16-solid"
    class="w-7 h-7 absolute top-4 right-4 cursor-pointer hover:bg-gray-700"
    @click="$emit('click')"
  />
</template>
