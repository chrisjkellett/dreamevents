<script setup lang="ts">
defineProps<{ modelValue: string }>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <UTextarea
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    size="lg"
    class="focus:ring-blue-500"
    color="gray"
    :rows="8"
    :ui="{
      rounded: 'rounded-3xl',
      color: {
        gray: {
          outline: 'focus:ring-gray-300',
        },
      },
    }"
  />
</template>
