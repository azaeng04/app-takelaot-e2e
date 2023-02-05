import { Page } from "@playwright/test";
import { TopNavigationBarComponent } from "../components/top-nav.component";

export class HomePage {
  readonly page: Page;
  private readonly _topNavigationBar: TopNavigationBarComponent;

  public get topNavigationBar(): TopNavigationBarComponent {
    return this._topNavigationBar;
  }

  constructor(page: Page) {
      this.page = page;
      this._topNavigationBar = new TopNavigationBarComponent(page);
  }

  async goto() {
    await this.page.goto("https://www.takealot.com/");
    return new HomePage(this.page);
  }
}
