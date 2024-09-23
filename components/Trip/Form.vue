<script setup lang="ts">
import useData from "~/composables/useData";

const { showForm } = useData();
</script>

<template>
  <div v-if="!!showForm">
    <UModal
      :model-value="!!showForm"
      @update:model-value="showForm = 0"
      :ui="{
        width: 'w-full md:max-w-xl',
        margin: 'sm:my-4',
      }"
    >
      <div class="modal-content flex flex-col min-h-screen relative">
        form content yo
      </div>
    </UModal>
  </div>
</template>
