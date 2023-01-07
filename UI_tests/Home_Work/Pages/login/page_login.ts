import { expect, Locator, Page } from "@playwright/test";
import { Login_locators } from "./login_locators";

export class Login_Page {
  readonly page: Page;
  readonly login: Locator;
  readonly loginField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly facebookButton: Locator;
  readonly vkButton: Locator;
  readonly googleButton: Locator;
  readonly logotype: Locator;
  readonly searchField: Locator;
  readonly inBasket: Locator;
  readonly titleOnError: Locator;
  readonly restrictionAge: Locator;
  constructor(page: Page) {
    this.page = page;
    this.login = page.locator(Login_locators.login);
    this.loginField = page.locator(Login_locators.loginField);
    this.passwordField = page.locator(Login_locators.passwordField);
    this.loginButton = page.locator(Login_locators.loginButton);
    this.errorMessage = page.locator(Login_locators.errorMessage);
    this.facebookButton = page.locator(Login_locators.facebookButton);
    this.vkButton = page.locator(Login_locators.vkButton);
    this.googleButton = page.locator(Login_locators.googleButton);
    this.logotype = page.locator(Login_locators.logotype);
    this.searchField = page.locator(Login_locators.searchField);
    this.inBasket = page.getByText(Login_locators.inBasket);
    this.titleOnError = page.locator(Login_locators.titleOnError);
    this.restrictionAge = page.locator(Login_locators.restrictionAge);
  }

  async goto(str: string) {
    await this.page.goto(str);
  }
  async clickLogin() {
    await this.login.click();
  }
  async fillLogin(str: string) {
    await this.loginField.fill(str);
  }
  async fillPassword(str: string) {
    await this.passwordField.fill(str);
  }
  async clickLoginButton() {
    await this.loginButton.click();
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
  async checkLogotype() {
    await this.logotype.isVisible();
    await this.logotype.isEnabled();
  }
  async logotypeClick() {
    await this.logotype.click();
  }
  async placeholderInSearchField(str: string) {
    expect((await this.searchField.getAttribute("placeholder"))?.slice(0, 27)).toContain(str);
  }
  async findInBasketButton() {
    await expect(this.inBasket).not.toBeVisible();
  }
  async checkTitleOnErrorPage(str: string) {
    await expect(this.titleOnError).toHaveText(str);
  }
  async checkAge(str: string) {
    await expect(this.restrictionAge).toHaveText(str);
  }
}
