<script setup lang="ts">
import { object, string } from "yup";
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";
import ModalCloseButton from "~/components/X/ModalCloseButton.vue";
import XInput from "~/components/X/Input.vue";
import XTextArea from "~/components/X/TextArea.vue";
import XSelectMenu from "~/components/X/SelectMenu.vue";

const { showForm } = useData();

function close() {
  showForm.value = 0;
}

const schema = object({
  name: string().max(32, "Must be max 32 characters").required("Required"),
  description: string()
    .max(256, "Must be max 256 characters")
    .required("Required"),
  photo_url: string().max(32, "Must be max 32 characters").required("Required"),
  status: string(),
});

const state = reactive({
  name: "",
  description: "",
  photo_url: "",
  status: "",
});
</script>

<template>
  <div v-if="!!showForm">
    <XModal :show="!!showForm" @update:show="close">
      <ModalCloseButton @click="close" />

      <UForm
        :schema="schema"
        :state="state"
        class="mt-16 mx-8 flex flex-col gap-4"
        :validate-on="['submit']"
      >
        <h1 class="text-xl font-bold">Edit trip</h1>
        <UFormGroup label="Name">
          <XInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Description">
          <XTextArea v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Photo URL">
          <XInput v-model="state.photo_url" />
        </UFormGroup>

        <UFormGroup label="Status">
          <XSelectMenu
            v-model="state.status"
            :options="['Todo', 'Completed']"
          />
        </UFormGroup>

        <UFormGroup label="Itinerary">
          <div>component goes here</div>
        </UFormGroup>
      </UForm>
    </XModal>
  </div>
</template>
