import { FORMAT } from '../utils.mjs';

export async function resolve(specifier, _, defaultResolve) {
    if (specifier === 'repeat-string') {
        return {
            format: FORMAT.Patch,
            url: defaultResolve(specifier, _, defaultResolve).url,
        };
    }
    return null;
}

export async function load(_, context, __) {
    if (context.format === FORMAT.Patch) {
        return {
            format: 'module',
            source: 'export default (a, t) => \'been patched!!!\';',
        };
    }
    return null;
}