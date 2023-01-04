import { test } from "@playwright/test";
import { Login_Page } from "../Pages/page_login";

test.describe("Login Page", () => {
  test("Check Logotype link", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://www.onliner.by/");
    await loginPage.checkLogotype();
    await loginPage.logotypeClick();
  });
  test("Check fixed Placeholder in the Search field", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://www.onliner.by/");
    await loginPage.placeholderInSearchField("Поиск в Каталоге. Например,");
  });
  test("Check Restriction Age", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://www.onliner.by/");
    await loginPage.checkAge("18+");
  });
});

test.describe("Searching from Login Page: Negative", () => {
  test("Product can't be added in the basket if it doesn't exist", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://catalog.onliner.by/mobile/apple/iphone11256dsb");
    await loginPage.findInBasketButton();
  });
  test("Page isn't exist if URL isn't valid", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://catalog.onliner.by/mobile/apple/iphone11512dsb");
    await loginPage.checkTitleOnErrorPage("Здрасьте, приехали!");
  });
});
