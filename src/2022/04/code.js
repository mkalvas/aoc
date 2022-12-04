import { nums } from '../../lib';

const parse = (l) => nums(l.match(/(\d+)/g));
const contains = ([x, y, a, b]) => (x <= a && y >= b) || (a <= x && b >= y);
const overlap = ([x, y, a, b]) => (x <= b && y >= a) || (a <= y && b >= x);

export const solutionOne = (input) => input.map(parse).filter(contains).length;
export const solutionTwo = (input) => input.map(parse).filter(overlap).length;
