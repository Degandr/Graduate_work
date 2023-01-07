import { test } from "@playwright/test";
import { Catalog_Page } from "../Pages/catalog/catalog_page";
import { URLS } from "../Fixtures/URL's";
import { Expected_results } from "../Fixtures/catalog/expected_results";

test.describe("Catalog Page", () => {
  test("Check top sections", async ({ page }) => {
    const catalogPage = new Catalog_Page(page);
    await catalogPage.goto(URLS.main);
    await catalogPage.checkOnlinePrimeText(Expected_results.onlinePrimeText);
    await catalogPage.checkElectronikaText(Expected_results.electronikaText);
    await catalogPage.checkComputersAndNetworksText(Expected_results.computersAndNetworksText);
  });
});

test.describe("Catalog Page", () => {
  test("Find parameter in product", async ({ page }) => {
    const catalogPage = new Catalog_Page(page);
    await catalogPage.goto(URLS.catalogNoteBook);
    await catalogPage.checkInsertMicro();
    await catalogPage.checkInsertMicroQuantity(Expected_results.insertMicroQuantity);
  });
});
