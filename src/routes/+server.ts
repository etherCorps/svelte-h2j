import OG from './OG.svelte';
import type {RequestHandler} from "@sveltejs/kit";
import {svelteComponentToJsx} from "$lib";
import {ImageResponse} from "@vercel/og";

const WIDTH = 1200;
const HEIGHT = 1200;

export const GET: RequestHandler = async ({ url }) => {
	const text = url.searchParams.get('text') ?? undefined;
	const spanText = url.searchParams.get('spanText') ?? undefined;

	const width = Number(url.searchParams.get('w') ?? 1200);
	const height = Number(url.searchParams.get('h') ?? 1200);
	console.log(url.searchParams.get('h'), width);
	return new ImageResponse(svelteComponentToJsx(
		OG,
		{ text, spanText }),
		{
			height,
			width
		}
	);
};
