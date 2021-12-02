import { nums, sum, zip } from '../../lib';

const inc = (rs, x) => sum(zip(rs, rs.slice(x)).map(([a, b]) => +(a < b)));

export const solutionOne = (input) => inc(nums(input), 1);
export const solutionTwo = (input) => inc(nums(input), 3);
