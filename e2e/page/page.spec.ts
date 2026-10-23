import { test, expect } from '@playwright/test';

test.describe('Page title test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('Should have a title', async ({ page }) => {
        await expect(
            page,
            'page should have a title (Eskinder Getahun - Full Stack Web Developer) '
        ).toHaveTitle(/Eskinder Getahun - Full Stack Web Developer/);
    });
});
