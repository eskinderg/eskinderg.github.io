import { test, expect } from '@playwright/test';

test.describe('Main menu test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should display and hide menu', async ({ page }) => {
        const button = page.locator('.menu-button');
        const menu = page.locator('.menu-fullscreen');

        // 2. Perform the click action
        await button.click();

        // 3. Assert that the element now has the expected class
        // Note: toHaveClass expects the exact string or a Regular Expression
        await expect(menu).toHaveClass(/open/);
        // await expect(menu).toBeVisible();
        await expect(menu).toHaveCSS('opacity', '1');
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        await button.click();
        await expect(menu).not.toHaveClass(/open/);
        await expect(menu).not.toHaveCSS('opacity', '1');
        await expect(menu).not.toHaveCSS('pointer-events', 'auto');
    });

    test('should display menu and click menu', async ({ page }) => {
        const button = page.locator('.menu-button');
        const menu = page.locator('.menu-fullscreen');

        await button.click();

        // await expect(menu).toBeVisible();
        await expect(menu).toHaveClass(/open/);
        await expect(menu).toHaveCSS('opacity', '1');
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        const thirdMenu = page.locator('nav .link:nth-child(1 of .link) .text-container');

        await thirdMenu.click();
        await expect(menu).not.toHaveClass(/open/);
        await expect(menu).toHaveCSS('opacity', '0');
        await expect(menu).toHaveCSS('pointer-events', 'none');
    });
});
