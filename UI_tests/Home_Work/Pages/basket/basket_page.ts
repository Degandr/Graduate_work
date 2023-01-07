import { expect, Locator, Page } from "@playwright/test";
import { Basket_locators } from "./basket_locators";

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
    this.basketPage = page.locator(Basket_locators.basketPage);
    this.basketTitle = page.locator(Basket_locators.basketTitle);
    this.basketMessage = page.locator(Basket_locators.basketMessage);
    this.errorMessage = page.locator(Basket_locators.errorMessage);
    this.region = page.locator(Basket_locators.region);
    this.modalWindowInput = page.locator(Basket_locators.modalWindowInput);
    this.modalWindowButton = page.locator(Basket_locators.modalWindowButton);
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
