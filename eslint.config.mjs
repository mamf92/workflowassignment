// eslint.config.mjs
// Hint for editor IntelliSense
/** @type {import('eslint').Linter.Config[]} */

import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Base recommended JS rules
  js.configs.recommended,

  // Project rules
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Test globals
        describe: true,
        test: true,
        it: true,
        expect: true,
        // Node.js globals (for config files, env vars, etc.)
        require: true,
        module: true,
        process: true,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    ignores: ['dist/**', 'node_modules/**'],
  },
]);
