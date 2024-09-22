import { inject } from "vue";

export default function useData() {
  const trips = inject("trips");

  return {
    trips,
  };
}
