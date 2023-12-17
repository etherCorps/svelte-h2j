import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vitePluginSvelteH2J } from '@ethercorps/svelte-h2j/vite';
import wasm from "vite-plugin-wasm";

export default defineConfig({
	plugins: [sveltekit(), vitePluginSvelteH2J(), wasm()],
});
