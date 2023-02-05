import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/home.page";

test("should be able to view product once it has been added to the cart", async ({
  page,
}) => {
  const takealotHomePage = new HomePage(page);
  await takealotHomePage.goto();
  const searchResultsPage = await takealotHomePage.topNavigationBar.search.for(
    "Power Inverter"
  );
  const productInfo = await searchResultsPage.addItemByName("Power Inverter");
  const viewCartPage = await searchResultsPage.topNavigationBar.gotoViewCart();
  const productInfoOnCartPage = await viewCartPage.getProductByName(productInfo.pName);

  expect(productInfo).toMatchObject(productInfoOnCartPage);
});
