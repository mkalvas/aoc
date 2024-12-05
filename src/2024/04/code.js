import { vals, chars } from '../../lib';

const solve = (input, countFn) => {
  let sum = 0;
  const g = input.map(chars);
  for (const [y, r] of g.entries()) {
    for (const [x, c] of r.entries()) {
      const words = { lr: '', td: '', dr: '', dl: '', xl: '', xr: '' };

      if (c === 'X' || c === 'S') {
        words.lr = g[y][x] + g[y][x + 1] + g[y][x + 2] + g[y][x + 3];
        if (y < g.length - 3) {
          words.td = g[y][x] + g[y + 1][x] + g[y + 2][x] + g[y + 3][x];
          words.dr =
            g[y][x] + g[y + 1][x + 1] + g[y + 2][x + 2] + g[y + 3][x + 3];
          words.dl =
            g[y][x] + g[y + 1][x - 1] + g[y + 2][x - 2] + g[y + 3][x - 3];
        }
      }

      if (c === 'A' && 0 < y && y < g.length - 1) {
        words.xl = g[y - 1][x - 1] + g[y][x] + g[y + 1][x + 1];
        words.xr = g[y - 1][x + 1] + g[y][x] + g[y + 1][x - 1];
      }

      sum += countFn(words);
    }
  }
  return sum;
};

export const solutionOne = (input) =>
  solve(input, (words) => {
    const ws = vals(words);
    return ws.count('XMAS') + ws.count('SAMX');
  });

export const solutionTwo = (input) =>
  solve(input, (ws) => {
    return +(['MAS', 'SAM'].includes(ws.xl) && ['MAS', 'SAM'].includes(ws.xr));
  });
