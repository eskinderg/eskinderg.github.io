import { test, expect } from '@playwright/test';

test.describe('Language change test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('Should change language to am', async ({ page }) => {
        const button = page.locator('.lang-select');
        const menu = page.locator('.lang-menu');
        const menuItems = page.locator('.lang-menu-item');
        const text = page.locator('h1.intro-title');

        await expect(text, 'Text should be Eskinder Getahun').toHaveText('Eskinder Getahun');

        await button.click();

        await expect(menu, 'Should show language dropdown menu').toHaveClass(/show-lang-drop-menu/);

        const amLangButton = menuItems.first();

        await amLangButton.click();

        await expect
            .poll(
                async () => {
                    return await page.localStorage.getItem('language');
                },
                {
                    message: 'LocalStorage item (language) should be set to am',
                    timeout: 5000 // Optional: defaults to 5 seconds
                }
            )
            .toBe('am');

        await expect(text, 'Should have the text እስክንድር ጌታሁን').toHaveText('እስክንድር ጌታሁን');

        await expect(menu, 'should not display language dropdown menu').not.toHaveClass(
            /show-lang-drop-menu/
        );

        await expect(
            amLangButton.locator('.lang-text'),
            'am lang button should have a checkmark'
        ).toHaveClass(/selected/);
    });
});
