import { expect, Locator, Page } from "@playwright/test";
import { Catalog_locators } from "./catalog_locators";

export class Catalog_Page {
  readonly page: Page;
  readonly onlinePrime: Locator;
  readonly electronika: Locator;
  readonly computersAndNetworks: Locator;
  readonly insertMicro: Locator;
  readonly insertMicroQuantity: Locator;
  constructor(page: Page) {
    this.page = page;
    this.onlinePrime = page.locator(Catalog_locators.onlinePrime);
    this.electronika = page.locator(Catalog_locators.electronika);
    this.computersAndNetworks = page.locator(Catalog_locators.computersAndNetworks);
    this.insertMicro = page.locator(Catalog_locators.insertMicro);
    this.insertMicroQuantity = page.locator(Catalog_locators.insertMicroQuantity);
  }

  async goto(str: string) {
    await this.page.goto(str);
  }
  async checkOnlinePrimeText(str: string) {
    await expect(this.onlinePrime).toHaveText(str);
  }
  async checkElectronikaText(str: string) {
    await expect(this.electronika).toHaveText(str);
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
