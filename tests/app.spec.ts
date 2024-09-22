import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { it, describe, expect } from "vitest";
import app from "~/app.vue";

registerEndpoint(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels",
  () => ["foobar"]
);

describe("First test", () => {
  it("should render", async () => {
    const wrapper = await mountSuspended(app);
    console.log(wrapper.find(".initial-view").html());
  });
});
