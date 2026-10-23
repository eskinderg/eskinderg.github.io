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
        await expect(menu, 'should display main menu').toHaveClass(/open/);
        await expect(button, 'button should have class open').toHaveClass(/open/);
        // await expect(menu).toBeVisible();
        await expect(menu, 'menu should have opacity of 1').toHaveCSS('opacity', '1');
        await expect(menu, 'menu mouse events should be enabled (pointer-events: auto)').toHaveCSS(
            'pointer-events',
            'auto'
        );

        await button.click();
        await expect(menu, 'menu should be visible').not.toHaveClass(/open/);
        await expect(menu, 'menu should not have css (opacity: 1)').not.toHaveCSS('opacity', '1');
        await expect(menu, 'menu mouse events should be disabled (pointer-event: auto)').not.toHaveCSS(
            'pointer-events',
            'auto'
        );
    });

    test('should be able to select menu', async ({ page }) => {
        const button = page.locator('.menu-button');
        const menu = page.locator('.menu-fullscreen');
        const menus = page.locator('nav .link');

        await button.click();

        // await expect(menu).toBeVisible();
        await expect(menu, 'menu should be visible').toHaveClass(/open/);
        await expect(button, 'menu-button should have class open').toHaveClass(/open/);
        await expect(menu, 'menu should have css (opacity: 1)').toHaveCSS('opacity', '1');
        await expect(menu, 'menu mouse events should be enabled (pointer-events: auto)').toHaveCSS(
            'pointer-events',
            'auto'
        );

        // const thirdMenu = page.locator('nav .link:nth-child(1 of .link) .text-container');
        const thirdMenu = menus.nth(3).locator('.text-container');

        await thirdMenu.click();
        await expect(menu, 'menu should not be visible').not.toHaveClass(/open/);
        await expect(menu, 'menu opacity should be 0').toHaveCSS('opacity', '0');
        await expect(menu, 'menu mouse events should be disabled (pointer-events: none)').toHaveCSS(
            'pointer-events',
            'none'
        );
    });
});
