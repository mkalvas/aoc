import { cons, parseInts, sum } from '../../lib';

const inc = (input) =>
  cons(parseInts(input))
    .map(([a, b]) => b > a)
    .filter(Boolean).length;

export const solutionOne = (input) => inc(input);
export const solutionTwo = (input) => inc(cons(parseInts(input), 3).map(sum));
