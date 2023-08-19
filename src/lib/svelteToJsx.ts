import type { SvelteComponent } from 'svelte';
import { toReactElement } from './toReactElement.js';

export function svelteComponentToJsx(component: any, props: Record<string, any> = {}) {
	const SvelteRenderedMarkup = component.render(props);
	let htmlTemplate = `${SvelteRenderedMarkup.html}`;
	if (SvelteRenderedMarkup && SvelteRenderedMarkup.css && SvelteRenderedMarkup.css.code) {
		htmlTemplate = `${SvelteRenderedMarkup.html}<style>${SvelteRenderedMarkup.css.code}</style>`;
	}
	return toReactElement(htmlTemplate);
}

export function svelteComponentToJsxBrowser(component: any, props: Record<string, any> = {}) {
	const SvelteRenderedMarkup = new component({
		props
	});
}
