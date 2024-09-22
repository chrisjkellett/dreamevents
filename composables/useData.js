import { inject } from "vue";

export default function useData() {
  const data = inject("data");

  return data;
}
