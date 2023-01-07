import { test } from "@playwright/test";
import { Basket_Page } from "../Pages/basket/basket_page";
import { URLS } from "../Fixtures/URL's";
import { Expected_results } from "../Fixtures/basket/expected_results";
import { Fillings_values } from "../Fixtures/basket/fillings_values";

test.describe("Default Basket Page", () => {
  test("Check Default Basket", async ({ page }) => {
    const basketPage = new Basket_Page(page);
    await basketPage.goto(URLS.main);
    await basketPage.clickBasket();
    await basketPage.checkBasketTitle(Expected_results.basketTitle);
    await basketPage.checkBasketMessage(Expected_results.basketMessage);
  });
});

test.describe("Change Region", () => {
  test("Try to find invalid region", async ({ page }) => {
    const basketPage = new Basket_Page(page);
    await basketPage.goto(URLS.main);
    await basketPage.clickBasket();
    await basketPage.changeRegion();
    await basketPage.fillNewRegion(Fillings_values.newRegion);
    await basketPage.confirmNewRegion();
    await basketPage.CheckErrorMessage(Expected_results.errorMessage);
  });
});
