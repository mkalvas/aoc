import { OBJ_DELTAS as DS, h2d } from '../../lib';

const NDS = {
  0: [...DS.R],
  1: [...DS.D],
  2: [...DS.L],
  3: [...DS.U],
};

const solve = (input, parser) => {
  const steps = input.map((l) => l.split(' ')).map(parser);
  let a = 1;
  let pos = 0;
  for (const [[x, y], d] of steps) {
    pos += x * d;
    a += y * d * pos + d / 2;
  }
  return a;
};

export const solutionOne = (input) => solve(input, ([d, s]) => [DS[d], +s]);
export const solutionTwo = (input) =>
  solve(input, ([_d, _s, c]) => [NDS[c.slice(7, 8)], h2d(c.slice(2, 7))]);
