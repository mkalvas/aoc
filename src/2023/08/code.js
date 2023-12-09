import { groupLines, lcm } from '../../lib';

const parse = (input) => {
  const [dirLine, nodes] = groupLines(input);
  const dirs = dirLine[0].split('');
  let graph = {};
  for (const node of nodes) {
    const [key, opts] = node.split(' = ');
    const [L, R] = opts.replace(/[\(\)]/g, '').split(', ');
    graph[key] = { L, R };
  }
  return { graph, dirs };
};

const solve = (input, loc, success) => {
  const { graph, dirs } = parse(input);
  for (let step = 0; step >= 0; step++) {
    loc = graph[loc][dirs[step % dirs.length]];
    if (success(loc)) return step + 1;
  }
};

export const solutionOne = (input) => solve(input, 'AAA', (l) => l === 'ZZZ');
export const solutionTwo = (input) => {
  const ls = input.map((l) => l.split(' = ')[0]).filter((l) => l.endsWith('A'));
  const steps = ls.map((loc) => solve(input, loc, (l) => l.endsWith('Z')));
  let ans = steps[0];
  for (let i = 1; i < steps.length; i++) ans = lcm(ans, steps[i]);
  return ans;
};
