import { type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly miniCart: Locator;
  readonly checkoutBtn: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.miniCart =  page.locator('.shopping_cart_link');
    this.checkoutBtn = page.getByText('Checkout');
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.zipCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueBtn = page.getByText('Continue');
    this.finishBtn = page.getByText('Finish');
  };
  
async checkout( firstName, lastName, zipCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
};
};