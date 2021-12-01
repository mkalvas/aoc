import { parseInts, sum } from '../../lib';

const increases = (nums) => {
  let increases = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) increases++;
  }
  return increases;
};

const threeWindowIncreases = (nums) => {
  let increases = 0;
  for (let i = 3; i < nums.length; i++) {
    const prev = sum([nums[i - 1], nums[i - 2], nums[i - 3]]);
    const curr = sum([nums[i], nums[i - 1], nums[i - 2]]);
    if (curr > prev) increases++;
  }
  return increases;
};

export const solutionOne = (input) => increases(parseInts(input));
export const solutionTwo = (input) => threeWindowIncreases(parseInts(input));
