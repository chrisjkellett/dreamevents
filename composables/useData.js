import { inject } from "vue";

export default function useData() {
  return {
    data: inject("data"),
  };
}
