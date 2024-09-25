<script setup lang="ts">
import type { Trip } from "~/types/trips";
import schema from "~/schemas/trip";
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";
import ModalCloseButton from "~/components/X/ModalCloseButton.vue";
import XInput from "~/components/X/Input.vue";
import XTextArea from "~/components/X/TextArea.vue";
import XButton from "~/components/X/Button.vue";

const { editingId, filteredTrips, updateTrip } = useData();

function close() {
  editingId.value = 0;
}

const tripInEditing = computed(() => {
  return filteredTrips.value.find((t: Trip) => t.id === editingId.value);
});

const state = reactive({
  title: tripInEditing.value?.title || "",
  description: tripInEditing.value?.description || "",
  photo_url: tripInEditing.value?.photo_url || "",
  status: tripInEditing.value?.status || "",
  itinerary: tripInEditing.value?.itinerary,
});
</script>

<template>
  <div>
    <XModal :show="!!editingId" @update:show="close">
      <ModalCloseButton @click="close" />

      <UForm
        :schema="schema"
        :state="state"
        class="mt-16 mx-8 flex flex-col gap-4 edit-trip-form"
        :validate-on="['submit']"
      >
        <h1 class="text-xl font-bold">Edit trip</h1>
        <UFormGroup label="Name">
          <XInput id="form-title" v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Description">
          <XTextArea v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Photo URL">
          <XInput v-model="state.photo_url" />
        </UFormGroup>

        <UFormGroup label="Itinerary">
          <div v-for="item in state.itinerary" :key="item.day">
            {{ item }}
          </div>
        </UFormGroup>

        <div class="md:max-w-80 mx-auto">
          <XButton
            id="update-trip"
            type="submit"
            @click="updateTrip(editingId, state)"
          >
            Save
          </XButton>
        </div>
      </UForm>
    </XModal>
  </div>
</template>
