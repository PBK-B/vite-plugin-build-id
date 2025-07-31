/*
 * @Author: Bin
 * @Date: 2025-07-31
 * @FilePath: /vite-plugin-build-id/src/index.ts
 */
import type { Plugin, ResolvedConfig } from 'vite';
import { randomUUID } from 'node:crypto';

export type BuildIdOptions = {
	filePath?: string;
};

function vitePluginBuildId(options?: BuildIdOptions): Plugin {
	let globalConfig: ResolvedConfig;
	const outFilePath = options?.filePath ?? '_builds/latest.json';
	const buildId = randomUUID(); // fork: https://github.com/nuxt/nuxt/blob/3a66515903bfb6761f3535b5533f4b805adf4aa9/packages/schema/src/config/common.ts#L84
	let timestamp: number;

	// console.log('buildId', buildId);

	return {
		name: 'vite-plugin-build-id',
		configResolved(config) {
			globalConfig = config;
		},
		buildEnd(error) {
			if (error !== undefined || globalConfig.command === 'serve') {
				// 编译失败或处于 serve 模式，不输出版本
				return;
			}
			timestamp = new Date().getTime();
			this.emitFile({
				type: 'asset',
				fileName: outFilePath,
				source: JSON.stringify({
					id: buildId,
					timestamp,
				}),
			});
			// console.log('\nRollup buildEnd', error, outFileRef);
		},
		async closeBundle() {
			// console.log('closeBundle');
		},
	};
}

export default vitePluginBuildId;
