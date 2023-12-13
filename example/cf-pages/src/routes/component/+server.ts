import type { RequestHandler } from '@sveltejs/kit';
import { svelteComponentToJsx } from '@ethercorps/svelte-h2j';
import OG from './og-example.svelte';
import {ImageResponse} from "@ethercorps/sveltekit-og";

export const GET: RequestHandler = async () => {
	return new ImageResponse(OG, {}, {
			text: 'Ready to dive in?',
			spanText: 'Start your free trial today.'
		}
	);
};
