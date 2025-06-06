import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import changeDetectionStrategy from "eslint-plugin-change-detection-strategy";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("plugin:storybook/recommended", "prettier"),

    plugins: {
        prettier,
        "change-detection-strategy": changeDetectionStrategy,
    },

    rules: {
        "change-detection-strategy/on-push": "error",
    },
}, {
    files: ["**/*.ts"],

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
        "prettier",
    ),

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "off",

        "@angular-eslint/component-selector": ["error", {
            prefix: "app",
            style: "kebab-case",
            type: "element",
        }],

        "@angular-eslint/directive-selector": ["error", {
            prefix: "app",
            style: "camelCase",
            type: "attribute",
        }],

        "@angular-eslint/no-output-native": "off",
    },
}, {
    files: ["**/*.html"],

    extends: compat.extends(
        "plugin:@angular-eslint/template/recommended",
        "plugin:prettier/recommended",
    ),

    rules: {
        "prettier/prettier": ["error", {
            parser: "angular",
        }],
    },
}, {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],

    rules: {
        "storybook/story-exports": "off",
    },
}]);