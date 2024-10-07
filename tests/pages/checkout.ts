import { type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly boltShirt: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly miniCart: Locator;
  readonly checkoutBtn: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boltShirt =  page.locator('.inventory_item_description:has-text("Sauce Labs Bolt T-Shirt")')
    this.password =  page.getByPlaceholder('Password');
    this.miniCart =  page.locator('.shopping_cart_link');
    this.checkoutBtn = page.getByText('Checkout');
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.zipCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueBtn = page.getByText('Continue');
    this.finishBtn = page.getByText('Finish');
}

async addToCart( item: string ) {
    // for (let i = 0; i < 3; i++) {
    //     console.log ("Block statement execution no." + i);
    //   }
    await this.page.locator(item).locator("text=Add to cart").click();
  }

async checkout( firstName, lastName, zipCode) {
    await this.miniCart.click();
    await this.checkoutBtn.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
}

  async load() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
}