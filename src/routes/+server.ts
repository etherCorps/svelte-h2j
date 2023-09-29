import OG from './OG.svelte';
import type {RequestHandler} from "@sveltejs/kit";
import {toReactElement} from "$lib";
import {json} from "@sveltejs/kit";

const WIDTH = 1200;
const HEIGHT = 1200;

// const importObject = {
// 	imports: {
// 		imported_func: (arg: number) => {
// 			console.log(`Hello from JavaScript: ${arg}`)
// 		}
// 	},
// };

export const GET: RequestHandler = async ({ url }) => {
	const text = url.searchParams.get('text') ?? undefined;
	const spanText = url.searchParams.get('spanText') ?? undefined;
	return json({})

	// const width = Number(url.searchParams.get('w') ?? 1200);
	// const height = Number(url.searchParams.get('h') ?? 1200);
	// console.log(url.searchParams.get('h'), width);
	// return await componentToImageResponse(
	// 	OG,
	// 	{ text, spanText },
	// 	{
	// 		height,
	// 		width
	// 	}
	// );
};
