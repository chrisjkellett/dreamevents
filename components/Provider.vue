<script setup>
const { data: trips } = useFetch(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels"
);

const filter = useState("filter", () => "all");

const searchText = useState("searchText", () => "");

const tripsFilteredBySearch = computed(() => {
  return trips.value.filter((t) => {
    return new RegExp(searchText.value, "i").exec(t.title);
  });
});

const filteredTrips = computed(() => {
  if (filter.value === "upcoming") {
    return trips.value.filter((t) => t.status === "todo");
  }
  if (filter.value === "completed") {
    return trips.value.filter((t) => t.status === "done");
  }
  return trips.value;
});

provide("data", {
  filter,
  filteredTrips,
  searchText,
});
</script>

<template>
  <slot />
</template>
