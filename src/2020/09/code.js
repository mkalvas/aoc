import { findPair } from '../01';
import { numericSort, nums, sum } from '../../lib';

const findInvalidNumber = (numbers, bufferSize) => {
  for (let i = bufferSize; i < numbers.length; i++) {
    const pair = findPair(numbers.slice(i - bufferSize, i), numbers[i]);
    if (pair === undefined) return numbers[i];
  }
};

const findSequence = (numbers, targetSum) => {
  let currentSum = 0;
  let start = 0;
  let end = 0;
  let sequence = [];

  while (currentSum !== targetSum) {
    sequence = numbers.slice(start, end);
    currentSum = sum(sequence);
    if (currentSum < targetSum) end++;
    if (currentSum > targetSum) start++;
  }

  return sequence;
};

export const solutionOne = (input, bufferSize = 25) =>
  findInvalidNumber(nums(input), bufferSize);

export const solutionTwo = (input, bufferSize = 25) => {
  const numbers = nums(input);
  const targetSum = findInvalidNumber(numbers, bufferSize);
  const sequence = findSequence(numbers, targetSum).sort(numericSort);
  return sequence.shift() + sequence.pop();
};
