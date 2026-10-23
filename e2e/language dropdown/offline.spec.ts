import { test, expect } from '@playwright/test';

test.describe('Offline tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    // test.use({ offline: true });
    test('should display dialog when offline', async ({ page, context }) => {
        await context.setOffline(true);
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');
        const menuItems = page.locator('.lang-menu-item');

        await button.click();

        await expect(menu).toHaveClass(/show-lang-drop-menu/);

        const amLangButton = menuItems.first();

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            // expect(dialog.message()).toBe('Are you sure you want to delete this?');
            await dialog.accept();
        });
        // page.on('dialog', (dialog) => console.log(dialog.message(), '--------------'));
        await amLangButton.click();

        // await expect(menu).not.toHaveClass(/show-lang-drop-menu/);

        // await expect(amLangButton.locator('.lang-text')).toHaveClass(/selected/);
    });
});
