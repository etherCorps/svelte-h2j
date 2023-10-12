import type { RequestHandler } from '@sveltejs/kit';
import { svelteComponentToJsx } from '@ethercorps/svelte-h2j';
import OG from './og-example.svelte';
import {ImageResponse} from "@cloudflare/pages-plugin-vercel-og/api";

export const GET: RequestHandler = async () => {
	return new ImageResponse(
		svelteComponentToJsx(OG, {
			text: 'Ready to dive in?',
			spanText: 'Start your free trial today.'
		})
	);
};
