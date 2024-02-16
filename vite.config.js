import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        // Specify the output directory for the built files
        outDir: 'dist',

        // Specify the base path for the project (optional)
        base: '/',

        // Configure the assets subdirectory
        assetsDir: 'assets',

        rollupOptions: {
            // If you have a specific entry point for your application
            input: {
				main: 'src/assets/js/main.js',
				plugins: 'src/assets/js/plugins.js',
            },
        },
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
