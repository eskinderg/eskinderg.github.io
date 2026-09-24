import { test, expect } from '@playwright/test';

test.describe('Color menu test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
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

    test('should display menu and should change theme to red', async ({ page }) => {
        const button = page.locator('.main-button');
        const menu = page.locator('.btn-wrapper');
        const htmlDoc = page.locator('html');

        await button.click();

        await expect(menu).toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        const redThemeBtn = page.locator('.btn-wrapper .mini-color-btn:nth-child(1)');

        await redThemeBtn.click();
        await expect(menu).not.toHaveClass(/click/);
        await expect(menu).toHaveCSS('pointer-events', 'none');

        await expect(htmlDoc).toHaveClass(/red/);

    });
});
