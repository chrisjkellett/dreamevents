<script setup lang="ts">
import { object, string, date } from "yup";
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";
import ModalCloseButton from "~/components/X/ModalCloseButton.vue";
import XInput from "~/components/X/Input.vue";

const { showForm } = useData();

function close() {
  showForm.value = 0;
}

const schema = object({
  name: string().max(32, "Must be max 32 characters").required("Required"),
});

const state = reactive({
  name: "",
});
</script>

<template>
  <div v-if="!!showForm">
    <XModal :show="!!showForm" @update:show="close">
      <ModalCloseButton @click="close" />
      {{ state }}
      <UForm
        :schema="schema"
        :state="state"
        class="mt-16 mx-8"
        :validate-on="['submit']"
      >
        <UFormGroup label="Name">
          <XInput v-model="state.name" />
        </UFormGroup>
      </UForm>
    </XModal>
  </div>
</template>
