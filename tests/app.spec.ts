import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, describe, expect } from "vitest";
import app from "~/app.vue";

describe("First test", () => {
  it("should render", async () => {
    const wrapper = await mountSuspended(app);
    console.log(wrapper.find(".initial-view").html());
  });
});
