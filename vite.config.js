import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: true
	},
	// resolve: {
	// 	alias: {
	// 		'@': path.resolve(__dirname, './src'),
	// 	},
	// },
})
