/*
 * @Author: Bin
 * @Date: 2025-07-31
 * @FilePath: /vite-plugin-build-id/example/vite.config.ts
 */
import { defineConfig } from 'vite';
import vitePluginBuildId from 'vite-plugin-build-id';

export default defineConfig({
	plugins: [
		vitePluginBuildId({
			filePath: '_bin/builds/latest.json',
		}),
	],
});
