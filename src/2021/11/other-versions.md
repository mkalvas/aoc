# Other versions of 2021 day 11

## Recursive like the problem description

```js
const loop = (state, callback) =>
  state.grid.forEach((r, i) => r.forEach((c, j) => callback(c, i, j)));

const flash = (state, i, j) => {
  state.flashes++;
  state.flashed.add(`${i},${j}`);
  incrementNeighbors(state, i, j);
};

const incrementNeighbors = (state, i, j, inc = 1) => {
  [i - 1, i, i + 1].forEach((r) =>
    [j - 1, j, j + 1].forEach((c) => {
      if (
        r >= 0 &&
        c >= 0 &&
        r < state.grid.length &&
        c < state.grid[r].length &&
        !state.flashed.has(`${r},${c}`)
      ) {
        state.grid[r][c] += inc;
        if (state.grid[r][c] >= 10) flash(state, r, c);
      }
    })
  );
};

const evolve = (state) => {
  state.flashed.clear();
  state.step++;
  loop(state, (_, i, j) => (state.grid[i][j] += 1));
  loop(state, (level, i, j) => {
    if (level >= 10 && !state.flashed.has(`${i},${j}`)) flash(state, i, j);
  });
  loop(state, (_, i, j) => {
    if (state.flashed.has(`${i},${j}`)) {
      state.grid[i][j] = 0;
    }
  });
};

const initState = (input) => ({
  flashes: 0,
  flashed: new Set(),
  grid: input.map((r) => nums(r.split(''))),
  step: 0,
});

export const solutionOne = (input) => {
  let state = initState(input);
  for (let i = 0; i < 100; i++) {
    evolve(state);
  }
  return state.flashes;
};

export const solutionTwo = (input, steps = 100) => {
  let state = initState(input);
  while (state.flashed.size !== state.grid[0].length * state.grid.length) {
    evolve(state);
  }
  return state.step;
};
```

## Loop checking

```js
const increment = (state) =>
  state.grid.forEach((r, i) => r.forEach((_, j) => state.grid[i][j]++));

const resetFlashes = (state) =>
  state.grid.forEach((r, i) =>
    r.forEach((_, j) => {
      if (isNaN(state.grid[i][j])) state.grid[i][j] = 0;
    })
  );

const propogateFlashes = (state) => {
  let flashes = 0;
  while (true) {
    let hasChanged = false;
    for (let i = 0; i < state.grid.length; i++) {
      for (let j = 0; j < state.grid[0].length; j++) {
        if (state.grid[i][j] >= 10) {
          flashes++;
          hasChanged = true;
          state.grid[i][j] = undefined;
          nbrs(state.grid, i, j).forEach(([_, ni, nj]) => state.grid[ni][nj]++);
        }
      }
    }
    if (!hasChanged) return flashes;
  }
};

const evolve = (state) => {
  increment(state);
  const flashed = propogateFlashes(state);
  resetFlashes(state);
  state.step++;
  state.flashes += flashed;
  state.synced = flashed === state.grid[0].length * state.grid.length;
};

const runWhile = (input, condition) => {
  let state = {
    grid: input.map((r) => nums(r.split(''))),
    flashes: 0,
    step: 0,
    synced: false,
  };

  while (condition(state)) evolve(state);
  return state;
};

export const solutionOne = (input) =>
  runWhile(input, (state) => state.step < 100).flashes;

export const solutionTwo = (input) =>
  runWhile(input, (state) => !state.synced).step;
```
