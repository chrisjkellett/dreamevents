<script setup lang="ts">
const { data: trips } = useFetch(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

const filter = useState("filter", () => "all");

const searchText = useState("searchText", () => "");

const showDetails = useState("show-details", () => undefined);

const tripsFilteredBySearch = computed(() => {
  return trips.value.filter((t) => {
    const regex = new RegExp(searchText.value, "i");
    return regex.exec(t.title) || regex.exec(t.description);
  });
});

const filteredTrips = computed(() => {
  if (filter.value === "upcoming") {
    return tripsFilteredBySearch.value.filter((t) => t.status === "todo");
  }
  if (filter.value === "completed") {
    return tripsFilteredBySearch.value.filter((t) => t.status === "done");
  }
  return tripsFilteredBySearch.value;
});

function deleteTrip(id: number) {
  trips.value = trips.value.filter((t) => t.id !== id);
}

provide("data", {
  filter,
  filteredTrips,
  searchText,
  showDetails,

  deleteTrip,
});
</script>

<template>
  <slot />
</template>
