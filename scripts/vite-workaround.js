'use strict';

/**
 * Scrip to fix issue with Svelte Kit source map for error like this:
 * ENOENT: no such file or directory, open '.../smui-example-sveltekit/node_modules/@material/ripple/index.ts'
 *
 * This file was copied from: https://github.com/hperrin/smui-example-sveltekit/blob/master/_helper/vite-workaround.js
 *
 * Tracking issues: https://github.com/true-myth/true-myth/issues/130
 */

import path from 'path';
import fs from 'fs';

const DEBUG = false;

function log(...params) {
	if (DEBUG) console.log(...params);
}

/**
 *
 * @param {string} startPath
 * @param {string} filter
 * @returns
 */
function removeFiles(startPath, filter) {
	if (!fs.existsSync(startPath)) return log('no dir ', startPath);

	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) removeFiles(filename, filter);
		else if (filename.indexOf(filter) >= 0) {
			log('-- removing file: ', filename);
			fs.unlinkSync(filename);
		}
	}
}

/**
 *
 * @param {string} startPath
 * @returns
 */
function removeSourceMaps(startPath) {
	if (!fs.existsSync(startPath)) return log('no dir ', startPath);

	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) removeSourceMaps(filename);
		else if (filename.endsWith('.js')) {
			const fileContent = fs.readFileSync(filename).toString();
			const result = fileContent.replace(/^\/\/# sourceMappingURL=.+$/gm, '');
			if (result !== fileContent) {
				log('-- removing SourceMap link: ', filename);
				fs.writeFileSync(filename, result);
			}
		}
	}
}

console.log('Trigger /scripts/vite-workaround.js');
removeFiles('node_modules/@material', '.js.map');
removeSourceMaps('node_modules/@material');
