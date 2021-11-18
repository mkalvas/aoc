import { parseInts } from '../../lib';

const TARGET_SUM = 2020;

export const findPair = (numbers, targetSum = TARGET_SUM) => {
  let hashmap = new Set();
  for (const val of numbers) {
    const temp = targetSum - val;
    if (hashmap.has(temp)) return temp * val;
    hashmap.add(val);
  }
};

const findTriplet = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const subArray = numbers.slice(0, i);
    const pairMultiple = findPair(subArray, TARGET_SUM - numbers[i]);
    if (pairMultiple) return numbers[i] * pairMultiple;
  }
};

export const solutionOne = (input) => findPair(parseInts(input));

export const solutionTwo = (input) => findTriplet(parseInts(input));
