import { expect, Locator, Page } from "@playwright/test";

export class ForgotPassword_Page {
  readonly page: Page;
  readonly login: Locator;
  readonly forgotPasswordPage: Locator;
  readonly inputField: Locator;
  readonly nextButton: Locator;
  readonly errorMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.login = page.locator("[class='auth-bar__item auth-bar__item--text']");
    this.forgotPasswordPage = page.locator("//*/a[@href='https://profile.onliner.by/recover-password']");
    this.inputField = page.locator('//*/input[@placeholder="Ник, e-mail или номер телефона"]');
    this.nextButton = page.locator('//*/button[@type="submit"]');
    this.errorMessage = page.locator(
      "(//*/div[@class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other'])[1]",
    );
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
