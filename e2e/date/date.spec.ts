import { test, expect } from '@playwright/test';

test.describe('Date tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('Should render past dates in am correctly', async ({ page }) => {
        await page.clock.setFixedTime(new Date('2025-10-02'));
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');
        const menuItems = page.locator('.lang-menu-item');
        const yearDiv = page.locator('span.year');

        await button.click();

        await expect(menu).toHaveClass(/show-lang-drop-menu/);

        const amLangButton = menuItems.first();

        await amLangButton.click();

        await expect(menu).not.toHaveClass(/show-lang-drop-menu/);

        await expect(amLangButton.locator('.lang-text')).toHaveClass(/selected/);

        await expect(yearDiv).toHaveText('© ፳፻፲፰');
    });

    test('Should render future dates in am correctly', async ({ page }) => {
        await page.clock.setFixedTime(new Date('2027-11-02'));
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');
        const menuItems = page.locator('.lang-menu-item');
        const yearDiv = page.locator('span.year');

        await button.click();

        await expect(menu).toHaveClass(/show-lang-drop-menu/);

        const amLangButton = menuItems.first();

        await amLangButton.click();

        await expect(menu).not.toHaveClass(/show-lang-drop-menu/);

        await expect(amLangButton.locator('.lang-text')).toHaveClass(/selected/);

        await expect(yearDiv).toHaveText('© ፳፻፳');
    });
});
