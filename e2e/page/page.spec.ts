import { test, expect } from '@playwright/test';

test.describe('Page title test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.waitForLoadState('networkidle');
    });

    test('Should have a title', async ({ page }) => {
        await expect(page).toHaveTitle(/Eskinder Getahun - Full Stack Web Developer/);
    });
});
