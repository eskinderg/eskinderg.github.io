// import { expect, test } from '@playwright/test';

// test('has title', async ({ page }) => {
//     await page.goto('http://localhost:4200');

//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Sample/);
// });

import { test, expect } from '@playwright/test';

test.describe('Page tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Eskinder Getahun - Full Stack Web Developer/);
    });
});
