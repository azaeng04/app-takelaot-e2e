import { Locator, Page } from "@playwright/test";

export class ViewCartPage {
  readonly page: Page;
  readonly listOfProducts: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listOfProducts = page.locator("[data-ref='cart-item']");
    this.proceedToCheckoutButton = page.getByText("Proceed to Checkout");
  }

  async getProductByName(productName: string) {
    await this.proceedToCheckoutButton.waitFor({ state: "attached" });
    const allProductsText = await this.listOfProducts.allInnerTexts();
    const productIndex = allProductsText.findIndex((value) =>
      value.toLowerCase().includes(productName.toLowerCase())
    );
    if (productIndex < 0)
      throw new Error(
        `Product "${productName}" could not be found in the list of products "${allProductsText.join(
          ", "
        )}"`
      );
    const product = (await this.listOfProducts.all())[productIndex];
    const pName = await product.locator("h3").innerText();
    const pPrice = await product.locator(".currency").innerText();
    return { pName, pPrice };
  }
}
