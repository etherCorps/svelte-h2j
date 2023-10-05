import { toReactElement } from './toReactElement.js';
import type {SvelteComponent} from "svelte";

export function svelteComponentToJsx(component: SvelteComponent, props: Record<string, any> = {}) {
	const SvelteRenderedMarkup = component.render(props);
	let htmlTemplate = `${SvelteRenderedMarkup.html}`;
	if (SvelteRenderedMarkup && SvelteRenderedMarkup.css && SvelteRenderedMarkup.css.code) {
		htmlTemplate = `${SvelteRenderedMarkup.html}<style>${SvelteRenderedMarkup.css.code}</style>`;
	}
	return toReactElement(htmlTemplate);
}
