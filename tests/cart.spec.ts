import { SourceTextModule } from 'vm';
import { test, expect } from './fixtures/sauce-demo';
require("dotenv").config();
//const { LoginPage } = require('./pages/auth');

test('Authenticate user', async ({ loginPage, page }) => {
    //const loginPage = new LoginPage(page);
    await loginPage.load();
    //await loginPage.login(process.env.USERNAME, process.env.PASSWORD)
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});

test('Add items to cart', async ({ loginPage, checkoutPage, page }) => {
    await loginPage.load();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.locator('.inventory_item_description:has-text("Sauce Labs Bolt T-Shirt")')
    await checkoutPage.addToCart('.inventory_item_description:has-text("Sauce Labs Bolt T-Shirt")');
    await checkoutPage.addToCart('.inventory_item_description:has-text("Sauce Labs Bike Light")');
    await checkoutPage.checkout('Jeremiah', 'Smith', '55417');
    await expect(page.getByText('Thank you for your order!')).toBeVisible()

    //should I always assert URL or page title after changing pages?

});

test('Sort items $ -> $$$', async ({ loginPage, checkoutPage, page }) => {
    await loginPage.load();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.load();
    const prices = await page.locator('[data-test="inventory-item-price"]');
    const sorted = await isAscending(prices);
    expect(sorted).toBeDefined();

});


function isAscending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x >= arr[i - 1];
    });
}
//todo: add fixture
//add checkout page
//complete checkout flow
//assert price sorting is working - create and array and verify it goes from low to high
//create a test teardown to clear state
//add global state
