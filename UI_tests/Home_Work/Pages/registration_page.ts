import { expect, Locator, Page } from "@playwright/test";

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
    this.login = page.locator("[class='auth-bar__item auth-bar__item--text']");
    this.registrationPage = page.locator("//*/a[@href='https://profile.onliner.by/registration']");
    this.loginField = page.locator('//*/input[@placeholder="Ваш e-mail"]');
    this.passwordField = page.locator('//*/input[@placeholder="Придумайте пароль"]');
    this.confirmPassword = page.locator('//*/input[@placeholder="Повторите пароль"]');
    this.registrationButton = page.locator('//*/button[@type="submit"]');
    this.errorMessage = page.locator("[class='growl-content']");
    this.checkBox = page.locator("[class='i-checkbox__faux']");
    this.emailValidationMessage = page.locator(
      "(//*/div[@class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other'])[1]",
    );
    this.passwordValidationMessage = page.locator(
      "(//*/div[@class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other'])[2]",
    );
    this.passwordConfirmValidationMessage = page.locator(
      "(//*/div[@class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other'])[3]",
    );
    this.facebookButton = page.locator(
      "[class='auth-button auth-button_subsidiary auth-button_huge auth-form__button auth-form__button_fb']",
    );
    this.vkButton = page.locator(
      "[class='auth-button auth-button_extra auth-button_huge auth-form__button auth-form__button_vk']",
    );
    this.googleButton = page.locator(
      "[class='auth-button auth-button_accessorial auth-button_huge auth-form__button auth-form__button_gg']",
    );
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
