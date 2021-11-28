import sass from 'sass';
import { promises } from 'fs';
import { FORMAT } from '../utils.mjs';

export async function resolve(specifier, _, __) {
    if (specifier.endsWith('.scss')) {
        return {
            format: FORMAT.SASS,
            url: specifier,
        };
    }
    return null;
}

export async function load(url, context, _) {
    if (context.format === FORMAT.SASS) {
        const data = await promises.readFile(url, 'utf-8');
        return new Promise((resolve, reject) => {
            sass.render({ data }, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    format: 'module',
                    source: `export default \`${result.css.toString('utf-8')}\``,
                });
            });
        });
    }
    return null;
}