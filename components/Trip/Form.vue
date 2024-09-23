<script setup lang="ts">
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";

const { showForm } = useData();
</script>

<template>
  <div v-if="!!showForm">
    <XModal :show="!!showForm" @update:show="showForm = 0">
      form content yo
    </XModal>
  </div>
</template>
