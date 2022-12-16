import { groupLines, nums, numSort } from '../../lib';

const sortedSums = (input) =>
  groupLines(input)
    .map((g) => nums(g).sum())
    .sort(numSort)
    .slice(-3);

export const solutionOne = (input) => sortedSums(input).at(-1);
export const solutionTwo = (input) => sortedSums(input).sum();
