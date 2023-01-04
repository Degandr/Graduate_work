import { test } from "@playwright/test";
import { Registration_Page } from "../Pages/registration_page";

test.describe("Registrations - negative tests", () => {
  test("Check application politics error message", async ({ page }) => {
    const registrationPage = new Registration_Page(page);
    await registrationPage.goto("https://www.onliner.by/");
    await registrationPage.clickLogin();
    await registrationPage.goToRegistrationPage();
    await registrationPage.clickRegistrationButton();
    await registrationPage.checkErrorMessage(
      "Для регистрации аккаунта необходимо ваше согласие с Политикой конфиденциальности и Пользовательским соглашением",
    );
  });
  test("Try to registration with invalid data", async ({ page }) => {
    const registrationPage = new Registration_Page(page);
    await registrationPage.goto("https://www.onliner.by/");
    await registrationPage.clickLogin();
    await registrationPage.goToRegistrationPage();
    await registrationPage.fillLogin("qwerty");
    await registrationPage.fillPassword("asdasd");
    await registrationPage.fillConfirmPassword("zxczczxc");
    await registrationPage.clickCheckBox();
    await registrationPage.clickRegistrationButton();
    await registrationPage.checkEmailValidationMessage("Некорректный e-mail");
    await registrationPage.checkPasswordValidationMessage("Пароль должен быть от 8 до 64 символов");
    await registrationPage.checkPasswordConfirmValidationMessage("Пароли не совпадают");
  });
});

test.describe("Check Quick Authorization Buttons on Registration Page", () => {
  test("Check Facebook, VK and Google buttons on Registration Page (enabled and visible)", async ({ page }) => {
    const registrationPage = new Registration_Page(page);
    await registrationPage.goto("https://www.onliner.by/");
    await registrationPage.clickLogin();
    await registrationPage.checkFacebookButton();
    await registrationPage.checkVkButton();
    await registrationPage.checkGoogleButton();
  });
});
