import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, describe, expect } from "vitest";
import index from "../pages/index.vue";

describe("First test", () => {
  it("should render", async () => {
    const cmp = await mountSuspended(index);
    expect(cmp.text()).toContain("HELLO WORLD");
  });
});
