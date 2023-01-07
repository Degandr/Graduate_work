import { expect, Locator, Page } from "@playwright/test";
import { ForgotPassword_locators } from "./forgotPassword_locators";

export class ForgotPassword_Page {
  readonly page: Page;
  readonly login: Locator;
  readonly forgotPasswordPage: Locator;
  readonly inputField: Locator;
  readonly nextButton: Locator;
  readonly errorMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.login = page.locator(ForgotPassword_locators.login);
    this.forgotPasswordPage = page.locator(ForgotPassword_locators.forgotPasswordPage);
    this.inputField = page.locator(ForgotPassword_locators.inputField);
    this.nextButton = page.locator(ForgotPassword_locators.nextButton);
    this.errorMessage = page.locator(ForgotPassword_locators.errorMessage);
  }

  async goto(str: string) {
    await this.page.goto(str);
  }
  async clickLogin() {
    await this.login.click();
  }
  async goToForgotPasswordPage() {
    await this.forgotPasswordPage.click();
  }
  async fillInputField(str: string) {
    await this.inputField.fill(str);
  }
  async clickNextButton() {
    await this.nextButton.click();
  }
  async checkErrorMessage(str: string) {
    await expect(this.errorMessage).toHaveText(str);
  }
}
