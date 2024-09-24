<script setup lang="ts">
import type { Trip } from "~/types/trips";

const { data: trips } = useFetch<Trip[]>(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

const filter = useState("filter", () => "all");

const searchText = useState("searchText", () => "");

const currentlyViewedId = useState("show-details", () => 0);

const editingId = useState("show-form", () => 0);

const tripsFilteredBySearch = computed(() => {
  return (
    trips.value?.filter((t: Trip) => {
      const regex = new RegExp(searchText.value, "i");
      return regex.exec(t.title) || regex.exec(t.description);
    }) || []
  );
});

const filteredTrips = computed(() => {
  if (filter.value === "upcoming") {
    return tripsFilteredBySearch.value?.filter(
      (t: Trip) => t.status === "todo"
    );
  }
  if (filter.value === "completed") {
    return tripsFilteredBySearch.value?.filter(
      (t: Trip) => t.status === "done"
    );
  }
  return tripsFilteredBySearch.value;
});

function deleteTrip(id: number): void {
  trips.value = trips.value?.filter((t: Trip) => t.id !== id) || [];
}

function updateTrip(id: number, updatedTrip: Trip): void {
  trips.value =
    trips.value?.map((t: Trip) => (t.id !== id ? t : updatedTrip)) || [];

  editingId.value = 0;
}

const currentlyViewedTrip = computed(() => {
  return filteredTrips.value.find(
    (t: Trip) => t.id === currentlyViewedId.value
  );
});

function updateStatusFromViewed() {
  const id = currentlyViewedId.value;
  const trip = currentlyViewedTrip.value;

  if (!trip) {
    throw new Error("Currently viewed trip not found");
  }

  updateTrip(id, {
    ...trip,
    status: trip.status === "todo" ? "done" : "todo",
  });
}

provide("data", {
  filter,
  filteredTrips,
  searchText,
  currentlyViewedId,
  editingId,
  currentlyViewedTrip,

  deleteTrip,
  updateTrip,

  updateStatusFromViewed,
});
</script>

<template>
  <slot />
</template>
