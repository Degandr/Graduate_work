import { test } from "@playwright/test";
import { Login_Page } from "../Pages/login/page_login";
import { URLS } from "../Fixtures/URL's";
import { Expected_results } from "../Fixtures/login/expected_results";

test.describe("Login Page", () => {
  test("Check Logotype link", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.main);
    await loginPage.checkLogotype();
    await loginPage.logotypeClick();
  });
  test("Check fixed Placeholder in the Search field", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.main);
    await loginPage.placeholderInSearchField(Expected_results.placeholder);
  });
  test("Check Restriction Age", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.main);
    await loginPage.checkAge(Expected_results.age);
  });
});

test.describe("Searching from Login Page: Negative", () => {
  test("Product can't be added in the basket if it doesn't exist", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.catalogMobileIphone11256);
    await loginPage.findInBasketButton();
  });
  test("Page isn't exist if URL isn't valid", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.catalogMobileIphone11512);
    await loginPage.checkTitleOnErrorPage(Expected_results.titleOnErrorPage);
  });
});
