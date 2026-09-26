import { test, expect } from '@playwright/test';

test.describe('Language change test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('Should change language', async ({ page }) => {
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');

        await button.click();

        await expect(menu).toHaveClass(/show-lang-drop-menu/);

        const amLangButton = page.locator('.lang-menu .lang-menu-item:nth-child(1)');

        await amLangButton.click();

        await expect(menu).not.toHaveClass(/show-lang-drop-menu/);
        await expect(page.locator('.lang-menu .lang-menu-item:nth-child(1) > .lang-text')).toHaveClass(
            /selected/
        );
    });
});
