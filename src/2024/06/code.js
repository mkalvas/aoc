import { MH_DELTAS, chars, oob } from '../../lib';

const OBSTACLE = '#';
const START = '^';
const FREE = '.';

const findStart = (grid) => {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === START) return [x, y];
    }
  }
};

const walk = (grid, x, y) => {
  let dir = 0;
  let seen = new Set();
  let path = new Set();
  let [dx, dy] = MH_DELTAS[dir];

  while (true) {
    const hash = `${x},${y},${dir}`;
    if (oob(grid, x, y)) return [path, 0];
    if (seen.has(hash)) return [path, 1];
    path.add(`${x},${y}`);
    seen.add(hash);

    while (grid[y + dy]?.[x + dx] === OBSTACLE) {
      dir = (dir + 1) % 4;
      [dx, dy] = MH_DELTAS[dir];
    }

    x = x + dx;
    y = y + dy;
  }
};

export const solutionOne = (input) => {
  const grid = input.map(chars);
  const [x, y] = findStart(grid);
  return walk(input.map(chars), x, y)[0].size;
};

export const solutionTwo = (input) => {
  let grid = input.map(chars);
  const [sx, sy] = findStart(grid);
  const path = walk(grid, sx, sy)[0];

  let cycles = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== START && path.has(`${x},${y}`)) {
        grid[y][x] = OBSTACLE;
        cycles += walk(grid, sx, sy)[1];
        grid[y][x] = FREE;
      }
    }
  }
  return cycles;
};
