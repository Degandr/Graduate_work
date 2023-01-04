import { expect, Locator, Page } from "@playwright/test";

export class Catalog_Page {
  readonly page: Page;
  readonly onlinePrime: Locator;
  readonly electonika: Locator;
  readonly computersAndNetworks: Locator;
  readonly insertMicro: Locator;
  readonly insertMicroQuantity: Locator;
  constructor(page: Page) {
    this.page = page;
    this.onlinePrime = page.locator("(//*/span[@class='catalog-navigation-classifier__item-title-wrapper'])[1]");
    this.electonika = page.locator("(//*/span[@class='catalog-navigation-classifier__item-title-wrapper'])[2]");
    this.computersAndNetworks = page.locator(
      "(//*/span[@class='catalog-navigation-classifier__item-title-wrapper'])[3]",
    );
    this.insertMicro = page.locator("(//*/span[@class='i-tip'])[3]");
    this.insertMicroQuantity = page.locator("(//*/span[@class='value__text'])[43]");
  }

  async goto(str: string) {
    await this.page.goto(str);
  }
  async checkOnlinePrimeText(str: string) {
    await expect(this.onlinePrime).toHaveText(str);
  }
  async checkElectonikaText(str: string) {
    await expect(this.electonika).toHaveText(str);
  }
  async checkComputersAndNetworksText(str: string) {
    await expect(this.computersAndNetworks).toHaveText(str);
  }
  async checkInsertMicro() {
    await this.insertMicro.isVisible();
  }
  async checkInsertMicroQuantity(val: RegExp) {
    await expect(this.insertMicroQuantity).toHaveText(val);
  }
}
