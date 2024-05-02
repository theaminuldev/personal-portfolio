import fs from 'fs'
import { minify } from 'html-minifier-terser'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		{
			name: 'copy-html',
			apply: 'build',
			transformIndexHtml: {
				order: 1, // 'pre' is replaced with order: 1
				handler(html) { // 'transform' is replaced with 'handler'
					const sourceDir = './';
					const destinationDir = 'dist/';

					// Check if destination directory exists, if not, create it
					if (!fs.existsSync(destinationDir)) {
						fs.mkdirSync(destinationDir);
					}

					fs.readdirSync(sourceDir).forEach(file => {
						if (path.extname(file) === '.html') {
							fs.copyFileSync(path.join(sourceDir, file), path.join(destinationDir, file));
						}
					});

					return minify(html, {
						collapseWhitespace: true,
						removeComments: true
					})
				},
			},
		},
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