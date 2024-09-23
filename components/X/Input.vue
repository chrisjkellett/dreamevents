<script setup lang="ts">
defineProps<{ modelValue: string }>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <UInput
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    size="lg"
    class="focus:ring-blue-500"
    color="gray"
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
