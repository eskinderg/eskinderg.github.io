import { test, expect } from '@playwright/test';

test.describe('Outline (side menu test)', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.waitForLoadState('networkidle');
    });

    test('Should display and hide outline menu based on page scroll', async ({ page }) => {
        const scrollableDiv = page.locator('#main-wrapper');
        const outlineDiv = page.locator('#outline');

        await expect(outlineDiv).not.toBeVisible();

        await scrollableDiv.evaluate((element) => {
            element.scrollTo({
                top: 540,
                behavior: 'smooth'
            });
        });

        await expect(outlineDiv).not.toBeVisible();

        await scrollableDiv.evaluate((element) => {
            element.scrollTo({
                top: 541,
                behavior: 'smooth'
            });
        });

        await expect(outlineDiv).toBeVisible();

    });
});
