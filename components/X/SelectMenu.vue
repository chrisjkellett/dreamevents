<script setup lang="ts">
defineProps<{ modelValue: string; options: string[] }>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <USelectMenu
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    size="lg"
    class="focus:ring-blue-500"
    placeholder="Select a status"
    :options="options"
    :ui="{
      rounded: 'rounded-full',
      color: {
        gray: {
          outline: 'focus:ring-gray-300',
        },
      },
    }"
  />
</template>
