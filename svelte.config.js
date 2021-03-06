import path from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		ssr: false,

		files: {
			assets: './static',
		},

		prerender: {
			enabled: true,
		},

		// TODO: setup 404 page
		adapter: adapter({
			pages: 'docs',
			// fallback: '404.html',
		}),

		vite: {
			resolve: {
				alias: {
					'@components': path.resolve('./src/components'),
					'@resources': path.resolve('./src/resources'),
					'@hooks': path.resolve('./src/hooks'),
					'@utils': path.resolve('./src/utils'),
				},
			},
		},
	},
};

export default config;
