import { defineConfig, devices } from '@playwright/test';

// Determine environment, default to 'dev' if not specified

const ENV = process.env['ENV'] || (process.env['CI'] ? 'prod' : 'dev');

const environments = {
    dev: 'http://localhost:4200',
    prod: 'https://eskinderg.github.io'
};

export default defineConfig({
    testDir: './e2e',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env['CI'],
    /* Retry on CI only */
    retries: process.env['CI'] ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env['CI'] ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'], // Provides a detailed line-by-line real-time list of tests
        ['html', { open: 'never' }]
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: process.env['PLAYWRIGHT_TEST_BASE_URL'] ?? 'http://localhost:4200',
        baseURL: environments[ENV as keyof typeof environments] || environments.dev,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        viewport: { width: 1920, height: 1080 }
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                // ...devices['Desktop Chrome']
                viewport: { width: 1920, height: 1080 }
            }
        }

        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] }
        // },

        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] }
        // }

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ]
});
