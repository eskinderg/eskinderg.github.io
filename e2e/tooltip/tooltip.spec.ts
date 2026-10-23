import { test, expect } from '@playwright/test';

test.describe('Tooltip tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should display and hide tooltip on mouse hover and mouse leave on menu button', async ({
        page
    }) => {
        const button = page.locator('.menu-button');
        const tooltip = page.locator('.tooltip-box');

        await button.hover();

        await expect(tooltip, 'tooltip should be visible').toBeVisible();
        await expect(tooltip, 'only on tooltip should be displayed').toHaveCount(1);
        await expect(tooltip, 'tooltip html element should be attached').toBeAttached();
        await expect(tooltip, 'tooltip text must be (Main Menu)').toHaveText(/Main Menu/);

        await page.mouse.move(0, 0);

        await expect(tooltip, 'tooltip should not be visible').not.toBeVisible();
        await expect(tooltip, 'there should be 0 tooltip count').toHaveCount(0);
        await expect(tooltip, 'tooltip html element should not be attached').not.toBeAttached();
    });
});
