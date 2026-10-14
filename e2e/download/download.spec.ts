import { test, expect } from '@playwright/test';

test.describe('Download File Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    test('should display and hide menu when clicked', async ({ page }) => {
        const downloadBtn = page.locator('.menu-btn');
        const menu = page.locator('.menu-btn > .menu');

        await downloadBtn.click();

        await expect(downloadBtn).toHaveClass(/open/);
        await expect(menu).toHaveClass(/show-drop-menu/);

        await downloadBtn.click();
        await expect(menu).not.toHaveClass(/show-drop-menu/);
    });

    test('should download pdf file', async ({ page }) => {
        const downloadBtn = page.locator('.menu-btn');
        const menu = page.locator('.menu-btn > .menu');
        const pdfMenu = page.locator('.pdf');
        const downloadPromise = page.waitForEvent('download');

        await downloadBtn.click();

        await expect(menu).toHaveClass(/show-drop-menu/);

        await pdfMenu.click();
        const download = await downloadPromise;

        const filename = download.suggestedFilename();
        expect(filename).toMatch(/Eskinder-CV.pdf/);

    });

    test('should download docx file', async ({ page }) => {
        const downloadBtn = page.locator('.menu-btn');
        const menu = page.locator('.menu-btn > .menu');
        const docxMenu = page.locator('.doc');
        const downloadPromise = page.waitForEvent('download');

        await downloadBtn.click();

        await expect(menu).toHaveClass(/show-drop-menu/);

        await docxMenu.click();
        const download = await downloadPromise;

        const filename = download.suggestedFilename();
        expect(filename).toMatch(/Eskinder-CV.docx/);

    });
});
