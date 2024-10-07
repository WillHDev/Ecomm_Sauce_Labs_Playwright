import { test, expect } from './fixtures/sauce-demo';
require("dotenv").config();
//const { LoginPage } = require('./pages/auth');

test('Add item to cart', async ({ loginPage, page }) => {
    //const loginPage = new LoginPage(page);
    await loginPage.load();
    //await loginPage.login(process.env.USERNAME, process.env.PASSWORD)
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});

//todo: add fixture
//add checkout page
//complete checkout flow
//assert price sorting is working - create and array and verify it goes from low to high
//create a test teardown to clear state
//add global state
