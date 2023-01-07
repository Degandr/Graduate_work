import { test } from "@playwright/test";
import { Login_Page } from "../Pages/login/page_login";
import { URLS } from "../Fixtures/URL's";
import { Expected_results } from "../Fixtures/authorizations/expected_results";
import { Fillings_values } from "../Fixtures/authorizations/fillings_values";

test.describe("Authorizations", () => {
  test("Invalid authorization", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.main);
    await loginPage.clickLogin();
    await loginPage.fillLogin(Fillings_values.fillLogin);
    await loginPage.fillPassword(Fillings_values.fillPassword);
    await loginPage.clickLoginButton();
    await loginPage.checkErrorMessage(Expected_results.errorMessage);
  });
});

test.describe("Check Quick Authorization Buttons on Login Page", () => {
  test("Check Facebook, VK and Google buttons on Login Page (enabled and visible)", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto(URLS.main);
    await loginPage.clickLogin();
    await loginPage.checkFacebookButton();
    await loginPage.checkVkButton();
    await loginPage.checkGoogleButton();
  });
});
