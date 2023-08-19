import { svelteComponentToJsx } from '$lib/svelteToJsx.js';
import Test from './Test.svelte';

export const load = () => {
	return {
		c: svelteComponentToJsx(Test)
	};
};
