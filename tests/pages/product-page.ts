
import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly boltShirt: Locator;
  readonly miniCart: Locator;
  readonly checkoutBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.boltShirt =  page.locator('.inventory_item_description:has-text("Sauce Labs Bolt T-Shirt")');
    this.miniCart =  page.locator('.shopping_cart_link');
    this.checkoutBtn = page.getByText('Checkout');
  }

async addToCart( item: string ) {
    await this.page.locator(item).locator("text=Add to cart").click();
  }

async goToCheckout( ) {
    await this.miniCart.click();
    await this.checkoutBtn.click();
}

  async load() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }


async isAscendingOrder (prices: string[]) {
        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i] > prices[i + 1]) {
                return false;
            }
        }
        return true;
    }
}