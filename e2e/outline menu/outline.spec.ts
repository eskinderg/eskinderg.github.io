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

    test('Should scroll page when mouse hovered and scroll over outline menu item', async ({ page }) => {
        // test.skip(browserName === 'firefox', 'Works on chrome but not on firefox');

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

        const currentScrollTop = await scrollableDiv.evaluate((el) => el.scrollTop);

        expect(currentScrollTop).toBe(initialScrollTop + 300);
    });

    test('Should change outline active section based on page mouse scroll', async ({ page }) => {
        const outlineDivMenu = page.locator('#outline');
        const outlineLists = outlineDivMenu.locator('ul > li');

        await expect(outlineDivMenu, 'outline menu should not be visible').not.toBeVisible();

        await page.mouse.wheel(0, 541);

        await expect(outlineDivMenu, 'outline menu should be visible').toBeVisible();

        const aboutBtn = outlineLists.nth(0).locator('span.flag');

        await expect(aboutBtn, 'about section should be active').toHaveClass(/active/);

        await page.mouse.wheel(0, 250);

        const technologiesBtn = outlineLists.nth(1).locator('span.flag');

        await expect(technologiesBtn, 'technologies section should be active').toHaveClass(/active/);

        await page.mouse.wheel(0, 800);

        const accompBtn = outlineLists.nth(2).locator('span.flag');

        await expect(accompBtn, 'accomplishments section should be active').toHaveClass(/active/);
    });
});
