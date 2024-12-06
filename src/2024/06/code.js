import { MH_DELTAS, chars, oob } from '../../lib';

const findStart = (grid) => {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '^') return [x, y];
    }
  }
};

const walk = (grid) => {
  let [x, y] = findStart(grid);
  let seen = new Set();
  let path = new Set();
  let dir = 0;

  while (true) {
    const hash = `${x},${y},${dir}`;
    if (oob(grid, [x, y])) return [path, 0];
    if (seen.has(hash)) return [path, 1];
    path.add(`${x},${y}`);
    seen.add(hash);

    let [dx, dy] = MH_DELTAS[dir];
    while (grid[y + dy]?.[x + dx] === '#') {
      dir = (dir + 1) % 4;
      [dx, dy] = MH_DELTAS[dir];
    }

    x = x + dx;
    y = y + dy;
  }
};

export const solutionOne = (input) => walk(input.map(chars))[0].size;

export const solutionTwo = (input) => {
  let grid = input.map(chars);
  const path = walk(grid)[0];

  let cycles = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== '^' && grid[y][x] !== '#' && path.has(`${x},${y}`)) {
        grid[y][x] = '#';
        cycles += walk(grid)[1];
        grid[y][x] = '.';
      }
    }
  }
  return cycles;
};
