import { test } from "@playwright/test";
import { Registration_Page } from "../Pages/registarion/registration_page";
import { URLS } from "../Fixtures/URL's";
import { Expected_results } from "../Fixtures/registration/expected_results";
import { Filling_values } from "../Fixtures/registration/filling_values";

test.describe("Registrations - negative tests", () => {
  test("Check application politics error message", async ({ page }) => {
    const registrationPage = new Registration_Page(page);
    await registrationPage.goto(URLS.main);
    await registrationPage.clickLogin();
    await registrationPage.goToRegistrationPage();
    await registrationPage.clickRegistrationButton();
    await registrationPage.checkErrorMessage(Expected_results.errorMessage);
  });
  test("Try to registration with invalid data", async ({ page }) => {
    const registrationPage = new Registration_Page(page);
    await registrationPage.goto(URLS.main);
    await registrationPage.clickLogin();
    await registrationPage.goToRegistrationPage();
    await registrationPage.fillLogin(Filling_values.login);
    await registrationPage.fillPassword(Filling_values.password);
    await registrationPage.fillConfirmPassword(Filling_values.confirmPassword);
    await registrationPage.clickCheckBox();
    await registrationPage.clickRegistrationButton();
    await registrationPage.checkEmailValidationMessage(Expected_results.emailValidationMessage);
    await registrationPage.checkPasswordValidationMessage(Expected_results.passwordValidationMessage);
    await registrationPage.checkPasswordConfirmValidationMessage(Expected_results.passwordConfirmValidationMessage);
  });
});

test.describe("Check Quick Authorization Buttons on Registration Page", () => {
  test("Check Facebook, VK and Google buttons on Registration Page (enabled and visible)", async ({ page }) => {
    const registrationPage = new Registration_Page(page);
    await registrationPage.goto(URLS.main);
    await registrationPage.clickLogin();
    await registrationPage.checkFacebookButton();
    await registrationPage.checkVkButton();
    await registrationPage.checkGoogleButton();
  });
});
