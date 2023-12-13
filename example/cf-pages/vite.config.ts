import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vitePluginSvelteKitOG } from '@ethercorps/svelte-h2j/vite';
import externalAssetsPlugin from './newPlugin';
import wasm from "vite-plugin-wasm";

export default defineConfig({
	build: {
		rollupOptions: {
			external: ['./node_modules/@ethercorps/sveltekit-og/dist/yoga-ZMNYPE6Z.wasm']
		}
	},
	plugins: [wasm(), sveltekit(), vitePluginSvelteKitOG()],
});
