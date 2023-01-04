import { expect, Locator, Page } from "@playwright/test";

export class Basket_Page {
  readonly page: Page;
  readonly basketPage: Locator;
  readonly basketTitle: Locator;
  readonly basketMessage: Locator;
  readonly errorMessage: Locator;
  readonly region: Locator;
  readonly modalWindowInput: Locator;
  readonly modalWindowButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.basketPage = page.locator("(//*/a[@href='https://cart.onliner.by'])[2]");
    this.basketTitle = page.locator(
      "[class='cart-form__title cart-form__title_big-alter cart-form__title_condensed-additional']",
    );
    this.basketMessage = page.locator("[class='cart-message__title cart-message__title_big']");
    this.errorMessage = page.locator(
      "[class='auth-form__description auth-form__description_error auth-form__description_base auth-form__description_condensed']",
    );
    this.region = page.locator("[class='cart-form__link cart-form__link_primary cart-form__link_base-alter']");
    this.modalWindowInput = page.locator("[placeholder='Укажите ваш населенный пункт']");
    this.modalWindowButton = page.locator(
      "[class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']",
    );
  }

  async goto(str: string) {
    await this.page.goto(str);
  }
  async clickBasket() {
    await this.basketPage.click();
  }
  async checkBasketTitle(str: string) {
    await expect(this.basketTitle).toHaveText(str);
  }
  async checkBasketMessage(str: string) {
    await expect(this.basketMessage).toHaveText(str);
  }
  async changeRegion() {
    await this.region.click();
  }
  async fillNewRegion(str: string) {
    await this.modalWindowInput.fill(str);
  }
  async confirmNewRegion() {
    await this.modalWindowButton.click();
  }
  async CheckErrorMessage(str: string) {
    await expect(this.errorMessage).toHaveText(str);
  }
}
