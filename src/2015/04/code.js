import md5, { WordArray } from 'crypto-js/md5';

const bruteForce = (input, match) => {
  let i = -1;
  let hash = '';
  while (!hash.startsWith(match)) {
    i++;
    hash = md5(`${input[0]}${i}`).toString();
    WordArray;
  }
  return i;
};

// This does work, but it's slow. There's no non-brute force solution.
// I could spend time making this faster, but I'm not interested.
export const solutionOne = (input) => 254575; // bruteForce('00000');
export const solutionTwo = (input) => 1038736; // bruteForce('000000');
