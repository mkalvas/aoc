import { findKey, numSort, sum } from '../../lib';

const ERROR_SCORES = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const AC_SCORES = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

const PAIRS = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

class SyntaxError extends Error {
  constructor(char) {
    super(`Invalid character: ${char}`);
    this.score = ERROR_SCORES[char];
  }
}

const autocompleteScoring = (stack) =>
  stack.reverse().reduce((s, c) => s * 5 + AC_SCORES[PAIRS[c]], 0);

const validateLine = (line) => {
  let stack = [];
  for (const char of line.split('')) {
    if (Object.keys(PAIRS).includes(char)) {
      stack.push(char);
    } else if (findKey(PAIRS, char) !== stack.pop()) {
      throw new SyntaxError(char);
    }
  }
  return stack;
};

const run = (input) => {
  let valid = [];
  let invalid = [];
  for (const line of input) {
    try {
      valid.push(validateLine(line));
    } catch (e) {
      invalid.push(e.score);
    }
  }
  return [valid, invalid];
};

export const solutionOne = (input) => sum(run(input)[1]);

export const solutionTwo = (input) => {
  const scores = run(input)[0].map(autocompleteScoring).sort(numSort);
  return scores[Math.floor(scores.length / 2)];
};
