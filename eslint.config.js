/*
 * @Author: Bin
 * @Date: 2025-07-15
 * @FilePath: /vite-plugin-build-id/eslint.config.js
 */
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default tseslint.config(
	includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {},
		rules: {
			'@typescript-eslint/no-explicit-any': ['warn'],
			'prettier/prettier': 'error',
		},
	},
	eslintPluginPrettierRecommended,
);
