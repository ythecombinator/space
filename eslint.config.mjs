import js from '@eslint/js';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['.next/**', '.velite/**', 'node_modules/**', 'src/graphql/schema.ts']),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextCoreWebVitals,
  {
    name: 'jsx-a11y/recommended',
    languageOptions: jsxA11y.flatConfigs.recommended.languageOptions,
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  tailwindcss.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
    settings: {
      tailwindcss: {
        cssConfigPath: 'src/css/tailwind.css',
      },
    },
  },
]);
