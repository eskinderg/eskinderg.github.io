import { test, expect } from '@playwright/test';

test.describe('Language change test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('Should change language', async ({ page }) => {
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');
        const menuItems = page.locator('.lang-menu-item');

        await button.click();

        await expect(menu).toHaveClass(/show-lang-drop-menu/);

        const amLangButton = menuItems.first();

        await amLangButton.click();

        await expect(menu).not.toHaveClass(/show-lang-drop-menu/);

        await expect(amLangButton.locator('.lang-text')).toHaveClass(/selected/);
    });
});
