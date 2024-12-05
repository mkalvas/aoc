import '../../lib';

const INSTRUCTIONS = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
const getMatches = (input) => input.join('').match(INSTRUCTIONS);
const getProduct = (s) => (s.match(/\d+/g) ?? [0]).product();

export const solutionOne = (input) => getMatches(input).map(getProduct).sum();
export const solutionTwo = (input) => {
  let sum = 0;
  let enabled = true;
  for (const match of getMatches(input)) {
    if (match === 'do()') {
      enabled = true;
    } else if (match === "don't()") {
      enabled = false;
    } else if (enabled) {
      sum += getProduct(match);
    }
  }
  return sum;
};
