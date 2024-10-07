import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth';


type SauceDemoFixtures = {

  loginPage: LoginPage;

};

export const test = base.extend<SauceDemoFixtures>({

  loginPage: async ({ page }, use) => {
     await use(new LoginPage( page ));

  },
});

export { expect } from '@playwright/test';

