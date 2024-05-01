// vite.config.js
import { defineConfig } from 'vite'
import { copy } from 'vite-plugin-copy'
import { minify } from 'html-minifier-terser'

export default defineConfig({
	plugins: [
		copy({
			targets: [
				{
					src: './*.html', dest: 'dist', transform: (contents) => minify(
						contents.toString(), {
						collapseWhitespace: true,
						removeComments: true
					})
				}
			],
			hook: 'writeBundle' // run the plugin at this stage
		})
	],
	build: {
		outDir: 'dist',
		minify: 'terser', // or 'esbuild'
		assetsDir: 'assets',
		cssCodeSplit: false, // This will bundle all CSS into a single file
		rollupOptions: {
			output: {
				manualChunks: () => 'bundle.js',
			},
		},
	},
})