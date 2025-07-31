/*
 * @Author: Bin
 * @Date: 2025-07-31
 * @FilePath: /vite-plugin-build-id/tsdown.config.ts
 */
import { defineConfig, type Options } from 'tsdown';

const defaultConfig: Options = {
	sourcemap: true,
	clean: true,
	dts: true,
	target: 'esnext',
	format: ['cjs', 'esm'],
};

export default defineConfig([
	{
		entry: {
			index: 'src/index.ts',
		},
		outDir: 'dist',
		...defaultConfig,
	},
]);
