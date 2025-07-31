/*
 * @Author: Bin
 * @Date: 2025-07-31
 * @FilePath: /vite-plugin-build-id/src/index.ts
 */
import type { Plugin } from 'vite';
// import { resolve } from 'node:path';
import { randomUUID } from 'node:crypto';

export type BuildIdOptions = {
	_?: undefined;
};

function vitePluginBuildId(options?: BuildIdOptions): Plugin {
	console.log('options', options);
	// fork: https://github.com/nuxt/nuxt/blob/3a66515903bfb6761f3535b5533f4b805adf4aa9/packages/schema/src/config/common.ts#L84
	console.log('buildId', randomUUID());
	return {
		name: 'vite-plugin-build-id',
		// configResolved(config) {
		// 	const distPath = resolve(config.root, config.build.outDir);
		// 	console.log('resolvedConfig:', config, 'distPath:', distPath);
		// },
		async closeBundle() {},
	};
}

export default vitePluginBuildId;
