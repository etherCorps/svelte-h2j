import { createRequire } from 'node:module';


export default function vitePluginSvelteKitOG() {
    const require = createRequire(import.meta.url);
    return {
        name: 'css-tree-resolver', // name of the plugin
        resolveId(id: string) {
            console.log(id, 'vitet');
            if (id === 'css-tree') {
                return require.resolve('./node_modules/css-tree/dist/csstree.esm.js');
            }
        }
    }
}
