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
        description: "SOME DESCRIPTION. AND THEN A LONGER ONE.",
        photo_url: "https://fakeurl.com/1",
        status: "todo",
      },
      {
        id: 2,
        title: "SOME COMPLETED DESTINATION",
        description: "SOME COMPLETED DESCRIPTION. AND THEN A LONGER ONE.",
        photo_url: "https://fakeurl.com/2",
        status: "done",
      },
    ]
  );

  it("can filter between all, upcoming and completed", async () => {
    const wrapper = await mountSuspended(app);
    expect(wrapper.findAll(".card")).toHaveLength(2);

    await wrapper.find("button#upcoming").trigger("click");
    expect(wrapper.findAll(".card")).toHaveLength(1);

    await wrapper.find("button#completed").trigger("click");
    expect(wrapper.findAll(".card")).toHaveLength(1);
    expect(wrapper.find(".card").text()).toContain(
      "SOME COMPLETED DESCRIPTION"
    );
  });
});
