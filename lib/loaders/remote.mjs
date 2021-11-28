import { FORMAT } from '../utils.mjs';
import got from 'got';

export async function resolve(specifier, context, _) {
    const parentURL = context.parentURL;
    if (specifier.startsWith('https://')) {
        return {
            format: FORMAT.Remote,
            url: specifier,
        };
    }
    else if (parentURL && parentURL.startsWith('https://')) {
        const url = new URL(specifier, parentURL).href;
        return {
            format: 'remote',
            url,
        };
    }
    return null;
}

export async function load(url, context, _) {
    if (context.format === FORMAT.Remote) {
        const source = await got(url);
        return {
            format: 'module',
            source: source.body,
        };
    }
    return null;
}