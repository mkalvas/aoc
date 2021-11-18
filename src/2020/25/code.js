import { parseInts } from '../../lib';

const DIVISOR = 20201227;

const crack = (a, b) => {
  for (let i = 0; i < 100000000; i++) {
    if (Math.pow(7, i, DIVISOR) === a) return Math.pow(b, i, DIVISOR);
  }
};

const solution = (a, b) => crack(a, b);

export const solutionOne = (input) => solution(...parseInts(input));
export const solutionTwo = (input) => solution(...parseInts(input).reverse());
