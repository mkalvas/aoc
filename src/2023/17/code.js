import { MH_DELTAS, pwCmp, inb, BinaryHeap, s2p } from '../../lib';

const solve = (input, maxRun, minRun) => {
  const grid = input.map((l) => l.split('').nums());
  let heap = new BinaryHeap(pwCmp);
  heap.push([0, 0, 0, -1, -1]);
  let seen = new Map();

  while (heap.size()) {
    const [cost, y, x, dir, run] = heap.pop();
    const key = `${[y, x, dir, run]}`;
    if (seen.has(key)) continue;
    seen.set(key, cost);

    for (const [ndir, [dr, dx]] of MH_DELTAS.entries()) {
      const ny = y + dr;
      const nx = x + dx;
      const nrun = ndir !== dir ? 1 : run + 1;

      if ((ndir + 2) % 4 === dir) continue;
      if (nrun > maxRun) continue;
      if (minRun && ndir !== dir && run < minRun && run !== -1) continue;

      if (inb(grid, nx, ny)) {
        heap.push([cost + grid[ny][nx], ny, nx, ndir, nrun]);
      }
    }
  }

  let total = Infinity;
  for (const [k, v] of seen) {
    const [y, x, _, run] = s2p(k);
    if (y === grid.length - 1 && x === grid[0].length - 1 && run >= minRun) {
      total = Math.min(total, v);
    }
  }
  return total;
};

export const solutionOne = (input) => solve(input, 3, 0);
export const solutionTwo = (input) => solve(input, 10, 4);
