// import { expect, test } from '@playwright/test';

// test('has title', async ({ page }) => {
//     await page.goto('http://localhost:4200');

//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Sample/);
// });

import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
    // Runs before each individual test block
    test.beforeEach(async ({ page }) => {
        // Navigates to the base URL configured in your playwright.config.ts
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('has title', async ({ page, baseURL }) => {
        console.log('====================================================')
        console.log(baseURL)
        // await page.goto('/');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Eskinder Getahun - Full Stack Web Developer/);
    });

    // test('should display the main welcome header', async ({ page }) => {
    //     // Define a locator for the main heading element
    //     const heading = page.locator('app-root h1');

    //     // Playwright automatically waits for elements to appear before asserting
    //     await expect(heading).toBeVisible();
    //     await expect(heading).toHaveText('Welcome to My Angular App!');
    // });

    test('should display and hide menu', async ({ page }) => {
        // Locate a button or link using semantic roles
        // 1. Locate the element
        const button = page.locator('.menu-button');
        const menu = page.locator('.menu-fullscreen');

        // 2. Perform the click action
        await button.click();

        // 3. Assert that the element now has the expected class
        // Note: toHaveClass expects the exact string or a Regular Expression
        await expect(menu).toHaveClass(/open/);
        // await expect(menu).toBeVisible();
        await expect(menu).toHaveCSS('opacity', '1');
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        await button.click();
        await expect(menu).not.toHaveClass(/open/);
        await expect(menu).not.toHaveCSS('opacity', '1');
        await expect(menu).not.toHaveCSS('pointer-events', 'auto');
    });

    test('should display menu and click menu', async ({ page }) => {
        const button = page.locator('.menu-button');
        const menu = page.locator('.menu-fullscreen');

        await button.click();

        // await expect(menu).toBeVisible();
        await expect(menu).toHaveClass(/open/);
        await expect(menu).toHaveCSS('opacity', '1');
        await expect(menu).toHaveCSS('pointer-events', 'auto');

        const thirdMenu = page.locator('nav .link:nth-child(1 of .link) .text-container');
        // const scrollContainer = page.locator('#main-wrapper');
        //

        // Get initial scroll top position
        // const initialScrollTop = await scrollContainer.evaluate((el) => el.scrollTop);

        await thirdMenu.click();
        await expect(menu).not.toHaveClass(/open/);
        await expect(menu).toHaveCSS('opacity', '0');
        await expect(menu).toHaveCSS('pointer-events', 'none');

        // Click the button that triggers the scroll

        // Wait for the scroll position to change and assert it is greater than the initial value
        // const container = page.locator('#main-wrapper');
        // const target = page.locator('#accomplishments');

        // Wait and assert that the target element is within the visible viewport of the container
        // expect(async () => {
        //     const containerBox = await container.boundingBox();
        //     const targetBox = await target.boundingBox();

        //     // Ensure both elements exist
        //     expect(containerBox).not.toBeNull();
        //     expect(targetBox).not.toBeNull();

        //     // Check if the target's top position is inside the container's vertical bounds
        //     const isWithinTop = targetBox.y >= containerBox.y;
        //     const isWithinBottom = targetBox.y + targetBox.height <= containerBox.y + containerBox.height;

        //     expect(isWithinTop && isWithinBottom).toBeTruthy();
        // });
    });
});
