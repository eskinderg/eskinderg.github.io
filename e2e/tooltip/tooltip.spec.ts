import { test, expect } from '@playwright/test';

test.describe('Tooltip tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should display and hide tooltip on mouse hover and mouse leave', async ({ page }) => {
        const button = page.locator('.menu-button');
        const tooltip = page.locator('.tooltip-box');

        await button.hover();

        await expect(tooltip).toHaveCount(1);
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toBeAttached();
        await expect(tooltip).toHaveText(/Main Menu/);

        await page.mouse.move(0, 0);

        await expect(tooltip).toHaveCount(0);
        await expect(tooltip).not.toBeVisible();
        await expect(tooltip).not.toBeAttached();
    });
});
