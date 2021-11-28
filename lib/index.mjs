import { compose } from './utils.mjs';
import { resolve as rawResolve, load as rawLoad } from './loaders/raw.mjs';
import { resolve as remoteResolve, load as remoteLoad } from './loaders/remote.mjs';
import { resolve as scssResolve, load as scssLoad } from './loaders/scss.mjs';
import { resolve as patchResolve, load as patchLoad } from './loaders/patch.mjs';

const resolveComposed = compose(
    rawResolve,
    remoteResolve,
    scssResolve,
    patchResolve,
);

const loadComposed = compose(
    rawLoad,
    remoteLoad,
    scssLoad,
    patchLoad,
);

export const resolve = async (specifier, context, defaultResolve) =>
    await resolveComposed(specifier, context, defaultResolve)
    || await defaultResolve(specifier, context, defaultResolve);

export const load = async (url, context, defaultLoad) =>
    await loadComposed(url, context, defaultLoad)
    || await defaultLoad(url, context, defaultLoad);