import { test, expect } from './fixtures/sauce-demo';
require("dotenv").config();
//const { LoginPage } = require('./pages/auth');

test('Checkout', async ({ loginPage, page }) => {
    //const loginPage = new LoginPage(page);
    await loginPage.load();
    //await loginPage.login(process.env.USERNAME, process.env.PASSWORD)
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});
