import { mountSuspended, registerEndpoint } from "@nuxt/test-utils/runtime";
import { expect } from "vitest";
import { VueWrapper } from "@vue/test-utils";
import { h } from "vue";

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

  static async create(): Promise<PageObject> {
    const wrapper = await mountSuspended(app, {
      global: {
        stubs: {
          UModal: true,
        },
      },
    });
    const po = new this(wrapper);
    return po;
  }

  async applyFilter(filter: string) {
    await this.wrapper.find(`button#${filter}`).trigger("click");
  }

  async applySearch(text: string) {
    await this.wrapper.find("input#search-trips").setValue(text);
  }

  async clickCard(n: number) {
    await this.wrapper.findAll(".card")[n - 1].trigger("click");
    await nextTick();
  }

  async deleteTrip(n: number) {
    await this.wrapper.find("button#delete-trip").trigger("click");
  }

  async editTrip(n: number) {
    await this.wrapper.find("button#edit-trip").trigger("click");
  }

  async updateTripName(n: number, name: string) {
    // cannot do this until you stub the modal properly
  }

  assertHasTripsVisible(n: number) {
    expect(this.wrapper.findAll(".card")).toHaveLength(n);
  }

  assertCardContent(n: number, text: string) {
    expect(this.wrapper.findAll(".card")[n - 1].text()).toContain(text);
  }

  assertModalVisible() {
    expect(this.wrapper.find(".trip-modal").exists()).toBe(true);
  }
}
