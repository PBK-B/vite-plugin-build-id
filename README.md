<!--
 * @Author: Bin
 * @Date: 2025-07-31
 * @FilePath: /vite-plugin-build-id/README.md
-->

# @tzmax/vite-plugin-build-id

[![npm](https://img.shields.io/npm/dt/@tzmax/vite-plugin-build-id.svg)](https://www.npmjs.com/package/@tzmax/vite-plugin-build-id) [![npm](https://img.shields.io/npm/v/@tzmax/vite-plugin-build-id.svg)](https://www.npmjs.com/package/@tzmax/vite-plugin-build-id) [![npm](https://img.shields.io/npm/l/@tzmax/vite-plugin-build-id.svg)](https://www.npmjs.com/package/@tzmax/vite-plugin-build-id)

**@tzmax/vite-plugin-build-id** is a vite plugin for project generation build id.

## Usage

> Vite v3.1 or above is required.

Install dev dependency :

```shell
yarn add @tzmax/vite-plugin-build-id -D
# or
npm install @tzmax/vite-plugin-build-id -D
```

Add plugin to your `vite.config.ts` :

```typescript
// vite.config.ts
import vitePluginBuildId from '@tzmax/vite-plugin-build-id';

export default {
	plugins: [vitePluginBuildId({})],
};
```

## Credits

This plugin was inspired by [sumy7/vite-plugin-generate-file](https://github.com/sumy7/vite-plugin-generate-file)、[Alicevia/vite-plugin-generate-config-into-dist](https://github.com/fed/webpack-version-file) and [antfu/vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)

## License

MIT
