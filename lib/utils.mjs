export const FORMAT = {
    Raw: 'raw',
    Patch: 'patch',
    Remote: 'remote',
    SASS: 'scss',
};

export const compose = (...tasks) => (...args) => tasks
    .reduce((p, t) => p.then(r => r || t(...args)), Promise.resolve());
