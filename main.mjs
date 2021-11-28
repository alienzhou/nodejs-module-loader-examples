import './child.mjs';
import _ from 'https://cdn.skypack.dev/lodash';
import css from './b.scss';
import './repeat.mjs';

console.log();
console.log('[load remote module] lodash.last for [1, 2, 3, 4]:', _.last([1, 2, 3, 4]));
console.log();
console.log('[load scss] css for scss:', css);