import { groupLines } from '../../lib';

const middle = (ns) => ns[Math.floor(ns.length / 2)];
const cmp = (rules) => (a, b) => {
  if (rules.includes(`${a}|${b}`)) return -1;
  if (rules.includes(`${b}|${a}`)) return 1;
  return 0;
};

export const solve = (input, fix = false) => {
  let valid = [];
  const [constraints, updates] = groupLines(input);
  for (const u of updates.map((u) => u.split(',').nums())) {
    const sorted = u.clone().sort(cmp(constraints));
    const alreadySorted = u.eq(sorted);
    if (!fix && alreadySorted) valid.push(u);
    else if (fix && !alreadySorted) valid.push(sorted);
  }
  return valid.map(middle).sum();
};

export const solutionOne = (input) => solve(input, false);
export const solutionTwo = (input) => solve(input, true);
