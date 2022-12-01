import { groupLines, nums, numSort, sum } from '../../lib';

export const solutionOne = (input) =>
  Math.max(...groupLines(input).map((g) => sum(nums(g))));

export const solutionTwo = (input) =>
  sum(
    groupLines(input)
      .map((g) => sum(nums(g)))
      .sort(numSort)
      .slice(-3)
  );
