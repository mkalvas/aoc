import { lower, ord, groupEvery } from '../../lib';

const LOWER = 'a'.charCodeAt() - 1;
const UPPER = 'A'.charCodeAt() - 27;
const priority = (c) => (c === lower(c) ? ord(c) - LOWER : ord(c) - UPPER);
const chars = ([first, ...sets]) =>
  first.find((c) => sets.every((s) => s.includes(c)));

export const solutionOne = (input) =>
  input
    .map((l) => [l.slice(0, l.length / 2), l.slice(l.length / 2)])
    .map(([a, b]) => priority(chars([a.split(''), b.split('')])))
    .sum();

export const solutionTwo = (input) =>
  groupEvery(input, 3)
    .map((group) => priority(chars(group.map((g) => g.split('')))))
    .sum();
