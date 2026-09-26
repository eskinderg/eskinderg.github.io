import { test, expect } from '@playwright/test';

test.describe('Outline (side menu test)', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
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

    test('Should scroll the page to view when outline clicked', async ({ page }) => {
        const scrollableDiv = page.locator('#main-wrapper');
        const outlineDivMenu = page.locator('#outline');
        const educationOutlineBtn = page.locator('#outline > ul > li:nth-child(5 of li) span.flag');
        const educationSection = page.locator('#education');

        await expect(outlineDivMenu).not.toBeVisible();

        await scrollableDiv.evaluate((element) => {
            element.scrollTo({
                top: 541,
                behavior: 'smooth'
            });
        });

        await expect(outlineDivMenu).toBeVisible();

        await educationOutlineBtn.click();
        await expect(educationSection).toBeInViewport();
        await expect(educationOutlineBtn).toHaveClass(/active/);
    });
});
