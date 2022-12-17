// Two dimensional grid functions
import { sum } from './array';
import { EMPT } from './string';

// idea:
//  grid class that uses 1d array to store 2d since translating is easy
//  then a `map` function that returns an iterator generator for similar map
//  goodness but then how to return iterator of that iterator?
//  Other single point things are fairly trivial. Could implement some things
//  like the array methods or w/e too.

// n-dimensional euclidean distance fn([x1, y1, z1, ...], [x2, y2, z2, ...])
export const dist = (a, b) => Math.sqrt(distSq(a, b));
export const distSq = (a, b) => a.reduce((s, ai, i) => s + (b[i] - ai) ** 2, 0);
export const cityDist = (a, b) =>
  a.reduce((s, ai, i) => s + Math.abs(b[i] - ai), 0);

export const gridSum = (grid) => sum(grid.map((r) => sum(r)));
export const g2s = (grid, padding = 0, padChar = ' ') =>
  grid
    .map((row) => row.map((c) => String(c).padStart(padding, padChar)).join(''))
    .join('\n');

export const sg2s = (grid) => {
  let w = 0;
  for (let y = 0; y < grid.length; y++) {
    if (y in grid && grid[y].length > w) w = grid[y].length;
  }

  let out = '';
  for (let y = 0; y < grid.length; y++) {
    if (!(y in grid)) grid[y] = new Array(w);
    for (let x = 0; x < grid[y].length; x++) {
      out += x in grid[y] ? grid[y][x] : EMPT;
    }
    out.padEnd(w, EMPT);
    out += '\n';
  }

  return out;
};
