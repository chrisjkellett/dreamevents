<script setup lang="ts">
import type { Trip } from "~/types/trips";
import schema from "~/schemas/trip";
import useData from "~/composables/useData";
import XModal from "~/components/X/Modal.vue";
import ModalCloseButton from "~/components/X/ModalCloseButton.vue";
import XInput from "~/components/X/Input.vue";
import XTextArea from "~/components/X/TextArea.vue";
import XButton from "~/components/X/Button.vue";
import XSelectMenu from "~/components/X/SelectMenu.vue";

const { editingId, filteredTrips, updateTrip } = useData();

function close() {
  editingId.value = 0;
}

const tripInEditing = computed(() => {
  return filteredTrips.value.find((t: Trip) => t.id === editingId.value);
});

const state = reactive({
  id: tripInEditing.value?.id,
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
        class="my-16 mx-8 flex flex-col gap-4 edit-trip-form"
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
          <div class="flex flex-col gap-4">
            <div
              v-for="(item, index) in state.itinerary"
              :key="item.day"
              class="flex gap-2 bg-gray-100 p-4 rounded-lg"
            >
              <div class="w-1/4">
                <XSelectMenu
                  v-model="state.itinerary[index].day"
                  :options="
                    Array.from(
                      { length: state.itinerary.length },
                      (_, index) => index + 1
                    )
                  "
                />
              </div>
              <div class="w-3/4 flex flex-col gap-2">
                <XInput v-model="state.itinerary[index].location" />
                <XTextArea
                  v-model="state.itinerary[index].description"
                  :rows="4"
                />
              </div>
            </div>
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
