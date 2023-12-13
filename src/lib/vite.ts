import { createRequire } from 'node:module';

export function vitePluginSvelteH2J() {
    const require = createRequire(import.meta.url);
    return {
        name: 'css-tree-resolver', // name of the plugin
        resolveId(id: string) {
            if (id === 'css-tree') {
                return require.resolve('./node_modules/css-tree/dist/csstree.esm.js');
            }
        }
    }
}
