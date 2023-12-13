import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vitePluginSvelteKitOG } from '@ethercorps/svelte-h2j/vite';
import externalAssetsPlugin from './newPlugin';

export default defineConfig({
	plugins: [externalAssetsPlugin(), sveltekit(), vitePluginSvelteKitOG()],
});
