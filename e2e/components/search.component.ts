import { Locator, Page } from "@playwright/test";
import { SearchResultsPage } from "../pages/search-results.page";

export class SearchComponent {
  readonly page: Page;
  readonly searchBar: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.getByPlaceholder("Search for products, brands...");
    this.searchButton = page.locator("[data-ref='search-submit-button']");
  }

  async for(searchCritera: string) {
    await this.searchBar.fill(searchCritera);
    await this.searchButton.click();
    return new SearchResultsPage(this.page);
  }
}
