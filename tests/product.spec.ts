import { test, expect } from '@playwright/test';
import { login } from './helpers/login';

test('Add Sauce Labs Backpack to cart', async ({ page }) => {

    await login(page);

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('[data-test="inventory-item-name"]'))
        .toHaveText('Sauce Labs Backpack');

});