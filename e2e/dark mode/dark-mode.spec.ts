import { test, expect } from '@playwright/test';

test.describe('Dark mode menu test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should display and hide menu', async ({ page }) => {
        const button = page.locator('.theme-toggle-main-btn');
        const menu = page.locator('.theme-toggle-group');

        await button.click();

        await expect(menu, 'menu should have class open').toHaveClass(/open/);
        await expect(menu, 'menu should have css pointer-events: auto').toHaveCSS('pointer-events', 'auto');

        await button.click();
        await expect(menu, 'menu should not have class open').not.toHaveClass(/open/);
        await expect(menu, 'menu should have css pointer-events: none').toHaveCSS('pointer-events', 'none');
    });

    test('should display menu and should change dark mode to dark', async ({ page }) => {
        const button = page.locator('.theme-toggle-main-btn');
        const menu = page.locator('.theme-toggle-group');
        const menuList = menu.locator('.theme-toggle-btn');
        const htmlDoc = page.locator('html');

        await button.click();

        await expect(menu, 'menu should have class open').toHaveClass(/open/);
        await expect(menu, 'menu should have css pointer-events: auto').toHaveCSS('pointer-events', 'auto');

        const darkThemeBtn = menuList.nth(2);

        await darkThemeBtn.click();
        await expect(menu, 'menu should not have class open').not.toHaveClass(/open/);
        await expect(menu, 'menu should have css pointer-events: none').toHaveCSS('pointer-events', 'none');

        await expect(htmlDoc, 'HTML document should have class dark').toHaveClass(/dark/);
    });

    test('should display menu and should change dark mode to light', async ({ page }) => {
        const button = page.locator('.theme-toggle-main-btn');
        const menu = page.locator('.theme-toggle-group');
        const menuList = menu.locator('.theme-toggle-btn');
        const htmlDoc = page.locator('html');

        await button.click();

        await expect(menu, 'menu should have class open').toHaveClass(/open/);
        await expect(menu, 'menu should have css pointer-events: auto').toHaveCSS('pointer-events', 'auto');

        const lightThemeBtn = menuList.nth(1);

        await lightThemeBtn.click();
        await expect(menu, 'menu should not have class open').not.toHaveClass(/open/);
        await expect(menu, 'menu should have css pointer-events: none').toHaveCSS('pointer-events', 'none');

        await expect(htmlDoc, 'HTML document should not have class dark').not.toHaveClass(/dark/);
    });
});
