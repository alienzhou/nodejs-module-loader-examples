import { FORMAT } from '../utils.mjs';
import { promises } from 'fs';

export async function resolve(specifier, _, __) {
    if (specifier.endsWith('.txt')) {
        return {
            format: FORMAT.Raw,
            url: specifier,
        };
    }
    return null;
}

export async function load(url, context, _) {
    if (context.format === FORMAT.Raw) {
        const content = await promises.readFile(url, 'utf-8');
        return {
            format: 'module',
            source: `export default \`${content}\``,
        };
    }
    return null;
}