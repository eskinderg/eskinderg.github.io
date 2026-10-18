import { test, expect } from '@playwright/test';

test.describe('Amharic Locale Tests', () => {
    test.use({ locale: 'am' });
    test('should display in amharic', async ({ page }) => {
        await page.goto('/');
    });
});
