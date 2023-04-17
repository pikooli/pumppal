// work on ios
describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("should show hello screen after tap", async () => {
    await expect(element(by.id("home-screen"))).toBeVisible();
    await element(by.id("go-to-details")).tap();
    await expect(element(by.id("details-screen"))).toBeVisible();
  });
});
