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

        await expect(menu, 'menu should have class show-lang-drop-menu').toHaveClass(/show-lang-drop-menu/);

        const amLangButton = menuItems.first();

        await amLangButton.click();

        await expect(menu, 'menu should not have class show-lang-drop-menu').not.toHaveClass(
            /show-lang-drop-menu/
        );

        await expect(
            amLangButton.locator('.lang-text'),
            'am language button should have a checkmark'
        ).toHaveClass(/selected/);

        await expect(yearDiv, 'year div should be in past date').toHaveText('© ፳፻፲፰');
    });

    test('Should render future dates in am correctly', async ({ page }) => {
        await page.clock.setFixedTime(new Date('2027-11-02'));
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');
        const menuItems = page.locator('.lang-menu-item');
        const yearDiv = page.locator('span.year');

        await button.click();

        await expect(menu, 'menu should have the class show-lang-drop-menu').toHaveClass(
            /show-lang-drop-menu/
        );

        const amLangButton = menuItems.first();

        await amLangButton.click();

        await expect(menu, 'menu should not have class show-lang-drop-menu').not.toHaveClass(
            /show-lang-drop-menu/
        );

        await expect(
            amLangButton.locator('.lang-text'),
            'am language button should have a checkmark'
        ).toHaveClass(/selected/);

        await expect(yearDiv, 'text in year div should in future date').toHaveText('© ፳፻፳');
    });
});
