import { groupLines, nums } from '../../lib';

const parseMove = (l) => nums(l.match(/(\d+)/g));
const parseGrid = (grid) => {
  let stacks = [];
  for (let r = grid.length - 2; r >= 0; r--) {
    for (let i = 1; i < grid[r].length; i += 4) {
      if (/[A-Z]/.test(grid[r][i])) {
        const cur = +grid[grid.length - 1][i] - 1;
        if (stacks[cur] == null) stacks[cur] = [];
        stacks[cur].push(grid[r][i]);
      }
    }
  }
  return stacks;
};

const move = ([size, source, dest], stacks, rev) => {
  const held = stacks[source - 1].slice(-size);
  if (rev) held.reverse();
  stacks[dest - 1].push(...held);
  stacks[source - 1].splice(-size);
};

const solve = (input, rev) => {
  const [grid, ins] = groupLines(input);
  const stacks = parseGrid(grid);
  for (let m of ins.map(parseMove)) {
    move(m, stacks, rev);
  }
  return stacks.map((s) => s.pop()).join('');
};

export const solutionOne = (input) => solve(input, true);
export const solutionTwo = (input) => solve(input, false);
