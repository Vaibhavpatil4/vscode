/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { defineConfig } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import { libStylePlugin } from 'rollup-plugin-lib-style';

export default defineConfig({
	input: {
		all: './src/vs/editor/editor.all.ts',
		api: './src/vs/editor/editor.api.ts',
		main: './src/vs/editor/editor.main.ts',
	},
	output: {
		dir: 'tmp/monaco-editor-core/out',
		format: 'es',
	},
	plugins: [
		esbuild({
			include: /\.[jt]sx?$/,
		}),
		/*postcss({
			modules: true,
			plugins: [],
		}),*/
		libStylePlugin({
			scopedName: '[local]',

		})
	],
});
