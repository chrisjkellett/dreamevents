<script setup lang="ts">
defineProps<{ show: boolean }>();
defineEmits(["update:show"]);
</script>

<template>
  <UModal
    :model-value="show"
    @update:model-value="$emit('update:show')"
    :ui="{
      width: 'w-full md:max-w-xl',
      margin: 'sm:my-4',
    }"
  >
    <div class="modal-content flex flex-col min-h-screen relative">
      <slot />
    </div>
  </UModal>
</template>
