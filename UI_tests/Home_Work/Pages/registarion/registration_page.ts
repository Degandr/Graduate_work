import { expect, Locator, Page } from "@playwright/test";
import { Registration_locators } from "./registration_locators";

export class Registration_Page {
  readonly page: Page;
  readonly login: Locator;
  readonly registrationPage: Locator;
  readonly loginField: Locator;
  readonly passwordField: Locator;
  readonly confirmPassword: Locator;
  readonly registrationButton: Locator;
  readonly errorMessage: Locator;
  readonly checkBox: Locator;
  readonly emailValidationMessage: Locator;
  readonly passwordValidationMessage: Locator;
  readonly passwordConfirmValidationMessage: Locator;
  readonly facebookButton: Locator;
  readonly vkButton: Locator;
  readonly googleButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.login = page.locator(Registration_locators.login);
    this.registrationPage = page.locator(Registration_locators.registrationPage);
    this.loginField = page.locator(Registration_locators.loginField);
    this.passwordField = page.locator(Registration_locators.passwordField);
    this.confirmPassword = page.locator(Registration_locators.confirmPassword);
    this.registrationButton = page.locator(Registration_locators.registrationButton);
    this.errorMessage = page.locator(Registration_locators.errorMessage);
    this.checkBox = page.locator(Registration_locators.checkBox);
    this.emailValidationMessage = page.locator(Registration_locators.emailValidationMessage);
    this.passwordValidationMessage = page.locator(Registration_locators.passwordValidationMessage);
    this.passwordConfirmValidationMessage = page.locator(Registration_locators.passwordConfirmValidationMessage);
    this.facebookButton = page.locator(Registration_locators.facebookButton);
    this.vkButton = page.locator(Registration_locators.vkButton);
    this.googleButton = page.locator(Registration_locators.googleButton);
  }

  async goto(str: string) {
    await this.page.goto(str);
  }
  async clickLogin() {
    await this.login.click();
  }
  async goToRegistrationPage() {
    await this.registrationPage.click();
  }
  async fillLogin(str: string) {
    await this.loginField.fill(str);
  }
  async fillPassword(str: string) {
    await this.passwordField.fill(str);
  }
  async fillConfirmPassword(str: string) {
    await this.confirmPassword.fill(str);
  }
  async clickCheckBox() {
    await this.checkBox.click();
  }
  async checkEmailValidationMessage(str: string) {
    await expect(this.emailValidationMessage).toHaveText(str);
  }
  async checkPasswordValidationMessage(str: string) {
    await expect(this.passwordValidationMessage).toHaveText(str);
  }
  async checkPasswordConfirmValidationMessage(str: string) {
    await expect(this.passwordConfirmValidationMessage).toHaveText(str);
  }
  async clickRegistrationButton() {
    await this.registrationButton.click();
  }
  async checkErrorMessage(str: string) {
    await expect(this.errorMessage).toHaveText(str);
  }
  async checkFacebookButton() {
    await this.facebookButton.isEnabled();
    await this.facebookButton.isVisible();
  }
  async checkVkButton() {
    await this.vkButton.isEnabled();
    await this.vkButton.isVisible();
  }
  async checkGoogleButton() {
    await this.googleButton.isEnabled();
    await this.googleButton.isVisible();
  }
}
