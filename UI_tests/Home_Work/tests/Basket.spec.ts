import { test } from "@playwright/test";
import { Basket_Page } from "../Pages/basket_page";

test.describe("Default Basket Page", () => {
  test("Check Default Basket", async ({ page }) => {
    const basketPage = new Basket_Page(page);
    await basketPage.goto("https://www.onliner.by/");
    await basketPage.clickBasket();
    await basketPage.checkBasketTitle("Корзина");
    await basketPage.checkBasketMessage("Ваша корзина пуста");
  });
});

test.describe("Change Region", () => {
  test("Try to find invalid region", async ({ page }) => {
    const basketPage = new Basket_Page(page);
    await basketPage.goto("https://www.onliner.by/");
    await basketPage.clickBasket();
    await basketPage.changeRegion();
    await basketPage.fillNewRegion("Вильнюс");
    await basketPage.confirmNewRegion();
    await basketPage.CheckErrorMessage("Укажите населенный пункт");
  });
});
