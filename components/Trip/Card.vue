<script setup lang="ts">
import XLinkButton from "~/components/X/LinkButton.vue";

interface BaseTrip {
  title: string;
  description: string;
  photo_url: string;
}

const props = defineProps<{ trip: BaseTrip }>();

const shortDescription = computed(() => {
  return props.trip.description.split(".")[0] + "...";
});
</script>

<template>
  <div
    class="border flex h-52 rounded-2xl card cursor-pointer hover:border-slate-400"
  >
    <div class="w-1/2">
      <img
        :src="trip.photo_url"
        alt="trip img"
        class="h-full w-full object-cover rounded-tl-2xl rounded-bl-2xl"
      />
    </div>
    <div class="w-1/2 flex flex-col justify-between p-6">
      <h3 class="text-2xl font-semibold">{{ trip.title }}</h3>
      <p>{{ shortDescription }}</p>
      <div class="flex items-center justify-between">
        <XLinkButton>See trip details</XLinkButton>
        <div class="flex gap-4">
          <XLinkButton id="edit-trip" @click.stop="$emit('edit')">
            Edit
          </XLinkButton>
          <XLinkButton id="delete-trip" @click.stop="$emit('delete')">
            Delete
          </XLinkButton>
        </div>
      </div>
    </div>
  </div>
</template>
