import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import vitePluginSvelteKitOG from "./src/lib/vite.js";

export default defineConfig({
	plugins: [sveltekit(), vitePluginSvelteKitOG()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
