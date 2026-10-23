import { test, expect } from '@playwright/test';

test.describe('Amharic locale Tests', () => {
    test.use({ locale: 'am' });

    test('should display in amharic', async ({ page }) => {
        await page.goto('/');

        const text = page.locator('h1.intro-title');
        await expect(text).toHaveText('እስክንድር ጌታሁን');
    });
});
