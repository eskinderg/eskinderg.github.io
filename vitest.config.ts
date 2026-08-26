import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['/src/test.ts'],
        passWithNoTests: false,
        environment: 'jsdom',
        reporters: ['default', 'html', 'junit'],
        outputFile: {
            junit: './coverage/reports/junit-report.xml',
            html: './coverage/reports/html-dashboard/index.html'
        },
        coverage: {
            provider: 'v8', // or 'istanbul'
            // reporter: ['text', 'json', 'html'],
            reporter: ['text-summary'],
            reportsDirectory: './coverage/portfolio',
            thresholds: {
                statements: 50,
                branches: 17,
                functions: 50,
                lines: 50
            }
        }
    }
});
