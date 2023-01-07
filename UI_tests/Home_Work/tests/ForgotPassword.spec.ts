import { test } from "@playwright/test";
import { ForgotPassword_Page } from "../Pages/forgotPassword/forgotPassword_page";
import { URLS } from "../Fixtures/URL's";
import { Expected_results } from "../Fixtures/forgotPassword/expected_results";
import { Filling_values } from "../Fixtures/forgotPassword/filling_values";

test.describe("ForgotPassword", () => {
  test("Check recovering wrong account", async ({ page }) => {
    const forgotPasswordPage = new ForgotPassword_Page(page);
    await forgotPasswordPage.goto(URLS.main);
    await forgotPasswordPage.clickLogin();
    await forgotPasswordPage.goToForgotPasswordPage();
    await forgotPasswordPage.fillInputField(Filling_values.inputField);
    await forgotPasswordPage.clickNextButton();
    await forgotPasswordPage.checkErrorMessage(Expected_results.errorMessage);
  });
});
