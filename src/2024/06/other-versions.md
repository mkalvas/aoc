# Other versions of 2024 day 06

## Rotate matrix for peak slowness

```js
const findStart = (grid) => {
  for (const [y, r] of grid.entries()) {
    for (const [x, c] of r.entries()) {
      if (c === '^') return [x, y];
    }
  }
};

const walk = (grid) => {
  let [x, y] = findStart(grid);

  let dir = 0;
  let seen = new Set();
  while (true) {
    grid[y][x] = 'X';
    if (y - 1 < 0) return [grid, false];
    const hash = `${x},${y},${dir}`;
    if (seen.has(hash)) return [grid, true];
    seen.add(hash);
    if (grid[y - 1][x] === '#') {
      grid = rotate(grid);
      dir = (dir + 1) % 4;
      let oldy = y;
      y = grid[0].length - x - 1;
      x = oldy;
    } else {
      y--;
    }
  }
};

const rotate = (grid) =>
  grid[0].map((_, index) => grid.map((row) => row[row.length - 1 - index]));

export const solutionOne = (input) => {
  let grid = input.map(chars);
  const [final] = walk(grid);
  return g2s(final).replace(/[^X]/g, '').length;
};

export const solutionTwo = (input) => {
  const grid = input.map(chars);
  let [path] = walk(grid.clone());
  path = rotate(rotate(path));
  let cycles = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== '^' && grid[y][x] !== '#' && path[y][x] === 'X') {
        let test = grid.clone();
        test[y][x] = '#';
        const [_, cyclic] = walk(test);
        if (cyclic) cycles++;
      }
    }
  }
  return cycles;
};
```

## Rendering of walking path

```js
const render = (grid, x, y, dir) => {
  let sprite = '^>v<'[dir];
  let cloned = grid.clone();
  cloned[y][x] = sprite;
  console.log(g2s(cloned));
};
```
