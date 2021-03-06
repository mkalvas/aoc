import { findPair } from '../day-01';
import { numericSort, parseInts } from '../lib';

const findInvalidNumber = (numbers, bufferSize) => {
  for (let i = bufferSize; i < numbers.length; i++) {
    const pair = findPair(numbers.slice(i - bufferSize, i), numbers[i]);
    if (pair === undefined) return numbers[i];
  }
};

const findSequence = (numbers, targetSum) => {
  let sum = 0;
  let start = 0;
  let end = 0;
  let sequence = [];

  while (sum !== targetSum) {
    sequence = numbers.slice(start, end);
    sum = sequence.reduce((sum, n) => sum + n, 0);
    if (sum < targetSum) end++;
    if (sum > targetSum) start++;
  }

  return sequence;
};

export const solutionOne = (input, bufferSize = 25) =>
  findInvalidNumber(parseInts(input), bufferSize);

export const solutionTwo = (input, bufferSize = 25) => {
  const numbers = parseInts(input);
  const targetSum = findInvalidNumber(numbers, bufferSize);
  const sequence = findSequence(numbers, targetSum).sort(numericSort);
  return sequence.shift() + sequence.pop();
};
