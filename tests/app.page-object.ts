import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { expect } from "vitest";
import { VueWrapper } from "@vue/test-utils";

import app from "~/app.vue";
import data from "./data.json";

registerEndpoint(
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels",
  () => data
);

export default class PageObject {
  wrapper: VueWrapper;

  constructor(wrapper: VueWrapper) {
    this.wrapper = wrapper;
  }

  static async create() {
    const wrapper = await mountSuspended(app);
    const po = new this(wrapper);
    return po;
  }

  async applyFilter(filter: string) {
    await this.wrapper.find(`button#${filter}`).trigger("click");
  }

  async applySearch(text: string) {
    await this.wrapper.find("input#search-trips").setValue(text);
  }

  assertHasTripsVisible(n: number) {
    expect(this.wrapper.findAll(".card")).toHaveLength(n);
  }

  assertCardContent(n: number, text: string) {
    expect(this.wrapper.findAll(".card")[n - 1].text()).toContain(text);
  }
}
