import { test } from "@playwright/test";
import { Login_Page } from "../Pages/page_login";

test.describe("Authorizations", () => {
  test("Invalid authorization", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://www.onliner.by/");
    await loginPage.clickLogin();
    await loginPage.fillLogin("ascsdcdsafs@gmail.com");
    await loginPage.fillPassword("svrfsref");
    await loginPage.clickLoginButton();
    await loginPage.checkErrorMessage("Неверный логин или пароль");
  });
});

test.describe("Check Quick Authorization Buttons on Login Page", () => {
  test("Check Facebook, VK and Google buttons on Login Page (enabled and visible)", async ({ page }) => {
    const loginPage = new Login_Page(page);
    await loginPage.goto("https://www.onliner.by/");
    await loginPage.clickLogin();
    await loginPage.checkFacebookButton();
    await loginPage.checkVkButton();
    await loginPage.checkGoogleButton();
  });
});
