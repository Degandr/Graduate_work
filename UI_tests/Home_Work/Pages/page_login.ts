import { expect, Frame, FrameLocator, Locator, Page } from "@playwright/test";

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
    this.login = page.locator("[class='auth-bar__item auth-bar__item--text']");
    this.loginField = page.locator('//*/input[@placeholder="Ник или e-mail"]');
    this.passwordField = page.locator('//*/input[@placeholder="Пароль"]');
    this.loginButton = page.locator('(//*/button[@type="submit"])[2]');
    this.errorMessage = page.locator(
      "[class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other']",
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
    this.logotype = page.locator("(//*/a[@href='https://www.onliner.by'])[3]");
    this.searchField = page.locator("[class='fast-search__input']");
    this.inBasket = page.getByText("В корзину");
    this.titleOnError = page.locator("//*/div/h1");
    this.restrictionAge = page.locator("[class='b-top-navigation-age']");
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
