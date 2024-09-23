<script setup lang="ts">
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";
import ModalCloseButton from "~/components/X/ModalCloseButton.vue";

const { showForm } = useData();

function close() {
  showForm.value = 0;
}
</script>

<template>
  <div v-if="!!showForm">
    <XModal :show="!!showForm" @update:show="close">
      <ModalCloseButton @click="close" />
    </XModal>
  </div>
</template>
