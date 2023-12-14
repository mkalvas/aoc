import { chars, g2s, gridEach } from '../../lib';

const DELTAS = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];

const spin = (grid, deltas = DELTAS) => {
  deltas.forEach(([dx, dy]) => {
    let diry = dy <= 0;
    let dirx = dx <= 0;
    for (
      let y = diry ? 0 : grid.length - 1;
      diry ? y < grid.length : y >= 0;
      diry ? y++ : y--
    ) {
      for (
        let x = dirx ? 0 : grid[y].length - 1;
        dirx ? x < grid[y].length : x >= 0;
        dirx ? x++ : x--
      ) {
        if (grid[y][x] === 'O') {
          let ly = y;
          let lx = x;
          let ny = y + dy;
          let nx = x + dx;
          while (
            ny >= 0 &&
            nx >= 0 &&
            ny < grid.length &&
            nx < grid[y].length &&
            grid[ny][nx] === '.'
          ) {
            grid[ly][lx] = '.';
            grid[ny][nx] = 'O';
            ly = ny;
            lx = nx;
            ny += dy;
            nx += dx;
          }
        }
      }
    }
  });
};

const score = (grid) => {
  let load = 0;
  gridEach(grid, (v, y) => {
    if (v === 'O') load += grid.length - y;
  });
  return load;
};

const findCycle = (grid) => {
  let seen = new Map();
  for (let i = 0; i >= 0; i++) {
    let key = g2s(grid);
    if (seen.has(key)) return [seen.get(key), i - seen.get(key)];
    seen.set(key, i);
    spin(grid);
  }
};

export const solutionOne = (input) => {
  let grid = input.map(chars);
  spin(grid, [[0, -1]]);
  return score(grid);
};

export const solutionTwo = (input) => {
  let grid = input.map(chars);
  let [start, cycle] = findCycle(input.map(chars));
  let cycles = (1000000000 - start) % cycle;
  for (let i = 0; i < start + cycles; i++) spin(grid);
  return score(grid);
};
