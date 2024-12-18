import '../../lib';

const valid = (eq, v, i, ops) => {
  if (i === eq.length) return eq[0] === v;
  if (v > eq[0]) return false;
  return ops.some((op) => valid(eq, op(v, eq[i]), i + 1, ops));
};

const solve = (input, ops) =>
  input
    .map((l) => l.match(/\d+/g).nums())
    .filter((eq) => valid(eq, eq[1], 2, ops))
    .reduce((s, c) => s + c[0], 0);

const OPS = [(a, v) => a + v, (a, v) => a * v];
export const solutionOne = (input) => solve(input, OPS);
export const solutionTwo = (input) =>
  solve(input, [...OPS, (a, v) => +`${a}${v}`]);
