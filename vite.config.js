import { defineConfig } from 'vite';

export default defineConfig({
	publicDir: 'public',
	root: './',
	build: {
		outDir: 'dist', 
	},

	server: {
		// Specify the port for the development server
		port: 3000,

		// Configure proxy settings if needed
		proxy: {
			// '/api': 'http://localhost:5000',
		},
	},

	// Configure the CSS preprocessor for SCSS
	css: {
		preprocessorOptions: {
			scss: {
				// Specify the path to your main SCSS file
				// additionalData: `@import "src/scss/style.scss";`,
			},
		},
	},
});
