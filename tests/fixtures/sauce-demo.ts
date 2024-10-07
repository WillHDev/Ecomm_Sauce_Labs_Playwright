import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth';
import { CheckoutPage } from '../pages/checkout';


type SauceDemoFixtures = {

    loginPage: LoginPage;
    checkoutPage: CheckoutPage
};

export const test = base.extend<SauceDemoFixtures>({

  loginPage: async ({ page }, use) => {
     await use(new LoginPage( page ));

  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page))
  }
});

export { expect } from '@playwright/test';

