import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['/src/test.ts'],
        passWithNoTests: false,
        environment: 'jsdom',
        coverage: {
            provider: 'v8', // or 'istanbul'
            reporter: ['text','text-summary', 'json', 'html'],
            reportsDirectory: './coverage/portfolio',
            thresholds: {
                statements: 63,
                branches: 63,
                functions: 63,
                lines: 63
            }
        }
    }
});
