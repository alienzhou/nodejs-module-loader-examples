# Examples for Module Loader Hooks

Node.js v17 added a new **Experimental Feature**: [Module Loaders](https://nodejs.org/docs/latest-v17.x/api/esm.html#loaders)(Hooks).

This feature enables you to customize the default module resolution and content loading. So you can `import` a raw file, remote module (via http/https) (like deno) etc.

Here's some basic examples:

- Loading a txt file and wrapping its content into an ES Module
- Patch an NPM package (like [require-in-middle](https://www.npmjs.com/package/require-in-the-middle))
- Loading an ES Module from a remote [ESM Delivery](https://www.skypack.dev/)
- Loading a sass file and compiling it to a css
- …

Something like

```js
import './a.txt';
import repeat from 'repeat-string';
import _ from 'https://cdn.skypack.dev/lodash';
import css from './b.scss';
```

---

## Requirements

- Node.js >= 17 (Current v17.1.0)
- Using ES Module

## Getting Started

This feature needs the `--experimental-loader` flag with a specific loader.

```shell
node --experimental-loader ./lib/index.mjs main.mjs
```

Output:
```text
[load txt] file content in a.txt: I'm a txt file.

[load npm module] repeat A for 5 times: been patched!!!

[load remote module] lodash.last for [1, 2, 3, 4]: 4

[load scss] css for scss: body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```
