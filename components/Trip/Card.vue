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
    class="border flex h-52 md:rounded-2xl card cursor-pointer hover:border-slate-400"
  >
    <div class="md:w-1/2 w-1/4">
      <img
        :src="trip.photo_url"
        alt="trip img"
        class="h-full w-full object-cover md:rounded-tl-2xl md:rounded-bl-2xl"
      />
    </div>
    <div class="md:w-1/2 w-3/4 flex flex-col justify-between md:p-6 p-4">
      <div class="max-h-[130px] overflow-hidden">
        <h3 class="md:text-2xl text-lg font-semibold">{{ trip.title }}</h3>
        <p class="md:text-md text-sm">{{ shortDescription }}</p>
      </div>
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
