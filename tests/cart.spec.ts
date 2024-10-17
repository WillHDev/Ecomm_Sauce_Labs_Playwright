import { test, expect } from './fixtures/sauce-demo';

test('Add items to cart', async ({ productPage, checkoutPage, page }) => {
    await productPage.load();
    await productPage.addToCart('.inventory_item_description:has-text("Sauce Labs Bolt T-Shirt")');
    await productPage.addToCart('.inventory_item_description:has-text("Sauce Labs Bike Light")');
    await productPage.goToCheckout();
    await checkoutPage.checkout('Jeremiah', 'Smith', '55417');
    await expect(page.getByText('Thank you for your order!')).toBeVisible()
});