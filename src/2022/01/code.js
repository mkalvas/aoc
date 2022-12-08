import { groupLines, nums, numSort, sum } from '../../lib';

const sortedSums = (input) =>
  groupLines(input)
    .map((g) => sum(nums(g)))
    .sort(numSort)
    .slice(-3);

export const solutionOne = (input) => sortedSums(input).at(-1);
export const solutionTwo = (input) => sum(sortedSums(input));
