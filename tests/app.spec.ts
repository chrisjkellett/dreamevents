import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { it, describe, expect, afterEach } from "vitest";
import app from "~/app.vue";
import data from "./data.json";

describe("First test", () => {
  const URL =
    "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels";

  registerEndpoint(URL, () => data);

  afterEach(() => {
    clearNuxtState();
  });

  it("can filter between all, upcoming and completed", async () => {
    const wrapper = await mountSuspended(app);

    expect(wrapper.findAll(".card")).toHaveLength(3);

    await wrapper.find("button#upcoming").trigger("click");
    expect(wrapper.findAll(".card")).toHaveLength(1);

    await wrapper.find("button#completed").trigger("click");
    expect(wrapper.findAll(".card")).toHaveLength(2);
  });

  it("can search by title", async () => {
    const wrapper = await mountSuspended(app);

    await wrapper.find("input#search-trips").setValue("2nd title");

    expect(wrapper.findAll(".card")).toHaveLength(1);
  });

  it("can search by description", async () => {
    const wrapper = await mountSuspended(app);

    await wrapper.find("input#search-trips").setValue("key phrase");

    expect(wrapper.find(".card").text()).toContain("trip with a key phrase");
  });
});
