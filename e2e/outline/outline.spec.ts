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
        const outlineLists = page.locator('#outline > ul > li');

        // const educationOutlineBtn = page.locator('#outline > ul > li:nth-child(5 of li) span.flag');
        const educationOutlineBtn = outlineLists.nth(4).locator('span.flag');
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

    test('Should scroll page when mouse hovered and scroll over outline menu item', async ({ page, browserName }) => {
        test.skip(browserName === 'firefox', 'Works on chrome but not on firefox');

        const scrollableDiv = page.locator('#main-wrapper');
        const outlineDivMenu = page.locator('#outline');
        const outlineLists = page.locator('#outline > ul > li');
        const educationOutlineBtn = outlineLists.nth(4).locator('span.flag');

        await expect(outlineDivMenu).not.toBeVisible();

        await scrollableDiv.evaluate((element) => {
            element.scrollTo({
                top: 541,
                behavior: 'smooth'
            });
        });

        await expect(outlineDivMenu).toBeVisible();

        const initialScrollTop = await scrollableDiv.evaluate((el) => el.scrollTop);

        await educationOutlineBtn.hover();
        await page.mouse.wheel(0, 300);

        await expect(async () => {
            const currentScrollTop = await scrollableDiv.evaluate((el) => el.scrollTop);
            expect(currentScrollTop).toBeGreaterThan(initialScrollTop);
        }).toPass({
            timeout: 3000 // Give it a moment if the scroll has smooth animations
        });
    });
});
