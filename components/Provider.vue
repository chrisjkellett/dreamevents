<script setup lang="ts">
import type { Trip } from "~/types/trips";

const { data: trips } = useFetch<Trip[]>(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

const filter = useState("filter", () => "all");

const searchText = useState("searchText", () => "");

const showDetails = useState("show-details", () => undefined);

const showForm = useState("show-form", () => 0);

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

function editTrip(id: number): void {
  showForm.value = id;
}

provide("data", {
  filter,
  filteredTrips,
  searchText,
  showDetails,
  showForm,

  deleteTrip,
  editTrip,
});
</script>

<template>
  <slot />
</template>
