import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['src/test.ts'],
        passWithNoTests: false,
        environment: 'jsdom',
        coverage: {
            provider: 'v8', // or 'istanbul'
            reporter: ['text', 'text-summary', 'json', 'html'],
            exclude: ['src/**/*.spec.ts', 'src/test.ts'], // Exclude tests from coverage
            reportsDirectory: './coverage/portfolio',
            thresholds: {
                perFile: false,
                statements: 84,
                branches: 74,
                functions: 65,
                lines: 85
            }
        }
    }
});
