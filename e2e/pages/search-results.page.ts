import { Locator, Page } from "@playwright/test";
import { TopNavigationBarComponent } from "../components/top-nav.component";

export class SearchResultsPage {
  readonly page: Page;
  readonly listOfProducts: Locator;
  readonly listOfProductsSection: Locator;
  private readonly _topNavigationBar: TopNavigationBarComponent;

  public get topNavigationBar(): TopNavigationBarComponent {
    return this._topNavigationBar;
  }

  constructor(page: Page) {
    this.page = page;
    this.listOfProducts = page.locator("div .search-product");
    this.listOfProductsSection = page.locator(".listings-container");
    this._topNavigationBar = new TopNavigationBarComponent(page);
  }

  async addFirstItemToCart() {
    await this.listOfProducts.first().getByText("Add to Cart").click();
  }

  async addItemByName(productName: string) {
    await this.listOfProductsSection.waitFor({ state: "attached" });
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
    await product.getByText("Add to Cart").click();
    const pName = await product.locator(".product-title").innerText();
    const pPrice = await product.locator(".price").innerText();
    return { pName, pPrice };
  }
}
