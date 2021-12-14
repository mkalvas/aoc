// Two dimensional grid functions
import { sum } from './array';

export const gridSum = (grid) => sum(grid.map((r) => sum(r)));

export const g2s = (grid, padding = 0, padChar = ' ') =>
  grid
    .map((row) => row.map((c) => String(c).padStart(padding, padChar)).join(''))
    .join('\n');

// idea:
//  grid class that uses 1d array to store 2d since translating is easy
//  then a `map` function that returns an iterator generator for similar map
//  goodness but then how to return iterator of that iterator?
//  Other single point things are fairly trivial. Could implement some things
//  like the array methods or w/e too.
