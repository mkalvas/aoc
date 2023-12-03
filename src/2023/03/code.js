import { p2s } from '../../lib';

const symbolInBoundingBox = (grid, match, row, gears) => {
  let start = match.index - 1;
  let end = match.index - 1 + match[0].length + 1;
  for (let y = row - 1; y <= row + 1; y++) {
    for (let x = start; x <= end; x++) {
      if (x >= 0 && y >= 0 && y < grid.length && x < grid[y].length) {
        if (/[^\d\.]/.test(grid[y][x])) {
          if (grid[y][x] === '*') {
            const key = p2s([x, y]);
            if (!gears[key]) gears[key] = [];
            gears[key].push(+match[0]);
          }
          return true;
        }
      }
    }
  }
};

const solve = (input) => {
  let sum = 0;
  let gears = {};
  input.forEach((l, r) => {
    for (let m of l.matchAll(/\d+/g)) {
      if (symbolInBoundingBox(input, m, r, gears)) sum += +m[0];
    }
  });
  return [sum, gears];
};

export const solutionOne = (input) => solve(input)[0];
export const solutionTwo = (input) =>
  Object.values(solve(input)[1])
    .filter((v) => v.length === 2)
    .map((v) => v.product())
    .sum();
