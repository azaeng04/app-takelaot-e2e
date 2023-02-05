import { Locator, Page } from "@playwright/test";
import { SearchComponent } from "./search.component";
import { ViewCartPage } from "../pages/view-cart.page";

export class TopNavigationBarComponent {
  readonly page: Page;
  readonly viewCartLink: Locator;
  private readonly _search: SearchComponent;

  public get search(): SearchComponent {
    return this._search;
  }

  constructor(page: Page) {
    this.page = page;
      this.viewCartLink = page.locator("button.mini-cart-button");
      this._search = new SearchComponent(page);
  }

  async gotoViewCart() {
    await this.viewCartLink.click();
    return new ViewCartPage(this.page);
  }
}
