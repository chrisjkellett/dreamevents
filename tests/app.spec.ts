import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { it, describe, expect } from "vitest";
import app from "~/app.vue";

describe("First test", () => {
  registerEndpoint(
    "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels",
    () => [
      {
        id: 1,
        title: "SOME DESTINATION",
        description: "SOME DESCRIPTION",
        photo_url: "https://fakeurl.com",
      },
    ]
  );

  it("should render", async () => {
    const wrapper = await mountSuspended(app);
    console.log(wrapper.find(".initial-view").html());
  });
});
