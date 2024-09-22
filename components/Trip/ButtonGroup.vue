<template>
  <div class="flex justify-center">
    <UButtonGroup
      size="lg"
      orientation="horizontal"
      :ui="{ rounded: 'rounded-2xl' }"
    >
      <UButton label="All" color="white" />
      <UButton label="Completed" color="white" />
      <UButton label="Upcoming" color="white" />
    </UButtonGroup>
  </div>
</template>
