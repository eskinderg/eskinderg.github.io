import { test, expect } from '@playwright/test';

test.describe('Tests for back to top button', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('Should scroll to top when back button is clicked', async ({ page }) => {
        const mainWrapper = page.locator('#main-wrapper');
        const backTopBtn = page.locator('.ba-back-top');

        await expect(backTopBtn).not.toBeVisible();

        await mainWrapper.evaluate((element) => {
            element.scrollTo({
                top: 541,
                behavior: 'smooth'
            });
        });

        await expect(backTopBtn).toBeVisible();

        await backTopBtn.click();

        await expect(backTopBtn).not.toBeVisible();
    });

});
