import { test, expect } from '@playwright/test';

test.describe('Color menu test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should display and hide menu', async ({ page }) => {
        const button = page.locator('.main-button');
        const menu = page.locator('.btn-wrapper');

        await button.click();

        await expect(menu).toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        await button.click();

        await expect(menu).not.toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'none');
    });

    test('should change theme to red', async ({ page }) => {
        const button = page.locator('.main-button');
        const menu = page.locator('.btn-wrapper');
        const htmlDoc = page.locator('html');
        const themeBtns = page.locator(' .btn-wrapper > .mini-color-btn');

        await button.click();

        await expect(menu).toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        await themeBtns.first().click(); // red theme button

        await expect(menu).not.toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'none');
        await expect(htmlDoc).toHaveClass(/red/);
    });

    test('should preview red theme', async ({ page }) => {
        const button = page.locator('.main-button');
        const menu = page.locator('.btn-wrapper');
        const htmlDoc = page.locator('html');
        const themeBtns = page.locator(' .btn-wrapper > .mini-color-btn');

        await button.click();

        await expect(menu).toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        await themeBtns.first().hover(); // red theme button

        await expect(htmlDoc).toHaveClass(/red/);
    });

    test('should have 12 colors buttons count', async ({ page }) => {
        const button = page.locator('.main-button');
        const menu = page.locator('.btn-wrapper');
        const themeBtns = page.locator(' .btn-wrapper > .mini-color-btn');

        await button.click();

        await expect(menu).toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'auto');
        await expect(themeBtns).toHaveCount(12);
    });
});
