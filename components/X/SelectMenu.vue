<template>
  <USelectMenu
    @update:model-value="$emit('update:modelValue', $event)"
    size="lg"
    class="focus:ring-blue-500"
    placeholder="Select a status"
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
