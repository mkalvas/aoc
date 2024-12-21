import { chars, sk } from '../../lib';

const paths = (grid, seen, y, x) => {
  let sum = 0;
  for (const [v, r, c] of grid.nbrs(y, x, false, false)) {
    if (v - grid[y][x] === 1) {
      if (v === 9) {
        if (seen) {
          const hash = sk(c, r);
          if (seen.has(hash)) continue;
          seen.add(hash);
        }
        sum += 1;
      } else {
        sum += paths(grid, seen, r, c);
      }
    }
  }
  return sum;
};

export const solve = (input, all) => {
  let trailheads = [];
  const grid = input.map((l, y) =>
    chars(l).map((c, x) => {
      const n = +c;
      if (n === 0) trailheads.push([x, y]);
      return n;
    }),
  );

  let sum = 0;
  for (let [x, y] of trailheads) {
    let seen = new Set();
    sum += paths(grid, all ? undefined : seen, y, x);
  }

  return sum;
};

export const solutionOne = (input) => solve(input, false);
export const solutionTwo = (input) => solve(input, true);
