import { Locator, Page } from "@playwright/test";

export class ProductComponent {
    readonly page: Page;
    readonly name: Locator;
    readonly price: Locator;

  constructor(page: Page) {
      this.page = page;
      this.name = page.locator(".product-title");
      this.price = page.locator(".price");
  }
}
