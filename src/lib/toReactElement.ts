import {compile, parse, walk} from 'svelte/compiler';
import type { Ast } from 'svelte/types/compiler/interfaces';

/* Start of code from satori-html for cssToObject converter*/
const camelize = (ident: string) => ident.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
const cssToObject = (str: string) => {
	const obj: Record<string, string> = {};
	let t = 0;
	let pair = ['', ''];
	let flags: Record<string, number> = { "(": 0, ")": 0 };
	for (const c of str) {
		if (!flags['('] && c === ':') {
			t = 1;
		} else if (c === ';') {
			const [decl = '', value = ''] = pair;
			obj[camelize(decl.trim())] = value.trim();
			t = 0;
			pair = ['', ''];
		} else {
			pair[t] += c;
			switch (c) {
				case '(': {
					flags[c]++;
					break;
				}
				case ')': {
					flags['(']--;
					break;
				}
			}
		}
	}
	const [decl = '', value = ''] = pair;
	if (decl.trim() && value.trim()) {
		obj[camelize(decl.trim())] = value.trim();
	}

	return obj;
};
const nodeMap = new WeakMap();
interface VNode {
	type: string;
	props: {
		style?: Record<string, any>;
		children?: string | VNode | VNode[];
		[prop: string]: any;
	};
}
const root: VNode = {
	type: 'div',
	props: {
		style: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%'
		},
		children: []
	}
};
/* End of satori-html */

export function toReactElement(htmlString: string): VNode {
	const svelteAST: Ast = parse(htmlString);
	const dummy = compile(htmlString)
	console.log(dummy.css)
	walk(svelteAST as any, {
		enter(node: any, parent: any, prop: any, index: any) {
			let newNode: any = {};
			if (typeof node.css === "object" && node.css.children.length > 0){
				node.css.children.forEach((children: any) => {
					console.log(children)
				})
			}
			if (node.type === 'Fragment') {
				nodeMap.set(node, root);
			} else if (node.type === 'Element') {
				console.log()
				newNode.type = node.name;
				let { ...props } = node.attributes;
				if (node.attributes.length > 0) {
					node.attributes.forEach((attribute: any) => {
						if (attribute.name === 'style') {
							props['style'] = cssToObject(attribute.value[0].data) as any;
						} else props[attribute.name] = attribute.value[0].data as any;
					});
					delete props[0];
				}
				// numbered props failing on svgs
				props = Object.entries(props).reduce((newProps: any, [key, value]) => {
					if (Number.isNaN(Number(key))) {
						newProps[key] = value as any;
					}
					return newProps;
				}, {});
				props.children = [] as unknown as string;
				Object.assign(newNode, { props });
				nodeMap.set(node, newNode);
				if (parent) {
					const newParent = nodeMap.get(parent);
					newParent.props.children[index] = newNode;
				}
			} else if (node.type === 'Text') {
				newNode = node.data.trim();
				if (newNode) {
					if (parent && parent.type !== 'Attribute') {
						const newParent = nodeMap.get(parent);
						if (parent.children.length === 1) {
							newParent.props.children = newNode;
						} else {
							newParent.props.children[index] = newNode;
						}
					}
				}
			}
		}
	});

	return root;
}
