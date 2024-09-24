<script setup lang="ts">
import type { Trip } from "~/types/trips";

const { data: trips } = useFetch<Trip[]>(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

const filter = useState("filter", () => "all");

const searchText = useState("searchText", () => "");

const currentlyViewedId = useState("show-details", () => 0);

const editingId = useState("show-form", () => 0);

const tripsFilteredBySearch = computed<Trip[]>(() => {
  return (
    trips.value?.filter((t: Trip) => {
      const regex = new RegExp(searchText.value, "i");
      return regex.exec(t.title) || regex.exec(t.description);
    }) || []
  );
});

const filteredTrips = computed<Trip[]>(() => {
  if (filter.value === "upcoming") {
    return (
      tripsFilteredBySearch.value?.filter((t: Trip) => t.status === "todo") ||
      []
    );
  }
  if (filter.value === "completed") {
    return (
      tripsFilteredBySearch.value?.filter((t: Trip) => t.status === "done") ||
      []
    );
  }
  return tripsFilteredBySearch.value || [];
});

function deleteTrip(id: number): void {
  trips.value = trips.value?.filter((t: Trip) => t.id !== id) || [];
}

function updateTrip(id: number, updatedTrip: Trip): void {
  trips.value =
    trips.value?.map((t: Trip) => (t.id !== id ? t : updatedTrip)) || [];

  editingId.value = 0;
}

function editTrip(id: number): void {
  editingId.value = id;
}

const currentlyViewedTrip = computed<Trip>(() => {
  return filteredTrips.value.find(
    (t: Trip) => t.id === currentlyViewedId.value
  );
});

function updateStatusFromViewed() {
  const id = currentlyViewedId.value;
  const trip = currentlyViewedTrip.value;
  updateTrip(id, { ...trip, status: trip.status === "todo" ? "done" : "todo" });
}

provide("data", {
  filter,
  filteredTrips,
  searchText,
  currentlyViewedId,
  editingId,
  currentlyViewedTrip,

  deleteTrip,
  editTrip,
  updateTrip,

  updateStatusFromViewed,
});
</script>

<template>
  <slot />
</template>
