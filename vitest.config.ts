import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['src/test.ts'],
        passWithNoTests: false,
        environment: 'jsdom',
        coverage: {
            provider: 'v8', // or 'istanbul'
            reporter: ['text', 'text-summary', 'json-summary', 'json', 'html'],
            exclude: ['src/**/*.spec.ts', 'src/test.ts'], // Exclude tests from coverage
            reportsDirectory: './coverage/portfolio',
            thresholds: {
                perFile: false,
                statements: 85,
                branches: 75,
                functions: 70,
                lines: 85
            }
        }
    }
});
