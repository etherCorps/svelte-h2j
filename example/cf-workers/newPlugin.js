import path from 'node:path';
import fs from 'node:fs';

function replacePathPlugin() {
	return {
		name: 'replace-path',
		resolveId(id, source, importer) {
			console.log(id, source, importer);
			// Check if the source import matches the target path
			// if (source.startsWith(options.targetPath || '')) {
			// 	// Return the replacement path if the condition is met
			// 	return path.resolve(importer, '..', options.replaceWithPath || '');
			// }
			return null; // Let Vite handle the other cases
		}
	};
}

export default replacePathPlugin;
