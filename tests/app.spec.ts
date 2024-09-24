import { it, describe, afterEach } from "vitest";
import PageObject from "./app.page-object";

describe("First test", () => {
  afterEach(() => {
    clearNuxtState();
  });

  it("can filter between all, upcoming and completed", async () => {
    const page = await PageObject.create();
    page.assertHasTripsVisible(3);

    await page.applyFilter("upcoming");
    page.assertHasTripsVisible(1);

    await page.applyFilter("completed");
    page.assertHasTripsVisible(2);
  });

  it("can search by title", async () => {
    const page = await PageObject.create();
    await page.applySearch("2nd title");
    page.assertHasTripsVisible(1);
  });

  it("can search by description", async () => {
    const page = await PageObject.create();
    await page.applySearch("key phrase");
    page.assertCardContent(1, "trip with a key phrase");
  });

  it("can open modal to see all details of a trip", async () => {
    const page = await PageObject.create();
    await page.clickCard(1);
    page.assertModalVisible();
  });

  it("can delete a trip", async () => {
    const page = await PageObject.create();
    page.assertCardContent(1, "1st title");
    await page.deleteTrip(1);
    page.assertCardContent(1, "2nd title");
  });

  it("can edit a trip", async () => {
    const page = await PageObject.create();
    await page.editTrip(1);
    await page.updateTitle("UPDATED TITLE");
    await page.submitUpdate();
    page.assertCardContent(1, "UPDATED TITLE");
  });
});
