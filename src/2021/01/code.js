import { cons, nums, sum } from '../../lib';

const inc = (input) =>
  cons(nums(input))
    .map(([a, b]) => b > a)
    .filter(Boolean).length;

export const solutionOne = (input) => inc(input);
export const solutionTwo = (input) => inc(cons(nums(input), 3).map(sum));
