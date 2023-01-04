import { test } from "@playwright/test";
import { Catalog_Page } from "../Pages/catalog_page";

test.describe("Catalog Page", () => {
  test("Check top sections", async ({ page }) => {
    const catalogPage = new Catalog_Page(page);
    await catalogPage.goto("https://catalog.onliner.by/");
    await catalogPage.checkOnlinePrimeText("Onlíner Prime");
    await catalogPage.checkElectonikaText("Электроника");
    await catalogPage.checkComputersAndNetworksText("Компьютеры и сети");
  });
});

test.describe("Catalog Page", () => {
  test("Find parameter in product", async ({ page }) => {
    const catalogPage = new Catalog_Page(page);
    await catalogPage.goto("https://catalog.onliner.by/notebook/asus/g513iehn004t");
    await catalogPage.checkInsertMicro();
    await catalogPage.checkInsertMicroQuantity(/2/);
  });
});
