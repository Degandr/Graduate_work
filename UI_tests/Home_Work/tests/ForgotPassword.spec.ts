import { test } from "@playwright/test";
import { ForgotPassword_Page } from "../Pages/forgotPassword_page";

test.describe("ForgotPassword", () => {
  test("Check recovering wrong account", async ({ page }) => {
    const forgotPasswordPage = new ForgotPassword_Page(page);
    await forgotPasswordPage.goto("https://www.onliner.by/");
    await forgotPasswordPage.clickLogin();
    await forgotPasswordPage.goToForgotPasswordPage();
    await forgotPasswordPage.fillInputField("+11111111111111111111");
    await forgotPasswordPage.clickNextButton();
    await forgotPasswordPage.checkErrorMessage("Такой пользователь не зарегистрирован");
  });
});
