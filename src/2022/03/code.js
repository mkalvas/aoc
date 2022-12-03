import { lower, ord, sum, groupEvery } from '../../lib';

const LOWER = 'a'.charCodeAt() - 1;
const UPPER = 'A'.charCodeAt() - 27;
const priority = (c) => (c === lower(c) ? ord(c) - LOWER : ord(c) - UPPER);
const chars = ([first, ...sets]) =>
  first.find((c) => sets.every((s) => s.includes(c)));

export const solutionOne = (input) =>
  sum(
    input
      .map((l) => [l.slice(0, l.length / 2), l.slice(l.length / 2)])
      .map(([a, b]) => priority(chars([a.split(''), b.split('')])))
  );

export const solutionTwo = (input) =>
  sum(
    groupEvery(input, 3).map((group) =>
      priority(chars(group.map((g) => g.split(''))))
    )
  );
