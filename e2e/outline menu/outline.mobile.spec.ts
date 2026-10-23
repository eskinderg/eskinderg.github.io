import { test, expect } from '@playwright/test';

test.describe('Mobile Viewport Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test.use({ viewport: { width: 1280, height: 667 } });

    test('Should not display outline menu for screen width less than 1280 on page scroll', async ({
        page
    }) => {
        const scrollableDiv = page.locator('#main-wrapper');
        const outlineDiv = page.locator('#outline');

        await expect(outlineDiv, 'outline menu should not be visible').not.toBeVisible();

        await scrollableDiv.evaluate((element) => {
            element.scrollTo({
                top: 800,
                behavior: 'smooth'
            });
        });

        await expect(outlineDiv, 'outline menu should not be visible').not.toBeVisible();
    });
});

test.describe('Mobile Viewport Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test.use({ viewport: { width: 1281, height: 667 } });

    test('Should display outline menu for screen width greater than 1280 on page scroll', async ({
        page
    }) => {
        const scrollableDiv = page.locator('#main-wrapper');
        const outlineDiv = page.locator('#outline');

        await expect(outlineDiv, 'outline menu should not be visible').not.toBeVisible();

        await scrollableDiv.evaluate((element) => {
            element.scrollTo({
                top: 800,
                behavior: 'smooth'
            });
        });

        await expect(
            outlineDiv,
            'outline menu should be visible for viewport of (width:1281, height: 667)'
        ).toBeVisible();
    });
});
