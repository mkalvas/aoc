import fs from 'fs';
import { nums, sum } from '../../lib';

const s2n = [
  [/one/g, 'o1e'],
  [/two/g, 't2o'],
  [/three/g, 't3e'],
  [/four/g, '4'],
  [/five/g, '5e'],
  [/six/g, '6'],
  [/seven/g, '7n'],
  [/eight/g, 'e8t'],
  [/nine/g, 'n9e'],
];

const score = (line) => sum(nums(line.map((cs) => cs[0] + cs.at(-1))));

export const solutionOne = (input) =>
  score(input.map((l) => l.replace(/[^\d]/g, '').split('')));

export const solutionTwo = (input) =>
  solutionOne(
    input.map((line) => s2n.reduce((l, [s, n]) => l.replace(s, n), line))
  );
